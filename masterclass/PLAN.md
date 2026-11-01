# Plan: "Master Claude in One Week" masterclass (7 days, 60 min/day)

## Context
You shared a 10-step infographic ("How to Master Claude in One Week") and asked for a researched masterclass you can do daily, with progress checks for understanding and retention. Your standing preferences: start in Plan mode, teach with analogies, and keep a `CLAUDE.md` with checkpoints of all work done so it can be verified.

Your answers: deliver as **repo lessons + one private interactive page**; you are on **Pro**; **60 min/day**; labs themed on **tech job search & interviews** (fits this repo and the Oracle Exadata prep sheet).

I researched each step against official Anthropic pages (claude.com/download, /pricing, /docs/cowork, /docs/plugins, /docs/connectors, support.claude.com) plus community sources, and found the infographic is **mostly right but has several claims that are wrong or unofficial**. The masterclass teaches the corrected version and says so openly.

## Research findings that shape the course (verified 2026-11-01)

| Step | Infographic says | What the research found | How the course handles it |
|---|---|---|---|
| 1 Desktop app | Mac / Windows / Linux; Pro $20/mo | Download page: macOS, Windows x64 + ARM64; **Linux is beta (Ubuntu/Debian only)**, and the Help Center only mentions macOS/Windows. Pro = $20/mo, or $17/mo billed annually ($200). Cowork, Claude Code, scheduled tasks need a paid plan. Official Cowork docs do not state OS/plan requirements. | Day 1 lab: you check your own OS/plan in-app. |
| 2 Modes | Chat, Projects, Artifacts, Code | Chat, Projects, Artifacts, Cowork and Code are surfaces with different jobs. The infographic omits **Cowork**. Anthropic says "Cowork is now just Claude" is rolling out, so names may shift. | Day 1 "right tool for the job" decision table. |
| 3-4 Folders + About Me / Projects files | Presented as the way | **Community convention, not official.** Official equivalent = **Cowork Projects** (local folders + instructions + memory, stored on your computer, not shared). Cowork does not read `~/.claude`. "Global Instructions" menu path is **not in official docs**. | Taught as "recommended practice", labelled unofficial; Day 2 lab verifies the Global Instructions path in-app. |
| 5-6 Prompt template, let Claude ask | Goal/Context/Output/Notes | Matches official guidance: be clear and direct, 3-5 examples, XML tags. The "docs first = +30%" figure is unverified and not taught as fact. | Template extended with constraints + examples; "interview me first" pattern. |
| 7 Plugins | Browse plugin directory | **Customize > Plugins > Discover > Install** (one page says "Add"; verify in app). A plugin can bundle skills, commands, agents, hooks, connectors. Installing does not connect anything. Agents/hooks run commands on your computer; marketplace/uploaded plugins are not directory-reviewed. | Day 4 includes a plugin safety checklist. |
| 8 Connectors | Drive, Gmail, Slack, GitHub, Notion | **Customize > Connectors > Discover > Connect to Claude.** Per-tool permission: Always allow / Needs approval / Blocked. Claude inherits your permissions in the connected service. Slack/Notion setup not confirmed in help center. | Day 5 uses Gmail + Calendar with "Needs approval"; teaches least privilege and untrusted-content awareness. |
| 9 Team Projects | Shared context for team | **Two different things called Projects:** claude.ai Projects (account-based; **sharing needs Team/Enterprise**; Free = 5 projects) vs Cowork projects (local, unshared). You are on Pro, so no sharing. | Day 6 teaches solo workflow + a "what changes on Team" note. |
| 10 Automation | Schedule recurring tasks | **Scheduled** sidebar > New task > "Create with Claude" or "Set up manually"; hourly/daily/weekly/weekdays/manual; paid plans. Help center **conflicts** on whether the computer must be awake: runs remotely, but tasks needing local files/apps run locally only. No numeric limits documented. | Day 7 lab tests the behaviour yourself. |

**Learning-science basis:** spaced retrieval beats restudying (meta-analysis, Latimier et al. 2021: g = 0.74). No evidence expanding intervals beat evenly spaced ones. Spacing can lower in-session scores while raising later retention, so expect reviews to feel harder. Retrieval only helps once an item has been recalled successfully at least once, so first-pass quizzes are low-stakes.

## 7-day structure (every day = 60 min)
10 min warm-up retrieval of earlier days, 15 min concept with analogy, 25 min hands-on lab, 10 min quiz + confidence rating and teach-back.

