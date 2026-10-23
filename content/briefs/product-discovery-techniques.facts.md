# Fact-check: product-discovery-techniques

Post: `content/blog/product-discovery-techniques.md` (draft, 2026-10-23). Checker run 2026-10-23.

**Method note.** WebFetch failed with `getaddrinfo ENOTFOUND` for www.svpg.com, www.producttalk.org and www.nngroup.com, so it was not used after that. Every external claim below was checked with **WebSearch limited to the source's domain** (svpg.com, producttalk.org, nngroup.com, strategyzer.com, gv.com, amplitude.com/optimizely.com, hhs.gov, oag.ca.gov/cppa.ca.gov). The search returned the exact URL the post links, along with supporting text. Every linked URL matches the search result on host and path (www. included). The Strategyzer Test Card PDF came back as the top hit for its four field labels.

Site files checked: `content/services/ai-product-discovery-workshop.json`, `content/services/design-sprint.json`, `content/case-studies/mass-media-co.md` (L43), `content/case-studies/tradezella.md` (L88–92), `content/pages/about.md`, `content/home.ts` L201, `content/authors.json`, `content/blog/product-discovery.md` (anchor target), all 6 SVGs in `public/blog/product-discovery-techniques/`, `content/briefs/product-discovery-techniques.visuals.json`.

## Claims

