# Day 2: Your folder system and core files

**Infographic steps 3 and 4 · 60 minutes · Analogy: onboarding a new hire**

## What you will have by the end
- A `Claude-Cowork` workspace with four subfolders.
- An About Me file and a Projects file that tell Claude who you are and what is active.
- A Cowork project that uses them, tested with a question you did not have to explain.

## Your 60 minutes
| Minutes | Block |
|---|---|
| 0 to 10 | Warm-up: retrieve Day 1 |
| 10 to 25 | Concept and analogy |
| 25 to 50 | Lab |
| 50 to 60 | Quiz, confidence ratings, reflection |

## 1. Warm-up (10 min)
<!-- WARMUP:START -->
Retrieve first, look things up second. Cards come from Day 1 (spaced 1, 3, 6 days back). Answer from memory, then check. Add any card you miss to your repair list.

**1. Which Claude surface works directly on files and tools on your computer and carries out multi-step tasks from a goal you give it?** _(from Day 1)_

- A. Chat, with no connectors
- B. Cowork
- C. An Artifact
- D. A claude.ai Project's knowledge base

**2. You want a one-page interview cheat sheet that you can read and edit beside the conversation. What fits best?** _(from Day 1)_

- A. Ask in Chat and let Claude produce it as an Artifact
- B. Set up a scheduled task
- C. Install a plugin first
- D. Open Claude Code in a terminal

<details>
<summary>Warm-up answers</summary>

1. **B**. Cowork 'works directly on your computer' and uses the same agentic architecture as Claude Code (Cowork docs). Chat replies in conversation, an Artifact is an output, and Project knowledge is reference material.
2. **A**. Anthropic describes an artifact as 'anything Claude makes for you' that opens beside your conversation: a doc, deck, dashboard or small tool.

</details>
<!-- WARMUP:END -->

## 2. Concept (15 min)

### The analogy: the first day at a new job
A new hire who arrives with no handbook asks you the same questions every morning. Give them a handbook (who you are, how you like work done) and a project binder (what is active, what is due), and they start useful. Claude without context is that new hire, every single chat. Context files are the handbook and the binder.

### Official versus convention (this matters)
| Idea | Status | Source |
|---|---|---|
| A **Cowork project**: local folders, standing instructions, links and a project memory | **Official** | claude.com/docs/cowork/guide/projects |
| Projects live **on your computer**, not synced to the cloud or shared | **Official** | same page |
| The four-folder layout (About Me, Projects, Templates, Outputs) | **Community convention** | Not in Anthropic's docs. Useful because it is simple. |
| About Me and Projects as named files | **Community convention** | Same. |
| A Settings screen called "Global Instructions" | **Not found in official docs** | Community guides mention it. You will verify it in the lab. |
| `CLAUDE.md` | A **Claude Code** convention. The Cowork overview says Cowork "doesn't read the Claude Code CLI's `~/.claude` directory". | claude.com/docs/cowork |

So: the layout below is good practice, not a feature. The official part is the Cowork project that points at it.

