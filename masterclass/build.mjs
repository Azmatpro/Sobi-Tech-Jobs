#!/usr/bin/env node
// Validates quiz-bank.json, regenerates generated blocks in the lesson files,
// writes reviews.md, and injects the data into app/index.html.
//
//   node masterclass/build.mjs           validate + write everything
//   node masterclass/build.mjs --check   validate only, write nothing
//
// Text between <!-- NAME:START --> and <!-- NAME:END --> in day-0N.md is
// generated. Edit quiz-bank.json instead of editing those blocks.

import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(fileURLToPath(import.meta.url));
const checkOnly = process.argv.includes('--check');
const LETTERS = 'ABCD';
const DATA_MARK = '/*__COURSE_DATA__*/null';
const errors = [];
const fail = (msg) => errors.push(msg);

const bank = JSON.parse(readFileSync(join(root, 'quiz-bank.json'), 'utf8'));

// ---------- validation ----------
const EXPECTED_TYPES = ['recall', 'recall', 'application', 'application', 'explain', 'spot'];
const ids = new Map();

if (!Array.isArray(bank.days) || bank.days.length !== 7) fail('Expected exactly 7 days.');

for (const [i, d] of (bank.days ?? []).entries()) {
  const tag = `day ${d.day}`;
  if (d.day !== i + 1) fail(`${tag}: day numbers must run 1..7 in order.`);
  if (!d.title || !d.objective) fail(`${tag}: title and objective are required.`);
  if (!d.analogy?.headline || !d.analogy?.body) fail(`${tag}: analogy headline and body are required.`);
  if (!Array.isArray(d.steps) || d.steps.length === 0) fail(`${tag}: steps missing.`);
  if (!Array.isArray(d.keyPoints) || d.keyPoints.length < 3 || d.keyPoints.length > 6) fail(`${tag}: keyPoints needs 3 to 6 entries.`);
  if (!Array.isArray(d.lab) || d.lab.length < 6) fail(`${tag}: lab needs at least 6 items.`);
  for (const item of d.lab ?? []) if (!item.text) fail(`${tag}: lab item without text.`);

  if (d.questions?.length !== 6) fail(`${tag}: expected 6 questions, found ${d.questions?.length}.`);
  const types = (d.questions ?? []).map((q) => q.type);
  if (JSON.stringify(types) !== JSON.stringify(EXPECTED_TYPES)) {
    fail(`${tag}: question types must be ${EXPECTED_TYPES.join(', ')} (found ${types.join(', ')}).`);
  }
  const warm = (d.questions ?? []).filter((q) => q.warmup).length;
  if (warm !== 2) fail(`${tag}: exactly 2 warm-up questions required (found ${warm}).`);

  for (const [k, q] of (d.questions ?? []).entries()) {
    const want = `d${d.day}q${k + 1}`;
    if (q.id !== want) fail(`${tag}: question ${k + 1} id must be ${want} (found ${q.id}).`);
    if (ids.has(q.id)) fail(`Duplicate id ${q.id}.`);
    ids.set(q.id, { q, day: d.day });
    if (!q.q) fail(`${q.id}: missing question text.`);
    if (q.type === 'explain') {
      if (!q.model) fail(`${q.id}: explain question needs a model answer.`);
      if (!Array.isArray(q.rubric) || q.rubric.length < 3) fail(`${q.id}: rubric needs at least 3 points.`);
      if (q.options || q.answer !== undefined) fail(`${q.id}: explain question must not have options or answer.`);
    } else {
      if (!Array.isArray(q.options) || q.options.length !== 4) fail(`${q.id}: needs exactly 4 options.`);
      else if (new Set(q.options.map((o) => o.trim().toLowerCase())).size !== 4) fail(`${q.id}: options must be distinct.`);
      if (!Number.isInteger(q.answer) || q.answer < 0 || q.answer > 3) fail(`${q.id}: answer must be an index 0..3.`);
      if (!q.why) fail(`${q.id}: 'why' is required.`);
    }
  }
}

