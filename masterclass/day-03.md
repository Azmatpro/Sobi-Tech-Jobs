# Day 3: Prompt template and Claude's questions

**Infographic steps 5 and 6 · 60 minutes · Analogy: an order card and a doctor's intake form**

## What you will have by the end
- A saved prompt template you can reuse in seconds.
- Three scored results (vague prompt, templated prompt, interview-me prompt) that prove which habit pays off.
- A rule for when to let Claude ask questions, and when to stop it.

## Your 60 minutes
| Minutes | Block |
|---|---|
| 0 to 10 | Warm-up: retrieve Day 2 |
| 10 to 25 | Concept and analogy |
| 25 to 50 | Lab |
| 50 to 60 | Quiz, confidence ratings, reflection |

## 1. Warm-up (10 min)
<!-- WARMUP:START -->
Retrieve first, look things up second. Cards come from Day 2 (spaced 1, 3, 6 days back). Answer from memory, then check. Add any card you miss to your repair list.

**1. What does an official Cowork project bundle together?** _(from Day 2)_

- A. Local folders, standing instructions, useful links and a project memory
- B. A cloud copy of your files shared with a team
- C. Only a list of favourite prompts
- D. A plugin and a connector

**2. A new job lead arrives every week. Which file do you update so Claude always knows the active leads?** _(from Day 2)_

- A. about-me.md
- B. projects.md
- C. A file in Outputs
- D. The prompt template

<details>
<summary>Warm-up answers</summary>

1. **A**. The Cowork docs describe a project as the local folders to read and write, standing instructions, useful links and a dedicated memory store.
2. **B**. The Projects file is the binder of current work. About Me changes slowly, Outputs holds results, and the template holds how you ask.

</details>
<!-- WARMUP:END -->

## 2. Concept (15 min)

### The analogy
Telling a restaurant "surprise me" gets a surprise. Handing over an order card (the dish, the allergies, the timing) gets lunch. That card is your prompt template.

A good doctor does not prescribe the moment you walk in. An intake form and a few questions come first, so the prescription fits. Asking Claude to interview you is the intake form.

### Step 5: the template
The infographic's template has four fields: **Goal, Context, Output format, Notes.** That is a solid start. Anthropic's prompting guidance adds three habits worth keeping:
1. **Be clear and direct.** This is the first technique in Anthropic's guide. A handy check, which I only found in third-party summaries of that guidance: would a smart colleague with no background understand what you want? If not, Claude may struggle too.
2. **Show 3 to 5 examples** when format or style matters, and wrap them in tags so they are not mistaken for instructions.
3. **Use tags** such as `<job_description>` and `<resume>` to separate instructions, context, examples and inputs.

### Step 6: let Claude ask
Use the **interview-me pattern**: ask for a small, capped round of questions before the work starts.
```
Before you start, ask me up to 5 numbered questions. Wait for my answers, then do the task.
```
Rules of thumb:
- **Cap it.** Five questions, one round. Endless questioning is its own failure.
- **Use it when the request is ambiguous or high-stakes** (interview prep, applications). Skip it for quick facts.
- **Ask Claude what it is unsure about.** It is a cheap way to find weak spots.
- **Check sources yourself.** Claude can be confidently wrong. For facts that matter, ask where in your files it came from and verify.

### What the research says about the "ordering" claim
You will see claims such as "put long documents first and the question last for up to 30% better results". I found that figure only in a third-party summary and could not confirm it in Anthropic's docs. Test ordering on your own tasks if you care. Do not treat the number as fact.

## 3. Lab (25 min)
<!-- LAB:START -->
Tick each box as you go. Items marked **verify in app** are claims I could not confirm from official pages, so you are the tester. Write the result in your notes.

- [ ] Create Templates/prompt-template.md from the template in day-03.md.
- [ ] Test A: type Help me with my resume. Save the answer.
- [ ] Test B: use the template to rewrite one resume bullet, with a <job_description> and a <resume> tag. Save the answer.
- [ ] Test C: ask Before you create anything, ask me up to 5 questions, then plan my prep for a 45-minute Oracle Exadata technical interview. Answer them and save the plan.
- [ ] Score A, B and C from 1 to 5 on relevance, specificity, format and edits needed.
- [ ] Save the template as a text shortcut (Mac: Text Replacements; Windows: keep the file and paste, or use a text-expander app).
- [ ] Write one sentence on what changed the results most.
<!-- LAB:END -->

