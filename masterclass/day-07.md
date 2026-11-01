# Day 7: Automation and capstone

**Infographic step 10 · 60 minutes (plus a short overnight test) · Analogy: a morning newspaper delivery**

## What you will have by the end
- One scheduled task that runs on weekdays and is read-only.
- Your own evidence about how it behaves when the computer sleeps.
- A completed capstone that uses Days 1 to 6 together.
- A score on the 20-question mastery exam.

## Your 60 minutes
| Minutes | Block |
|---|---|
| 0 to 10 | Warm-up: retrieve Days 6, 4 and 1 |
| 10 to 25 | Concept and analogy |
| 25 to 50 | Lab (schedule the task, then the capstone) |
| 50 to 60 | Day 7 quiz, then the mastery exam in the page (allow extra time) |

The exam is 20 questions and takes about 15 minutes. Plan it on its own if today is tight, but do it within 24 hours.

## 1. Warm-up (10 min)
<!-- WARMUP:START -->
Retrieve first, look things up second. Cards come from Day 6, Day 4, Day 1 (spaced 1, 3, 6 days back). Answer from memory, then check. Add any card you miss to your repair list.

**1. What do you need in order to share a claude.ai Project with colleagues?** _(from Day 6)_

- A. A Team or Enterprise plan
- B. A Pro plan
- C. Any plan, including Free
- D. A plugin

**2. You want Claude to work on files in a folder on your laptop, with standing instructions every session. Which kind of project fits?** _(from Day 6)_

- A. A Cowork project
- B. A claude.ai Project's knowledge base
- C. A shared Team Project
- D. An Artifact

**3. What can a Cowork plugin bundle?** _(from Day 4)_

- A. Skills, slash commands, sub-agents, hooks and connectors
- B. Only a colour theme
- C. Only a single saved prompt
- D. Only a billing upgrade

**4. A stranger online shares a plugin file that includes agents and hooks and promises 'career superpowers'. What is the safest move?** _(from Day 4)_

- A. Install it right away
- B. Check the publisher and contents first, and prefer directory listings, because marketplace URLs and uploaded files are not covered by directory review
- C. Install it on a work computer so it gets tested
- D. Set Always allow on every connector first

**5. Which Claude surface works directly on files and tools on your computer and carries out multi-step tasks from a goal you give it?** _(from Day 1)_

- A. Chat, with no connectors
- B. Cowork
- C. An Artifact
- D. A claude.ai Project's knowledge base

**6. You want a one-page interview cheat sheet that you can read and edit beside the conversation. What fits best?** _(from Day 1)_

- A. Ask in Chat and let Claude produce it as an Artifact
- B. Set up a scheduled task
- C. Install a plugin first
- D. Open Claude Code in a terminal

<details>
<summary>Warm-up answers</summary>

1. **A**. The Projects help article says sharing is for Team and Enterprise, with permission levels Can view and Can edit.
2. **A**. Cowork projects attach local folders and instructions and keep a project memory on your computer.
3. **A**. The plugin platform page lists skills, commands, agents, hooks and connectors as plugin components.
4. **B**. Agents and hooks run commands on your computer, and the docs say directory review does not cover plugins added from a marketplace URL or uploaded by you.
5. **B**. Cowork 'works directly on your computer' and uses the same agentic architecture as Claude Code (Cowork docs). Chat replies in conversation, an Artifact is an output, and Project knowledge is reference material.
6. **A**. Anthropic describes an artifact as 'anything Claude makes for you' that opens beside your conversation: a doc, deck, dashboard or small tool.

</details>
<!-- WARMUP:END -->

## 2. Concept (15 min)

### The analogy
You describe the newspaper you want once, and it lands on your doorstep on schedule. Each copy is printed fresh, and the printer has no memory of yesterday's edition. Start with one small paper, not the whole newsroom.