### What goes where
- **About-Me/**: stable facts. Goals, background, skills, tone, rules. Changes rarely.
- **Projects/**: live work. Active applications, deadlines, status. Update weekly.
- **Templates/**: forms you reuse. The Day 3 prompt template lives here.
- **Outputs/**: everything Claude creates. Keeps results out of your source files.

### Privacy
Claude reads the files in a folder you attach. Do not put passwords, government ID numbers, bank details or anything you would not paste into a chat.

## 3. Lab (25 min)
<!-- LAB:START -->
Tick each box as you go. Items marked **verify in app** are claims I could not confirm from official pages, so you are the tester. Write the result in your notes.

- [ ] Create a Claude-Cowork folder with four subfolders: About-Me, Projects, Templates, Outputs.
- [ ] Write About-Me/about-me.md from the skeleton in day-02.md. Leave out passwords, ID numbers and bank details.
- [ ] Write Projects/projects.md with your active job-search items, deadlines and status.
- [ ] In Cowork open Projects, press +, choose Use an existing folder and pick Claude-Cowork.
- [ ] Paste the starter instructions from day-02.md into the project's Instructions.
- [ ] Test it: ask Based on my context files, what are my top three priorities this week?
- [ ] Audit it: ask What do you know about me? and fix any gaps in your files.
- [ ] Search the app's settings for Global Instructions. Record whether it exists, where, and what it does. **(verify in app)**
- [ ] Set a weekly five-minute reminder to update projects.md.
<!-- LAB:END -->

### Make the folders
**Mac or Linux (Terminal):**
```
mkdir -p ~/Claude-Cowork/{About-Me,Projects,Templates,Outputs}
```
**Windows (PowerShell):**
```
New-Item -ItemType Directory -Force -Path "$HOME\Claude-Cowork\About-Me","$HOME\Claude-Cowork\Projects","$HOME\Claude-Cowork\Templates","$HOME\Claude-Cowork\Outputs"
```
Or create them in Finder or File Explorer. Same result.

### `About-Me/about-me.md` skeleton
```
# About Me

## Goal for the next 90 days
- Target roles: (for example, Oracle Exadata administrator)
- Where: (cities, remote, visa notes)
- Deadline: (date)

## Background
- Years of experience and the main systems I have worked on
- Three projects I am proud of, one line each

## Skills
- Strong: 
- Learning: 

## How I like you to work
- Tone: direct and concise
- Format: short paragraphs and bullets
- Ask me questions when a request is ambiguous
- Tell me what you are unsure about

## Never
- Invent experience, employers or numbers I did not give you
```

### `Projects/projects.md` skeleton
```
# Active projects

## Job search 2026
- Status: 
- Applications in flight (company, role, stage, next step, date):
- Interview prep topics (link to the Exadata prep sheet in this repo):
- This week's top three:
```

### Starter instructions for the Cowork project
Paste into the project's Instructions field:
```
Before any task, read About-Me/about-me.md and Projects/projects.md.
Save everything you create in Outputs/ with a dated file name.
If a request is ambiguous, ask me up to 5 questions first.
Never delete or overwrite a file without asking me.
Never invent experience, employers or numbers. If you need a fact, ask.
Tell me what you are unsure about.
```

### Creating the project
In Cowork open **Projects** in the left navigation, press **+**, then choose **Use an existing folder** and pick `Claude-Cowork`. Name it and paste the instructions. Menu labels may differ slightly in your version. The docs do not say where instructions are edited afterwards, so note where you find it.

### Test and audit
1. Ask: *Based on my context files, what are my top three priorities this week?* A good answer uses your files without you explaining anything.
2. Ask: *What do you know about me and my current projects?* Anything missing or wrong means a file needs an edit.

## 4. Quiz (10 min)
<!-- QUIZ:START -->
Pass mark: 5 of 6. Rate your confidence from 1 to 5 **before** you check each answer.

**1. What does an official Cowork project bundle together?** _(recall, id d2q1)_

- A. Local folders, standing instructions, useful links and a project memory
- B. A cloud copy of your files shared with a team
- C. Only a list of favourite prompts
- D. A plugin and a connector

**2. Where do Cowork projects live?** _(recall, id d2q2)_

- A. In your account on Anthropic's servers, shareable on any plan
- B. Inside each connector
- C. On your computer; they are not synced to the cloud or shared
- D. Only in the browser's local storage

**3. A new job lead arrives every week. Which file do you update so Claude always knows the active leads?** _(application, id d2q3)_

- A. about-me.md
- B. projects.md
- C. A file in Outputs
- D. The prompt template

**4. Which of these should NOT go into your About Me file?** _(application, id d2q4)_

- A. Target roles and skills
- B. Preferred writing tone
- C. How you like answers formatted
- D. Passwords and government ID numbers

**5. Using an analogy, explain why two context files beat re-typing your background in every chat, and say what goes in each file.** _(explain, id d2q5)_

_Write your own answer first. Then compare it with the model answer and self-grade: Got it = 1, Partly = 0.5, Missed = 0._

**6. The infographic presents About Me and Projects files as if they were a built-in Claude feature. What is the most accurate correction?** _(spot, id d2q6)_

- A. They are required for Cowork to start
- B. They are a community convention; the documented mechanism is a Cowork project with folders, instructions and memory
- C. Claude reads them automatically from your ~/.claude folder
- D. They only work on Team plans

<details>
<summary>Answer key (open after you have answered all six)</summary>

1. **A**. The Cowork docs describe a project as the local folders to read and write, standing instructions, useful links and a dedicated memory store.
2. **C**. Cowork docs: 'Projects live on your computer. They aren't synced to the cloud or shared with other people.' claude.ai Projects are the account-based, shareable kind.
3. **B**. The Projects file is the binder of current work. About Me changes slowly, Outputs holds results, and the template holds how you ask.
4. **D**. Claude reads the files it can reach. Keep secrets and identity numbers out, and include only what helps Claude do better work.
5. **Model answer.** A new hire with a handbook and a project binder does not need briefing every morning. About Me is the handbook: my background, goals, tone and what to avoid. Projects is the binder: active work, status and deadlines. Claude reads them first, so I can ask short questions and get tailored answers. I refresh the binder weekly.
   - Rubric: Gives an analogy that fits; About Me holds stable background, goals and preferences; Projects holds current work, status and deadlines; Says why it saves effort or improves accuracy.
6. **B**. The official Cowork pages describe projects (folders, instructions, memory) and say Cowork 'doesn't read the Claude Code CLI's ~/.claude directory'. The About Me layout is community practice.

</details>
<!-- QUIZ:END -->

## 5. Reflection and teach-back
1. Which file saved you the most typing today?
2. What did the audit question reveal you had never written down?
3. Teach it: explain to a friend why you keep two files and not one.

## Checkpoint evidence for LC-D2
- Score out of 6, average confidence, repair list.
- Screenshot or listing of `Claude-Cowork/` with its four subfolders.
- The answer Claude gave to the priorities question.
- Your result for the **Global Instructions** verification: exists or not, where, what it does.