### `Templates/prompt-template.md`
```
<goal>One sentence: what I want.</goal>

<context>Who I am, who the output is for, and the background that matters.</context>

<inputs>
  <job_description>paste here</job_description>
  <resume>paste here</resume>
</inputs>

<output_format>Format, length and tone. For example: 5 bullets, under 20 words each, plain language.</output_format>

<constraints>Do: ... Do not: ...</constraints>

<examples>
  <example>Optional. 3 to 5 diverse ones if style matters.</example>
</examples>

<success_criteria>How I will judge the result.</success_criteria>

<notes>Anything else.</notes>
```
Quick one-line version from the infographic: `Goal: ... | Context: ... | Output format: ... | Notes: ...`

### The three tests
- **A, vague:** `Help me with my resume.`
- **B, templated:** fill the template to rewrite one resume bullet for a specific job description.
- **C, interview-me:** `Before you create anything, ask me up to 5 questions, then plan my prep for a 45-minute Oracle Exadata technical interview.` Answer the questions, then read the plan.

Remove names, employers and private details from anything you paste.

### Score sheet (1 to 5)
| Test | Relevance | Specificity | Format fit | Edits needed (5 = none) | Total /20 |
|---|---|---|---|---|---|
| A | | | | | |
| B | | | | | |
| C | | | | | |

### Saving the shortcut
- **Mac:** System Settings, Keyboard, Text Replacements. Map something like `;prompt` to the template.
- **Windows:** there is no built-in system-wide equivalent that I could confirm, so keep `Templates/prompt-template.md` and paste it, or use a text-expander app.

## 4. Quiz (10 min)
<!-- QUIZ:START -->
Pass mark: 5 of 6. Rate your confidence from 1 to 5 **before** you check each answer.

**1. Which four fields does the infographic's prompt template use?** _(recall, id d3q1)_

- A. Goal, Context, Output format, Notes
- B. Role, Tone, Length, Language
- C. Question, Answer, Source, Date
- D. Input, Process, Output, Review

**2. How many examples does Anthropic's prompting guidance suggest including for best results?** _(recall, id d3q2)_

- A. Exactly one
- B. About 3 to 5 diverse examples, wrapped in tags
- C. At least 50
- D. None, because examples reduce quality

**3. You paste a job description, your resume and instructions into one prompt. What helps Claude keep them apart?** _(application, id d3q3)_

- A. Run them together in one long paragraph
- B. Wrap each piece in its own tags, such as <job_description> and <resume>
- C. Write the instructions in capital letters
- D. Paste each in a different chat

**4. You type 'Prepare me for my interview next week.' What is the best next move for a useful result?** _(application, id d3q4)_

- A. Regenerate until it looks good
- B. Add 'be better' to the prompt
- C. Ask Claude to ask you up to five questions first, then produce the plan
- D. Switch to a different surface

**5. Use an analogy to explain why letting Claude ask you questions improves results, and name one risk of overdoing it.** _(explain, id d3q5)_

_Write your own answer first. Then compare it with the model answer and self-grade: Got it = 1, Partly = 0.5, Missed = 0._

**6. A blog claims: 'Put long documents first and instructions last. It improves quality by up to 30%, always.' What is the best response?** _(spot, id d3q6)_

- A. Treat the number as unverified and test the ordering on your own tasks
- B. Accept it as an official Anthropic rule
- C. Reject all advice about ordering
- D. Apply it to every prompt without testing

<details>
<summary>Answer key (open after you have answered all six)</summary>

1. **A**. The template on the infographic reads Goal, Context, Output format, Notes. Day 3 adds constraints, examples and success criteria.
2. **B**. Anthropic's multishot guidance recommends 3 to 5 examples for best results, wrapped in example tags so Claude can tell them from instructions.
3. **B**. Anthropic's guidance says tags help Claude parse prompts that mix instructions, context, examples and variable input.
4. **C**. A short, capped round of clarifying questions fills the gaps in your request. Cap the number so it does not turn into an interrogation.
5. **Model answer.** It is like a doctor's intake form: the doctor asks about symptoms and allergies before prescribing, so the prescription fits. Claude's questions fill gaps in my request, so the first draft fits. The risk is endless questioning that wastes time, so I cap it at a few questions in one round.
   - Rubric: Analogy fits the idea of gathering information first; Says questions fill gaps and improve fit; Names a risk, such as too many rounds, delay or fatigue; Says how to limit it, for example a cap on questions.
6. **A**. The 30% figure came from a third-party summary and I could not confirm it in Anthropic's docs. Test it on your own work before relying on it.

</details>
<!-- QUIZ:END -->

## 5. Reflection and teach-back
1. Which field of the template changed the result most?
2. Did Claude's questions surface something you had not thought of?
3. Teach it: write the interview-me sentence from memory.

## Checkpoint evidence for LC-D3
- Score out of 6, average confidence, repair list.
- Your completed score sheet (A, B, C).
- The saved template path or shortcut.
