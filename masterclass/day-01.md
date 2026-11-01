# Day 1: Set up and pick the right tool

**Infographic steps 1 and 2 · 60 minutes · Analogy: a workshop with five tools**

## What you will have by the end
- The desktop app installed, with your plan and operating system confirmed.
- A filled decision table: which Claude surface to use for which job.
- The same task run on three surfaces, so you can feel the difference instead of reading about it.

## Your 60 minutes
| Minutes | Block |
|---|---|
| 0 to 10 | Warm-up (nothing to retrieve yet, so a two-minute pre-test) |
| 10 to 25 | Concept and analogy |
| 25 to 50 | Lab |
| 50 to 60 | Quiz, confidence ratings, reflection |

## 1. Warm-up (10 min)
<!-- WARMUP:START -->
No warm-up today because there is nothing to retrieve yet. Instead, spend two minutes writing down everything you already believe about how Claude works, and keep the note. You will compare it with what you know on Day 7.
<!-- WARMUP:END -->

## 2. Concept (15 min)

### The analogy: a workshop
You would not use a sledgehammer to hang a picture or a screwdriver to break a wall. Claude has several tools, and most of the early frustration comes from using the wrong one.

| Surface | Workshop analogy | Best for | Watch out |
|---|---|---|---|
| **Chat** | Talking at a whiteboard with a sharp colleague | Questions, drafting, explaining, quick edits | It cannot touch files on your computer |
| **Artifacts** | The finished piece left on the workbench | A polished doc, deck, dashboard or small tool that opens beside the conversation | It is an output, not a place where work happens |
| **Projects** | A labelled drawer of files and standing instructions | Recurring work on one topic | Two different things share this name (Day 6) |
| **Cowork** | An apprentice who gets the key to one cabinet plus a goal | Multi-step jobs across folders and tools you choose | Needs a paid plan, runs in the desktop app, uses your limits faster than Chat |
| **Code** | The specialist engineer | Writing, debugging and shipping software from a terminal, IDE, Slack or web | Needs a paid plan, and "Projects" means something else there |

Anthropic's own words: Cowork "works across your files and tools" from a goal you give it. Artifacts are "anything Claude makes for you" and open beside your conversation. Source: claude.com product pages, 2026-11-01.

### Setup facts (verified 2026-11-01)
- **Download:** claude.com/download. macOS and Windows (x64 and ARM64) are offered. **Linux is in beta, Ubuntu and Debian only.**
- **Pro plan:** $20 per month, or $17 per month billed annually ($200 up front). Prices are "subject to change", so recheck.
- **Free plan** gives you Chat, up to five Projects, Artifacts, Connectors and Memory. **Cowork, Claude Code, scheduled tasks and Research need a paid plan.**
- **Cost of power:** Cowork "consumes limits faster than Chat". Use it for jobs that need it.
- **Names are moving.** The Cowork page says "Claude Cowork is now just Claude" is rolling out. Your app may show it differently from this lesson. Follow what your app shows and write down any difference.

### What the infographic gets wrong or leaves out
| Infographic | Reality |
|---|---|
| Lists Linux next to Mac and Windows | Linux is beta and limited to Ubuntu and Debian. The Help Center only mentions macOS and Windows. |
| "Pro account ($20/month)" | Correct for monthly billing. Annual billing is $17 per month. |
| Modes: Chat, Projects, Artifacts, Code | Cowork is missing, and it is the one that works on your files. |
| "The web version has limitations" | Plausible, but I found no official page that lists them. Treat it as unverified. |

## 3. Lab (25 min)
<!-- LAB:START -->
Tick each box as you go. Items marked **verify in app** are claims I could not confirm from official pages, so you are the tester. Write the result in your notes.

- [ ] Download the desktop app by typing claude.com/download yourself (do not use a search ad).
- [ ] Sign in and confirm your plan is Pro.
- [ ] Write down your OS and where the app shows Chat, Projects, Cowork and Code. Names may differ because Anthropic says Cowork is being folded into Claude. **(verify in app)**
- [ ] Create a throwaway folder called Claude-Scratch.
- [ ] In Chat, ask: Draft a one-page 30-60-90 day plan for a new Oracle Exadata admin role.
- [ ] Ask for the same plan again as an Artifact, then a third time in Cowork pointed at Claude-Scratch, saved as a file.
- [ ] Fill the decision table in day-01.md: one line each on speed, output form and where the result lives.
- [ ] Open your usage page and note how much the Cowork run used compared with the chat. **(verify in app)**
<!-- LAB:END -->

### The task to run three times
> Draft a one-page 30-60-90 day plan for a new Oracle Exadata admin role.

Swap in your own target role if it is different. Keep the wording identical across the three runs so the comparison is fair.

