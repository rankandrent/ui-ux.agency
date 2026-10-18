---
title: "How to design an MVP: from riskiest assumption to tested prototype"
metaTitle: "How to Design an MVP: Scope, Flows, Prototype, Test"
description: "How to design an MVP: pick the riskiest assumption, cut to one core flow, prototype that flow, test it with 5 users. Then book a free consultation."
date: 2026-10-18
updated: 2026-10-18
contributors: [umar-sarwar]
author: sahar-asif
type: Guide
services: [mvp-design-agency]
industries: []
tags: [how to design an mvp, design mvp, mvp ux design, mvp ui design, minimum viable product design]
keyword: "how to design an mvp"
funnel: mofu
takeaways:
  - "Fill in a one-page brief before any screen: target user, problem, riskiest assumption, type, core flow, must-haves, pass threshold and the go, change or stop action."
  - "The riskiest assumption picks the type: smoke test, concierge, Wizard of Oz, clickable prototype or single-feature product."
  - "Sort every idea into must-have, later or never with a written reason, so the first version serves one core user flow."
  - "Draw every screen in the flow with its empty, loading, error and success states, and meet WCAG 2.2 AA contrast (4.5:1) and target size from the first draft."
  - "Test the clickable prototype with 5 target users against thresholds you set beforehand; NN/g's model estimates 5 users find about 85% of usability problems."
image: /blog/how-to-design-an-mvp/cover.svg
draft: true
qa: pending
---

