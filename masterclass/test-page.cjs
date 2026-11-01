// Functional test for masterclass/app/index.html (headless Chromium via Playwright).
// Run from the repo root after `node masterclass/build.mjs`:
//   node masterclass/test-page.cjs
// Needs the `playwright` package (preinstalled in the Claude Code cloud environment; not added to package.json).
// Screenshots and the wrapped test page go to $MC_TEST_OUT, or the OS temp folder if unset.
const { chromium } = require('playwright');
const fs = require('fs');
const http = require('http');
const path = require('path');

const os = require('os');
const REPO = __dirname;
const SCRATCH = process.env.MC_TEST_OUT || os.tmpdir();
const bank = JSON.parse(fs.readFileSync(path.join(REPO, 'quiz-bank.json'), 'utf8'));
const byStem = {};
bank.days.forEach((d) => d.questions.forEach((q) => { byStem[q.q] = { q, day: d.day }; }));

// Wrap the page body the way the publisher does (skeleton + reset), for local testing only.
const content = fs.readFileSync(path.join(REPO, 'app', 'index.html'), 'utf8');
const skeleton = '<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover"><style>:root{color-scheme:light;padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}body{margin:0;font:14px system-ui}img{max-width:100%}[hidden]{display:none!important}</style></head><body>' + content + '</body></html>';
fs.writeFileSync(path.join(SCRATCH, 'wrapped.html'), skeleton);

const server = http.createServer((req, res) => { res.setHeader('content-type', 'text/html'); res.end(skeleton); });

let failures = 0, passes = 0;
function check(name, cond, detail) {
  if (cond) { passes++; console.log('  ok   ' + name); }
  else { failures++; console.log('  FAIL ' + name + (detail !== undefined ? '  -> ' + JSON.stringify(detail) : '')); }
}

async function answerRun(page, policy) {
  // policy(q, index) -> 'right' | 'wrong' | 'partly' | 'missed'; conf from policy.conf
  let i = 0;
  for (;;) {
    const stem = (await page.locator('.stem').first().textContent()).trim();
    const hit = byStem[stem];
    if (!hit) throw new Error('Unknown stem: ' + stem);
    const q = hit.q;
    const conf = policy.conf(q, i);
    await page.locator('.scale button[data-n="' + conf + '"]').click();
    const how = policy.pick(q, i);
    if (q.options) {
      const correct = q.options[q.answer];
      let want = correct;
      if (how === 'wrong') want = q.options.find((o) => o !== correct);
      await page.locator('.opt', { has: page.locator('.txt', { hasText: new RegExp('^' + want.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '$') }) }).first().click();
    } else {
      await page.locator('#draft').fill('my own words about ' + q.id);
      await page.locator('[data-act="reveal"]').click();
      const s = how === 'right' ? '1' : how === 'partly' ? '0.5' : '0';
      await page.locator('[data-act="grade"][data-s="' + s + '"]').click();
    }
    const nextBtn = page.locator('[data-act="next"]');
    const label = (await nextBtn.textContent()).trim();
    await nextBtn.click();
    i++;
    if (label === 'See result') break;
  }
  return i;
}