### Decision table (fill it in)
| Job | Chat | Artifact | Cowork | Winner | Why (speed, form, where the result lives) |
|---|---|---|---|---|---|
| 30-60-90 plan as a one-pager | | | | | |
| Sorting 40 job-description files | (predict) | (predict) | (predict) | | |
| Explaining Smart Scan simply | (predict) | (predict) | (predict) | | |

### Quick guide to keep
- Quick question, drafting, explaining: **Chat**.
- A polished document, deck or dashboard you will edit: **Artifact**.
- Recurring work on one topic with reference files: **Project**.
- A multi-step job across your files or tools: **Cowork** (paid plan).
- Software work: **Code**.

### Common mistakes
- Using Cowork for a one-line question. It burns limits for no gain.
- Pasting 40 files into Chat one by one. That is a Cowork job.
- Trusting a feature list from a screenshot. Check the app and the official page.

## 4. Quiz (10 min)
<!-- QUIZ:START -->
Pass mark: 5 of 6. Rate your confidence from 1 to 5 **before** you check each answer.

**1. Which Claude surface works directly on files and tools on your computer and carries out multi-step tasks from a goal you give it?** _(recall, id d1q1)_

- A. Chat, with no connectors
- B. Cowork
- C. An Artifact
- D. A claude.ai Project's knowledge base

**2. As of 2026-11-01, what does Anthropic's pricing page list for the Pro plan?** _(recall, id d1q2)_

- A. $10 per month with no annual option
- B. $100 per month, the entry price for Cowork
- C. $20 per month billed monthly, or $17 per month billed annually ($200 up front)
- D. Free, with Cowork included

**3. You want a one-page interview cheat sheet that you can read and edit beside the conversation. What fits best?** _(application, id d1q3)_

- A. Ask in Chat and let Claude produce it as an Artifact
- B. Set up a scheduled task
- C. Install a plugin first
- D. Open Claude Code in a terminal

**4. You have 40 job-description files in one folder on your laptop and want them sorted into subfolders by company. Which surface fits best?** _(application, id d1q4)_

- A. Chat on the web, pasting each file
- B. Cowork pointed at that folder
- C. A claude.ai Project's knowledge base
- D. An Artifact

**5. Explain Chat, Projects and Cowork to a friend who has never used Claude, using one analogy of your own.** _(explain, id d1q5)_

_Write your own answer first. Then compare it with the model answer and self-grade: Got it = 1, Partly = 0.5, Missed = 0._

**6. The infographic lists Linux next to Mac and Windows. What does Anthropic's download page say about Linux?** _(spot, id d1q6)_

- A. Linux is fully supported on every distribution
- B. Linux is not offered at all
- C. Linux is in beta and covers Ubuntu and Debian only
- D. Linux needs a Max plan

<details>
<summary>Answer key (open after you have answered all six)</summary>

1. **B**. Cowork 'works directly on your computer' and uses the same agentic architecture as Claude Code (Cowork docs). Chat replies in conversation, an Artifact is an output, and Project knowledge is reference material.
2. **C**. claude.com/pricing lists Pro at $20/month monthly or $17/month billed annually. Prices are 'subject to change', so recheck before you pay.
3. **A**. Anthropic describes an artifact as 'anything Claude makes for you' that opens beside your conversation: a doc, deck, dashboard or small tool.
4. **B**. Cowork reads and writes files in folders you choose and runs multi-step jobs. Chat cannot touch your folders, and a Project's knowledge base is read-only reference.
5. **Model answer.** Chat is talking a problem through at a whiteboard with a sharp colleague. A Project is giving that colleague a labelled drawer of your files and standing instructions, so every conversation starts informed. Cowork is handing an assistant the key to the cabinet you choose plus a goal, and they do the multi-step work in your folders. Cowork needs a paid plan and uses your limits faster than Chat.
   - Rubric: Names all three and what each is for; Chat = conversation, Project = persistent instructions and files, Cowork = acts on your files and tools; Uses an analogy that is your own; Mentions a trade-off, such as paid plan or faster use of limits.
6. **C**. The download FAQ says Claude Desktop for Linux is in beta and supports Ubuntu and Debian (x64 and arm64). The Help Center only mentions macOS and Windows, so confirm on your own machine.

</details>
<!-- QUIZ:END -->

## 5. Reflection and teach-back (last 3 minutes of the quiz block)
1. Which surface did you underestimate before today?
2. Which question were you most sure about and got wrong? That is the one to repair.
3. Explain the five surfaces to someone in 60 seconds, out loud.

## Checkpoint evidence for LC-D1
Record in `CLAUDE.md` (Learner Checkpoints) and in the page:
- Score out of 6, average confidence, repair list.
- Your OS and plan, as the app shows them.
- Results of the two **verify in app** items.
- The filled decision table (paste it or save a photo).