### What the official help center says
- **Where:** **Scheduled** in the left sidebar, then **New task** (upper right), then **Create with Claude** (natural language such as "Every Monday at 9 AM") or **Set up manually**.
- **Manual form fields:** task name, prompt, approval mode, frequency, model (optional), folder (optional). Then **Save**.
- **Frequencies:** hourly, daily, weekly, on weekdays, or manually.
- **Managing:** pause, resume, delete, **run on demand**, edit instructions or cadence, and review upcoming and past runs.
- **Plans:** paid plans (Pro, Max, Ultra, Team, Enterprise).
- **Each run is its own Cowork session.** The prompt has to stand alone.
- **Where it runs: the sources disagree.** The article says tasks run remotely, so they run on schedule even when your computer is asleep. It also says that if a task needs local files or apps, it only runs locally. Another version of the page says tasks run only while the computer is awake and the app is open. This is why you test it.
- No numeric limits on tasks or runs are documented. I could not confirm usage cost per run.

### What makes a good first automation
1. **Small.** One job, one output.
2. **Repetitive.** Something you do on a rhythm.
3. **Read-only.** A mistake costs nothing.
4. **Self-contained prompt.** Written for a reader who has seen nothing.
5. **Tested on demand** before you trust the schedule.

The infographic's tip says the same: "Start small. Automate one repetitive task to save time every week."

### What to leave off the schedule for now
Anything that sends, applies, deletes or pays without you. Earn that trust later.

## 3. Lab (25 min)
<!-- LAB:START -->
Tick each box as you go. Items marked **verify in app** are claims I could not confirm from official pages, so you are the tester. Write the result in your notes.

- [ ] Pick the task: a weekday job digest that reads recruiter emails and today's calendar. Read-only.
- [ ] Write a self-contained prompt with the Day 3 template. Do not rely on anything from earlier chats.
- [ ] Open Scheduled in the left sidebar, press New task, and choose Create with Claude or Set up manually. Pick the most cautious approval mode and the on weekdays frequency.
- [ ] Run it on demand, read the output and refine the prompt twice.
- [ ] Overnight test: leave the computer asleep or the app closed during the 8:00 run. On Day 8 record whether the run happened. **(verify in app)**
- [ ] Capstone: a job description arrives, Claude reads your context files, tailors bullets after interviewing you, a plugin builds a company brief, Gmail drafts a follow-up (needs approval), and a tracker row is added.
- [ ] Take the 20-question mastery exam in the page and record your score.
- [ ] Teach-back: explain the whole week in three minutes, as a voice note or to a friend.
<!-- LAB:END -->

### A self-contained prompt for the weekday digest
```
<goal>Give me a short weekday briefing for my job search.</goal>
<context>I am a tech professional looking for Oracle Exadata administrator roles. Use my Gmail and Google Calendar connectors. This is read-only.</context>
<task>
1. Find emails from the last 24 hours from recruiters, hiring managers or about applications.
2. List today's calendar events, flagging interviews.
3. Suggest the single most useful next action.
</task>
<output_format>At most 10 lines. First line: the date. Then Emails, Calendar, Next action.</output_format>
<constraints>Do not send, draft, reply, create or delete anything. If nothing relevant exists, say so in one line.</constraints>
```

### The overnight test (settles the disagreement for your setup)
1. Schedule the digest for 8:00 on weekdays.
2. Before bed, put the computer to sleep, or close the app, depending on what you want to learn. Change one thing at a time.
3. On Day 8, open **Scheduled** and check whether the 8:00 run exists and what it says.
4. Write down: computer state, app state, result.

### Capstone checklist
A new job description arrives. Walk it through your system:
- [ ] Day 2: your Cowork project reads About-Me and Projects without you re-explaining.
- [ ] Day 3: you use the template and the interview-me step to tailor three resume bullets.
- [ ] Day 4: a plugin produces a company brief.
- [ ] Day 5: Gmail drafts a follow-up, and sending needs your approval.
- [ ] Day 6: you save the final bullets into Job Search HQ.
- [ ] Day 7: the weekday digest would mention this application.

