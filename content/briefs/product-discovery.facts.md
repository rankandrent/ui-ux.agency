# Fact-check: product-discovery

## Loop 2 re-check (2026-10-15)

I re-read the current `content/blog/product-discovery.md` in full. I did not edit the post. The base rule for this agent is "do not edit the post", and the only file tool available writes the whole file, so the two fixes below are left for the orchestrator to apply.

### F items in the current text

| F | Where now | Status |
|---|---|---|
| F1 | line 32 | Applied by QA ("One kill, one parked idea and one narrow build… set two ideas aside on paper"). The log has 1 killed and 1 parked, so "two ideas" set aside is consistent. TRUE |
| F2 | line 34 | Applied. The list order was changed to match the post's H2 order. Workshop ranking criteria match the hub. TRUE |
| F3 | line 20 | Applied word for word. TRUE |
| F4 | line 21 | QA wording: "an exit gate of 8 checks, plus 4 for AI". Matches the gate (3+2+1+2 = 8, AI lane = 4). TRUE |
| F5 | line 124 | Applied. TRUE |
| F6 | line 138 | Applied. Link goes to the continuous-discovery glossary page. TRUE |
| F7 | line 148 | Applied. TRUE |
| F8 | line 152 | Applied. TRUE |
| F9 | line 156 | Applied word for word, but **my own F9 wording is WRONG** (see N1) |
| F10 | line 166 | Applied. Matches design-sprint.json rows "Length" and "User contact". TRUE |
| F11 | line 176 | Applied. TRUE |
| F12 | line 194 | Applied. TRUE |
| F13 | line 198 | Applied. Matches NIST AI 100-1 wording ("sufficient contextual knowledge about AI system impacts to inform an initial go/no-go decision"). TRUE |
| F14 | line 200 | Applied. TRUE |
| F15 | line 220 | Applied. Matches the hub's "Use case ranking" step and FAQ "Who from our team should join?". TRUE |
| F16 | line 226 | Applied. Matches NN/g "Discoveries in Industry Revealed" ("unless users are easy to access and the problem space is relatively small, two weeks is too short"). TRUE |
| F17 | line 268 | Applied. Matches digno.md:37 exactly. TRUE |
| F18 | line 274 | Applied by QA ("plus 4 for an AI feature"). TRUE |
| F19 | line 291 | Applied. TRUE |
| F20 | line 309 | Applied ("about 2 hours a day", hub FAQ). TRUE |
| F21 | line 331 | Applied word for word, but **my own F21 wording is WRONG** (see N2) |

### New and changed sentences

