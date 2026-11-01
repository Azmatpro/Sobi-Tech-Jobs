# Day 6: Projects

**Infographic step 9 · 60 minutes · Analogy: a dedicated desk and binder**

## What you will have by the end
- A claude.ai Project called Job Search HQ with instructions and knowledge files.
- Three chats that reuse your files without re-pasting.
- A clear table that separates a Cowork project from a claude.ai Project, and a note on what changes on a Team plan.

## Your 60 minutes
| Minutes | Block |
|---|---|
| 0 to 10 | Warm-up: retrieve Days 5 and 3 |
| 10 to 25 | Concept and analogy |
| 25 to 50 | Lab |
| 50 to 60 | Quiz, confidence ratings, reflection |

## 1. Warm-up (10 min)
<!-- WARMUP:START -->
Retrieve first, look things up second. Cards come from Day 5, Day 3 (spaced 1, 3, 6 days back). Answer from memory, then check. Add any card you miss to your repair list.

**1. In the desktop app, where do you add a connector?** _(from Day 5)_

- A. Customize, then Connectors, then Discover
- B. Settings, then Billing
- C. The Artifacts panel
- D. Only from a terminal

**2. You want Claude to find recruiter emails but never send anything. Which setup fits?** _(from Day 5)_

- A. Always allow every tool
- B. Give it your password
- C. Allow the read tools and set send, reply and forward to Needs approval or Blocked
- D. Disable the connector and paste emails by hand every time

**3. Which four fields does the infographic's prompt template use?** _(from Day 3)_

- A. Goal, Context, Output format, Notes
- B. Role, Tone, Length, Language
- C. Question, Answer, Source, Date
- D. Input, Process, Output, Review

**4. You paste a job description, your resume and instructions into one prompt. What helps Claude keep them apart?** _(from Day 3)_

- A. Run them together in one long paragraph
- B. Wrap each piece in its own tags, such as <job_description> and <resume>
- C. Write the instructions in capital letters
- D. Paste each in a different chat

<details>
<summary>Warm-up answers</summary>

1. **A**. Both the Cowork overview and the connectors page send you to Customize, then Connectors. Menu labels move, so confirm in your app.
2. **C**. Least privilege: allow what the task needs, gate actions that leave your account. By default Anthropic already asks before Gmail send, reply and forward.
3. **A**. The template on the infographic reads Goal, Context, Output format, Notes. Day 3 adds constraints, examples and success criteria.
4. **B**. Anthropic's guidance says tags help Claude parse prompts that mix instructions, context, examples and variable input.

</details>
<!-- WARMUP:END -->

## 2. Concept (15 min)

### The analogy
- A **claude.ai Project** is your desk with a binder that stays open. Every chat at that desk can see the same instructions and files. It lives in your account.
- A **Cowork project** is a binder in your own filing cabinet at home. It is tied to folders on your computer and is not shared (Day 2).
- A **shared Team Project** is a meeting room with a whiteboard everyone can read.

On Pro you have the desk and the cabinet. You do not have the meeting room.

### Two things, one name
| | claude.ai Project | Cowork project |
|---|---|---|
| Lives | In your Claude account | On your computer |
| Holds | Project instructions and knowledge files, with chats grouped inside | Local folders, instructions, links, project memory |
| Can act on your files | No, it reads the knowledge you upload | Yes, in the attached folders |
| Sharing | **Team and Enterprise only**, with Can view or Can edit | **Not shared** |
| Plans | All plans, Free is capped at **five** projects | Paid plan for Cowork |
| Official page | support.claude.com/en/articles/9517075 | claude.com/docs/cowork/guide/projects |

More official details:
- On paid plans, retrieval can expand project knowledge capacity by up to 10 times as it nears its limit.
- A claude.ai Project can be linked into a Cowork project, which does not merge them.
- A new version of Projects is rolling out, starting with Claude Code, and chat and Cowork are to follow. Your app may differ.
- In Claude Code, "Projects" groups coding sessions. That is a third meaning.

### What the infographic gets wrong for you
Step 9 says Projects are "perfect for team collaboration". Sharing a Project needs **Team or Enterprise**. You are on Pro, so the honest lesson is the solo workflow, plus an understanding of what changes when a team shares.

### What changes on a Team plan
- Sharing by individual email, in bulk or organization-wide, with **Can view** or **Can edit**, plus a **Shared with me** tab.
- Members see the same instructions and knowledge files. Do not upload anything you would not want colleagues to read.
- Owners can turn off Share projects. On Enterprise, sharing can be switched off for specific roles.
- Third-party guides say individual chats stay private unless shared. I could not confirm that in the help center, so verify before relying on it.

## 3. Lab (25 min)
<!-- LAB:START -->
Tick each box as you go. Items marked **verify in app** are claims I could not confirm from official pages, so you are the tester. Write the result in your notes.