if (!Array.isArray(bank.mastery) || bank.mastery.length !== 20) fail(`mastery must list 20 ids (found ${bank.mastery?.length}).`);
if (new Set(bank.mastery).size !== (bank.mastery ?? []).length) fail('mastery has duplicate ids.');
for (const id of bank.mastery ?? []) {
  const hit = ids.get(id);
  if (!hit) fail(`mastery id ${id} does not exist.`);
  else if (hit.q.type === 'explain') fail(`mastery id ${id} is an explain question; the exam is multiple choice only.`);
}
const sessionIds = (bank.meta?.sessions ?? []).map((s) => s.id).join(',');
if (sessionIds !== 'd8,d14,d30') fail(`meta.sessions must be d8, d14, d30 (found ${sessionIds}).`);

// ---------- card selection (same rules the page uses) ----------
const dayByNumber = (n) => bank.days.find((d) => d.day === n);
function warmupCards(dayN) {
  const from = [...new Set(bank.meta.warmupDaysBack.map((b) => dayN - b).filter((n) => n >= 1))];
  return from.flatMap((n) => dayByNumber(n).questions.filter((q) => q.warmup).map((q) => ({ from: n, q })));
}
const allWarmup = () => bank.days.flatMap((d) => d.questions.filter((q) => q.warmup).map((q) => ({ from: d.day, q })));
const masteryCards = () => bank.mastery.map((id) => ({ from: ids.get(id).day, q: ids.get(id).q }));

// ---------- rendering ----------
function renderQuestion(q, n) {
  let s = `**${n}. ${q.q}** _(${q.type}, id ${q.id})_\n\n`;
  if (q.options) s += q.options.map((o, i) => `- ${LETTERS[i]}. ${o}`).join('\n') + '\n';
  else s += '_Write your own answer first. Then compare it with the model answer and self-grade: Got it = 1, Partly = 0.5, Missed = 0._\n';
  return s;
}
function renderKey(q, n) {
  if (q.options) return `${n}. **${LETTERS[q.answer]}**. ${q.why}`;
  return `${n}. **Model answer.** ${q.model}\n   - Rubric: ${q.rubric.join('; ')}.`;
}
function renderQuiz(d) {
  const passScore = Math.ceil(bank.meta.passMark * d.questions.length - 1e-9);
  return [
    `Pass mark: ${passScore} of ${d.questions.length}. Rate your confidence from 1 to 5 **before** you check each answer.`,
    '',
    ...d.questions.map((q, i) => renderQuestion(q, i + 1)),
    '<details>',
    '<summary>Answer key (open after you have answered all six)</summary>',
    '',
    ...d.questions.map((q, i) => renderKey(q, i + 1)),
    '',
    '</details>',
  ].join('\n');
}
function renderWarmup(d) {
  const cards = warmupCards(d.day);
  if (cards.length === 0) {
    return 'No warm-up today because there is nothing to retrieve yet. Instead, spend two minutes writing down everything you already believe about how Claude works, and keep the note. You will compare it with what you know on Day 7.';
  }
  const sources = [...new Set(cards.map((c) => c.from))].map((n) => `Day ${n}`).join(', ');
  return [
    `Retrieve first, look things up second. Cards come from ${sources} (spaced ${bank.meta.warmupDaysBack.join(', ')} days back). Answer from memory, then check. Add any card you miss to your repair list.`,
    '',
    ...cards.map((c, i) => renderQuestion(c.q, i + 1).replace(/ _\(.*\)_/, ` _(from Day ${c.from})_`)),
    '<details>',
    '<summary>Warm-up answers</summary>',
    '',
    ...cards.map((c, i) => renderKey(c.q, i + 1)),
    '',
    '</details>',
  ].join('\n');
}
function renderLab(d) {
  return [
    'Tick each box as you go. Items marked **verify in app** are claims I could not confirm from official pages, so you are the tester. Write the result in your notes.',
    '',
    ...d.lab.map((it) => `- [ ] ${it.text}${it.verify ? ' **(verify in app)**' : ''}`),
  ].join('\n');
}
function renderReviews() {
  const sections = bank.meta.sessions.map((s) => {
    const cards = s.source === 'mastery' ? masteryCards() : allWarmup();
    const when = `Day 1 date + ${s.offsetDays} days`;
    return [
      `## ${s.label} (${when})`,
      '',
      s.source === 'mastery'
        ? 'The 20 exam questions again, in a new order. Compare your score with your Day 7 exam score to measure what stuck.'
        : 'The 14 warm-up cards from Days 1 to 7, plus anything on your repair list. Answer from memory first.',
      '',
      ...cards.map((c, i) => renderQuestion(c.q, i + 1).replace(/ _\(.*\)_/, ` _(from Day ${c.from})_`)),
      '<details>',
      `<summary>${s.label} answers</summary>`,
      '',
      ...cards.map((c, i) => renderKey(c.q, i + 1)),
      '',
      '</details>',
      '',
    ].join('\n');
  });
  return [
    '# Review sessions: Day 8, Day 14, Day 30',
    '',
    '> Generated by `node masterclass/build.mjs` from `quiz-bank.json`. Do not edit by hand.',
    '',
    'Evenly spaced retrieval is what makes learning last. Expect these to feel harder than the daily quizzes. That is normal: spacing lowers practice scores while raising later retention.',
    '',
    ...sections,
  ].join('\n');
}

