# CLAUDE.md — Work Checkpoints

## Task: Vitals follow-up log (Heart & Vascular Specialists)
Digital version of the paper sheet: Date | Time | Weight | BP | Pulse | Comments, filled morning & evening.

### Checkpoints
- [x] 1. Plan created and approved (plan mode).
- [x] 2. CLAUDE.md created.
- [x] 3. Artifact page written (`vitals-log.html`).
- [x] 4. Verified with Playwright at 400px: saved AM/PM entries, reload persistence, today status slots, no horizontal overflow, no JS errors. (Print/CSV not included: the artifact frame blocks printing and downloads, so "Copy for the doctor" is used instead.)
- [x] 6. Added "Paper view" (sheet layout, 20+ rows, print CSS, Back button); tested at 400px.
- [x] 7. Sync: entries and patient info stored in per-user db (data/users/<id>/log) so in-app and browser views match; localStorage kept as fallback. Paper view columns tightened (short dates, no wrapping).
- [x] 5. Published: https://claude.ai/artifact/UK8XgvuDr545cLrQjaZk7g (private; share from the page's Share menu if needed).