- [ ] Create a claude.ai Project named Job Search HQ from the Projects area of the sidebar.
- [ ] Paste the starter instructions from day-06.md.
- [ ] Add knowledge files: a sanitized resume, one or two target job descriptions, and masterclass/samples/exadata-prep-notes.md.
- [ ] Run three chats inside it: a mock interview on Smart Scan, a resume bullet rewrite, and a 30-60-90 plan. Check that you never re-paste your files.
- [ ] Fill the comparison table in day-06.md: Cowork project versus claude.ai Project.
- [ ] Read the What changes on a Team plan section and write two lines on how your workflow would change.
- [ ] Find where this app shows project instructions and knowledge limits. **(verify in app)**
- [ ] Privacy check: remove any uploaded file you would not want stored in your account.
<!-- LAB:END -->

### Starter instructions for Job Search HQ
```
You are my interview coach for tech roles, focused on Oracle Exadata administration.
Use the files in this project as the source of truth. When you rely on a file, say which one.
If something is not in the files, say so instead of guessing.
For mock interviews: ask one question at a time, wait for my answer, then give a short score and one improvement.
For resume work: never invent experience, employers or numbers.
Ask me up to 5 questions first if my request is ambiguous.
```
Change the role to match your target.

### Knowledge files to add
1. A sanitized copy of your resume (no phone number, address or ID numbers).
2. One or two target job descriptions.
3. `masterclass/samples/exadata-prep-notes.md`, taken from this repo's Oracle Exadata sheet. Check it against Oracle's documentation before an interview.

### Three chats to run inside the Project
1. `Run a mock interview on Smart Scan. One question at a time.`
2. `Rewrite my strongest resume bullet for the first job description.`
3. `Build me a 30-60-90 day plan for this role from my files.`

You pass the test if you never had to paste a file again.

### Fill in your own comparison
| Question | My answer |
|---|---|
| Which one would I use for editing files on my laptop? | |
| Which one for reusable interview material I want in every chat? | |
| Which one can my future team share? | |
| What would I put in each for my job search? | |

## 4. Quiz (10 min)
<!-- QUIZ:START -->
Pass mark: 5 of 6. Rate your confidence from 1 to 5 **before** you check each answer.

**1. What do you need in order to share a claude.ai Project with colleagues?** _(recall, id d6q1)_

- A. A Team or Enterprise plan
- B. A Pro plan
- C. Any plan, including Free
- D. A plugin

**2. How many Projects can a Free-plan user create?** _(recall, id d6q2)_

- A. One
- B. Three
- C. Up to five
- D. Unlimited

**3. You want Claude to work on files in a folder on your laptop, with standing instructions every session. Which kind of project fits?** _(application, id d6q3)_

- A. A Cowork project
- B. A claude.ai Project's knowledge base
- C. A shared Team Project
- D. An Artifact

**4. On Pro, you want to practise interview questions against your resume and a job description without re-pasting them each chat. What is the best setup?** _(application, id d6q4)_

- A. Ten separate chats
- B. A claude.ai Project with instructions and knowledge files
- C. A scheduled task
- D. A plugin

**5. Using an analogy, explain the two kinds of Projects, and name one thing that changes when a team shares a claude.ai Project.** _(explain, id d6q5)_

_Write your own answer first. Then compare it with the model answer and self-grade: Got it = 1, Partly = 0.5, Missed = 0._

**6. Step 9 of the infographic says Projects are perfect for team collaboration. What is the accurate version for someone on Pro?** _(spot, id d6q6)_

- A. Pro can share Projects with anyone by link
- B. Cowork projects sync to the cloud for teammates
- C. Sharing needs Team or Enterprise, Cowork projects are local and unshared, so on Pro you use Projects solo
- D. Projects only exist on Team plans

<details>
<summary>Answer key (open after you have answered all six)</summary>

1. **A**. The Projects help article says sharing is for Team and Enterprise, with permission levels Can view and Can edit.
2. **C**. Help center: 'Free users can create a maximum of five projects.'
3. **A**. Cowork projects attach local folders and instructions and keep a project memory on your computer.
4. **B**. A Project keeps instructions and knowledge in one place that every chat in it can use.
5. **Model answer.** A claude.ai Project is a desk with a binder open on it: instructions and files every chat at the desk can see, stored in my account. A Cowork project is a binder in my own filing cabinet at home, tied to folders on my computer and not shared. When a team shares a claude.ai Project it becomes a meeting room with a shared whiteboard: members see the same instructions and knowledge, with Can view or Can edit rights.
   - Rubric: Distinguishes account-based Projects from local Cowork projects; Says what each holds (instructions, knowledge, folders, memory); Names one team change: shared knowledge, permission levels, or who can edit; Uses an analogy.
6. **C**. Help center: sharing is Team and Enterprise only. Cowork docs: projects are not synced or shared. Projects themselves exist on every plan.

</details>
<!-- QUIZ:END -->

## 5. Reflection and teach-back
1. What did you upload that you should remove?
2. How would your Job Search HQ look if five teammates used it?
3. Teach it: explain the two kinds of Projects to someone in 60 seconds.

## Checkpoint evidence for LC-D6
- Score out of 6, average confidence, repair list.
- The Project's name and the list of files you added.
- Your answers to the comparison table.
- Where your app shows project instructions and knowledge limits.
