# Fact-check: product-discovery

Post: `content/blog/product-discovery.md` (draft, 2026-10-15). SVGs checked (text nodes extracted): cover, product-discovery-four-risks, product-discovery-process-stages, product-discovery-dual-track, ai-feature-discovery-checks, two-week-product-discovery-plan, product-discovery-checklist.

Method: WebFetch returned `ENOTFOUND` for every host (gartner.com, rand.org, svpg.com, producttalk.org). I verified with domain-limited WebSearch (and exact-phrase searches), which returned the exact cited URLs with supporting snippets (learnings 18 and 37). Site facts come from `content/services/ai-product-discovery-workshop.json`, `content/services/design-sprint.json`, `content/home.ts` and `content/case-studies/{digno,vocable}.md`.

"1,203" check: the figure appears nowhere in the post or the SVGs (grep: no match). The 80% RAND and 84% figures are also absent. Do-not-use list: respected.

## Claims

| # | Line | Claim | Verdict | Source |
|---|---|---|---|---|
| 1 | 26–30 | Hypothetical kill log (auto-replies killed, lease summaries parked, triage build) | TRUE (labeled "Say…") | post |
| 2 | 32 | "Two kills and one narrow build" | WRONG (internal): the log has 1 kill, 1 parked, 1 build | post lines 28–30 |
| 3 | 32 | "kill two ideas in the first 5 days" | WRONG (internal): the post's plan decides on day 10 and only one idea is killed | post line 230 |
| 4 | 34 | Ahmad Ullah is a principal UX designer; ui-ux.agency is the design team of tkxel; 200+ products since 2017 | TRUE | content/home.ts:203, :24–25; hub abstract; RULES.md |
| 5 | 34 | "the extra AI checks our AI product discovery workshop runs" (the five checks) | WRONG: the hub scores user value, data readiness, cost and risk of wrong answers. It names no model-feasibility spike, evaluation criteria or precision/recall choice | ai-product-discovery-workshop.json step "Use case ranking" |
| 6 | 38 | Discovery = deciding what to build; delivery = building and shipping (Product Talk) | TRUE | https://www.producttalk.org/glossary-discovery-product-discovery/ (URL returned on domain search; glossary: discovery is everything teams do to decide what to build, and delivery is writing code and shipping) |
| 7 | 40 | NN/g: discovery researches the problem space, frames the problem and gathers enough evidence to decide what's next | TRUE (unlinked; adding the link is recommended) | https://www.nngroup.com/articles/discovery-phase/ ("…researching the problem space, framing the problem(s) to be solved, and gathering enough evidence and initial direction on what to do next") |
| 8 | 55 | SVPG four big risks: value, usability, feasibility, business viability, with their definitions | TRUE; link loads at www host | https://www.svpg.com/four-big-risks/ |
| 9 | 57 | PM owns value and viability, designer owns usability, engineering owns feasibility | TRUE | same SVPG page ("The Product Manager is responsible for the value and viability risks… The Product Designer is responsible for the usability risk") |
| 10 | 57 | Some models merge value and usability into "desirability" | TRUE (general; IDEO desirability/feasibility/viability) | editorial, no figure |
| 11 | 69–72 + four-risks SVG | 4 to 6 interview users; 5-user prototype test; owners per quadrant | TRUE (hub figures used as the author's method; SVG owners match SVPG) | hub steps 1 and 4; SVPG |
| 12 | 82 | Double Diamond, Design Council, launched 2004, 4 phases discover/define/develop/deliver | TRUE | https://www.designcouncil.org.uk/resources/the-double-diamond/history-of-the-double-diamond/ ; Design Council press release "The Double Diamond turns 20" (May 2023) |
| 13 | 82 | Discovery covers the first diamond and the early part of develop | TRUE as the author's model (NN/g says Discover + Define represent discovery; the post's stages include solution tests, so the extension is consistent with its own model) | nngroup.com/articles/discovery-phase/ |
| 14 | 102 | "I keep each interview to 45 minutes" | TRUE: phrased as the author's method, no source implied | — |
| 15 | 106 | Opportunity solution tree: outcome → opportunities → solutions → assumption tests (Torres) | TRUE | producttalk.org glossary (start with an outcome, discover opportunities, discover solutions; assumption testing for solutions) |
| 16 | 122 | Patton credits Desirée Sy with an early version | TRUE | https://jpattonassociates.com/dual-track-development/ (cites Sy's 2007 paper as an origin of the model) |
| 17 | 122 | Quote "dual track, not duel track" | UNVERIFIABLE as a quotation. The page's title is "Dual Track Development is not Duel Track"; the lowercase phrase was not found on the page. The sentence is also unlinked | jpattonassociates.com/dual-track-development/ |
| 18 | 136 | Torres: the trio talks with customers weekly at a minimum, "and the trio is the team that builds the product" | WRONG in part. The weekly minimum is TRUE ("At a minimum, weekly touch points with customers by the team building the product"), but that wording is on the continuous-discovery glossary page and the sentence is unlinked. Product Talk says the trio *leads discovery* while the wider team builds, so "the trio is the team that builds the product" is not Torres's definition | https://www.producttalk.org/glossary-discovery-continuous-discovery/ ; https://www.producttalk.org/glossary-discovery-product-trio/ |
| 19 | 146 | Discovery cadence cell: "A customer slot of 30 minutes every week." | WRONG framing: the row sits beside "per the Scrum Guide" and after the Torres sentence, so it reads as sourced. 30 minutes is the author's own slot | — |
| 20 | 146 | Sprints of 1 month or less, per the Scrum Guide | TRUE | https://scrumguides.org/docs/scrumguide/v2020/2020-Scrum-Guide-US.pdf ("fixed length events of one month or less") |
| 21 | 150 | "Before launch, though, most teams need a timeboxed phase." | UNVERIFIABLE ("most teams" with no source) | — |
| 22 | 154 | Bold: "A timeboxed discovery phase lasts from 5 days to 6 weeks" | WRONG as a universal range. The 5-day and 3–6 week figures are our own design-sprint hub's. NN/g's survey reports that just under a third of discoveries run over 7 weeks and gives a 7-week example plan | design-sprint.json; https://www.nngroup.com/articles/discoveries-in-industry-revealed/ |
| 23 | 162 | Design sprint answers one question in 5 days (cross-hub link) | TRUE | design-sprint.json h1 + table |
| 24 | 162 | Full discovery phase: 3–6 weeks, 10–20 interviews plus data review | TRUE to the site, but stated as a general fact. Needs our-site framing (see #22) | design-sprint.json table row "Length", "User contact" |
| 25 | 162, 323 | Our AI discovery workshop runs 1 to 2 weeks | TRUE | hub summary/cost H2 |
| 26 | 164, 313 | "I book a standing customer slot of 30 minutes every week" / "My recommendation: book a weekly customer slot of 30 minutes" | TRUE: author's method/recommendation | — |
| 27 | 170 | Gartner, July 29, 2024: at least 30% of GenAI projects abandoned after proof of concept by end of 2025; causes: poor data quality, inadequate risk controls, escalating costs or unclear business value | TRUE; stated as a prediction | https://www.gartner.com/en/newsroom/press-releases/2024-07-29-gartner-predicts-30-percent-of-generative-ai-projects-will-be-abandoned-after-proof-of-concept-by-end-of-2025 |
| 28 | 172 | RAND 2024 report lists 5 root causes; the first is a misunderstood or miscommunicated problem | TRUE | https://www.rand.org/pubs/research_reports/RRA2680-1.html (Ryseff, De Bruhl, Newberry) |
| 29 | 172 | "Both findings point to discovery failures, not engineering failures." | WRONG: RAND's causes include "inadequate infrastructure to manage data and deploy models" (an engineering failure), and Gartner's include escalating costs and inadequate risk controls | RAND RRA2680-1; Gartner 2024-07-29 |
| 30 | 176 | PAIR starts from user needs, then whether AI adds value | TRUE | https://pair.withgoogle.com/chapter/People%20+%20AI%20Guidebook%20-%20All%20Chapters.pdf ("User Needs + Defining Success") |
| 31 | 180 | Permission frame: CCPA as amended by CPRA; HIPAA for health data; customer contracts | TRUE (caveat: HIPAA binds covered entities and business associates, not all health data; acceptable as a pointer under RULES "US market") | — |
| 32 | 182 | Gartner, February 2025: through 2026, organizations will abandon 60% of AI projects unsupported by AI-ready data | TRUE; no survey size quoted | https://www.gartner.com/en/newsroom/press-releases/2025-02-26-lack-of-ai-ready-data-puts-ai-projects-at-risk |
| 33 | 182 | PAIR: translate user needs into data needs; judge data on predictive power, relevance, fairness, privacy and security | TRUE | https://pair.withgoogle.com/chapter/People%20+%20AI%20Guidebook%20-%20Data%20Collection%20+%20Evaluation.pdf |
| 34 | 186, AI-checks SVG | Spike of 2 days | TRUE: author's plan ("I give the spike 2 days") | — |
| 35 | 190 | PAIR: agree how to measure whether the feature works, weigh second-order effects, choose the precision vs recall trade-off | TRUE | PAIR User Needs + Defining Success chapter/worksheet ("agree on how to measure if your feature is working or not, and consider the second order effects"; precision/recall trade-off exercise) |
| 36 | 190 | "recall is the share of right items the model caught" | WRONG (ambiguous): "right items" reads as "correct predictions". Recall = share of the items that truly belong in the class that the model flagged | standard definition |
| 37 | 194 | NIST AI RMF: after the Map function a team "has enough context to make an initial go/no-go decision" | WRONG in wording. NIST: "Framework users should have sufficient contextual knowledge about AI system impacts to inform an initial go/no-go decision" (normative "should", "inform", not "make") | https://nvlpubs.nist.gov/nistpubs/ai/nist.ai.100-1.pdf ; https://airc.nist.gov/airmf-resources/airmf/5-sec-core/ |
| 38 | 196 | Wizard of Oz test "so 5 users can react while engineering runs the spike" | WRONG (internal): the post's plan runs the test (days 8–9) after the spike (days 6–7), and line 236 calls prototyping before the spike a mistake | post lines 228–229, 236 |
| 39 | 214 | "Our AI product discovery workshop runs these checks with your product lead, an engineering or data lead and a business owner." | WRONG: the attendees are TRUE (hub FAQ), but "these checks" = all five; the hub covers only data readiness and the cost/risk of wrong answers (plus user value) | hub step "Use case ranking"; FAQ "Who from our team should join?" |
| 40 | 220–234 | Two-week plan as the author's method; 4 to 6 users and a 5-user test match our workshop; participants about 2 hours a day | TRUE | hub steps 1 and 4; FAQ |
| 41 | 220–234 | NN/g's view that 2 weeks is short is missing from the two-week section | Needs a sentence (see fixes) | https://www.nngroup.com/articles/discoveries-in-industry-revealed/ ("unless users are easy to access and the problem space is relatively small, two weeks is too short") |
| 42 | 20 (takeaway 4) | "A first discovery phase fits in 2 weeks" | WRONG as a general rule (contradicts NN/g and the post's own "Length depends on the size of the question") | NN/g as above |
| 43 | 21 (takeaway 5), 266 | "passes a 12-check exit gate" / "12 yes/no checks … that must pass" | WRONG (internal): line 268 says the AI lane (4 checks) applies only when the feature uses a model, so a non-AI idea passes 8 | post line 268, 278 |
| 44 | 262 | Digno: an AI-scored product; before designing, we collected requirements from stakeholders and end users to pin down the scoring formula | TRUE | content/case-studies/digno.md:2, :41 |
| 45 | 262 | "Making an AI-generated score feel fair and readable was the design challenge." | WRONG framing: digno.md:81 says it "is the kind of challenge we take on as an AI UX design agency" (a general agency line). The project's stated need is "Express performance as one plain score that makes sense to managers and staff alike" (digno.md:37) | digno.md |
| 46 | 262 | Vocable, an AI content marketing platform; stakeholder interviews; scope kept tight around the jobs writers named most often | TRUE | content/case-studies/vocable.md:2, :29, :43 |
| 47 | 283 | "The quiet lines fail most often." | UNVERIFIABLE (frequency claim with no data; a first-person observation would need a source) | — |
| 48 | 291 | Trio can each give about 2 hours a day (advice) | TRUE as advice | — |
| 49 | 301 | "with a partner, you pay a fee plus a few hours a day from your leads" | WRONG: the hub says "about 2 hours a day". "A few" reads as 3+ (learning 46) | hub FAQ |
| 50 | 303 | Workshop: 1 to 2 weeks; product, engineering and business leads about 2 hours a day; ranks use cases by user value, data readiness, cost and risk of wrong answers; top concept tested with 5 users; 5 deliverables; $8,000–$20,000; cost anchor `#how-much-does-an-ai-product-discovery-workshop-cost` | TRUE (anchor matches `sectionId()` in components/sections/SemanticSections.tsx) | hub abstract, steps, deliverables, cost H2, FAQ |
| 51 | 305 | You own the plan; some teams take it to their own team | TRUE | hub FAQ "What happens after the workshop?" |
| 52 | 323 | FAQ: "A timeboxed phase runs from 5 days … to 3–6 weeks for a whole product area" | WRONG as a universal range (same as #22) | design-sprint.json; NN/g |
| 53 | 335 | Jira tracks delivery work; Jira Product Discovery is Atlassian's separate tool for capturing, scoring and prioritizing ideas | TRUE | https://www.atlassian.com/software/jira/product-discovery ; https://support.atlassian.com/jira-product-discovery/docs/what-is-jira-product-discovery/ |
| 54 | SVGs | All text nodes repeat the astext panels (four risks + owners, five stages, dual-track loops and gate, AI check grid, 10-day plan, 12-item gate labeled "AI only") | TRUE; no SVG change needed. The checklist SVG's "12 yes/no checks" is acceptable because the AI lane is labeled "AI only" | SVG text nodes |

## Fixes (exact replacements; line numbers refer to the current draft)

**F1, line 32** (#2, #3). Replace the first two sentences of the paragraph:
> One kill, one parked idea and one narrow build is a strong result. I'd rather kill an idea inside a two-week round than ship one nobody trusts.

**F2, line 34** (#5). Replace the second sentence:
> The guide below covers the definition, the four risks, the stages, the agile fit, a two-week plan, the extra checks an AI feature needs, and an exit-gate checklist. Our [AI product discovery workshop](/services/ai-products/ai-product-discovery-workshop/) ranks AI use cases by user value, data readiness, cost and risk of wrong answers.

**F3, line 20, takeaway 4** (#42):
> "I timebox a first discovery round to 2 weeks: five blocks, each closed by one written output."

**F4, line 21, takeaway 5** (#43):
> "Nothing enters the delivery backlog until it passes the exit gate (8 checks, plus 4 for an AI feature), and an unknown counts as a no."

**F5, line 122** (#17). Replace the second sentence:
> Jeff Patton, who credits Desirée Sy with an early version, titled his essay ["Dual Track Development is not Duel Track"](https://jpattonassociates.com/dual-track-development/): two kinds of work, done by one team.

**F6, line 136** (#18). Replace the paragraph:
> Who does the work? Teresa Torres defines continuous discovery as, at a minimum, [weekly touch points with customers by the team building the product](https://www.producttalk.org/glossary-discovery-continuous-discovery/), and a product trio leads it. The product manager, designer and tech lead work together rather than handing off.

**F7, line 146, Cadence row, discovery cell** (#19):
> A weekly customer slot (I book 30 minutes).

**F8, line 150, last sentence** (#21):
> Before launch, there is no weekly customer habit to join yet, which is where a timeboxed phase comes in.

**F9, line 154, bold answer** (#22, 26 words; the "start of something new" point is already in the list below it):
> **In our services, a timeboxed discovery phase runs from a 5-day sprint to 3–6 weeks and hands over to continuous discovery once the team ships weekly.**

**F10, line 162**, sentences 2–3 (#24):
> [A 5-day design sprint](/services/startups/design-sprint/) answers one question in 5 days. Our design sprint page puts a full discovery phase for a whole product area at 3–6 weeks, with 10–20 interviews plus a data review.

**F11, line 172, last sentence** (#29):
> Several of those causes, such as unclear business value, a misunderstood problem and missing data, are questions discovery can answer before a build starts.

**F12, line 190, third sentence** (#36):
> Precision is the share of flagged items that truly belong in the category, and recall is the share of items in the category that the model flagged.

**F13, line 194, last sentence** (#37):
> Its NIST AI Risk Management Framework (AI RMF) says that after completing the Map function, a team should have enough context about AI system impacts to inform an initial go/no-go decision.

**F14, line 196, second sentence** (#38):
> A Wizard of Oz prototype puts a person behind the interface to write the AI's answers, so 5 users can react to them before anyone builds a model.

**F15, line 214** (#39). Replace the second sentence:
> Our AI product discovery workshop scores each AI use case on user value, data readiness, cost and risk of wrong answers, with your product lead, an engineering or data lead and a business owner.

**F16, after line 220** (#41, the NN/g caveat on 2 weeks). Insert after "…labeled by the question each block answers.":
> NN/g argues that [two weeks is too short](https://www.nngroup.com/articles/discoveries-in-industry-revealed/) unless users are easy to access and the problem space is relatively small, so I use this timebox for a first round on one decision, not for a whole product area.

**F17, line 262, second sentence** (#45):
> Digno's brief was to express performance as one plain score that makes sense to managers and staff alike.

**F18, line 266, bold answer** (#43):
> **The checklist is an exit gate: 8 yes/no checks grouped by risk, plus 4 for AI features, that must pass before an idea moves from discovery into the delivery backlog.**

**F19, line 283, first sentence** (#47):
> I check the quiet lines first.

**F20, line 301, second sentence** (#49):
> In-house, you pay in the trio's time away from delivery; with a partner, you pay a fee plus about 2 hours a day from your leads.

**F21, line 323, second sentence** (#52):
> In our own services, a timeboxed phase runs from 5 days for a design sprint on one question to 3–6 weeks for a whole product area, and our AI discovery workshop takes 1 to 2 weeks.

**Optional (not a failure), line 40:** link "Nielsen Norman Group (NN/g)" or "discovery phase" to https://www.nngroup.com/articles/discovery-phase/.

## Stale brief records (for the orchestrator)
- Brief `eav` "continuous cadence" points to the product-discovery glossary page. The "at a minimum, weekly touch points" wording is on `glossary-discovery-continuous-discovery/`.
- Brief `eav` "AI data readiness" still carries "survey of 1,203 data management leaders". The post correctly leaves it out; keep it out.
- Brief `externalSources` lists `https://svpg.com/four-big-risks/`. The domain search returns `https://www.svpg.com/four-big-risks/`, which is what the post uses (correct).

## Honesty
No invented clients, results, testimonials, awards or offices. The Digno and Vocable lines use case-study facts and quote no results (F17 fixes one framing). The hub price, duration, attendees, steps and deliverables are copied exactly, except #5, #39 and #49 (F2, F15, F20). The 45- and 30-minute figures are the author's method, with one table cell fixed (F7).

VERDICT: FAIL
