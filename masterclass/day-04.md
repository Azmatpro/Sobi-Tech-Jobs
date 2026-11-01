# Day 4: Plugins

**Infographic step 7 · 60 minutes · Analogy: attachments for a power drill**

## What you will have by the end
- One plugin installed after a safety check, with its contents listed.
- A real job-search task done with it.
- A plugin card in your notes and a habit of vetting before installing.

## Your 60 minutes
| Minutes | Block |
|---|---|
| 0 to 10 | Warm-up: retrieve Days 3 and 1 |
| 10 to 25 | Concept and analogy |
| 25 to 50 | Lab |
| 50 to 60 | Quiz, confidence ratings, reflection |

## 1. Warm-up (10 min)
<!-- WARMUP:START -->
Retrieve first, look things up second. Cards come from Day 3, Day 1 (spaced 1, 3, 6 days back). Answer from memory, then check. Add any card you miss to your repair list.

**1. Which four fields does the infographic's prompt template use?** _(from Day 3)_

- A. Goal, Context, Output format, Notes
- B. Role, Tone, Length, Language
- C. Question, Answer, Source, Date
- D. Input, Process, Output, Review

**2. You paste a job description, your resume and instructions into one prompt. What helps Claude keep them apart?** _(from Day 3)_

- A. Run them together in one long paragraph
- B. Wrap each piece in its own tags, such as <job_description> and <resume>
- C. Write the instructions in capital letters
- D. Paste each in a different chat

**3. Which Claude surface works directly on files and tools on your computer and carries out multi-step tasks from a goal you give it?** _(from Day 1)_

- A. Chat, with no connectors
- B. Cowork
- C. An Artifact
- D. A claude.ai Project's knowledge base

**4. You want a one-page interview cheat sheet that you can read and edit beside the conversation. What fits best?** _(from Day 1)_

- A. Ask in Chat and let Claude produce it as an Artifact
- B. Set up a scheduled task
- C. Install a plugin first
- D. Open Claude Code in a terminal

<details>
<summary>Warm-up answers</summary>

1. **A**. The template on the infographic reads Goal, Context, Output format, Notes. Day 3 adds constraints, examples and success criteria.
2. **B**. Anthropic's guidance says tags help Claude parse prompts that mix instructions, context, examples and variable input.
3. **B**. Cowork 'works directly on your computer' and uses the same agentic architecture as Claude Code (Cowork docs). Chat replies in conversation, an Artifact is an output, and Project knowledge is reference material.
4. **A**. Anthropic describes an artifact as 'anything Claude makes for you' that opens beside your conversation: a doc, deck, dashboard or small tool.

</details>
<!-- WARMUP:END -->

## 2. Concept (15 min)

### The analogy
Claude is the drill. A plugin is a labelled box of attachments. Inside you might find:
- a **recipe book** (skills: how to do a job well),
- **shortcut buttons** (slash commands),
- **specialist helpers** (agents),
- **automatic alarms** (hooks that run at certain moments),
- **requests for door keys** (connectors to outside services).

A box from a trusted shop is one thing. A box handed over in a car park is another.

### What the official docs say
- **Where:** in the desktop app open **Customize**, then **Plugins**, then **Discover**, pick a plugin and press **Install**. The plugin overview page says **Add** instead of Install, so check which label your app shows.
- **Directory:** Anthropic's public directory is at claude.com/plugins, with a Works With filter for Cowork or Claude Code.
- **Contents:** skills, commands (run as `/plugin-name:command`), agents, hooks and connectors.
- **Installing does not connect anything.** If a plugin includes connectors, open its **Connectors** tab and connect them yourself.
- **Other ways in:** **Add marketplace** takes a repository URL or `owner/repo`, and **Upload plugin** takes a `.zip` or `.plugin` file.
- **Managing:** **Disable plugin** is a toggle, **Remove** deletes it, and marketplaces offer **Check for updates**.
- **Limits:** 200 MB uncompressed and 5,000 files per plugin, 25 marketplaces, 500 plugins per marketplace.
- **Safety:** agents and hooks run commands on your computer, and directory review does not cover plugins you add from a marketplace URL or upload yourself.

### What the infographic leaves out
It shows plugins as pure upside ("Marketing, Data, Legal, Research"). The part it skips is that plugins can run things on your machine and that you must connect their connectors yourself.

### Safety checklist (use it every time)
1. Who published it, and can I verify that?
2. Is it from the **directory**, a marketplace URL or an uploaded file? Prefer the directory.
3. What does it contain? List skills, commands, agents, hooks, connectors.
4. Does it include **agents or hooks**? Those run commands on your computer. Read what they do.
5. Which connectors does it ask for, and do I need all of them?
6. Does the description match what I want it to do, and nothing more?
7. Am I installing it on a machine with data I cannot afford to lose?
8. Can I disable or remove it quickly? (Yes, but find the button now.)