| # | Line | Claim | Verdict | Source |
|---|---|---|---|---|
| 1 | 2, 30, 40, 44 | Title "14 methods" = 14 techniques | TRUE | Matrix rows: value 5, usability 3, feasibility 2, viability 2, AI 2 = 14. The toolkit SVG has 14 rows and the cost-evidence SVG has 14 labels. The design sprint is a bundle and is not counted. |
| 2 | 28 | ui-ux.agency is part of tkxel; designers have worked on 200+ products since 2017 | TRUE | about.md L9 ("more than 200 digital products since 2017"); RULES.md confirmed facts |
| 3 | 8, 28 | Author sahar-asif reviews discovery plans ("I check that match…") | TRUE (method) | home.ts L201 "Senior Manager UX \| KAM". The body states no title. authors.json bio is empty, and the post makes no experience claim beyond method. |
| 4 | 28, 201 | Workshop: interviews and data-readiness scoring come before a 5-user concept test; 5 to 10 working days | TRUE | Hub JSON L40–45 |
| 5 | 36 | Cagan / SVPG four risks and their definitions (value: buy or choose; usability: figure it out; feasibility: time, skills, tools; viability: sales, legal, monetization, brand) | TRUE | https://www.svpg.com/four-big-risks/ |
| 6 | 36 | Owners: value + viability → PM, usability → designer, feasibility → engineering | TRUE | https://www.svpg.com/four-big-risks/ ("The Product Manager is responsible for the value and viability risks… The Product Designer is responsible for the usability risk"; tech lead / engineers for feasibility) |
| 7 | 36 | Torres: five assumption categories, desirability, viability, feasibility, usability, ethical; ethical asks whether the idea causes harm | TRUE | https://www.producttalk.org/glossary-discovery-assumption/ |
| 8 | 36 | "…and for model-driven features it holds the cost of a wrong answer" | WRONG (attribution) | The Product Talk glossary defines ethical as "could it cause harm". Putting the wrong-answer cost there is the author's own mapping, but the sentence states it as part of Torres's category. **F1** |
| 9 | 38, 44 | Times and samples are "my planning values"; published sizes are cited in the usability section | TRUE (framing) | Method framing is present for every number with no source: 45 min, 1–2 days, 2 h, 1–2 weeks, 1 week, 2–3 days, 30–60 min, 2 weeks, 5 users for Wizard of Oz. "4 to 6 users" also matches hub step 1. |
| 10 | 67 | "Value comes first in the matrix because most teams skip it" | UNVERIFIABLE | "Most teams" is an unsourced population claim. Product Talk says teams are biased toward *usability* assumptions, not that most skip value. **F2** |
| 11 | 71, 73, 75–85, 95; takeaway 2 | Value ladder: "the stronger ones move from what people say toward what they actually do"; the bottom of the ladder is "attitudinal" asks; evidence and cost rise together | WRONG (internal) | The ladder's rung 1 (bottom, weakest) is analytics and support-ticket review, tagged **Behavioral** in the SVG. Rungs 2–3 (interviews, survey) are tagged Attitudinal. So a "do" rung sits below two "say" rungs, which contradicts the bold answer and takeaway 2. NN/g counts analytics (clickstream) as behavioral, so relabelling the rung would be wrong. L95 "sits at the bottom of the ladder" is also wrong, because the bottom rung is analytics, not "would you use it?" questions (which are not on the ladder). **F3a–F3d** |
| 12 | 73; FAQ L234 | NN/g maps 20 UX research methods on 3 dimensions; the first is attitudinal vs behavioral, say vs do; spikes, data audits and pricing tests are outside the map | TRUE | https://www.nngroup.com/articles/which-ux-research-methods/ (20 methods; attitudinal/behavioral, qualitative/quantitative, context of use) |
| 13 | 89 | Opportunity solution tree has 4 levels: desired outcome at the root, then opportunities, solutions, assumption tests | TRUE | https://www.producttalk.org/glossary-discovery-opportunity-solution-tree/ (no link in the post; none needed) |
| 14 | 91, 93; FAQ L238 | Fake door: a button, banner or page that looks live; the click opens an honest not-built-yet page with a waitlist; clicks show curiosity; set the bar before launch; don't mislead | TRUE | https://www.optimizely.com/optimization-glossary/painted-door-test ; https://amplitude.com/explore/experiment/painted-door-testing (thresholds set before launch; post-click message says the feature is in development) |
| 15 | 93 | Mass Media Co.: discovery workshop where stakeholders and end users worked on product definition, strategy, IA and user flows | TRUE (facts) / framing fix | mass-media-co.md L43, paraphrased correctly. The lead-in "Group formats work too" sits in the *value-testing* section and presents the workshop as a value test. The case study shows definition and IA work, not a demand test. **F4** |
| 16 | 101 | Nielsen: one user reveals about 31% of usability problems on average across many projects; each added user mostly repeats earlier findings | TRUE | https://www.nngroup.com/articles/why-you-only-need-to-test-with-5-users/ ("typical value of L is 31%, averaged across a large number of projects"; "the third user will do many things that you already observed") |
| 17 | 103; takeaway 4 | NN/g recommends 15 participants for card sorting for most projects; Tullis and Wood's data reach a 0.90 correlation at 15 | TRUE | https://www.nngroup.com/articles/card-sorting-how-many-users-to-test/ |
| 18 | 103 | Tree testing: people get tasks and look for items in a proposed menu hierarchy; it checks a structure before screens | TRUE | https://www.nngroup.com/articles/tree-testing/ (findability "after you have created your proposed navigation hierarchy"; text-only tree). No sample size is claimed, which is correct. |
| 19 | 105 | TradeZella: stakeholder sessions first; flows rebuilt around the widgets traders use most; traders tried the design before launch | TRUE | tradezella.md L88–92. The post does not present it as a usability-testing-services project (lesson 2026-10-12 satisfied). |
| 20 | 115 | "health records fall under HIPAA" | WRONG (overbroad) | HIPAA binds covered entities (health plans, clearinghouses, providers that bill electronically) and their business associates, not every holder of health records: https://www.hhs.gov/hipaa/for-professionals/faq/who-must-comply-with-hipaa-privacy-standards/index.html . **F5** |
| 21 | 115 | "California customers' data falls under the CCPA, as amended by the CPRA" | WRONG (overbroad) | The CCPA applies only to for-profit businesses that meet one of three thresholds (revenue over $26,625,000 as adjusted from 2025; 100,000+ California consumers or households; 50%+ of revenue from selling or sharing): https://cppa.ca.gov/regulations/cpi_adjustment.html ; https://oag.ca.gov/privacy/ccpa . **F5** |
| 22 | 123 | "Cagan's viability concerns cover fit with go-to-market and sales channels, partner contracts and legal compliance, monetization and the brand promise" | TRUE (partial list) | https://www.svpg.com/four-big-risks/ also lists affordable customer acquisition. Optional fix **F6** (not blocking) |
| 23 | 131–133 | NN/g Wizard of Oz: moderated method; interface seems autonomous but is fully or partly controlled by a hidden human; fits conversational UIs and interfaces using learning algorithms | TRUE | https://www.nngroup.com/articles/wizard-of-oz/ ("conversational UIs like chatbots, interfaces that use learning algorithms to provide recommended content") |
| 24 | 135 | Sibling guide lists five extra AI checks; anchor `#what-changes-in-product-discovery-for-ai-features` | TRUE | product-discovery.md L170–172 |
| 25 | 137 | "designers build the leading use case into a clickable concept … then put it in front of 5 users" | WRONG (narrowed) | Hub step 3 says designers work up "the top 1 or 2 use cases"; the post narrows it to one. **F7** |
| 26 | 143 | Strategyzer Test Card: 4 fields "We believe that", "To verify that, we will", "And measure", "We are right if" = hypothesis, test, metric, criteria | TRUE | https://assets.strategyzer.com/assets/resources/the-test-card.pdf (step 1 hypothesis, step 2 test, step 3 metric, step 4 criteria) |
| 27 | 145–158 | Shift-swap test card is labeled hypothetical | TRUE | "Say you run…" (L145), text panel "Hypothetical example", SVG badge "Hypothetical example", caption and alt "hypothetical". The bar is "the team's own choice, not an industry benchmark" (L160). No invented numbers. |
| 28 | 166–193 | Cost/evidence placements | TRUE (framing) | The SVG says "Relative, not measured" and the aria-label says "placed relative to each other, not measured". This is the author's editorial axis, and its order agrees with L164–166. |
| 29 | 195 | Design sprint bundles techniques into 5 days | TRUE | design-sprint.json L14–15, L43. The one cross-hub link is allowed. |
| 30 | 195 | GV sprint: map, sketch, decide, prototype, test; Friday customer interviews where the team watches reactions to the prototype; for a critical question | TRUE | https://www.gv.com/sprint/ . The post makes no "5 customers" claim, so no extra support is needed. |
| 31 | 197 | Torres's product trio (PM, designer, engineer) holds a customer conversation every week | TRUE | https://www.producttalk.org/glossary-discovery-continuous-discovery/ ("weekly touchpoints with customers by the team building the product"; trio = PM, designer, engineer). No link in post. |
| 32 | 197, 201, 203, 222; takeaway 5; workshop SVG title, alt, caption, aria-label | "runs four of these techniques / 4 of the 14 techniques"; "Each tray holds the matrix techniques that one step runs" | WRONG | Only 2 of the 14 matrix rows are run as written: customer interviews (step 1) and the prototype usability test (step 4). Step 2 is "use-case scoring with a data readiness check", which is not a matrix row; the data audit row checks exists, reachable, permitted and labeled, while the hub scores value, data readiness, cost and risk. Step 3 is a concept with realistic model output, and the post itself calls it "close kin of a Wizard of Oz prototype", not one. **F8a–F8g** |
| 33 | 215 + workshop SVG tray 1 | Step 1 output "A task map of **jobs**, pain points and data per task" | WRONG (wording) | Hub step 1 and the deliverable say "main tasks"/"current tasks". "Jobs" is a term the hub never uses (lesson 2026-10-19). **F9** |
| 34 | 218 + SVG tray 4 | Step 4 output: tested concept, risk register, scoped plan | TRUE | Hub deliverables L53–57. The risk register is "ways the AI feature fails users in tests", so it belongs to the test step. |
| 35 | 222 | Product lead, business owner, engineering or data lead join for about 2 hours a day; you leave with a tested concept, risk register, scoped plan; concept moves into AI product design | TRUE | Hub FAQ L95, deliverables L55–57, L25 ("moves straight into AI UX design agency work"), FAQ L97 |
| 36 | body | No price in body | TRUE | No "$" in the body; the MOFU template shows the hub price. |
| 37 | all | US spelling, no invented clients, results, testimonials, offices | TRUE | "labeled", "behavior", "judgment". The only clients named are Mass Media Co. and TradeZella, both real case studies, and no result figures are quoted. |
| 38 | cover.svg, toolkit-matrix.svg, cost-evidence.svg, test-card.svg | SVG text vs post | TRUE | Matrix times = text panel times, row for row. Test card text = text panel. Cover "14 methods". |
| 39 | value-ladder.svg | Rung tags and order | WRONG (see #11) | Fixed by text in F3; the SVG can stay as drawn once F3b explains rung 1. |
| 40 | workshop-bundle.svg | Title, tray 1 output | WRONG (see #32, #33) | F8f, F9 |

## Fixes (exact replacement text)

All replacements are paraphrased. None shares an 8-word run with the hub JSON, the case studies, about.md or `content/blog/product-discovery.md`. The longest shared run with the hub is 6 words ("a clickable concept with realistic model output").

**F1, L36.** Replace
"The ethical category asks whether the idea causes harm, and for model-driven features it holds the cost of a wrong answer."
with
"The ethical category asks whether the idea causes harm, and for model-driven features I file the cost of a wrong answer under it."

**F2, L67.** Replace
"Value comes first in the matrix because most teams skip it, so start your plan there."
with
"Value comes first in the matrix because a usable, buildable feature that nobody needs still fails, so start your plan there."

**F3a, takeaway 2 (frontmatter L17).** Replace with
"Value evidence about a new offer gets stronger as it moves from what people say to what they click to what they pay, and its cost rises with it."

**F3b, L71 bold answer.** Replace with
"**Five product discovery techniques test value risk: one counts how often the problem already happens, and the other four climb from what people say to what they click and pay.**"

**F3c, L73.** Insert this sentence after "I rank value evidence on that line and add one rung above it, money." and before "The ladder shows the order." (that sentence introduces the image, so insert before it):
"Analytics review sits on the bottom rung even though it records behavior, because it shows the problem exists, not that anyone wants your answer to it."

**F3d, L95.** Replace
"The answer is attitudinal and optimistic, so it sits at the bottom of the ladder."
with
"The answer is attitudinal and optimistic, so it ranks below every rung on the ladder."

**F4, L93.** Replace
"Group formats work too."
with
"Group sessions can sit beside one-to-one interviews."
(The Mass Media sentence after it stays as written.)

**F5, L115.** Replace the two sentences from "In the US that is a legal question…" to "…California Privacy Rights Act (CPRA)." with:
"In the US that is a legal question as much as a technical one: health records held by a health care provider, health plan or other covered entity, or by its business associate, fall under the Health Insurance Portability and Accountability Act (HIPAA). If your company meets the California Consumer Privacy Act (CCPA) thresholds, California residents' personal information falls under the CCPA, as amended by the California Privacy Rights Act (CPRA)."

**F6 (optional, not blocking), L123.** Replace the first sentence with
"Cagan's viability concerns include go-to-market and sales channels, partner contracts and legal compliance, the cost of acquiring customers, monetization and the brand promise."

**F7, L137.** Replace
"In our workshop, designers build the leading use case into a clickable concept that shows realistic model output, then put it in front of 5 users."
with
"In our workshop, designers build a clickable concept for the one or two highest-ranked use cases, fill it with realistic model output and put it in front of 5 users."

**F8a, takeaway 5 (frontmatter L20).** Replace with
"Our AI discovery workshop runs customer interviews and a 5-user prototype test, two of the 14 techniques, inside 5 to 10 working days."

**F8b, L197.** Replace
"For an AI feature, four of these techniques fit into one short workshop."
with
"For an AI feature, two of these techniques anchor one short workshop."

**F8c, L201 bold answer.** Replace with
"**Our AI discovery workshop spreads four steps across 5 to 10 working days: customer interviews, use-case scoring with a data check, a realistic concept and a 5-user test.**"

**F8d, L203.** Replace with
"Each tray below holds one of the [four workshop steps](/services/ai-products/ai-product-discovery-workshop/#what-happens-during-the-ai-product-discovery-workshop) with its days, what it runs and its output; only the first and last trays use a matrix technique as written."

**F8e, L222.** Replace "We run the four as one workshop:" with "We run the four steps as one workshop:".

**F8f, workshop-bundle.svg and post L205 and visuals.json L19–20.**
- SVG `<title>` and the headline `<text>` "The techniques each of the four steps runs" → "What each of the four steps runs" (same font size; shorter, so it fits).
- SVG aria-label: "each holding the product discovery techniques that step runs and what it produces" → "each holding the method that step runs and what it produces".
- Post L205 alt: "Four workshop trays showing the days, the methods and the output of each step of the AI discovery workshop". Caption: "AI discovery workshop trays: what each of the four steps runs".
- `content/briefs/product-discovery-techniques.visuals.json` L19 marker (alt/caption) and L20 markdown: apply the same alt and caption.

**F8g, stale records (no publish impact).** `content/briefs/product-discovery-techniques.json` serpGaps[5] ("bundles four of them"), outline H2 9 answerHint ("runs four of these techniques") and the `dataModules`/`visuals` tray idea ("Wizard of Oz-style", "scoring + data audit") repeat the wrong count. The orchestrator should update them so a rewrite does not bring the error back.

**F9, L215 and workshop-bundle.svg tray 1.** Replace "A task map of jobs, pain points and data per task." with "A task map: main tasks, pain points and data per task." In the SVG, the tray 1 output lines become: "A task map:" / "main tasks, pain" / "points and" / "data per task" (same x and y values as the current four lines). Make the same change in the aria-label ("a task map of jobs, pain points…" → "a task map: main tasks, pain points…").

## Links

| Link | Loads (search-verified) | Supports its sentence |
|---|---|---|
| https://www.svpg.com/four-big-risks/ | Yes | Yes (#5, #6) |
| https://www.producttalk.org/glossary-discovery-assumption/ | Yes | Yes for the five categories; the wrong-answer clause needs F1 |
| https://www.nngroup.com/articles/which-ux-research-methods/ | Yes | Yes |
| https://www.nngroup.com/articles/why-you-only-need-to-test-with-5-users/ | Yes | Yes |
| https://www.nngroup.com/articles/card-sorting-how-many-users-to-test/ | Yes | Yes |
| https://www.nngroup.com/articles/wizard-of-oz/ | Yes | Yes |
| https://assets.strategyzer.com/assets/resources/the-test-card.pdf | Yes | Yes |
| https://www.gv.com/sprint/ | Yes | Yes |
| Internal: /about/, hub, hub#fragment, /blog/product-discovery/ (+ fragment), /case-studies/mass-media-co/, /case-studies/tradezella/, /services/startups/design-sprint/, /services/ai-products/ | Files exist (brief-verified slugs; sibling H2 L170 confirms fragment) | Yes |

VERDICT: FAIL