function replaceBlock(text, name, content, file) {
  const start = `<!-- ${name}:START -->`;
  const end = `<!-- ${name}:END -->`;
  const i = text.indexOf(start);
  const j = text.indexOf(end);
  if (i < 0 || j < 0 || j < i) {
    fail(`${file}: markers for ${name} are missing or out of order.`);
    return text;
  }
  return text.slice(0, i + start.length) + '\n' + content.trim() + '\n' + text.slice(j);
}

// ---------- write ----------
const written = [];
if (errors.length === 0 && !checkOnly) {
  for (const d of bank.days) {
    const file = `day-0${d.day}.md`;
    const path = join(root, file);
    if (!existsSync(path)) { fail(`${file} does not exist.`); continue; }
    let text = readFileSync(path, 'utf8');
    text = replaceBlock(text, 'WARMUP', renderWarmup(d), file);
    text = replaceBlock(text, 'LAB', renderLab(d), file);
    text = replaceBlock(text, 'QUIZ', renderQuiz(d), file);
    if (errors.length === 0) { writeFileSync(path, text); written.push(file); }
  }
  if (errors.length === 0) {
    writeFileSync(join(root, 'reviews.md'), renderReviews() + '\n');
    written.push('reviews.md');
  }
  const tpl = join(root, 'app', 'index.template.html');
  if (errors.length === 0 && existsSync(tpl)) {
    let html = readFileSync(tpl, 'utf8');
    if (!html.includes(DATA_MARK)) fail(`app/index.template.html must contain ${DATA_MARK}.`);
    else {
      const json = JSON.stringify(bank)
        .replace(/</g, '\\u003c')
        .replaceAll(String.fromCharCode(0x2028), '\\u2028')
        .replaceAll(String.fromCharCode(0x2029), '\\u2029');
      html = html.replace(DATA_MARK, () => json);
      writeFileSync(join(root, 'app', 'index.html'), html);
      written.push('app/index.html');
    }
  }
}

// ---------- report ----------
if (errors.length) {
  console.error(`FAILED with ${errors.length} problem(s):`);
  for (const e of errors) console.error(' - ' + e);
  process.exit(1);
}
const total = [...ids.keys()].length;
const dist = [0, 0, 0, 0];
for (const { q } of ids.values()) if (q.options) dist[q.answer]++;
console.log(`OK: ${bank.days.length} days, ${total} questions, ${bank.mastery.length} in the mastery exam.`);
console.log(`Correct-answer positions A/B/C/D: ${dist.join('/')}`);
console.log(`Warm-up cards per day: ${bank.days.map((d) => `d${d.day}=${warmupCards(d.day).length}`).join(' ')}`);
console.log(`Review sessions: d8=${allWarmup().length} cards, d14=${allWarmup().length} cards, d30=${masteryCards().length} cards`);
const overlap = bank.mastery.filter((id) => ids.get(id).q.warmup).length;
console.log(`Mastery questions that are also warm-up cards: ${overlap}`);
console.log(checkOnly ? 'Check only: nothing written.' : `Wrote: ${written.join(', ') || '(nothing)'}`);
