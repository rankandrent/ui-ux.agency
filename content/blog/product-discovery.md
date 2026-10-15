---
title: "Product discovery: a practical guide for AI and SaaS product teams"
metaTitle: "Product Discovery: Process, Examples and an AI Checklist"
description: "Product discovery explained: the definition, the process in agile, how to timebox it in 2 weeks and what changes for AI features. Get the free checklist."
date: 2026-10-15
updated: 2026-10-15
contributors: [umar-sarwar]
author: ahmad-ullah
type: Guide
services: [ai-product-discovery-workshop]
industries: []
tags: [product discovery, product discovery process, product discovery phase, product discovery process in agile, how to do product discovery]
keyword: "product discovery"
funnel: tofu
takeaways:
  - "Product discovery decides what to build; delivery builds it, and in agile one team runs both tracks side by side."
  - "Test the four big risks (value, usability, feasibility, viability) starting with the one that would kill the idea."
  - "An AI feature adds five checks: right tool, data readiness, model feasibility, evaluation and the cost of a wrong answer."
  - "A first discovery phase fits in 2 weeks: five blocks, each closed by one written output."
  - "Nothing enters the delivery backlog until it passes a 12-check exit gate, and an unknown counts as a no."
draft: true
qa: pending
---

Product discovery is deciding what to build before you build it, and a good round ends with a log like this one. Say a US property-management software as a service (SaaS) company gets a board request for artificial intelligence (AI) and spends 2 weeks testing three ideas:

> **Auto-replies to tenant messages:** killed. A wrong answer creates a legal problem.
> **Lease summaries:** parked. Nobody can access the scanned leases yet.
> **Maintenance-request triage:** build. Staff confirm every suggested category and urgency.

Two kills and one narrow build is a strong result. I'd rather kill two ideas in the first 5 days than ship one nobody trusts.

I'm a principal user experience (UX) designer at ui-ux.agency, the design team of tkxel, and our team has designed 200+ products since 2017. The guide below covers the definition, the four risks, the stages, the agile fit, a two-week plan, the extra AI checks and an exit-gate checklist.

## What is product discovery?

**Discovery is the work a product team does to decide what to build; product delivery is the work of building and shipping it.** <!-- source: https://www.producttalk.org/glossary-discovery-product-discovery/ -->

The product discovery definition I use with founders fits on one line: buy a decision with evidence before you buy code. Nielsen Norman Group (NN/g) describes the same work from the UX side as a discovery phase. In that view, the team researches the problem space, frames the problem to solve and gathers enough evidence to decide what to do next. <!-- source: https://www.nngroup.com/articles/discovery-phase/ -->

Discovery is not a requirements document or a UX research report. Its output is a decision: build, change or stop. The discipline sits inside product management and product development, and it borrows its methods from user-centered design.

You'll meet two forms of discovery work:

- **Continuous discovery:** a weekly habit of the team that builds the product, so learning never stops.
- **A timeboxed discovery phase:** a project at the start of something new, so a team without customer contact gets evidence fast.

In ecommerce, the same term means how shoppers find items through search, and this guide is about software. If discovery is about deciding, the next question is what you're deciding about.

## Which four risks does product discovery test?

**Discovery tests four risks before delivery starts: value, usability, feasibility and business viability, each checked with the cheapest test that settles it.**

Marty Cagan of the Silicon Valley Product Group (SVPG) calls them the four big risks. Value asks whether customers will buy the product or choose to use it. Usability asks whether users can figure it out. Feasibility asks whether engineers can build it with the time, skills and technology available, and viability asks whether it works for the rest of the business. <!-- source: https://svpg.com/four-big-risks/ -->

SVPG assigns owners too: the product manager (PM) owns value and viability risk, the product designer owns usability risk, and engineering judges feasibility. Some models merge value and usability into "desirability", but in business-to-business (B2B) SaaS the buyer and the user often differ, so I test both.

The card below compares the 4 risks by question, cheapest test and what shifts when the feature uses AI.

