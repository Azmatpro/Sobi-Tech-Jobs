# Fact-check: the infographic against official sources

Checked on **2026-11-01**. Official Anthropic pages were read directly. Community and third-party sources were used only to find questions, never as proof. Confidence levels:
- **Confirmed**: stated on an official Anthropic page.
- **Partly**: true in part, with a gap or a correction.
- **Conflict**: official pages disagree with each other.
- **Unofficial**: a community convention or third-party claim, not in official docs.
- **Not found**: I looked and found nothing.

## Claim by claim
| # | Infographic says | Verdict | What I found | Verify in app |
|---|---|---|---|---|
| 1a | Desktop app for Mac, Windows and Linux | **Partly** | Download page offers macOS, Windows x64 and Windows ARM64. Linux is **beta, Ubuntu and Debian only**; Computer Use and Dictation are not available there. The Help Center collection mentions only macOS and Windows. | Your own OS. |
| 1b | Pro is $20 per month | **Partly** | $20 per month billed monthly, or $17 per month billed annually ($200 up front). Max is $100, Ultra is $200. "Subject to change." | Price on your checkout screen. |
| 1c | Web version has limitations | **Not found** | No official page lists them. | Compare what you can do on the web and in the app. |
| 1d | (not mentioned) Cowork needs a paid plan and OS support | **Partly** | Cowork product page: "Works with a paid plan". The pricing table lists Cowork on Pro, Max and Ultra. Official Cowork docs do **not** state OS requirements. Third-party sources say macOS and Windows only. | Whether Cowork appears in your app. |
| 2a | Modes: Chat, Projects, Artifacts, Code | **Partly** | These exist, but **Cowork** is missing. Anthropic's product page also says "Claude Cowork is now just Claude", rolling out to Pro, Max and Ultra, so names may change. | Where each appears in your app. |
| 2b | Using the wrong mode gives weaker results | **Confirmed in spirit** | Official pages describe different jobs for each surface, and say Cowork "consumes limits faster than Chat". | Compare usage on Day 1. |
| 3 | Folder system with About Me, Projects, Templates, Outputs | **Unofficial** | Community convention. The official mechanism is a Cowork project (folders, instructions, links, memory) stored on your computer. | Create the project and test it. |
| 4a | About Me and Projects files give Claude your context | **Unofficial** | Works well in practice, not an Anthropic-documented feature. Cowork "doesn't read the Claude Code CLI's `~/.claude` directory", so `CLAUDE.md` is a Claude Code feature. | Ask "what do you know about me?" |
| 4b | Global Instructions setting (community guides) | **Not found** | No official Cowork page mentions it. Only per-project Instructions are documented. | Search your settings. |
| 5 | Prompt template: Goal, Context, Output format, Notes | **Confirmed in spirit** | Matches Anthropic's guidance to be clear and direct, use 3 to 5 examples and tags. The template is the infographic's own. | Run the Day 3 tests. |
| 5b | "Put documents first, up to 30% better" (third-party) | **Unofficial** | Figure appears only in a third-party summary. Not confirmed. | Test on your own tasks. |
| 6 | Let Claude ask questions | **Confirmed in spirit** | A practice, not a feature. It works through prompting. | Compare Test B and Test C on Day 3. |
| 7a | Add plugins from the plugin directory | **Confirmed, with gaps** | Cowork: **Customize, Plugins, Discover, Install**. The Plugins overview says **Add** instead of Install. Plugin contents: skills, commands, agents, hooks, connectors. | Your button label. |
| 7b | (not mentioned) risks of plugins | **Confirmed** | Agents and hooks run commands on your computer. Directory review does not cover marketplace URLs or uploaded plugins. Installing does not connect connectors. Limits: 200 MB, 5,000 files per plugin; 25 marketplaces; 500 plugins per marketplace. | Read a plugin's contents before installing. |
| 8a | Connect Drive, Gmail, Slack, GitHub, Notion | **Partly** | Google Workspace connectors (Gmail, Calendar, Drive) available to all users. GitHub: Add from GitHub in chat. **No official setup article found for Slack or Notion.** Path: **Customize, Connectors, Discover, Connect to Claude**. | Slack and Notion flows. |
| 8b | (not mentioned) permissions and safety | **Confirmed** | Per-tool **Always allow, Needs approval, Blocked**. Claude inherits your permissions in the service. Gmail send, reply, forward and Drive share, move, trash ask for approval by default. Tool access: Auto, Always available, On demand. | The tool permission screen. |
| 9a | Projects for team collaboration | **Partly** | claude.ai Projects: all plans, Free capped at five, **sharing needs Team or Enterprise** (Can view, Can edit). Cowork projects are local and cannot be shared. | Your plan's sharing options. |
| 9b | Persistent files and custom instructions | **Confirmed** | Project instructions plus knowledge files. Retrieval expands capacity up to 10 times on paid plans. | Where instructions live in your app. |
| 10a | Schedule recurring tasks | **Confirmed** | **Scheduled** sidebar, **New task**, **Create with Claude** or **Set up manually**. Frequencies: hourly, daily, weekly, on weekdays, manually. Paid plans. | Your sidebar. |
| 10b | (not mentioned) do tasks run while the computer sleeps? | **Conflict** | One part of the help article says tasks run remotely, even when the computer is asleep and the app is closed. It also says tasks needing local files or apps run locally only. A different version says the computer must be awake with the app open. | **Day 7 overnight test.** |
| 10c | (not mentioned) limits and cost of runs | **Not found** | No numeric caps documented. Each run is its own Cowork session. | Usage page after a run. |

