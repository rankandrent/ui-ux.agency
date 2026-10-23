---
title: "Product discovery techniques: 14 methods and the risk each one tests"
metaTitle: "Product Discovery Techniques: 14 Methods Matched to Risk"
description: "Product discovery techniques matched to the risk they test: 14 methods with the time, sample size and pass signal for each, so every test ends in a decision."
date: 2026-10-23
updated: 2026-10-23
contributors: [umar-sarwar]
author: sahar-asif
type: Checklist
services: [ai-product-discovery-workshop]
industries: []
tags: [product discovery techniques, product discovery methods, software product discovery, b2b product discovery, assumption testing techniques]
keyword: "product discovery techniques"
funnel: mofu
takeaways:
  - "Pick product discovery techniques by the open risk: value, usability, feasibility, viability or, for AI features, the quality of model answers."
  - "Value evidence gets stronger as it moves from what people say to what they do to what they pay, and its cost rises with it."
  - "Write the pass signal on a test card before the test runs, so nobody can move the bar once the data arrives."
  - "Plan 5 users per prototype round and about 15 participants for a card sort, the numbers Nielsen Norman Group publishes."
  - "Our AI discovery workshop runs 4 of the 14 techniques in 5 to 10 working days."
image: /blog/product-discovery-techniques/cover.svg
draft: true
qa: pending
---

Most product discovery techniques work fine; teams get burned when they pick one that answers a different question from the one that can kill the idea. Say a team runs a polished prototype test of a new reporting screen with 5 users, and every one finishes the task. The screen ships and sits unused: the test proved people can use it, while the open question was whether anyone needed it.

In software product discovery, the risk decides the method, not the team's habit. I check that match first whenever I review a discovery plan at [ui-ux.agency, part of tkxel](/about/), where designers have worked on 200+ products since 2017. For artificial intelligence (AI) features, our [AI product discovery workshop](/services/ai-products/ai-product-discovery-workshop/) keeps the same order: interviews and a data-readiness score come before a concept meets 5 users.

If you need the definition and stages first, start with [our product discovery guide](/blog/product-discovery/). Below are 14 techniques sorted by what they test, each with its time, sample size, output and pass signal.

## Which product discovery techniques fit each risk?

**Match product discovery techniques to the risk that would sink the idea: interviews and fake doors for value, prototype tests for usability, spikes for feasibility and pricing tests for viability.**