| # | Line | Claim | Verdict | Source |
|---|---|---|---|---|
| N1 | 156 | Bold: "In our services, a timeboxed discovery phase runs from a 5-day sprint to 3–6 weeks and hands over to continuous discovery once the team ships weekly." | WRONG (my loop-1 F9 wording). No service we sell runs a 3–6 week discovery phase. Our discovery steps are design sprint 5 days, MVP discovery sprint 1 week, product design agency discovery 1–3 weeks and the AI workshop 1–2 weeks. The 3–6 weeks is the design sprint page's description of a *full discovery phase* in a comparison table, not one of our services. "In our services… hands over to continuous discovery" also claims a handover step no hub states | design-sprint.json:64–73; product-design-agency.json:81; mvp-design-agency.json:80; ai-product-discovery-workshop.json:40, :86 |
| N2 | 331 | FAQ: "In our own services, a timeboxed phase runs from 5 days for a design sprint on one question to 3–6 weeks for a whole product area…" | WRONG (my loop-1 F21 wording), same reason as N1 | same |
| N3 | 152 | "A tool such as Jira Product Discovery can hold that board's ideas and scores, but the tool does not run the discovery." | TRUE. JPD captures ideas and scores them with rating and formula fields (weighted score, write-your-own) | https://www.atlassian.com/software/jira/product-discovery/guides/fields/overview ; https://www.atlassian.com/software/jira/product-discovery |
| N4 | 164 | "Continuous discovery alone fits a live product whose trio already spends 30 minutes with customers every week." | TRUE as the author's advice (30 minutes is his own slot, lines 148 and 168). Optional: "already talks with customers every week" would avoid reading 30 minutes as a threshold | — |
| N5 | 46 | Continuous discovery: "a weekly habit of the team that builds the product" | TRUE (Torres: weekly touch points by the team building the product) | producttalk.org continuous-discovery glossary |
| N6 | 194, 198 | Cost-of-wrong-answer example: a missed urgent leak harms the tenant, so staff confirm or change every suggested urgency; evaluation favors recall | TRUE. Hypothetical, consistent with the opening log (line 30) and the example grid (lines 261–262) | post |
| N7 | 226 | NN/g caveat | TRUE (see F16) | https://www.nngroup.com/articles/discoveries-in-industry-revealed/ |
| N8 | 268 | Digno: requirements from stakeholders and end users to pin down the scoring formula; brief = one plain score for managers and staff | TRUE | content/case-studies/digno.md:37, :41 |
| N9 | 166 | Design sprint: one question in 5 days; full discovery phase at 3–6 weeks with 10–20 interviews plus a data review, attributed to "our design sprint page"; AI workshop 1 to 2 weeks | TRUE (correctly attributed to the page) | design-sprint.json:66–72; ai-product-discovery-workshop.json:86 |
| N10 | 240, 311 | 4 to 6 users, 5-user test, about 2 hours a day, 5 deliverables, $8,000–$20,000 | TRUE | ai-product-discovery-workshop.json:42, :86, :95 |
| N11 | 4, 21, 274, 276, 286, 319 | "8-check exit gate", "plus 4 for AI", AI lane only when the feature uses a model; checklist items 1–8 in four risk lanes, 9–12 AI only | TRUE. Value 3 + usability 2 + feasibility 1 + viability 2 = 8; AI lane 4; SVG caption "12 checks in four risk lanes and one AI lane" is consistent | post lines 282–286 |

### Fixes (exact replacements)