<!-- visual: risk lens card. Four quadrants (value, usability, feasibility, viability), each with its question, its owner (PM, designer, engineering, PM) and its cheapest test, plus a thin outer ring labeled "AI feature" with one extra question per risk. Must not look like a pass/fail card. -->
![Product discovery risk lens card with four quadrants for value, usability, feasibility and viability, each with its owner and cheapest test, and an outer AI feature ring](/blog/product-discovery/product-discovery-four-risks.svg "The four product discovery risks, their owners and cheapest tests, with the AI feature ring")

<details class="astext"><summary>Show as text</summary>

Table: The four big risks by question, cheapest test and AI twist

| Risk | Question | Cheapest test | For an AI feature |
|---|---|---|---|
| Value | Will people use or buy it? | Customer interviews with 4 to 6 users. | Users must trust an answer that varies. |
| Usability | Can users figure it out? | A prototype test with 5 users. | Users need a way to check and correct answers. |
| Feasibility | Can the team build it? | An engineering spike on real inputs. | Quality depends on data and the model. |
| Viability | Does it work for the business? | A review with sales, finance and legal. | Cost per call and privacy law join the review. |

</details>

Which risk goes first? The one that would kill the idea, so put an owner's name next to each risk today.

## What are the stages of the product discovery process?

**The process moves through five stages: frame the outcome, understand users, map opportunities, test the riskiest assumptions, and decide.**

The stages echo the Double Diamond, which the UK's Design Council launched in 2004 with 4 phases: discover, define, develop and deliver. Discovery work covers the first diamond and the early part of develop. <!-- source: https://www.designcouncil.org.uk/resources/the-double-diamond/ --> The strip below shows where the work widens and narrows.

<!-- visual: diverge-converge stage strip. Five stages (frame, understand, map opportunities, test, decide) on a band that widens and narrows twice. Show only the width of the work per stage, not the outputs (the H3s name those). Must not look like the Design Council diamond. -->
![Product discovery process stages on a band that widens and narrows twice, from frame to decide](/blog/product-discovery/product-discovery-process-stages.svg "The five product discovery process stages, widening and narrowing twice")

<details class="astext"><summary>Show as text</summary>

- **Frame:** narrow, one outcome.
- **Understand:** wide, many user stories.
- **Map opportunities:** narrow, a few targets.
- **Test:** wide again, several solutions.
- **Decide:** narrow, one decision.

</details>

### 1. Frame the outcome

I start with the decision, not the research plan. The trio writes the desired outcome and a problem statement in plain words, such as "property managers sort maintenance requests by hand." The page keeps every later test aimed at one goal. In my two-week plan, framing gets 2 days.

### 2. Understand users

Customer interviews show how users handle the problem today, before anyone pitches a solution. I keep each interview to 45 minutes and ask about the last time the problem happened, because real events beat opinions. Listening gets 3 days and ends in interview notes and a journey map.

### 3. Map opportunities

Teresa Torres' opportunity solution tree organizes what you heard: the desired outcome at the top, then customer opportunities, then solutions, then assumption tests. <!-- source: https://www.producttalk.org/glossary-discovery-product-discovery/ --> The tree stops a team from jumping from one interview to one favorite feature. The output is an opportunity map with a few targets circled.

### 4. Test the riskiest assumptions

Assumption testing pays off when you test the assumption that would kill the idea first. A prototype test with real users checks value and usability, while a feasibility spike checks the build. The test block gets 2 days and ends in results marked passed, failed or unclear.

### 5. Decide

The trio writes a decision memo: build, change or stop, with the evidence behind each call. Validated ideas move into the product backlog, and failed ones go back to stage 3. The call takes 1 day, and a stopped idea counts as a result.

None of these stages waits for a sprint boundary, so the next question is how they sit inside agile.

## How does product discovery work in agile?

**The product discovery process in agile runs as a second track beside delivery: one team tests ideas while it ships, and only validated ideas enter the backlog.**

Many agile teams call this dual-track agile. Jeff Patton, who credits Desirée Sy with an early version, describes two kinds of work done by one team: "dual track, not duel track". <!-- source: https://jpattonassociates.com/dual-track-development/ --> Discovery and delivery need the same people, or the learning stays with whoever ran the interviews.