Rate each 0 (not done), 1 (done with effort), 2 (smooth). Anything below 2 goes on your repair list.

### Mastery exam
Open the page and go to the exam, or use the Day 30 section of `reviews.md` on paper. Do not look at the answers first. You will take the same 20 questions again on Day 30, and the difference is your retention.

## 4. Quiz (10 min)
<!-- QUIZ:START -->
Pass mark: 5 of 6. Rate your confidence from 1 to 5 **before** you check each answer.

**1. Which frequencies does the manual scheduled-task form offer?** _(recall, id d7q1)_

- A. Hourly, daily, weekly, on weekdays, or manually
- B. Only monthly
- C. Every second
- D. Only yearly

**2. Where do you start creating a scheduled task in Cowork?** _(recall, id d7q2)_

- A. Settings, then Billing
- B. The Artifacts panel
- C. Scheduled in the left sidebar, then New task
- D. Customize, then Plugins

**3. Which is the best first automation?** _(application, id d7q3)_

- A. Auto-send follow-ups to every recruiter
- B. A read-only weekday summary of recruiter emails and today's calendar
- C. Auto-apply to every job posted
- D. Delete old emails every night

**4. Your scheduled prompt says 'Same as yesterday, but for today.' Why is that a problem?** _(application, id d7q4)_

- A. Scheduled tasks cannot read email
- B. Prompts cannot contain dates
- C. It needs a Max plan
- D. Each run is its own session, so the prompt must be complete on its own

**5. Explain scheduled tasks with an analogy, and name three properties of a good first automation.** _(explain, id d7q5)_

_Write your own answer first. Then compare it with the model answer and self-grade: Got it = 1, Partly = 0.5, Missed = 0._

**6. Two versions of the help article disagree on whether scheduled tasks run while your computer sleeps. What is the best response?** _(spot, id d7q6)_

- A. Assume they always run
- B. Assume they never run
- C. Test it yourself with a low-stakes task, record the result, and remember that tasks needing local files or apps run locally
- D. Ignore the question

<details>
<summary>Answer key (open after you have answered all six)</summary>

1. **A**. The help center lists hourly, daily, weekly, on weekdays and manually for the manual setup form.
2. **C**. Help center: left sidebar Scheduled, then New task in the upper right, then Create with Claude or Set up manually.
3. **B**. Start small, repetitive and read-only. Anything that sends, applies or deletes without you should wait until you trust the run.
4. **D**. The help center says each run is its own Cowork session. Write the task as if the reader has never seen it.
5. **Model answer.** It is a morning newspaper delivery: I describe what I want once and it arrives on schedule, each copy produced fresh. A good first automation is small, repetitive and read-only, so a mistake costs nothing. I run it on demand first, and its prompt is complete on its own.
   - Rubric: Analogy for describing once and receiving on a schedule; Names at least three of: small, repetitive, read-only, self-contained, tested on demand; Says each run is a fresh session; Mentions testing before trusting it.
6. **C**. One version says tasks run remotely even when the computer is asleep, but 'if a scheduled task requires local files or apps, it will only run locally'. Your own test settles it for your setup.

</details>
<!-- QUIZ:END -->

## 5. Reflection and teach-back
1. Which of the 10 steps changed your habits the most?
2. Which one will you drop if you are busy, and which will you protect?
3. Teach it: explain the whole week in three minutes. Record it as a voice note or tell a friend. Where did you stall?

## What happens next
- **Day 8:** check the overnight test, then the Day 8 review.
- **Day 14 and Day 30:** reviews in `reviews.md` and in the page.
- **Monthly:** re-read `FACT-CHECK.md`. Menu labels and plan details change faster than lessons do.

## Checkpoint evidence for LC-D7 and LC-EXAM
- Score out of 6 and the exam score out of 20, average confidence, repair list.
- Your digest prompt and one run's output.
- The capstone ratings.
- The overnight-test result.