**N1, line 156, bold answer** (27 words; "several weeks" is the design sprint page's own wording at design-sprint.json:66):
> **A timeboxed discovery phase runs from a 5-day sprint on one question to several weeks for a whole product area, then hands over to continuous discovery.**

**N2, line 331, second sentence:**
> A timeboxed phase runs from a 5-day design sprint on one question to several weeks for a whole product area, and our AI discovery workshop takes 1 to 2 weeks.

**Optional, line 164:**
> Continuous discovery alone fits a live product whose trio already talks with customers every week.

VERDICT (loop 2): FAIL (N1 and N2 only; everything else passes)

---

## Loop 1 (2026-10-15)

Post: `content/blog/product-discovery.md` (draft, 2026-10-15). SVGs checked (text nodes extracted): cover, product-discovery-four-risks, product-discovery-process-stages, product-discovery-dual-track, ai-feature-discovery-checks, two-week-product-discovery-plan, product-discovery-checklist.

Method: WebFetch returned `ENOTFOUND` for every host (gartner.com, rand.org, svpg.com, producttalk.org). I verified with domain-limited WebSearch (and exact-phrase searches), which returned the exact cited URLs with supporting snippets (learnings 18 and 37). Site facts come from `content/services/ai-product-discovery-workshop.json`, `content/services/design-sprint.json`, `content/home.ts` and `content/case-studies/{digno,vocable}.md`.

"1,203" check: the figure appears nowhere in the post or the SVGs (grep: no match). The 80% RAND and 84% figures are also absent. Do-not-use list: respected.

### Claims (loop-1 line numbers)

| # | Line | Claim | Verdict | Source |
|---|---|---|---|---|
| 1 | 26–30 | Hypothetical kill log (auto-replies killed, lease summaries parked, triage build) | TRUE (labeled "Say…") | post |
| 2 | 32 | "Two kills and one narrow build" | WRONG (internal): the log has 1 kill, 1 parked, 1 build | post lines 28–30 |
| 3 | 32 | "kill two ideas in the first 5 days" | WRONG (internal): the post's plan decides on day 10 and only one idea is killed | post line 230 |
| 4 | 34 | Ahmad Ullah is a principal UX designer; ui-ux.agency is the design team of tkxel; 200+ products since 2017 | TRUE | content/home.ts:203, :24–25; hub abstract; RULES.md |
| 5 | 34 | "the extra AI checks our AI product discovery workshop runs" (the five checks) | WRONG: the hub scores user value, data readiness, cost and risk of wrong answers. It names no model-feasibility spike, evaluation criteria or precision/recall choice | ai-product-discovery-workshop.json step "Use case ranking" |
| 6 | 38 | Discovery = deciding what to build; delivery = building and shipping (Product Talk) | TRUE | https://www.producttalk.org/glossary-discovery-product-discovery/ |
| 7 | 40 | NN/g: discovery researches the problem space, frames the problem and gathers enough evidence to decide what's next | TRUE (unlinked; adding the link is recommended) | https://www.nngroup.com/articles/discovery-phase/ |
| 8 | 55 | SVPG four big risks with their definitions | TRUE; link loads at www host | https://www.svpg.com/four-big-risks/ |
| 9 | 57 | PM owns value and viability, designer owns usability, engineering owns feasibility | TRUE | same SVPG page |
| 10 | 57 | Some models merge value and usability into "desirability" | TRUE (general) | editorial |
| 11 | 69–72 + SVG | 4 to 6 interview users; 5-user prototype test; owners per quadrant | TRUE | hub steps 1 and 4; SVPG |
| 12 | 82 | Double Diamond, Design Council, 2004, 4 phases | TRUE | https://www.designcouncil.org.uk/resources/the-double-diamond/history-of-the-double-diamond/ |
| 13 | 82 | Discovery covers the first diamond and the early part of develop | TRUE as the author's model | nngroup.com/articles/discovery-phase/ |
| 14 | 102 | 45-minute interviews | TRUE (author's method) | — |
| 15 | 106 | Opportunity solution tree (Torres) | TRUE | producttalk.org glossary |
| 16 | 122 | Patton credits Desirée Sy | TRUE | https://jpattonassociates.com/dual-track-development/ |
| 17 | 122 | Quote "dual track, not duel track" | UNVERIFIABLE as a quotation | same |
| 18 | 136 | Torres trio sentence | WRONG in part | https://www.producttalk.org/glossary-discovery-continuous-discovery/ ; https://www.producttalk.org/glossary-discovery-product-trio/ |
| 19 | 146 | "A customer slot of 30 minutes every week" beside the Scrum Guide | WRONG framing | — |
| 20 | 146 | Sprints of 1 month or less | TRUE | https://scrumguides.org/docs/scrumguide/v2020/2020-Scrum-Guide-US.pdf |
| 21 | 150 | "most teams need a timeboxed phase" | UNVERIFIABLE | — |
| 22 | 154 | "A timeboxed discovery phase lasts from 5 days to 6 weeks" | WRONG as a universal range | design-sprint.json; https://www.nngroup.com/articles/discoveries-in-industry-revealed/ |
| 23 | 162 | Design sprint: one question in 5 days | TRUE | design-sprint.json |
| 24 | 162 | Full discovery phase 3–6 weeks, 10–20 interviews | TRUE to the site, needs site framing | design-sprint.json |
| 25 | 162, 323 | AI workshop 1 to 2 weeks | TRUE | hub |
| 26 | 164, 313 | Weekly 30-minute slot | TRUE (author's method) | — |
| 27 | 170 | Gartner, July 29, 2024: at least 30% of GenAI projects abandoned after PoC by end of 2025, four causes | TRUE | https://www.gartner.com/en/newsroom/press-releases/2024-07-29-gartner-predicts-30-percent-of-generative-ai-projects-will-be-abandoned-after-proof-of-concept-by-end-of-2025 |
| 28 | 172 | RAND 2024: 5 root causes, first is a misunderstood problem | TRUE | https://www.rand.org/pubs/research_reports/RRA2680-1.html |
| 29 | 172 | "discovery failures, not engineering failures" | WRONG | RAND; Gartner |
| 30 | 176 | PAIR starts from user needs | TRUE | https://pair.withgoogle.com/chapter/People%20+%20AI%20Guidebook%20-%20All%20Chapters.pdf |
| 31 | 180 | CCPA/CPRA, HIPAA, contracts | TRUE | — |
| 32 | 182 | Gartner Feb 2025: 60% of AI projects unsupported by AI-ready data | TRUE | https://www.gartner.com/en/newsroom/press-releases/2025-02-26-lack-of-ai-ready-data-puts-ai-projects-at-risk |
| 33 | 182 | PAIR data needs and criteria | TRUE | https://pair.withgoogle.com/chapter/People%20+%20AI%20Guidebook%20-%20Data%20Collection%20+%20Evaluation.pdf |
| 34 | 186 | 2-day spike | TRUE (author's plan) | — |
| 35 | 190 | PAIR: measure, second-order effects, precision vs recall | TRUE | PAIR User Needs + Defining Success |
| 36 | 190 | Recall definition | WRONG (ambiguous) | standard definition |
| 37 | 194 | NIST AI RMF go/no-go wording | WRONG in wording | https://nvlpubs.nist.gov/nistpubs/ai/nist.ai.100-1.pdf |
| 38 | 196 | Wizard of Oz "while engineering runs the spike" | WRONG (internal) | post |
| 39 | 214 | Workshop "runs these checks" | WRONG | hub |
| 40 | 220–234 | Two-week plan | TRUE | hub |
| 41 | 220–234 | NN/g caveat missing | Needs a sentence | NN/g |
| 42 | 20 | "A first discovery phase fits in 2 weeks" | WRONG as a general rule | NN/g |
| 43 | 21, 266 | "12-check exit gate" | WRONG (internal) | post |
| 44 | 262 | Digno requirements | TRUE | digno.md:2, :41 |
| 45 | 262 | Digno "design challenge" framing | WRONG framing | digno.md |
| 46 | 262 | Vocable | TRUE | vocable.md:2, :29, :43 |
| 47 | 283 | "The quiet lines fail most often." | UNVERIFIABLE | — |
| 48 | 291 | About 2 hours a day (advice) | TRUE | — |
| 49 | 301 | "a few hours a day" | WRONG | hub FAQ |
| 50 | 303 | Workshop facts, price, anchor | TRUE | hub |
| 51 | 305 | You own the plan | TRUE | hub FAQ |
| 52 | 323 | FAQ range | WRONG as a universal range | design-sprint.json; NN/g |
| 53 | 335 | Jira vs Jira Product Discovery | TRUE | https://www.atlassian.com/software/jira/product-discovery |
| 54 | SVGs | Text nodes repeat the astext panels | TRUE | SVG text nodes |

Loop-1 fixes F1–F21 are tracked in the loop-2 table above.

### Stale brief records (for the orchestrator)
- Brief `eav` "continuous cadence" points to the product-discovery glossary page. The "at a minimum, weekly touch points" wording is on `glossary-discovery-continuous-discovery/`.
- Brief `eav` "AI data readiness" still carries "survey of 1,203 data management leaders". Keep it out.
- Brief `externalSources` lists `https://svpg.com/four-big-risks/`; the post's `https://www.svpg.com/four-big-risks/` is correct.
- Brief H2 5 `bullets` and FAQ say "a full discovery phase runs 3–6 weeks" as a site fact. It is the design sprint page's comparison column, not a service we sell (loop-2 N1).

## Honesty
No invented clients, results, testimonials, awards or offices. Digno and Vocable lines use case-study facts and quote no results. Hub price, duration, attendees, steps and deliverables are copied exactly. Remaining issue: N1/N2 present a 3–6 week discovery phase as one of "our services".

VERDICT: FAIL