(async () => {
  await new Promise((r) => server.listen(0, r));
  const url = 'http://localhost:' + server.address().port + '/';
  const browser = await chromium.launch();
  const ctx = await browser.newContext({ viewport: { width: 1200, height: 900 }, locale: 'en-US', timezoneId: 'America/New_York' });
  const page = await ctx.newPage();
  const errors = [];
  page.on('pageerror', (e) => errors.push('pageerror: ' + e.message));
  page.on('console', (m) => { if (m.type() === 'error' && !/Failed to load resource|fonts\.g/.test(m.text())) errors.push('console: ' + m.text()); });
  await page.route(/fonts\.(googleapis|gstatic)\.com/, (r) => r.abort());

  console.log('1. Overview');
  await page.goto(url);
  check('title is set', (await page.title()) === 'Claude Mastery Week', await page.title());
  check('rail has 12 links (overview, 7 days, exam, 3 reviews)', (await page.locator('#rail a').count()) === 12, await page.locator('#rail a').count());
  check('next-up card points at Day 1', (await page.locator('.hero h2').textContent()).startsWith('Day 1'));
  check('save status says device only', (await page.locator('#save').textContent()).includes('this device'));
  await page.locator('#start-date').fill('2026-11-02');
  await page.locator('[data-act="set-start"]').click();
  const sched = await page.locator('.table-wrap').first().textContent();
  check('Day 1 date is Mon, Nov 2', /Day 1.*Mon, Nov 2/.test(sched), sched.slice(0, 120));
  check('Day 8 review is Mon, Nov 9', /Day 8 review\s*Mon, Nov 9/.test(sched));
  check('Day 14 review is Sun, Nov 15', /Day 14 review\s*Sun, Nov 15/.test(sched));
  check('Day 30 review is Tue, Dec 1', /Day 30 review\s*Tue, Dec 1/.test(sched));

  console.log('2. Day 1 pre-test and persistence');
  await page.goto(url + '#day-1');
  await page.locator('#pretest').fill('I think Cowork is just chat.');
  await page.reload();
  check('pre-test survives reload', (await page.locator('#pretest').inputValue()) === 'I think Cowork is just chat.');

  console.log('3. Day 1 lab');
  await page.locator('#tab-lab').click();
  const labCount = bank.days[0].lab.length;
  check('lab shows all items', (await page.locator('.lab-item').count()) === labCount);
  await page.locator('input[data-act="lab"]').nth(0).check();
  await page.locator('input[data-act="lab"]').nth(1).check();
  check('lab counter says 2', (await page.locator('main p strong').first().textContent()) === '2 of ' + labCount, await page.locator('main p strong').first().textContent());
  const verifyIdx = bank.days[0].lab.findIndex((x) => x.verify);
  await page.locator('#vn-1-' + verifyIdx).fill('Linux beta, Ubuntu only');
  await page.reload();
  await page.locator('#tab-lab').click();
  check('lab ticks persist', (await page.locator('input[data-act="lab"]:checked').count()) === 2);
  check('verify note persists', (await page.locator('#vn-1-' + verifyIdx).inputValue()) === 'Linux beta, Ubuntu only');

  console.log('4. Day 1 quiz (scripted: right, wrong, right, right, partly, wrong)');
  await page.locator('#tab-quiz').click();
  await page.locator('[data-act="run-start"]').click();
  // options are locked until confidence is chosen
  check('options disabled before confidence', await page.locator('.opt').first().isDisabled());
  const plan = ['right', 'wrong', 'right', 'right', 'partly', 'wrong'];
  const n = await answerRun(page, { conf: () => 4, pick: (q, i) => plan[i] });
  check('answered 6 questions', n === 6, n);
  const score = (await page.locator('.result .score').textContent()).replace(/\s+/g, '');
  check('score is 3.5/6', score === '3.5/6', score);
  check('below pass mark tag shown', (await page.locator('.result .tag').first().textContent()).includes('Below'));
  const resText = await page.locator('.result').textContent();
  check('calibration line reports 2 sure-and-wrong', /sure \(4 or 5\) and wrong on\s*2/.test(resText), resText.slice(0, 200));
  check('3 missed items listed', (await page.locator('.result .miss').count()) === 3, await page.locator('.result .miss').count());
  await page.locator('#reflect').fill('I over-trusted the Linux claim.');
  await page.reload();
  await page.locator('#tab-quiz').click();
  check('result persists after reload', (await page.locator('.result .score').textContent()).replace(/\s+/g, '') === '3.5/6');
  check('reflection persists', (await page.locator('#reflect').inputValue()) === 'I over-trusted the Linux claim.');
  check('rail shows Day 1 score', (await page.locator('#rail a[href="#day-1"] .sc').textContent()) === '3.5/6');

  console.log('5. Day 2 warm-up uses spaced cards + repair list');
  await page.goto(url + '#day-2');
  const intro = await page.locator('main p').nth(1).textContent().catch(() => '');
  const startBtnText = (await page.locator('[data-act="run-start"]').textContent()).trim();
  check('warm-up has 5 cards (2 from Day 1 + 3 repair)', startBtnText === 'Start the warm-up (5 cards)', startBtnText);
  await page.locator('[data-act="run-start"]').click();
  const repairTags = await page.locator('.qtab .tag.warn').count();
  check('first card visible', (await page.locator('.qcard').count()) === 1);
  await answerRun(page, { conf: () => 5, pick: () => 'right' });
  check('warm-up result is recorded', /recalled/.test(await page.locator('.result').textContent()));

  console.log('6. Repair list on overview');
  await page.goto(url + '#overview');
  const repairItems = await page.locator('section.block', { has: page.locator('h2', { hasText: 'Repair list' }) }).locator('li').count();
  check('repair list shows nothing after perfect warm-up of those cards (d1q2, d1q5, d1q6 now right)', repairItems === 0, repairItems);

  console.log('7. Mastery exam');
  await page.goto(url + '#exam');
  await page.locator('[data-act="run-start"]').click();
  await answerRun(page, { conf: () => 5, pick: () => 'right' });
  const exScore = (await page.locator('.result .score').textContent()).replace(/\s+/g, '');
  check('exam score is 20/20', exScore === '20/20', exScore);
  await page.goto(url + '#overview');
  const calib = await page.locator('section.block', { has: page.locator('h2', { hasText: 'Confidence versus accuracy' }) }).textContent();
  check('calibration table appears after 10+ answers', /Accuracy/.test(calib), calib.slice(0, 100));
  const summary = await page.locator('#sumtext').textContent();
  check('summary lists LC-D1 and LC-EXAM', /LC-D1 \|/.test(summary) && /LC-EXAM \|/.test(summary), summary.slice(0, 300));
  check('summary includes verify-in-app note', /Linux beta, Ubuntu only/.test(summary));
  await page.locator('[data-act="copy-summary"]').click();
  await page.waitForFunction(() => document.getElementById('toast').textContent.length > 0, null, { timeout: 4000 }).catch(() => {});
  const toastText = await page.locator('#toast').textContent();
  check('copy gives feedback within 4 seconds', toastText.length > 0, toastText);
  check('feedback is either copied or select-and-copy', /Copied|Select and copy/.test(toastText), toastText);

  console.log('8. Reviews');
  await page.goto(url + '#review-d30');
  check('Day 30 review page names the date', /Tue, Dec 1/.test(await page.locator('main').textContent()));
  await page.locator('[data-act="run-start"]').click();
  const d30n = await answerRun(page, { conf: () => 3, pick: (q, i) => (i === 0 ? 'wrong' : 'right') });
  check('Day 30 review has 20 cards', d30n === 20, d30n);
  await page.goto(url + '#exam');
  check('retention line compares exam and Day 30', /Retention check/.test(await page.locator('main').textContent()), (await page.locator('main').textContent()).slice(-200));

  console.log('9. Reset flow');
  await page.goto(url + '#overview');
  await page.locator('[data-act="reset-ask"]').click();
  check('confirmation shown in page, not a dialog', (await page.locator('[data-act="reset-yes"]').count()) === 1);
  await page.locator('[data-act="reset-yes"]').click();
  await page.reload();
  check('after reset the next-up is Day 1 again', (await page.locator('.hero h2').textContent()).startsWith('Day 1'));
  check('after reset there are no attempts', (await page.locator('#rail .sc').allTextContents()).every((t) => t === ''));

  check('no page errors or console errors (6 to 9)', errors.length === 0, errors);

  console.log('10. Account save path (mock db + user)');
  const ctx2 = await browser.newContext({ viewport: { width: 1200, height: 900 }, locale: 'en-US' });
  const p2 = await ctx2.newPage();
  const errs2 = [];
  p2.on('pageerror', (e) => errs2.push(e.message));
  await p2.route(/fonts\.(googleapis|gstatic)\.com/, (r) => r.abort());
  await p2.addInitScript(() => {
    const store = (window.__store = {});
    const listeners = {};
    window.__sets = [];
    const snapOf = (p, fromCache) => ({ exists: !!store[p], data: () => store[p], metadata: { fromCache: fromCache, hasPendingWrites: false } });
    const mkDoc = (p) => ({
      path: p,
      async set(data) { window.__sets.push({ path: p, data: JSON.parse(JSON.stringify(data)) }); store[p] = JSON.parse(JSON.stringify(data)); (listeners[p] || []).forEach((cb) => cb(snapOf(p, false))); },
      onSnapshot(next) { (listeners[p] = listeners[p] || []).push(next); setTimeout(() => next(snapOf(p, false)), 30); return () => {}; },
    });
    window.claude = { use: async (n) => (n === 'db' ? { doc: mkDoc } : n === 'user' ? { id: async () => 'u_test' } : null) };
  });
  await p2.goto(url + '#overview');
  await p2.waitForTimeout(200);
  check('status says saved to account', (await p2.locator('#save').textContent()).includes('your account'), await p2.locator('#save').textContent());
  await p2.locator('#start-date').fill('2026-11-02');
  await p2.locator('[data-act="set-start"]').click();
  await p2.waitForTimeout(1200);
  const sets = await p2.evaluate(() => window.__sets);
  check('wrote exactly one doc at progress/u_test', sets.length === 1 && sets[0].path === 'progress/u_test', sets.map((s) => s.path));
  check('written doc holds the start date', sets[0] && sets[0].data.startDate === '2026-11-02');
  check('status back to saved', (await p2.locator('#save').textContent()).includes('Saved to your account'), await p2.locator('#save').textContent());
  check('no extra writes after settling (no write loop)', (await p2.evaluate(() => window.__sets.length)) === 1);
  check('no page errors on db path', errs2.length === 0, errs2);

  console.log('11. Remote newer than local is adopted');
  const ctx3 = await browser.newContext({ viewport: { width: 1200, height: 900 }, locale: 'en-US' });
  const p3 = await ctx3.newPage();
  await p3.route(/fonts\.(googleapis|gstatic)\.com/, (r) => r.abort());
  await p3.addInitScript(() => {
    const store = (window.__store = { 'progress/u_test': { v: 1, startDate: '2026-12-25', lab: {}, labNotes: {}, attempts: [], reflect: {}, pretest: 'from another device', updatedAt: Date.now() + 1000 } });
    const listeners = {};
    window.__sets = [];
    const snapOf = (p, fromCache) => ({ exists: !!store[p], data: () => store[p], metadata: { fromCache: fromCache, hasPendingWrites: false } });
    const mkDoc = (p) => ({ set: async (d) => { window.__sets.push(p); store[p] = d; }, onSnapshot(next) { setTimeout(() => next(snapOf(p, false)), 30); return () => {}; } });
    window.claude = { use: async (n) => (n === 'db' ? { doc: mkDoc } : n === 'user' ? { id: async () => 'u_test' } : null) };
  });
  await p3.goto(url + '#overview');
  await p3.waitForTimeout(250);
  const sched3 = await p3.locator('.table-wrap').first().textContent();
  check('page adopts newer remote start date (Dec 25)', /Day 1.*Fri, Dec 25/.test(sched3), sched3.slice(0, 100));
  await p3.goto(url + '#day-1');
  check('remote pre-test text appears', (await p3.locator('#pretest').inputValue()) === 'from another device');

  console.log('12. Layout: phone width, both themes');
  const ctx4 = await browser.newContext({ viewport: { width: 390, height: 844 }, locale: 'en-US', colorScheme: 'dark' });
  const p4 = await ctx4.newPage();
  await p4.route(/fonts\.(googleapis|gstatic)\.com/, (r) => r.abort());
  const views = ['#overview', '#day-3', '#exam', '#review-d8'];
  for (const v of views) {
    await p4.goto(url + v);
    const w = await p4.evaluate(() => ({ sw: document.documentElement.scrollWidth, iw: window.innerWidth }));
    check('no horizontal scroll at 390px on ' + v, w.sw <= w.iw, w);
  }
  await p4.goto(url + '#day-3');
  await p4.locator('#tab-quiz').click();
  await p4.locator('[data-act="run-start"]').click();
  await p4.locator('.scale button[data-n="4"]').click();
  const w2 = await p4.evaluate(() => ({ sw: document.documentElement.scrollWidth, iw: window.innerWidth }));
  check('no horizontal scroll in a running quiz at 390px', w2.sw <= w2.iw, w2);
  await p4.screenshot({ path: path.join(SCRATCH, 'shot-mobile-dark-quiz.png'), fullPage: false });
  await p4.goto(url + '#overview');
  await p4.screenshot({ path: path.join(SCRATCH, 'shot-mobile-dark-overview.png'), fullPage: true });
  const bg = await p4.evaluate(() => getComputedStyle(document.body).backgroundColor);
  check('dark theme sets a dark body background', /rgb\(11, 20, 24\)/.test(bg), bg);

  await page.goto(url + '#day-4');
  await page.screenshot({ path: path.join(SCRATCH, 'shot-desktop-light-day4.png') });
  await page.locator('#tab-quiz').click();
  await page.locator('[data-act="run-start"]').click();
  await page.locator('.scale button[data-n="3"]').click();
  await page.locator('.opt').nth(1).click();
  await page.screenshot({ path: path.join(SCRATCH, 'shot-desktop-light-quiz.png') });

  check('no page errors anywhere', errors.length === 0 && errs2.length === 0, errors.concat(errs2));

  await browser.close();
  server.close();
  console.log('\n' + passes + ' passed, ' + failures + ' failed');
  process.exit(failures ? 1 : 0);
})().catch((e) => { console.error('TEST CRASH', e); process.exit(2); });