[Marty Cagan](https://www.svpg.com/four-big-risks/), who founded the Silicon Valley Product Group (SVPG), names four risks: value (will customers buy or choose it), usability (can they figure it out), feasibility (can engineers build it given their time, skills and tools) and business viability (does it work for sales, legal, monetization and brand). He gives value and viability to the product manager (PM), usability to the designer and feasibility to engineering. [Teresa Torres](https://www.producttalk.org/glossary-discovery-assumption/) sorts assumptions into five categories: desirability, viability, feasibility, usability and ethical. The ethical category asks whether the idea causes harm, and for model-driven features it holds the cost of a wrong answer.

Teams call these discovery methods, discovery tests, validation techniques or assumption tests. Whatever the label, they are the evidence side of product management, and they borrow from user research, user-centered design and experimentation. Product discovery methods differ in cost and in strength of evidence, so the matrix gives each technique its time, sample, output and the pass signal I set before running it. Times and samples are my planning values; the published sample sizes are cited in the usability section.

![Toolkit matrix of 14 product discovery techniques grouped under five risk bands, value, usability, feasibility, viability and AI answers, with the planning time for each technique](/blog/product-discovery-techniques/product-discovery-techniques-toolkit-matrix.svg "Product discovery techniques toolkit matrix: 14 methods grouped by the risk each one tests")

<details class="astext"><summary>Show as text</summary>

This table lists the 14 techniques grouped by what they test, with my planning time, sample, output and pass signal for each.

Table: Product discovery techniques grouped by what they test, with time, sample, output and pass signal

| Technique | Tests | Time | Sample | Output | Pass signal |
|---|---|---|---|---|---|
| Customer interviews. | Value. | 45 minutes per session. | 4 to 6 users per user group. | Patterns and quotes from recent, real episodes. | Most users describe a recent, real instance without prompting. |
| Analytics and support-ticket review. | Value. | 1 to 2 days. | Records you already hold. | How often the problem shows up. | The problem clears the frequency bar you set. |
| Opportunity solution tree. | Value. | 2 hours per update. | Your research notes. | Outcome, opportunities, solutions and tests on one map. | Every opportunity traces to something users said or did. |
| One-question survey. | Value. | 1 to 2 weeks in the field. | Enough in-product answers to compare segments. | The size of a pattern you already heard. | The share agreed in advance picks the pattern. |
| Fake door test. | Value. | 1 to 2 weeks live. | Live product traffic. | Click-through and waitlist sign-ups. | Clicks and sign-ups clear the bar set before launch. |
| Prototype usability test. | Usability. | 45 minutes per session. | 5 users per round. | Task success, errors and quotes. | Most users finish the core task without help. |
| Card sorting. | Usability. | 1 week. | 15 participants. | The groupings and labels users expect. | Clear groups form for most cards. |
| Tree testing. | Usability. | 1 week. | A remote sample of target users. | Findability per task in the proposed menu. | Most people reach each target on their first path. |
| Engineering spike. | Feasibility. | 1 to 2 days. | Real inputs from the product. | Known unknowns and an estimate. | The one question is answered on real inputs. |
| Data audit. | Feasibility. | 2 to 3 days. | One row per use case. | Data status per use case. | Each use case has data that exists, is reachable, is permitted and is labeled. |
| Stakeholder viability review. | Viability. | 30 to 60 minutes. | Sales, finance, legal and support leads. | Blockers and conditions with owners. | No blocker stays open. |
| Pricing test. | Viability. | 2 weeks. | Target buyers. | Signed letters, pilot terms or price reactions. | Buyers commit a signature or a seat at the stated price. |
| Wizard of Oz prototype. | AI answers. | 1 week. | 5 users. | Reactions to realistic answers, good and bad. | Users act on good answers and catch the wrong ones. |
| Evaluation set. | AI answers. | 2 to 3 days. | Real inputs, each with a written good answer. | A score per input. | Scores clear the bar the team wrote down. |

</details>

Value comes first in the matrix because most teams skip it, so start your plan there.

## Which techniques test value risk before anything is built?

**Five product discovery techniques test value risk, and the stronger ones move from what people say toward what they actually do.**

[Nielsen Norman Group (NN/g)](https://www.nngroup.com/articles/which-ux-research-methods/) maps 20 user experience (UX) research methods on 3 dimensions, and the first one splits attitudinal from behavioral: what people say against what they do. I rank value evidence on that line and add one rung above it, money. The ladder shows the order.

![Say, do, pay ladder ranking value techniques from analytics and support-ticket review and customer interviews up to a fake door test and a pricing test, each rung tagged attitudinal, behavioral or money](/blog/product-discovery-techniques/product-discovery-techniques-value-ladder.svg "Say, do, pay ladder: value techniques ranked by strength of evidence")

<details class="astext"><summary>Show as text</summary>

1. What already happened: analytics and support-ticket review.
2. What users say about the past: customer interviews.
3. What many users say: a one-question survey.
4. What users click: a fake door test.
5. What buyers pay: a pricing test (see the viability section).

</details>

Customer interviews come first in most of my plans. My interview guide asks about the last time the problem happened, never "would you use this?", and I talk to 4 to 6 users per user group for about 45 minutes each. Interviews produce patterns and quotes, and they pass when most people describe a recent, real instance unprompted. For a model-driven idea, I add one question: where would a wrong answer hurt you?

Analytics and support-ticket review costs nothing new, because you already own the records. It shows how often the problem appears, which is past behavior rather than a promise. An opportunity solution tree then turns research notes into a map with four levels: the desired outcome at the root, then opportunities, then solutions, then assumption tests. The tree stops a team from testing a solution no user problem asked for, and updating it takes me about 2 hours after each round of conversations.

A one-question survey sizes a pattern the conversations surfaced, with a single question inside the product for 1 to 2 weeks. It needs traffic, which young business-to-business (B2B) products rarely have (the FAQs cover that case). A fake door test puts a button, banner or page in the product that looks like a live feature. A click opens an honest page that says the feature is not built yet and offers a waitlist.

Clicks show curiosity, not commitment, so I set the click-through bar before launch and keep the door live for 1 to 2 weeks. Group formats work too. For [the Mass Media Co. platform revamp](/case-studies/mass-media-co/), we began with a discovery workshop where stakeholders and end users worked with us on the product definition, the strategy, the information architecture (IA) and the user flows.

Trap: asking people whether they would use a feature. The answer is attitudinal and optimistic, so it sits at the bottom of the ladder. Once users want the feature, the next question is whether they can use it.

## How do you test usability before engineers write code?

**Test usability with a clickable prototype and 5 users per round; use card sorting or tree testing when the doubt is where things live, not how screens work.**

A prototype usability test needs a clickable Figma file, a task script and target users. In [Jakob Nielsen's analysis](https://www.nngroup.com/articles/why-you-only-need-to-test-with-5-users/), one user reveals about 31% of usability problems on average across many projects, and each added user mostly repeats what earlier users showed. That is why I test a prototype with 5 users per round, fix what they hit and test again. The pass signal: most users finish the core task without help.

Card sorting asks people to group and name content cards, which shows the labels they expect. For card sorting, [NN/g recommends 15 participants](https://www.nngroup.com/articles/card-sorting-how-many-users-to-test/) for most projects, because Tullis and Wood's data reached a 0.90 correlation at that size. Tree testing runs the reverse check: people get tasks and try to find items in a proposed menu hierarchy. It shows whether a structure works before anyone draws screens on it.

On [TradeZella's trading journal redesign](/case-studies/tradezella/), stakeholder sessions came first. We then rebuilt the flows around the widgets traders use most, and traders tried the design before it went live.

Trap: testing with teammates or friends who already know the product. They finish every task, and the pass tells you nothing. A concept that tests well can still be unbuildable, so check feasibility next.

## Which product discovery techniques settle feasibility?

**Two product discovery techniques settle feasibility: an engineering spike that runs real inputs through a quick build, and a data audit that checks every planned use of data.**

An engineering spike tests one feasibility question with a timeboxed build, such as "can we parse these scanned invoices fast enough?" Engineering owns it and I give it 1 to 2 days; it returns known unknowns plus an estimate. It passes when the one question gets an answer on real inputs, not on tidy sample files.

A data audit takes me 2 to 3 days; it gives each use case one row and asks four questions: does the data exist, can the product reach it, is this use permitted and is it labeled? Data without permission for the new use fails the audit even when it sits in your warehouse. In the US that is a legal question as much as a technical one: health records fall under the Health Insurance Portability and Accountability Act (HIPAA). California customers' data falls under the California Consumer Privacy Act (CCPA), as amended by the California Privacy Rights Act (CPRA).

Trap: prototyping before the spike, so users fall for a concept engineering cannot ship. Buildable and usable still leaves the business question, so book the viability check next.

## How do you check business viability early?

**Check viability with a stakeholder review of sales, finance, legal and support constraints, and with a pricing test that asks buyers to commit before you build.**

Cagan's viability concerns cover fit with go-to-market and sales channels, partner contracts and legal compliance, monetization and the brand promise. I walk the concept past sales, finance, legal and support leads in one session of 30 to 60 minutes, and I log each blocker with its owner. For a model-backed feature, the cost per model call joins that review, because a feature people love can still lose money at volume.

A pricing test is the top rung of the value ladder. Viability and pricing meet here: a buyer who signs at your price has told you more than any conversation. I run it for 2 weeks: a price on the fake door's waitlist page, a request for a signed letter of intent or a paid pilot that bills only once the pilot starts. Never take payment for a feature that does not exist.

Trap: inviting legal at the end, when the concept has fans and changing it costs a redesign. AI features need two more techniques, because the answer changes every time the model runs.

## Which product discovery techniques change for AI features?

**AI features add two techniques: a Wizard of Oz prototype, where a hidden person plays the model, and an evaluation set that scores real output against a written bar.**

NN/g describes the [Wizard of Oz method](https://www.nngroup.com/articles/wizard-of-oz/) as moderated research where a user works with an interface that seems autonomous but is fully or partly run by a hidden person. It fits conversational user interfaces (UIs) and interfaces built on learning algorithms. In my Wizard of Oz sessions the model is a teammate who types answers from a script, including some wrong ones on purpose. I run 5 users within 1 week, tell each participant afterward that a person was answering and pass the concept when users act on good answers and catch the bad ones.

An evaluation set is a batch of real inputs, each with a written definition of a good answer, scored before design starts; building one takes me 2 to 3 days. My evaluation rubric names the failures that matter most, such as a confident wrong answer in a refund decision. The pass signal is the bar the team wrote down; if the model misses it, no interface will rescue the feature. Our guide lists [the five extra checks an AI feature needs](/blog/product-discovery/#what-changes-in-product-discovery-for-ai-features), so I won't repeat them here.

No designer free to fake a believable model this week? In our workshop, designers build the leading use case into a clickable concept that shows realistic model output, then put it in front of 5 users. Every technique above only works if you decide what counts as a pass before it runs.

## How do you set a pass signal before a test runs?

**Write a test card before the test: the hypothesis, the technique, the metric and the result that proves you right, so nobody can move the bar after the data arrives.**

[Strategyzer's Test Card](https://assets.strategyzer.com/assets/resources/the-test-card.pdf) has 4 fields: "We believe that", "To verify that, we will", "And measure" and "We are right if". In Strategyzer's terms the card holds a hypothesis, a test, a metric and criteria, and the pass signal goes on it before launch. Keep each card to a single assumption, not a whole idea, so the result points at one belief.

Say you run a B2B scheduling software as a service (SaaS) product for US restaurant groups and want to test an AI shift-swap suggestion. Here is the card, filled in before the fake door goes live.

![Filled test card for a hypothetical AI shift-swap suggestion with hypothesis, test, metric and pass criteria, stamped set before launch](/blog/product-discovery-techniques/product-discovery-techniques-test-card.svg "Filled test card for a hypothetical AI shift-swap fake door test")

<details class="astext"><summary>Show as text</summary>

Hypothetical example, B2B scheduling product for restaurant groups:

- We believe that: managers want the schedule to suggest who can cover a dropped shift.
- To verify that, we will: show a "Suggest a swap" button on the shift screen for 2 weeks, leading to a not-built-yet page with a waitlist.
- And measure: the share of managers who see the button and click it, and waitlist sign-ups.
- We are right if: clicks and sign-ups reach the number the team wrote on this card before launch.

</details>

The bar is the team's own choice, not an industry benchmark. A result that lands just under it is a retest with a sharper design, never a quiet pass. I record every call in a decision log with its card attached, so the next round starts from evidence. With pass signals written, the next decision is which test to run first.

## In what order should you run product discovery techniques?

**Run the cheapest technique that would kill the idea first, and save expensive, strong evidence such as pricing tests and Wizard of Oz sessions for ideas that already passed.**

Each rung of stronger evidence costs more to buy, in money, time or goodwill. Analytics review and user conversations sit low on both axes; a pricing test sits at the top right. I move up and to the right only after a pass, which keeps weak ideas from eating a big budget.

![Scatter chart of 14 product discovery techniques by low, medium and high cost against evidence, rising up and to the right, with the prototype usability test ringed as the design sprint](/blog/product-discovery-techniques/product-discovery-techniques-cost-evidence.svg "Cost against evidence: where each of the 14 product discovery techniques sits")

<details class="astext"><summary>Show as text</summary>

This table places each technique by relative cost, the kind of evidence it gives and the moment to run it.

Table: The 14 techniques by cost, evidence and when to run them

| Technique | Cost | Evidence | Run it when |
|---|---|---|---|
| Analytics and support-ticket review. | Low. | Past behavior. | First, before any new research. |
| Customer interviews. | Low. | What people say about the past. | The problem itself is unproven. |
| Opportunity solution tree. | Low. | Synthesis of existing evidence. | Research notes pile up. |
| One-question survey. | Low. | What many people say. | A pattern needs sizing. |
| Card sorting. | Low. | What people expect. | Labels or grouping are unclear. |
| Tree testing. | Low. | What people do in a menu. | A new hierarchy is drafted. |
| Stakeholder viability review. | Low. | Expert judgment. | A concept exists to show. |
| Engineering spike. | Medium. | What the build does. | One technical doubt blocks the plan. |
| Data audit. | Medium. | What the data allows. | A feature depends on data. |
| Evaluation set. | Medium. | What the model does. | An AI feature is planned. |
| Fake door test. | Medium. | What people click. | Users described the problem. |
| Prototype usability test. | Medium. | What people do on screens. | The flow is drawn. |
| Wizard of Oz prototype. | High. | What people do with AI answers. | The evaluation set passed. |
| Pricing test. | High. | What people pay. | Value and usability passed. |

</details>

A [design sprint](/services/startups/design-sprint/) bundles several techniques into 5 days. The [Google Ventures (GV) sprint](https://www.gv.com/sprint/) moves through map, sketch, decide, prototype and test, ending on Friday with customer interviews where the team watches people react to the prototype. I use one when a team faces a critical question and has a concept clear enough to mock up.

After the first round, the techniques keep running. Teresa Torres's product trio (a PM, a designer and an engineer) holds a customer conversation every week, so the patterns stay current. For an AI feature, four of these techniques fit into one short workshop.

## How do these techniques fit into one AI discovery workshop?

**Our AI discovery workshop runs four of these techniques over 5 to 10 working days: interviews, use-case scoring with a data check, a realistic concept and a 5-user test.**

Each tray below holds the matrix techniques that one workshop step runs, with the days the [four workshop steps](/services/ai-products/ai-product-discovery-workshop/#what-happens-during-the-ai-product-discovery-workshop) take.

![Four workshop trays showing the days, the product discovery techniques and the output of each step of the AI discovery workshop](/blog/product-discovery-techniques/product-discovery-techniques-workshop-bundle.svg "AI discovery workshop trays: the techniques each of the four steps runs")

<details class="astext"><summary>Show as text</summary>

This table maps each workshop step to its days, the techniques it runs and what it produces.

Table: AI discovery workshop steps and the techniques each one runs

| Workshop step | Days | Techniques it runs | Output |
|---|---|---|---|
| Task mapping. | Days 1–2. | Customer interviews with 4 to 6 users. | A task map of jobs, pain points and data per task. |
| Use case ranking. | Days 3–4. | Use-case scoring with a data readiness check. | A ranked use case list. |
| Concept sketching. | Days 5–7. | A clickable concept with realistic model output, close kin of a Wizard of Oz prototype. | A concept ready to test. |
| Test and plan. | Days 8–10. | Prototype usability test with 5 users. | A tested concept, a risk register and a scoped plan. |

</details>

We run the four as one workshop: your product lead, a business owner and someone from engineering or data join for about 2 hours a day. You leave with a tested concept, a risk register and a scoped plan. If you continue, the concept moves into our [AI product design](/services/ai-products/) work.

Before your next round, I'd write one open risk, one technique and one pass signal on a single card, and run nothing that lacks all three.

## FAQs

### How many product discovery techniques should one round use?

Two or three, one for each question still open, starting with the one that would kill the idea. More techniques in a single round slow the decision and rarely add evidence that changes it.

### Are product discovery techniques the same as UX research methods?

No. They overlap on user conversations, surveys and usability tests, but discovery also needs feasibility and viability checks such as spikes, data audits and pricing tests. Those sit outside a research map like NN/g's.

### Is a fake door test honest to users?

Yes, when the page behind the door says plainly that the feature is not built yet and offers a waitlist or a feedback box. Hiding that, or taking payment for something that does not exist, damages trust.

### Can you run product discovery techniques without a designer?

Yes, for user conversations, analytics review, surveys and spikes. Prototype tests and Wizard of Oz sessions need someone who can build a believable mockup in days, which is where a design team earns its place.

### Which techniques work for B2B product discovery with few customers?

Interviews, Wizard of Oz or concierge-style pilots and paid pilot letters work with a handful of accounts. Surveys and fake doors need traffic a young B2B product rarely has, so I recruit through accounts the sales team already talks to.