Eric Ries, author of The Lean Startup, says that despite its name the minimum viable product (MVP) ["is not about creating minimal products,"](https://leanstartup.co/resources/articles/what-is-an-mvp/) and that line is where learning how to design an MVP starts. Designing a first version means choosing the one assumption it tests, the user it serves and the single flow it needs, then drawing and testing that flow before code.

I lead user experience (UX) at ui-ux.agency, the design team of tkxel in Reston, Virginia, where our [MVP design agency](/services/startups/mvp-design-agency/) team turns founders' ideas into prototypes tested with real users. The misreading I watch for most is a founder designing a small product when what they need is a small test.

This guide follows the order I work in: a one-page brief, the type of MVP, the cut, the flow and its states, the visual bar, a 5-user test and the file developers build from.

## What does it mean to design an MVP?

**Designing an MVP is a learning job, not a drawing job: the design decides what the first version must prove, and a prototype proves it before development starts.**

Ries defines the MVP as the version of a new product that lets a team collect the maximum amount of validated learning about customers with the least effort, as the same Lean Startup Co. article explains. In the Lean Startup method, validated learning is how a team measures progress. The build-measure-learn loop produces it: build something small, measure what people do, learn whether the idea holds.

So when I explain how to design an MVP, I describe minimum viable product design as product design at its leanest. It applies user experience design and prototyping to one question at a time.

Design decides what the first version is and proves it on a clickable prototype; development builds what passed. I keep that order because a prototype change costs a designer an afternoon, while the same change in shipped code reopens finished work.

That order is how our team works: a clickable prototype tested with real users comes before anyone writes code.

Before any screen, though, one page of decisions.

## What should you decide before you design an MVP?

**Before you open a design tool, decide who the first user is, their problem in their words, the assumption that would sink the idea and the result that counts as a pass.**

Skipping these decisions is how teams build for a need nobody has. In CB Insights' analysis of 101 startup post-mortems, no market need topped the list at 42%, as Startup News reported in 2018. A later CB Insights edition covering 111 post-mortems put no market need at 35%, second to running out of cash at 38%, [as SmartCompany reported](https://www.smartcompany.com.au/startupsmart/analysis/startups-fail-founders-capital/). Both are founders' own explanations, yet the lesson holds: market need gets tested before design, not after launch.

In Y Combinator's Startup Library video on how to build an MVP, group partner Michael Seibel explains the first version, and his YC advice is to narrow it to a few early users and their most pressing problems. The feature set comes out of talking to users, not the other way around.

Founders who design MVP screens before they name the riskiest assumption usually end up redrawing them. So I put the decisions on one card, the one-page MVP brief, and fill it in before any screen exists. Here it is for a hypothetical booking app for independent dog groomers in Austin, Texas.

![One-page MVP brief card with 8 fields filled in for a hypothetical dog groomer booking app](/blog/how-to-design-an-mvp/mvp-one-page-brief.svg "The one-page MVP brief, filled in for a hypothetical dog groomer booking app")

<details class="astext"><summary>Show as text</summary>

This table lists the 8 fields of the one-page brief with illustrative values for the hypothetical groomer app.

Table: One-page MVP brief for a hypothetical dog groomer booking app

| Field | Illustrative value |
|---|---|
| Target user | Dog owners who book with an independent groomer in Austin, Texas. |
| Problem statement in their words | "I text my groomer three times to get one appointment." |
| Riskiest assumption | Dog owners will book a slot on their own instead of texting. |
| MVP type | Clickable prototype. |
| Core flow | Groomer's link, then service and dog size, slot, phone number and booking summary. |
| Must-haves | Service and size picker, open slots, a phone number field and a confirmation screen. |
| Pass threshold | 4 of 5 owners book without help in under 3 minutes. |
| Go, change or stop | Go: hand off for build. Change: fix the failing step and test 5 more users. Stop: return to the brief and test demand with a smoke test. |

</details>

The problem statement goes in the user's words because those words become your labels and test tasks later. Copy the 8 fields onto your own card before you read on, since every later step points back to them.

The riskiest assumption also tells you what kind of MVP to design.

## Which type of MVP should you design first?

**The riskiest assumption picks the MVP type: demand needs a smoke test, payment a concierge MVP, unbuilt tech a Wizard of Oz MVP, the flow a clickable prototype and repeat use a single-feature product.**

Each type answers one question and asks something different of design: copy and one form, a service script, a front end that looks real, a full flow with states or one working feature.

![Vertical decision tree routing the riskiest assumption to one of five MVP types](/blog/how-to-design-an-mvp/mvp-type-decision-tree.svg "MVP type decision tree: the riskiest assumption picks smoke test, concierge, Wizard of Oz, clickable prototype or single-feature product")

<details class="astext"><summary>Show as text</summary>

Start with one question: what would sink the idea if you were wrong?

- **Will anyone want it?** Landing page smoke test: one page with the promise and a sign-up form, counting who signs up.
- **Will they pay for the outcome?** Concierge MVP: a person delivers the service by hand, with a thin interface for requests.
- **Can the experience work before the tech exists?** Wizard of Oz MVP: the front end looks automated while a person works behind it.
- **Can users complete the core flow?** Clickable prototype: every screen of the flow with its states, tested before code.
- **Will they come back?** Single-feature product: one working feature in real use, counting repeat visits.

</details>

University of Calgary human-computer interaction course notes describe Wizard of Oz prototyping as testing a system that does not exist yet: a person behind the scenes makes the screen respond as the system would. For an artificial intelligence (AI) product MVP, I'd start there: a person writes the answers the model will later give, so you test the experience before the model is ready.

Is a clickable prototype an MVP? Yes, it is one type: a clickable prototype MVP tests whether users can finish the flow and see value in it, not whether they pay or return.

The tree assumes you already know the problem and the user. If you don't yet, I'd start one step earlier with a [5-day design sprint](/services/startups/design-sprint/), then come back here. Sprint, then first version, then full [startup product design](/services/startups/) is the usual path.

The groomer app's assumption is about the flow, so it lands on a clickable prototype. Find your own question in the tree and write the type on your card.

Whatever the type, the scope has to shrink to one flow.

## How do you cut an MVP down to one core flow?

**To design an MVP around one flow, keep only the features the core flow needs to test your riskiest assumption, and write down why every other idea moves to later or never.**

When founders ask me how to design an MVP quickly, my answer is to cut harder, not to draw faster. A common feature prioritization tool is the MoSCoW method, which sorts requirements into Must have, Should have, Could have and Won't have. The airfocus glossary notes that teams often use it to define an MVP that holds only the must-haves.

I use a stricter three-lane version: must-have, later and never, with one written reason per idea. That reason turns feature prioritization into a decision log instead of a vote. Our feature priority list deliverable uses the same three lanes.

![Cut board sorting a dog groomer booking app's feature list into must-have, later and never with a reason on each note](/blog/how-to-design-an-mvp/mvp-feature-cut-board.svg "Feature cut board for a hypothetical groomer app: must-have, later and never, each with its reason")

<details class="astext"><summary>Show as text</summary>

This table sorts the hypothetical groomer app's feature list into three lanes and gives the reason for each.

Table: Feature cut for a hypothetical dog groomer booking app

| Idea | Lane | Reason |
|---|---|---|
| Service and dog-size picker | Must-have. | Slot length depends on it. |
| Open-slot calendar | Must-have. | Booking alone is the assumption under test. |
| Phone number for text reminders | Must-have. | It replaces the texting owners do today. |
| Booking confirmation screen | Must-have. | It is the first result the owner needs to see. |
| Deposit payment | Later. | It tests payment, a different assumption. |
| Customer accounts and login | Later. | A phone number is enough for the first test. |
| Groomer admin dashboard | Later. | The groomer can read bookings from a simple list for now. |
| Reviews and ratings | Never. | They serve discovery, which this product does not do. |
| Loyalty points | Never. | No field on the brief depends on them. |

</details>

Four must-have features stay; everything else moves to later or never. My rule of thumb: the core flow from entry to first result fits on one storyboard. In one example we use with founders, a 40-idea wishlist shrinks to 4 screens and 1 core flow; that is an illustration, not a quota.

Five ideas creep back most often:

- **Login and settings before value:** they add 2 steps before the user sees anything the test measures.
- **Admin panels:** the first test runs with one user type, so the admin side can wait.
- **Notifications:** they prove retention, which a clickable prototype cannot test.
- **"Just one more" integration:** each adds edge cases to design before the core flow is proven.
- **Several user types in version one:** each role needs its own flow, and user types move the price more than anything else.

When we designed [Vocable](/case-studies/vocable/), an AI content marketing platform, we kept the scope tight around the jobs writers named most often and tied each screen to a pain point from stakeholder interviews. Sort your own list into the three lanes and count what is left in must-have.

With the cut done, draw the flow.

## How do you map the core user flow and wireframe it?

**When you design an MVP, map the core user flow from the first screen to the first result, then sketch each step as a low-fidelity wireframe with its empty, loading, error and success states.**

MVP UX design decides how the flow works; the user interface (UI) comes later. I map the steps before any screen: entry point, sign-up only if the test needs it, setup, the core action and the first result. Each step needs a reason from the brief, and the groomer app needs 5 steps.

Then I draw low-fidelity wireframes: grey boxes, real words, no color. The Usability Body of Knowledge's entry on rapid prototyping treats paper prototypes as a way to evaluate many ideas quickly at very little cost, so a team covers more screens and changes them cheaply. I draw one wireframe for every step of the user flow, and on our projects the gray-box flow goes to users before any visual design.

Every screen in the flow gets four states. A first session starts with no data, so each empty state should lead straight to the first result. An error state says what went wrong and how to recover, and no onboarding screen goes in unless the test needs one.

![Storyboard of a 5-screen booking flow with empty, loading, error and success states under each screen](/blog/how-to-design-an-mvp/mvp-core-flow-states.svg "Core user flow storyboard for a hypothetical groomer app, with four states under each screen")

<details class="astext"><summary>Show as text</summary>

The hypothetical groomer app's 5 screens and their states:

1. **Groomer's page (entry).** Empty: no open slots this week, with a waitlist option. Loading: service list placeholder. Error: page not found, with the groomer's phone number. Success: services listed.
2. **Service and dog size.** Empty: no size picked yet. Loading: price updating. Error: size not offered. Success: price and length shown.
3. **Slot picker.** Empty: no slots that day, next open day suggested. Loading: calendar placeholder. Error: slot just taken. Success: slot held.
4. **Phone number.** Empty: blank field with an example format. Loading: sending the code. Error: invalid number. Success: number verified.
5. **Booking summary (first result).** Empty: not used, since the screen only appears with a booking. Loading: confirming. Error: booking failed and slot released. Success: date, time and reminder note.

</details>

Pick the platform where your first user does the job. Dog owners book from their phones, so the groomer app starts as a mobile web app MVP. Draw your flow as a row of boxes and list the four states under each before you add any color.

Grey boxes prove the flow; then decide how finished the screens must look.

## How polished should MVP UI design be?

**MVP UI design should look finished enough that users judge the idea, not the rough edges: a light brand style, consistent components, real copy and an accessible baseline.**

Ries's warning about minimal products applies to quality too. Viable means usable and credible: early adopters forgive a missing feature, but a flow that breaks halfway ends the session.

![Fidelity ladder from sketch to high-fidelity prototype, with what each rung tests and who sees it](/blog/how-to-design-an-mvp/mvp-ui-fidelity-ladder.svg "UI fidelity ladder: what each rung tests and who sees it, from sketch to high-fidelity prototype")

<details class="astext"><summary>Show as text</summary>

This table compares the four fidelity rungs by what each tests, who sees it and relative effort.

Table: UI fidelity ladder for a first version

| Rung | What it tests | Who sees it | Relative effort |
|---|---|---|---|
| Sketch | Whether the flow makes sense at all. | You and your cofounder. | Lowest. |
| Low-fidelity wireframe | Step order and labels. | Your team. | Low. |
| Clickable gray-box | Whether users finish the core flow. | 5 target users. | Medium. |
| High-fidelity prototype | Trust, clarity and the pitch. | Test users and investors. | Highest. |

</details>

A gray-box prototype is enough for the first usability round. Investors see the high-fidelity prototype, because they read polish as a signal.

I build a starter component library instead of a full design system: buttons, fields and cards with their states. Developers build each component once and reuse it, which speeds the first build; our interface design deliverable includes one.

Accessibility belongs in the first draft. I design to Web Content Accessibility Guidelines (WCAG) 2.2 AA, with the Americans with Disabilities Act (ADA) and Section 508 as the US frame. Under [success criterion (SC) 1.4.3](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html), text needs a contrast ratio of at least 4.5:1 and large text 3:1. Under [SC 2.5.8](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html), pointer targets need at least 24 by 24 Cascading Style Sheets (CSS) pixels or enough spacing, and links inside a sentence are exempt. Fixing contrast after launch means touching every component, so I set color tokens that pass from the start.

For [Elia Wellness](/case-studies/elia-wellness/), a learning and wellness app for adults over 50, we designed plain navigation and readable layouts. Its questionnaire before each course uses big tap areas and simple rating scales on tablets. Check your palette's contrast before you design a second screen.

Now put the prototype in front of 5 people.

## How do you test your MVP prototype with 5 users before code?

**Give 5 target users the clickable prototype and 3 to 5 real tasks, score each task against a threshold you wrote down first, then decide go, change or stop.**

Nielsen Norman Group (NN/g) explains why 5 is enough. In [Jakob Nielsen's model](https://www.nngroup.com/articles/why-you-only-need-to-test-with-5-users/), the share of usability problems found with n users is 1 − (1 − L)^n, where L averaged 31% across projects. At that rate, five users find about 85% of the problems, and NN/g advises several small rounds of testing over one big study. On our projects, 5 to 8 target users try the prototype before any code.

Recruit from the target user on your card, not from friends. Two screener questions do it for the groomer app: do you own a dog, and did you book a groomer in the last 3 months?

Figma's help center guides to prototyping and sharing explain that the first connection between two frames creates a flow starting point, and that you can copy a link to that starting point for testing. Write a test script with each task in the user's words. Then run the clickable prototype as a usability test, moderated over video calls or unmoderated in a tool such as Maze.

![Usability test scorecard with 4 tasks, thresholds, results from 5 participants and a go or change verdict per task](/blog/how-to-design-an-mvp/mvp-usability-test-scorecard.svg "Usability test scorecard for a hypothetical groomer app: thresholds set before the sessions, verdict per task")

<details class="astext"><summary>Show as text</summary>

This illustrative scorecard shows the groomer app's test; the founder set the thresholds before the sessions, and the results are example data.

Table: Usability test scorecard for a hypothetical groomer app

| Task | Success measure | Threshold | Result (example) | Verdict |
|---|---|---|---|---|
| Book a nail trim for a small dog | Finishes without help. | 4 of 5 users. | 4 of 5. | Go. |
| Find the next open Saturday slot | Finds it in under 1 minute. | 4 of 5 users. | 2 of 5. | Change. |
| Enter a phone number for reminders | No error on the first try. | 4 of 5 users. | 5 of 5. | Go. |
| Say what happens after booking | Mentions the reminder text. | 3 of 5 users. | 3 of 5. | Go. |

</details>

The success threshold decides go, change or stop for each task. A change verdict means fixing that step and running another round of 5 users. A stop verdict sends you back to the brief, not to more screens: if most owners still want to text, test demand first.

Stuck on change after two rounds, or unsure why users fail? Our team designs the first version with research, a clickable Figma prototype tested with 5 to 8 target users and a build-ready handoff. The whole process runs 4 to 8 weeks, from discovery to handoff.

A pass means the design is ready for developers, if the file is.

## What should developers get when the design is done?

**Developers should get a build-ready file: annotated screens with every state, component and spacing specs, the clickable prototype link and a short log of what was cut and why.**

The developer handoff is where a tested design either survives the build or gets reinterpreted. My handoff file holds:

- **Annotated screens** for the core user flow, so developers read intent instead of guessing it.
- **Empty, loading, error and success states** for each screen, because those are the screens builds skip.
- **Component specs and design tokens** for color, type and spacing, so the component library maps to code.
- **The prototype link** with its flow starting points, so anyone can click through the flow.
- **A decision log** of what was cut and why, so the later list does not creep back in.
- **Open questions and edge cases**, each with an owner, so nothing waits on a meeting.
- **Analytics events** for the threshold metric, so the build measures what the test measured.

The handoff to developers goes to whoever builds; if you need a build team, tkxel's engineering team builds from our file.

Before you hand over, click through the prototype link as a developer would and tick each line above.

Working out how to design an MVP alone is possible; here is where founders usually want help.

## When does designing an MVP need a design team?

**You need a design team to design an MVP when tests fail for reasons you can't see, investors expect a credible prototype by a date or the product serves several user types.**

- **Two change verdicts in a row:** the scorecard shows where users fail, not why, and a designer who did not draw the flow reads the sessions without your assumptions.
- **A pre-seed round date:** investors judge the prototype and the test results together, so both need to be ready on the same day.
- **A marketplace or multi-role product:** each role needs its own flow and states, which multiplies the screens.
- **An AI feature whose behavior must be simulated:** a Wizard of Oz setup needs scripted answers and error states for replies the model gets wrong.
- **Nobody on the team has run usability testing:** moderating without leading is a skill, and one leading question can turn a stop into a false go.

With our team, the work takes 4 to 8 weeks. You can check [what MVP design costs with our team](/services/startups/mvp-design-agency/#how-much-does-an-mvp-design-agency-cost) on the same page that compares an agency, a freelancer and a developer-only team. If two of these bullets describe you, bring the brief and the scorecard to that conversation.

## Bottom line

**How to design an MVP, in short: a brief, a type, a cut, a flow with states, a 5-user test against your thresholds and a build-ready file.**

If your scorecard says change twice, [book a free consultation](/contact/). Vocable shows how our team keeps a first version tight around the jobs its users named, and we can design your first version with you. You'll hear from a senior designer within one business day, ET.

I'd rather see a founder test one gray-box flow with 5 strangers than polish ten screens nobody has tried.

## FAQs

### How many screens should an MVP have?

As few as the core user flow needs to reach the first result. Count the steps from entry to that result, design each one with its four states and move everything else to version two. The groomer example needs 5 screens for its 5 steps.

### Can I design an MVP without a designer?

Yes. A founder can write the brief, sketch the flow and test a clickable prototype in Figma alone. The usual gaps are screen states, accessibility and a build-ready handoff file, which is where a designer saves rework.

### Is a clickable prototype enough for a first version?

Yes, when the riskiest assumption is whether users can complete the core flow or want its result. No, when you need to know whether they will pay or come back; that takes a concierge MVP or a working single-feature MVP.

### Should the first version be web or mobile first?

Design for the device your first users already use for the job. A business-to-business (B2B) workflow tool usually starts on the web, while an on-the-go consumer habit usually starts as a mobile app MVP. Design one platform first and add the second after the test passes.

### How long does the design work take?

A founder working alone can sketch and test a first flow in a few weeks. With our team it takes 4 to 8 weeks, including research, a clickable prototype, tests with 5 to 8 users and developer handoff.

### What is MVP UX design?

MVP UX design is the part of the work that decides the user, the core flow and how each screen behaves, before the visual layer. It is tested on low-fidelity wireframes first, and MVP UI design follows once the flow passes.
