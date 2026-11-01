# CLAUDE.md

Working memory for Claude Code in this repo. Keep it current: every unit of work gets a row in the Checkpoint Log with evidence someone else can verify.

## Standing preferences (from the repo owner)
1. **Always start in Plan mode.** Explore, plan, get approval, then edit.
2. **Teach with analogies.** Every new concept gets a real-world analogy before the mechanics.
3. **Keep the Checkpoint Log below up to date.** One row per unit of work, with evidence (file path, command output, link) and a status.
4. File name is `CLAUDE.md` (Claude Code reads this exact, case-sensitive name).

## Git rules for this session
- Develop on branch `claude/dazzling-noether-428n79`. Never push elsewhere.
- Commit with clear messages. Do not open a pull request unless asked.

## Repo overview (verified 2026-11-01)
- **Sobi Tech Jobs** (`job-portal-prep`): React 18 + Vite 5 + react-router-dom 6 job-portal and interview-prep site. All data is inline in components (no backend, no saved progress).
- Routes in `src/App.jsx`: `/`, `/jobs`, `/jobs/:id`, `/preparation`, `/preparation/:subject`, `/hiring-process`, `/hiring-process/:companyId`, `/oracle-exadata-sheet`.
- Scripts in `package.json`: `npm run dev`, `build`, `preview`, `lint`. There is a `lint` script but no ESLint config file at the repo root.
- Do not modify `src/**`, `package.json` or `vite.config.js` for masterclass work.

## Masterclass: "Master Claude in One Week"
Built from the owner's 10-step infographic, fact-checked against official Anthropic pages on 2026-11-01. 7 days, 60 minutes per day, labs themed on a tech job search. Owner is on the Pro plan.

| Path | What it is |
|---|---|
| `masterclass/README.md` | Course map, daily routine, scoring, review schedule |
| `masterclass/FACT-CHECK.md` | Infographic claims vs verified facts, with sources and a verify-in-app list |
| `masterclass/day-01.md` ... `day-07.md` | Lessons: analogy, lab, quiz (warm-up, lab checklist and quiz blocks are generated) |
| `masterclass/reviews.md` | Day 8, 14 and 30 review cards (fully generated) |
| `masterclass/test-page.cjs` | Headless-Chromium test of the page (needs Playwright): `node masterclass/test-page.cjs` |
| `masterclass/quiz-bank.json` | **Single source of truth** for questions, lab checklists, warm-up flags, mastery exam |
| `masterclass/build.mjs` | Validates the bank, regenerates quiz blocks in day files, builds the page |
| `masterclass/app/index.template.html` | Source of the interactive page |
| `masterclass/app/index.html` | Generated page. Published as a private Artifact: https://claude.ai/artifact/FYhuGgSDZ1HNcTBb9NtXwT (progress is stored in its `progress` collection, one document per viewer id) |
| `masterclass/progress-tracker.md` | Paper fallback for scores and review dates |
| `masterclass/samples/exadata-prep-notes.md` | Sample knowledge file used in the Day 6 lab |
| `masterclass/PLAN.md` | Copy of the approved plan |

Rules for editing:
- Change questions in `quiz-bank.json`, then run `node masterclass/build.mjs`. Never hand-edit text between `<!-- QUIZ:START -->` and `<!-- QUIZ:END -->`, or `app/index.html`.
- Anything not confirmed by an official page is labelled "verify in app" in the lessons. Do not state it as fact.

## Checkpoint Log (build)
Status values: done, pending, blocked.

| ID | Date | Work | Evidence | Status |
|---|---|---|---|---|
| CP-01 | 2026-11-01 | Research of the 10 infographic steps | 3 official-page review passes (claude.com/download, /pricing, /docs/cowork, /docs/plugins, /docs/connectors, support.claude.com scheduled tasks, Projects, connectors) plus 8 web searches; results in `masterclass/FACT-CHECK.md` | done |
| CP-02 | 2026-11-01 | Plan approved by owner | Approved in Plan mode; copy at `masterclass/PLAN.md` | done |
| CP-03 | 2026-11-01 | `CLAUDE.md` created with checkpoint log | This file | done |
| CP-04 | 2026-11-01 | `FACT-CHECK.md` + `README.md` | `masterclass/FACT-CHECK.md`: 21 claim rows with a verdict each, 17 official source URLs, 7-item verify-in-app list. `masterclass/README.md`: course map, scoring, review schedule. | done |
| CP-05 | 2026-11-01 | `day-01..07.md` written | 7 files, each with analogy, 10/15/25/10-minute plan, lab, quiz, reflection and evidence list. `node masterclass/build.mjs` run twice: second run changed nothing (diff of the folder was empty). | done |
| CP-06 | 2026-11-01 | `quiz-bank.json` validated | `node masterclass/build.mjs` prints: 7 days, 42 questions, 20 in the mastery exam, warm-up cards d1..d7 = 0/2/2/4/4/4/6, Day 8 and 14 reviews 14 cards, Day 30 review 20 cards, 0 mastery questions overlap warm-up cards. Negative test on four broken copies (duplicate id, answer index 5, three options, one warm-up flag removed): each rejected with a clear message and exit code 1; the real bank exits 0. | done |
| CP-07 | 2026-11-01 | Interactive page built and tested | `node masterclass/test-page.cjs`: 54 checks passed, 0 failed, three runs in a row. Covers scoring (3.5/6 scripted case), persistence across reload, spaced warm-up (2 cards + 3 repair), 20-card exam and Day 30 review, reset flow, account-save path against a mock (one write, no write loop, newer remote adopted), 390 px width with no sideways scroll, dark theme. Found and fixed during testing: reflection box missing after a quiz, partly-right counted as wrong, clipboard feedback could be silent. | done |
| CP-08 | 2026-11-01 | Page published privately | https://claude.ai/artifact/FYhuGgSDZ1HNcTBb9NtXwT (version 2, readable by owner only, capabilities `db` and `user`). Store check: wrote a probe document to `progress`, read it back with the list action, deleted it. Not tested: the page's own save from inside the claude.ai viewer (tested only against a mock). | done |
| CP-09 | | Committed and pushed to `claude/dazzling-noether-428n79` | | pending |

## Learner Checkpoints (owner fills in; the page can print a summary to paste here)
Pass mark is 80% (5 of 6). Confidence is 1-5, rated before seeing each answer.

| ID | Date | Score | Avg confidence | Repair list (question IDs) | Notes |
|---|---|---|---|---|---|
| LC-D1 | | | | | |
| LC-D2 | | | | | |
| LC-D3 | | | | | |
| LC-D4 | | | | | |
| LC-D5 | | | | | |
| LC-D6 | | | | | |
| LC-D7 | | | | | |
| LC-EXAM | | | | | |
| LC-D8 | | | | | |
| LC-D14 | | | | | |
| LC-D30 | | | | | |