<!-- visual: dual-track loop. Two interlocking loops, discovery (frame, listen, test, decide) and delivery (plan, build, ship, measure), sharing one team in the middle. A "validated" gate passes ideas from the discovery loop into the backlog, and "measure" feeds new questions back into discovery. -->
![Dual-track agile loop with a discovery loop and a delivery loop sharing one team, joined by a validated gate into the backlog](/blog/product-discovery/product-discovery-dual-track.svg "Dual-track agile: the discovery loop and the delivery loop share one team")

<details class="astext"><summary>Show as text</summary>

- **Discovery loop:** frame, listen, test, decide.
- **Delivery loop:** plan, build, ship, measure.
- **Gate:** only validated ideas enter the backlog.
- **Feedback:** measure sends new questions back.

</details>

Who does the work? In Continuous Discovery Habits, Teresa Torres asks the product trio to talk with customers weekly at a minimum, and the trio is the team that builds the product. The product manager, designer and tech lead work together rather than handing off. <!-- source: https://www.producttalk.org/glossary-discovery-product-discovery/ -->

The table below compares the two tracks by question, output, cadence, people and finish line.

Table: Discovery track vs delivery track in dual-track agile

| Track trait | Discovery track | Delivery track |
|---|---|---|
| Question answered | Should we build this, and in what shape? | How do we build and ship it well? |
| Typical output | Test results and a decision memo. | Working, released software. |
| Cadence | A customer slot of 30 minutes every week. | Sprints of 1 month or less in Scrum. |
| Who | The product trio, plus users. | The whole team, led by engineering. |
| Done when | The riskiest assumption has passed a test. | The increment ships and meets its definition of done. |

<!-- source: https://scrumguides.org/scrum-guide.html (Sprints are fixed length events of one month or less) -->

For Scrum teams, I keep the discovery track on its own light board. A backlog item enters sprint planning only after its riskiest assumption has passed a test, which is my working agreement rather than a Scrum rule. Before launch, though, most teams need a timeboxed phase.

## How long should a product discovery phase last?

**A timeboxed discovery phase lasts from 5 days to 6 weeks, fits the start of something new, and hands over to continuous discovery once the team ships every week.**

A phase makes sense in three situations:

- **New product or market:** nobody has talked to these users yet, so a weekly habit has nothing to build on.
- **First AI feature:** data and model questions decide whether a design is even possible.
- **A board or investor deadline:** a date forces a decision, so a timebox protects it.