## 3. Lab (25 min)
<!-- LAB:START -->
Tick each box as you go. Items marked **verify in app** are claims I could not confirm from official pages, so you are the tester. Write the result in your notes.

- [ ] Open Customize, then Plugins, then Discover. Also browse claude.com/plugins and try the Works With filter.
- [ ] Pick one plugin that fits a job search (research, productivity or data). Run the safety checklist in day-04.md before installing.
- [ ] Install it. Open its page and list what it contains: skills, commands, agents, hooks, connectors.
- [ ] If it includes connectors, open its Connectors tab and connect only the ones you need.
- [ ] Run one slash command in the form /plugin-name:command.
- [ ] Use it for real: a research brief on a target company, or an application tracker in CSV.
- [ ] Toggle Disable plugin and re-enable it. Find where Remove lives.
- [ ] Note whether your install button says Install or Add. **(verify in app)**
<!-- LAB:END -->

### Plugin card (copy into your notes)
```
Name:
Publisher:
Source: directory / marketplace URL / upload
Contains: skills / commands / agents / hooks / connectors
Connectors requested and which I connected:
What I used it for:
Result (1 to 5):
Verdict: keep / disable / remove
```

### Ideas for a job-search task
- A research brief on a target company before an interview.
- An application tracker kept as a CSV, with a weekly summary.
- A draft LinkedIn post about something you learned this week.

Start with one or two plugins. You can always add more later.

## 4. Quiz (10 min)
<!-- QUIZ:START -->
Pass mark: 5 of 6. Rate your confidence from 1 to 5 **before** you check each answer.

**1. What can a Cowork plugin bundle?** _(recall, id d4q1)_

- A. Skills, slash commands, sub-agents, hooks and connectors
- B. Only a colour theme
- C. Only a single saved prompt
- D. Only a billing upgrade

**2. After you install a plugin that includes connectors, what is still true?** _(recall, id d4q2)_

- A. They are connected automatically
- B. You must open its Connectors tab and connect each one yourself
- C. They only work on Max
- D. They are removed after a day

**3. A stranger online shares a plugin file that includes agents and hooks and promises 'career superpowers'. What is the safest move?** _(application, id d4q3)_

- A. Install it right away
- B. Check the publisher and contents first, and prefer directory listings, because marketplace URLs and uploaded files are not covered by directory review
- C. Install it on a work computer so it gets tested
- D. Set Always allow on every connector first

**4. The infographic's tip says to start with a few relevant plugins. Which plan matches it for interview prep?** _(application, id d4q4)_

- A. Install every plugin in the directory
- B. Install none, ever
- C. Install only plugins that have the most connectors
- D. Install one or two that match the task, test them, and add more later

**5. Explain the difference between a skill, a connector and a plugin, with an analogy.** _(explain, id d4q5)_

_Write your own answer first. Then compare it with the model answer and self-grade: Got it = 1, Partly = 0.5, Missed = 0._

**6. The infographic says to add plugins from the directory to expand what Claude can do. Which important point does it leave out?** _(spot, id d4q6)_

- A. Plugins can include agents and hooks that run commands on your computer, so vet them, and installing does not connect anything
- B. Plugins are always free of risk
- C. Plugins only work in the browser
- D. Plugins replace the need for prompts

<details>
<summary>Answer key (open after you have answered all six)</summary>

1. **A**. The plugin platform page lists skills, commands, agents, hooks and connectors as plugin components.
2. **B**. The Cowork plugins page says installing does not connect anything. Open the plugin's Connectors tab afterwards.
3. **B**. Agents and hooks run commands on your computer, and the docs say directory review does not cover plugins added from a marketplace URL or uploaded by you.
4. **D**. Starting small keeps the number of things that can run on your machine low, and shows which plugin actually helps.
5. **Model answer.** A plugin is a toolbox I install. A skill is a recipe card inside it that tells Claude how to do a job well. A connector is a door key to a service such as Gmail, which Claude can use only if I connect it and allow it. One plugin can hold several skills and connectors, plus commands, agents and hooks.
   - Rubric: Plugin = the bundle you install; Skill = instructions or know-how for a task; Connector = access to an outside service; An analogy that keeps the three distinct.
6. **A**. Both points come from the Cowork and plugin docs: components can run commands locally, and connectors need a separate connect step.

</details>
<!-- QUIZ:END -->

## 5. Reflection and teach-back
1. Which checklist item almost stopped you installing, or should have?
2. What did the plugin contain that surprised you?
3. Teach it: list the five things a plugin can bundle from memory.

## Checkpoint evidence for LC-D4
- Score out of 6, average confidence, repair list.
- Your completed plugin card.
- Whether your button said **Install** or **Add**.