## Learning-science claims used in the course design
| Claim | Confidence | Source |
|---|---|---|
| Spacing out retrieval beats massed retrieval for final retention (pooled g = 0.74, 29 studies) | Meta-analysis, as summarised | ACU summary and the underlying paper listing (links below) |
| No evidence that expanding intervals beat evenly spaced ones | Same sources | Same |
| Spacing can lower in-session scores while raising later retention | Same sources | Same |
| Retrieval is most useful after at least one successful recall | One source, plausible | ACU summary |

I did not read the primary papers. The course uses evenly spaced reviews because that is the defensible option under the evidence I found.

## Verify-in-app list (all of these appear as lab items)
1. Your OS, and where Chat, Projects, Cowork and Code appear (Day 1).
2. Usage cost of a Cowork run versus a chat (Day 1).
3. Whether a **Global Instructions** setting exists, and what it does (Day 2).
4. Whether the plugin button says **Install** or **Add** (Day 4).
5. Slack, Notion or GitHub connector setup steps shown in the app (Day 5).
6. Where project instructions and knowledge limits appear (Day 6).
7. Whether a scheduled 8:00 run happens with the computer asleep or the app closed (Day 7, checked Day 8).

## Sources
Official Anthropic pages:
- https://claude.com/download
- https://claude.com/pricing
- https://claude.com/product/cowork
- https://claude.com/product/overview
- https://claude.com/docs/cowork
- https://claude.com/docs/cowork/guide/projects
- https://claude.com/docs/cowork/guide/plugins
- https://claude.com/docs/plugins/overview.md
- https://claude.com/docs/plugins/platform-support.md
- https://claude.com/docs/connectors/overview.md
- https://support.claude.com/en/articles/13854387-schedule-recurring-tasks-in-cowork
- https://support.claude.com/en/articles/9517075-what-are-projects
- https://support.claude.com/en/articles/11176164-use-connectors-to-extend-claude-s-capabilities
- https://support.claude.com/en/articles/10166901-use-google-workspace-connectors
- https://support.claude.com/en/articles/10167454-use-the-github-integration
- https://support.claude.com/en/articles/13730515-manage-claude-s-tool-access
- https://platform.claude.com/docs/build-with-claude/prompt-engineering/multishot-prompting

Not read in full, but linked from the pages above, so worth reading yourself:
- https://support.claude.com/en/articles/9519177-how-can-i-create-and-manage-projects
- https://support.claude.com/en/articles/13455879-use-claude-cowork-on-team-and-enterprise-plans

Learning science (secondary summaries):
- https://inspire.acu.edu.au/articles/spaced-practice
- https://par.nsf.gov/biblio/10346973

Community and third-party (used to find questions, not as evidence):
- https://ruben.substack.com/p/claude-cowork
- https://mehmetbaykar.com/posts/how-to-set-up-claude-cowork-for-better-answers/
- https://ai.zenken.co.jp/en/post/claude-cowork-howto/
- https://theaicareerlab.com/blog/claude-plugins-explained-marketplace-2026

## Limits of this check
- Several official pages were summarised by a fetch tool rather than read verbatim, and some were cut off. Where a page was partly summarised, the claim is marked accordingly or left as "verify in app".
- I could not confirm OS requirements for Cowork, the Global Instructions path, the Projects creation path, or usage cost of scheduled runs.
- Products and labels in this area change quickly. This document is dated for that reason.
