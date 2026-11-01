# Master Claude in One Week

A 7-day, 60-minute-a-day masterclass built from your 10-step infographic. Every claim was checked against official Anthropic pages on **2026-11-01**. Where the infographic is wrong or only a community habit, the lesson says so. Labs are themed on a **tech job search and interviews**, and assume the **Pro** plan.

## How the 10 steps map to 7 days
| Day | Infographic steps | Topic | Analogy |
|---|---|---|---|
| [1](day-01.md) | 1 and 2 | Set up, pick the right tool | A workshop with five tools |
| [2](day-02.md) | 3 and 4 | Folder system and core files | Onboarding a new hire |
| [3](day-03.md) | 5 and 6 | Prompt template, let Claude ask | Order card and doctor's intake form |
| [4](day-04.md) | 7 | Plugins | Attachments for a power drill |
| [5](day-05.md) | 8 | Connectors | Keys to specific rooms |
| [6](day-06.md) | 9 | Projects | A dedicated desk and binder |
| [7](day-07.md) | 10 and capstone | Automation, end-to-end workflow, mastery exam | Morning newspaper delivery |

Then reviews on **Day 8, Day 14 and Day 30** ([reviews.md](reviews.md)).

## The daily 60 minutes
| Minutes | Block | Why |
|---|---|---|
| 10 | **Warm-up retrieval** of earlier days | Pulling facts out of memory is what makes them stick |
| 15 | **Concept** with an analogy | One idea hooked to something you already know |
| 25 | **Lab** | You learn the menus by using them |
| 10 | **Quiz**, confidence rating, teach-back | Tests learning and shows where you are over- or under-confident |

## How scoring works
- Six questions a day: 2 recall, 2 application, 1 explain-in-your-own-analogy, 1 spot-the-error taken from a claim in the infographic or a blog.
- **Rate your confidence 1 to 5 before you check each answer.** Over time the page shows where your confidence and your accuracy disagree.
- Multiple choice scores 1 or 0. Explain questions score **Got it = 1, Partly = 0.5, Missed = 0** by your own honest grading against the rubric.
- **Pass mark is 80%, so 5 of 6.** Below that is not failure. It puts the questions you missed on your **repair list**, and they come back in the next warm-up.

## Review schedule
Warm-up on day N draws the two warm-up cards from days N-1, N-3 and N-6 (where those days exist), plus your repair list. Gaps of 1, 3 and 6 days are deliberate.

| Session | When | Cards |
|---|---|---|
| Mastery exam | Day 7 | 20 questions, multiple choice |
| Day 8 review | Day 1 date + 7 | 14 warm-up cards from Days 1 to 7, plus repair list |
| Day 14 review | Day 1 date + 13 | The same 14 cards, new order, plus repair list |
| Day 30 review | Day 1 date + 29 | The same 20 exam questions, so you can measure retention |

Example: start on Monday 2026-11-02, and the reviews fall on Monday 2026-11-09, Sunday 2026-11-15 and Tuesday 2026-12-01.

**Why this design:** a 2021 meta-analysis of 29 studies found that spacing out retrieval beats massing it (effect size g = 0.74), and the evidence does not show expanding intervals beating evenly spaced ones. Spacing can make practice scores lower while making later retention higher, so expect the reviews to feel harder. That is the method working. Retrieval also helps most after you have recalled something successfully once, so day-one quizzes are low-stakes.

## Two ways to use it
1. **The interactive page** (recommended): quizzes, confidence ratings, a review queue, scores over time, and a button that copies your progress summary. It saves progress to your Claude account when your viewer allows it, so it can follow you between phone and laptop, and falls back to this device if not. The status line at the top of the page says which one is active.
2. **Paper mode:** the day files plus [progress-tracker.md](progress-tracker.md).

## Passing progress back to Claude
Press **Copy progress summary** in the page and paste it into a chat or into the Learner Checkpoints table in `CLAUDE.md`. In a later session, ask Claude to read your progress from the page's saved data (collection `progress`) and update `CLAUDE.md`.

## What to trust in these lessons
- [FACT-CHECK.md](FACT-CHECK.md) shows each infographic claim against the official source, with a confidence level.
- Anything marked **verify in app** is a claim official pages did not confirm, or where two official pages disagree. Treat each as a small experiment and write down what you see.
- Menu labels and plan details change. Re-read the fact-check about once a month.

## Files
| File | Purpose |
|---|---|
| `day-01.md` to `day-07.md` | Lessons |
| `reviews.md` | Day 8, 14 and 30 review cards (generated) |
| `quiz-bank.json` | Single source of truth for all questions and lab checklists |
| `build.mjs` | Validates the bank, regenerates blocks, builds the page |
| `app/` | The interactive page (`index.template.html` is the source) |
| `samples/exadata-prep-notes.md` | Knowledge file for the Day 6 lab |
| `PLAN.md` | The approved plan |

To rebuild after editing `quiz-bank.json`: `node masterclass/build.mjs`. To validate only: `node masterclass/build.mjs --check`.