| Day | Steps | Theme | Analogy | Lab (job-search themed) |
|---|---|---|---|---|
| 1 | 1-2 | Set up + pick the right mode | A workshop: screwdriver (Chat), labelled drawer (Projects), finished piece on the bench (Artifacts), apprentice with keys to your cabinet (Cowork), engineer (Code) | Install/verify, check plan + OS, run one task in 3 modes, fill the decision table |
| 2 | 3-4 | Folder system + core context files | Onboarding a new hire: handbook + project binder | Build `Claude-Cowork/` (About Me, Projects, Templates, Outputs); write About-Me and Projects files; create a Cowork Project; verify Global Instructions path |
| 3 | 5-6 | Prompt template + let Claude interview you | Restaurant order card vs "surprise me"; doctor's intake form | Build Goal/Context/Output/Notes template; save as text shortcut; resume-bullet tailoring and mock interview, with vs without Claude's questions |
| 4 | 7 | Plugins | Phone apps / power-tool attachments | Browse, install 1-2, inspect contents, apply safety checklist |
| 5 | 8 | Connectors | Keys to specific rooms, with a door log | Connect Gmail + Calendar, set "Needs approval", run an interview-email triage task |
| 6 | 9 | Projects (solo) | Dedicated desk + binder vs a shared team room | claude.ai Project "Job Search HQ" with instructions + knowledge files; compare to Cowork project |
| 7 | 10 + capstone | Automation + end-to-end workflow | Morning newspaper delivery | Schedule a weekday job-digest; test run-on-demand; capstone combining Days 1-6; 20-question mastery exam |

Follow-up reviews: **Day 8, Day 14, Day 30** (uniform-spaced retrieval from the full question bank).

**Quiz design:** 6 questions/day (2 recall, 2 scenario-application, 1 explain-in-your-own-analogy, 1 spot-the-error using real infographic claims). Pass mark 80%; below that creates a "repair list" that re-appears in the next warm-up. You rate confidence 1-5 before seeing each answer so the tracker shows over/under-confidence.

## Deliverables (all new files; existing React app untouched)
1. `CLAUDE.md` (repo root; Claude Code reads this exact filename). Project context, your preferences, and a **Checkpoint Log** table (ID / date / work / evidence / status).
2. `masterclass/README.md`: course map, daily routine, scoring rules, review schedule.
3. `masterclass/FACT-CHECK.md`: the table above with source URLs, confidence level, and a "verify in-app" list.
4. `masterclass/day-01.md` ... `day-07.md`: objective, warm-up, concept + analogy, lab steps (Mac/Windows variants), quiz with answer key, reflection, checkpoint evidence to record.
5. `masterclass/progress-tracker.md`: self-scoring fallback (scores, confidence, review dates).
6. `masterclass/app/index.html`: single-file interactive page (day navigation, lab checklists, quizzes with instant feedback, confidence ratings, score history, spaced-review queue, progress bar, "copy progress summary" to paste into CLAUDE.md). Published as a **private** Artifact; state saved via the artifact runtime capability if available, with `localStorage` (try/catch) as fallback. Quiz content comes from one source of truth (`masterclass/quiz-bank.json`) so the markdown answer keys and the page cannot drift apart.

## Build order and CLAUDE.md checkpoints (each logged with evidence)
- CP-01 Research complete, fact-check table written (sources linked)
- CP-02 Plan approved by you
- CP-03 `CLAUDE.md` created with checkpoint log
- CP-04 `FACT-CHECK.md` + `README.md` done
- CP-05 `day-01..07.md` written, each with analogy, lab, quiz
- CP-06 `quiz-bank.json` validated (valid JSON, every question has exactly one correct answer, 6 per day, spaced-review mapping correct)
- CP-07 Interactive page built and tested
- CP-08 Page published privately (link recorded)
- CP-09 Committed and pushed to `claude/dazzling-noether-428n79` (no PR unless you ask)
- Learner checkpoints you fill in: LC-D1 ... LC-D7, LC-D8, LC-D14, LC-D30 (score, confidence, what to repair)

## Critical files / reuse
- New: everything above. Existing app (`src/**`, `package.json`, `vite.config.js`) is not modified.
- Skills to load when building the page (required by the Artifact tool): `artifact-design`, `artifact-capabilities`.
- Existing patterns noted: the app's `SubjectView.jsx` (Q&A reveal) and `TopicSheet.jsx` (Oracle Exadata topics) have no saved progress, so there is nothing to reuse. The Exadata topics are used only as sample knowledge-file content in the Day 6 lab.

## Verification (end-to-end)
1. `node -e` JSON validation of `quiz-bank.json`; script checks 6 questions per day, one correct option each, review mapping exists for Days 8/14/30.
2. Headless Chromium (Playwright is preinstalled) against `masterclass/app/index.html`: loads without console errors; answering questions computes the right score; confidence ratings and scores persist after reload; the review queue shows the expected cards for Day N; no horizontal scroll at 390 px; light and dark themes legible; screenshots saved to the scratchpad for your review.
3. Every URL in `FACT-CHECK.md` re-checked once; claims I could not confirm are marked "verify in app", never stated as fact.
4. `git status` / `git diff --stat` shows only new files under `masterclass/` and `CLAUDE.md`; existing app untouched.
5. Final `CLAUDE.md` checkpoint table has an evidence entry for every CP row before the push.

## Not included (ask if you want them)
- Daily reminders (Day 7 teaches you to schedule your own; Google Calendar is not connected in this session).
- A pull request (not created unless you ask).