Length depends on the size of the question. A 5-day design sprint <!-- link: /services/startups/design-sprint/ (anchor "a 5-day design sprint", the post's one cross-hub link) --> answers one question in 5 days. A full discovery phase explores a product area over 3–6 weeks, with 10–20 interviews plus a data review. Our AI discovery workshop runs 1 to 2 weeks.

A discovery phase that drags on delays development without improving the decision. Too long looks like research that continues to avoid a call, and too short looks like a phase where no user saw anything. Before the phase closes, I book a standing customer slot of 30 minutes every week, so discovery continues past the gate. Pick your length from the size of the question and put the end date in the calendar on day 1.

## What changes in product discovery for AI features?

**An AI feature adds five checks to the four risks: the right tool, data readiness, model feasibility, evaluation and the cost of a wrong answer.**

On July 29, 2024, Gartner predicted that at least 30% of generative AI projects would be abandoned after proof of concept by the end of 2025. The causes it named were poor data quality, inadequate risk controls, escalating costs or unclear business value. <!-- source: https://www.gartner.com/en/newsroom/press-releases/2024-07-29-gartner-predicts-30-percent-of-generative-ai-projects-will-be-abandoned-after-proof-of-concept-by-end-of-2025 -->

A 2024 RAND report lists 5 root causes of AI project failure, and the first is a problem that is misunderstood or miscommunicated. <!-- source: https://www.rand.org/pubs/research_reports/RRA2680-1.html --> Both findings point to discovery failures, not engineering failures.

### Is AI the right tool?

No, not by default. I start from the user task, not the model, because a rule, a filter or better search sometimes does the job with less risk. The Google People + AI Guidebook, from Google's People + AI Research (PAIR) team, starts in the same place: user needs first, then whether AI adds value. <!-- source: https://codelabs.developers.google.com/codelabs/pair-guidebook -->

### Data readiness: can you use the data?

Data readiness asks four questions per AI use case. Does the data exist, can you access it, are you allowed to use it, and is it labeled? Permission is a US legal question: the California Consumer Privacy Act (CCPA) as amended by the California Privacy Rights Act (CPRA), the Health Insurance Portability and Accountability Act (HIPAA) for health data, and your customer contracts.

Gartner predicts that through 2026, organizations will abandon 60% of AI projects unsupported by AI-ready data, based on a survey of 1,203 data management leaders. <!-- source: https://www.gartner.com/en/newsroom/press-releases/2025-02-26-lack-of-ai-ready-data-puts-ai-projects-at-risk --> PAIR advises teams to translate user needs into data needs, then judge the data on predictive power, relevance, fairness, privacy and security. <!-- source: https://pair.withgoogle.com/chapter/People%20+%20AI%20Guidebook%20-%20Data%20Collection%20+%20Evaluation.pdf --> I run this as a data audit, one row per use case.

### Model feasibility: can a model do the task?

A feasibility spike puts real inputs through a candidate model before anyone designs a screen. Engineering owns the spike and reports answer quality, latency and cost per call. I give the spike 2 days in a two-week plan.

### Evaluation: what counts as a good answer?

AI evaluation means writing down what a good answer looks like before design starts. PAIR asks teams to agree how they will measure whether the feature works, weigh second-order effects and choose the precision vs recall trade-off. <!-- source: https://codelabs.developers.google.com/codelabs/pair-guidebook --> Precision is the share of flagged items that were right, and recall is the share of right items the model caught. In maintenance triage, missing an urgent leak hurts more than over-flagging a dripping tap, so the model evaluation favors recall.

### Cost of a wrong answer

Map who a wrong answer harms and how the user catches and corrects it, because the harm map feeds the design guardrails. The National Institute of Standards and Technology (NIST) gives US teams a frame here. Its NIST AI Risk Management Framework (AI RMF) says that after the Map function, a team has enough context to make an initial go/no-go decision. <!-- source: https://nvlpubs.nist.gov/nistpubs/ai/nist.ai.100-1.pdf -->

You can test value before any model exists. A Wizard of Oz prototype puts a person behind the interface to write the AI's answers, so 5 users can react while engineering runs the spike. The grid below lists the evidence that passes each check and who answers it.

<!-- visual: AI readiness check grid. Five AI checks as rows (right tool, data readiness, model feasibility, evaluation, cost of a wrong answer). Columns: evidence that passes, who answers. Traffic-light cells show the maintenance-triage example. Do not plot value against risk (the hub image already does). -->
![AI feature product discovery check grid with five rows for right tool, data readiness, model feasibility, evaluation and cost of a wrong answer, with the evidence that passes and who answers](/blog/product-discovery/ai-feature-discovery-checks.svg "Five AI feature product discovery checks with passing evidence and owners")

<details class="astext"><summary>Show as text</summary>

Table: Five AI feature checks with passing evidence and owner

| Check | Evidence that passes | Who answers |
|---|---|---|
| Right tool | A user task where a rule or search falls short. | PM and designer. |
| Data readiness | Data that exists and is accessible, permitted and labeled. | Data or engineering lead. |
| Model feasibility | A spike of 2 days on real inputs: quality, latency, cost per call. | Engineering. |
| Evaluation | A written good answer and a precision vs recall choice. | Trio and a domain expert. |
| Cost of a wrong answer | A harm map with a way to catch and fix errors. | PM, designer and legal. |

</details>

This is the part most teams skip. Our AI product discovery workshop <!-- link: /services/ai-products/ai-product-discovery-workshop/ (anchor "AI product discovery workshop", first UP link) --> runs these checks with your product lead, an engineering or data lead and a business owner.

## How do you do product discovery in two weeks?

**Split 10 days of work into five blocks, frame, listen, check risks, test and decide, and close each block with one written output.**

If you're asking how to do product discovery with a small team, start with the decision you need, not the method. Here's the plan I use, labeled by the question each block answers.

<!-- visual: 10-day timeline strip. Ten working days in five colored blocks (frame, listen, check risks, test, decide), each with its question and the one written output that closes it. A small "AI only" marker on days 6–7 for the data and model checks. -->
![Two-week product discovery plan as a timeline of ten working days in five blocks, each with its question and written output](/blog/product-discovery/two-week-product-discovery-plan.svg "A two-week product discovery plan: five blocks, one output each")

<details class="astext"><summary>Show as text</summary>

1. **Frame (2 days):** what decision are we making? Output: an outcome and problem statement built from analytics, support tickets and sales-call notes.
2. **Listen (3 days):** what do users do today? Output: interview notes and a journey map from 4 to 6 users.
3. **Check risks (2 days):** can we build it, and is the data there? Output: spike results, plus a data audit for AI.
4. **Test (2 days):** does the concept work? Output: findings from a prototype test with 5 users.
5. **Decide (1 day):** build, change or stop? Output: a decision memo and the exit-gate checklist.

</details>

The room holds the product trio plus a business owner who can make the call. The range of 4 to 6 users and the 5-user test match how we run our own workshop, where participants give about 2 hours a day. If you want a facilitator, here's how our facilitated version runs day by day <!-- link: /services/ai-products/ai-product-discovery-workshop/#what-happens-during-the-ai-product-discovery-workshop -->.

Two mistakes break the plan. Teams recruit users on day 3, so the listening block starts empty, or they build the prototype before the spike and test a concept engineering cannot ship. Book your 4 to 6 users today.

## Product discovery example: one AI idea, request to decision

**The example below is hypothetical: one board request for AI, run through every check, so you can watch each check change the plan before a screen exists.**

Take the property-management SaaS from the opening log. The grid below compares its three AI ideas across the four risks and five AI checks.

Table: Three hypothetical AI ideas checked against the four risks and five AI checks

| Check | Auto-replies | Lease summaries | Maintenance triage |
|---|---|---|---|
| Value | Pass. | Pass. | Pass. |
| Usability | Unknown. | Pass. | Pass. |
| Feasibility | Pass. | Unknown. | Pass. |
| Viability | Fail: legal exposure. | Unknown. | Pass. |
| Right tool | Unknown. | Pass. | Pass. |
| Data readiness | Pass. | Fail: scanned images, permission unclear. | Pass. |
| Model feasibility | Unknown. | Unknown. | Pass. |
| Evaluation | Unknown. | Unknown. | Pass: recall on urgent requests first. |
| Cost of a wrong answer | Fail: a wrong reply is a legal problem. | Unknown. | Pass: staff confirm each suggestion. |

Auto-replies fail on the cost of a wrong answer, because a confident, wrong reply about a lease becomes a legal problem. Lease summaries pass on value, but the leases exist only as scanned images. Nobody has confirmed the team is allowed to process them, so the idea parks until a data audit. Triage passes, and the team builds a narrow version: the model suggests a category and urgency, and staff confirm each one.

None of the three failed on design. Each check removed scope before anyone drew a screen.

Two real projects show the same habit. Before designing the Digno performance platform <!-- link: /case-studies/digno/ -->, an AI-scored product, we collected requirements from stakeholders and end users to pin down the scoring formula. Making an AI-generated score feel fair and readable was the design challenge. For Vocable's AI content editor <!-- link: /case-studies/vocable/ -->, we ran stakeholder interviews and kept the scope tight around the jobs writers named most often. Try the grid on your own shortlist, one column per AI idea.

## What goes on a product discovery checklist?

**The checklist is an exit gate: 12 yes/no checks, grouped by risk, that must pass before an idea moves from discovery into the delivery backlog.**

Two rules make the gate work. An unknown counts as a no, and a no sends the idea back to a test, not to the trash. The AI lane applies only when the feature uses a model.

<!-- visual: exit-gate checklist. A gate graphic with four risk lanes (value, usability, feasibility, viability) and one AI lane, 12 yes/no checks in total, and the rule "unknown = no; a no goes back to a test". Must not resemble a readout checklist card or a pass/fail acceptance card. -->
![Product discovery exit gate with four risk lanes and one AI lane holding 12 yes or no checks before an idea enters the backlog](/blog/product-discovery/product-discovery-checklist.svg "The product discovery exit gate: 12 checks in four risk lanes and one AI lane")

<details class="astext"><summary>Show as text</summary>

- **Value:** 1. A named user and task. 2. Evidence from the users you interviewed. 3. The outcome metric written down.
- **Usability:** 4. A prototype tested with 5 users. 5. The main task completed without help.
- **Feasibility:** 6. An engineering spike done, with known unknowns listed.
- **Viability:** 7. Cost and pricing impact estimated. 8. Legal and privacy review done (CCPA/CPRA, plus HIPAA for health data).
- **AI only:** 9. Data exists, is accessible and is permitted. 10. Evaluation criteria and the precision vs recall choice written. 11. Wrong-answer harm mapped, with a correction path. 12. Cost per call within budget.

</details>

The quiet lines fail most often. "Outcome metric written down" fails when the team agrees on a goal but never names the number that proves it. "Correction path" fails when the design shows an AI answer with no way to edit or reject it. Run the gate on your current top idea within 7 days and count the unknowns.

## Should you run product discovery in-house or with a partner?

**Keep discovery in-house when your product trio can meet customers weekly; use a design partner when you lack a designer, face a deadline or scope a first AI feature.**

In-house fits these situations:

- **A trio exists:** a PM, a designer and a tech lead can each give the work about 2 hours a day, so learning stays in the team.
- **Customers are reachable:** you can book 5 users this week without a recruiter, so tests stay on schedule.
- **The idea extends what you know:** a new report in a familiar workflow needs less outside challenge.

A design partner fits these:

- **No designer or researcher on staff:** someone has to run interviews and build a testable prototype in days.
- **A pet idea:** an outside facilitator asks the kill question without office politics.
- **A board wants AI by a date:** you need a data audit, a tested concept and a scoped plan the board can read.

The cost of discovery differs by route. In-house, you pay in the trio's time away from delivery; with a partner, you pay a fee plus a few hours a day from your leads.

Our workshop runs 1 to 2 weeks with your product, engineering and business leads for about 2 hours a day. The team ranks use cases by user value, data readiness, cost and risk of wrong answers, then tests the top concept with 5 users. You get 5 deliverables: a task map, a ranked use case list, a tested concept, a risk register and a scoped plan. Here's what a facilitated AI discovery workshop costs <!-- link: /services/ai-products/ai-product-discovery-workshop/#how-much-does-an-ai-product-discovery-workshop-cost -->: $8,000–$20,000.

You own the plan afterward, and some teams take it to their own team. When the decision is "build", the work moves into AI product design <!-- link: /services/ai-products/ (pillar) -->.

## Bottom line

**Product discovery buys a decision, and an AI feature needs five extra checks before anyone designs a screen.** Run the four risks first, then the AI lane, inside one timeboxed phase.

Copy the free product discovery checklist and run it on your next AI idea. If the AI lane comes back mostly unknowns, that is what our AI discovery workshop <!-- link: /services/ai-products/ai-product-discovery-workshop/ (second UP link, varied anchor) --> is for.

My recommendation: book a weekly customer slot of 30 minutes before the phase ends, so the gate opens onto a habit instead of a handoff.

## FAQs

### How is discovery different from delivery?

Discovery decides what to build and tests whether it is worth building, while delivery builds, ships and maintains it. In agile teams the two run in parallel, and only validated ideas move into the delivery backlog.

### How long does discovery take?

Continuous discovery never ends, because it is a weekly habit. A timeboxed phase runs from 5 days for a design sprint on one question to 3–6 weeks for a whole product area, and our AI discovery workshop takes 1 to 2 weeks.

### Who should be involved in discovery?

The product trio, meaning a product manager, a designer and a tech lead, plus a business owner who can make the call. For an AI feature, add the person who knows the data best for about 2 hours a day, because the data questions stall without them.

### Is discovery only for new products?

No. Live products need discovery for every big feature, pricing change or redesign of a key workflow. Adding AI to an existing workflow needs it most, because users already trust the current behavior.

### What is the difference between Jira and Jira Product Discovery?

Jira tracks delivery work such as epics, stories and sprints. Jira Product Discovery is Atlassian's separate tool for capturing, scoring and prioritizing ideas before they become delivery work, so it holds discovery's output without doing the discovery.
