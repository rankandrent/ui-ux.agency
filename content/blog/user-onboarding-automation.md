---
title: "User onboarding automation: what to automate and what to keep human"
metaTitle: "User Onboarding Automation: What to Automate and Keep Human"
description: "User onboarding automation for SaaS: which moments to automate, which to keep human, how to design triggers and measure lift. Then book a free consultation."
date: 2026-10-16
updated: 2026-10-16
contributors: [umar-sarwar]
author: talha-saleem
type: Guide
services: [saas-onboarding-design]
industries: []
tags: [user onboarding automation, automated user onboarding, onboarding automation saas, automated onboarding emails, ai user onboarding]
keyword: "user onboarding automation"
funnel: mofu
takeaways:
  - "Automate moments that are frequent, the same for the whole segment and cheap to get wrong; route the rest to a person."
  - "Every rule has 6 parts: trigger, segment, message job, channel, exit or suppression, and a frequency cap."
  - "Behavior-based triggers come first; a time-based fallback catches only users who never produce the event."
  - "Prove lift against a holdout group that gets no automated messages, then check each rule for dismissals and complaints."
  - "A rule that explains a confusing screen is a patch, and the fix belongs in the screen."
draft: true
qa: pending
---

Here's a user onboarding automation rule from a hypothetical US revenue-analytics software as a service (SaaS) product: "When a trial is 3 days old and the setup checklist is under half done, send 'Need a hand getting started?'" User onboarding automation is that kind of rule at scale: logic that watches what new users do and sends the next nudge without anyone picking each message.

This rule fired on the account's most active user. The admin had connected the company's data warehouse through the application programming interface (API), not the setup screen. That path sent no event, so the checklist still read 1 of 4 steps done. The email asked an expert whether she needed a hand.

I'm Talha Saleem, a senior user interface (UI) and user experience (UX) designer at ui-ux.agency, the design team of tkxel, which has designed 200+ products since 2017. When I review rules like this one, the copy is rarely the problem. The problem is a rule nobody checked against its events, or a rule patching a screen that needed fixing.

Below: what to automate, how a rule is built, when email or a person takes over, where artificial intelligence (AI) helps, how to prove lift and when automation hurts.

## What is user onboarding automation (and what isn't)?

**User onboarding automation turns product events into guidance: each rule reads a new user's actions and sends one next step, in the app, by email or through a person.**

Search results for this phrase mix in 3 other jobs, so I rule them out first:

- **Employee onboarding:** human resources (HR) and information technology (IT) teams set up accounts, equipment and paperwork for new hires, an internal process with its own tools.
- **Client onboarding in financial services:** identity checks and account opening, which is compliance work rather than product guidance.
- **Tenant provisioning:** engineering creates a new customer's environment and admin account, and no user ever sees it.

What gets automated is the layer on top of the product: in-app guidance (checklists, tooltips, short tours, empty-state prompts), automated onboarding emails and alerts that route a user to a person. Sign-up, setup and empty states sit under every rule, and a rule can only point at them.

That's why our SaaS onboarding design<!-- link: /services/saas-products/saas-onboarding-design/ (anchor "SaaS onboarding design", UP link to hub, required, first of two) --> work starts with the screens. We redesign sign-up, setup, empty states and in-app guidance as one job. I'd rather fix a screen than write a rule that explains it.

For the full path from a new account to the first real result, including how to pick an activation event, start with our SaaS onboarding guide<!-- link: /blog/saas-onboarding/ (anchor "our SaaS onboarding guide", sideways link to the broader guide, required) -->. This post stays on the rules. The real question isn't how to automate, but which moments deserve it.

## Which onboarding moments should you automate?

**Automate moments that happen often, need the same next step for everyone in a segment and cost little when wrong; keep a person where context, account value or trust decides.**

I sort every onboarding moment on 2 questions before anyone opens a tool. How often does it happen? And what does a wrong message cost: a shrug, a lost afternoon or a lost account?

Automated user onboarding works best when the first answer is "often" and the second is "a shrug." Volume pays for the rule, and mistakes stay cheap. The other quadrants need a fallback, a person or both. Every quadrant except keep human still uses automation, if only to flag the moment for someone.

<!-- visual: 2x2 decision matrix drawn as 4 labeled quadrant cards, not a plotted risk grid (must not look like the saas-product-redesign risk matrix). Horizontal axis: how often the moment happens (rare to frequent). Vertical axis: cost of a wrong message (low to high). Cards: Automate (frequent, low cost), Automate with a fallback (frequent, higher cost), Assist: automation flags, a person acts (rare, lower cost), Keep human (rare, high cost). Each card lists the 2 or 3 example moments from the text panel, from the hypothetical revenue-analytics SaaS. File onboarding-automation-decision-matrix.svg -->

The matrix below places 10 moments from the hypothetical analytics product in 4 quadrants.

![User onboarding automation decision matrix with four quadrant cards, automate, automate with a fallback, assist and keep human, sorted by how often a moment happens and the cost of a wrong message](/blog/user-onboarding-automation/onboarding-automation-decision-matrix.svg "User onboarding automation decision matrix: automate, automate with a fallback, assist or keep human")

<details class="astext"><summary>Show as text</summary>

- **Automate (frequent, low cost):** the welcome prompt, a checklist reminder, a tip the first time a user opens the chart builder.
- **Automate with a fallback (frequent, higher cost):** help after a failed warehouse connection, a permission-denied message during setup, each with a "talk to a person" exit.
- **Assist (rare, lower cost):** an admin who stalls before inviting teammates, a trial user who opens the pricing page twice. A rule flags them, and a person decides whether to reach out.
- **Keep human (rare, high cost):** security review questions, custom data mapping, a frustrated admin.

</details>

On the human side, I route a moment to a person when the account is high-fit, the user is stuck on something only context can solve, or a wrong message would cost trust or data.

Now the trap: automating a moment because the tool makes it easy. A tour builder makes a long tour quick to publish, which says nothing about whether users need it. Place your 10 busiest moments on the matrix first. Once a moment earns automation, it becomes a rule, and a rule has parts.

## What makes up one user onboarding automation rule?

**Every user onboarding automation rule has 6 parts: a trigger event, a segment, a message job, a channel, an exit or suppression condition, and a frequency cap.**

I write each rule as one plain sentence before anyone builds it, then split the sentence into those 6 parts.

<!-- visual: rule blueprint drawn as one horizontal strip: trigger event, then segment, then message job, then channel, then exit or suppression, with a frequency-cap meter above the strip. Filled with the example rule: warehouse not connected 24 hours after sign-up, admin role, email that opens the connection screen, stops when warehouse_connected fires from any path, cap of 1 email a day marked as the team's choice. Text panel: the 6 parts with example values. File onboarding-automation-rule-blueprint.svg -->

The blueprint below breaks one rule from the hypothetical analytics product into its 6 parts.

![User onboarding automation rule blueprint strip with a trigger event, segment, message job, channel and exit condition, plus a frequency cap meter above it](/blog/user-onboarding-automation/onboarding-automation-rule-blueprint.svg "User onboarding automation rule blueprint: the 6 parts of one rule, filled in")

<details class="astext"><summary>Show as text</summary>

This table defines each part of a rule and gives one example value.

Table: The 6 parts of one onboarding automation rule, with example values

| Part | What to define | Example value |
|---|---|---|
| Trigger | A product event, or its absence after a set time | No `warehouse_connected` event 24 hours after sign-up |
| Segment | Role, plan, company size or use case | Trial admins who chose "revenue reporting" at sign-up |
| Message job | One verb: connect, invite, try or fix | Connect the warehouse |
| Channel | In-app, email or a person | Email, because the admin has left the product |
| Exit or suppression | What stops the rule | Stops when `warehouse_connected` fires from any path |
| Frequency cap | A per-user limit across all rules | 1 email a day, a team choice and not a benchmark |

</details>

Behavior-based triggers come first. A behavior trigger fires on what the user does, such as opening the chart builder, so the message lands mid-task. A time-based fallback fires only when the expected event never arrives inside its window, such as 24 hours. Pure time rules nag users who finished on another device or through another path.

A suppression rule skips anyone who already did the step, by any route. That rule is only as good as the event tracking plan behind it, and those events usually live in product analytics such as Mixpanel or Amplitude. The intro's misfire came from a missing event: the API path never sent `warehouse_connected`, so the suppression rule had nothing to read. Before I write a rule, I check that every path to the step fires the same event.

Onboarding tools model rules the same way: Userpilot's documentation describes segments built from user data, company data and event conditions, which then serve as audiences for in-app flows.<!-- source: https://docs.userpilot.com/getting-started/what-does-userpilot-offer --> The same logic can live in your own code. List every path to your next milestone and confirm each one fires its event, then turn to the channel closest to the action: the app itself.

## How do you design in-app guidance users don't dismiss?

**In-app guidance gets used when it appears at the moment of the task it explains, offers one action, closes in one click and retires once the user succeeds.**

Most in-app engagement for user onboarding fails for a timing reason, not a copy reason. Nielsen Norman Group (NN/g) splits proactive help into push and pull revelations. Push revelations appear regardless of what the user is doing, such as tips at launch, and users often ignore them. Pull revelations are contextual and tied to the task the user is working on right now.<!-- source: https://www.nngroup.com/articles/help-and-documentation/ -->

I turn that idea into one trigger per guidance type:

- **Onboarding checklist:** visible for the whole trial; each item ticks off on an event, and the checklist ends at activation.
- **Tooltip:** Esc to dismiss it, shown on the first visit to a control, never on page load.
- **Short product tour:** reserved for one new feature, and started only when the user asks for it.
- **Empty-state prompt:** shown when a screen has no data yet, pointing to the one action that fills it.

Every guide I design gets a retire rule, which stops it after the user succeeds or after a number of dismissals your team picks. It gets a way back too: a help-menu entry, so a dismissed guide is never lost. Our service page's comparison of product tours vs guided tasks rates a tour's effect on activation as small and a guided first task's as direct.

Accessibility belongs in the trigger design, not in a later audit. I design to Web Content Accessibility Guidelines (WCAG) 2.2 AA, the standard I use as the US frame for the Americans with Disabilities Act (ADA) and Section 508. It has 2 success criteria (SC) that apply to guidance directly:

- **SC 1.4.13 Content on Hover or Focus:** a tooltip must be dismissible without moving the pointer or focus, hoverable, and persistent until the trigger is removed, the user dismisses it or its information is no longer valid.<!-- source: https://www.w3.org/WAI/WCAG22/Understanding/content-on-hover-or-focus -->
- **SC 2.4.11 Focus Not Obscured (Minimum):** when a control receives keyboard focus, it must not be entirely hidden by author-created content, such as a tour popover or a sticky banner.<!-- source: https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured.html -->

Users closing your tooltips on sight? Our onboarding redesigns cover in-app guidance together with the screens beneath it. In-app guidance reaches only people who are in the app, and when they leave, email takes over.

## When should automated onboarding emails take over?

**Automated onboarding emails should take over only after the user leaves the product, carry the same next step the in-app guide showed, and stop when that step is done.**

Fixed automated email sequences for user onboarding go stale the day a user moves ahead of them. A user who connects the warehouse in 10 minutes still gets the "connect your warehouse" email on day 2, unless a rule suppresses it. So I treat state as the plan and time as the fallback.

<!-- visual: channel relay strip with three stations in a baton-pass layout, not parallel swimlanes (must not look like the saas-onboarding admin and member swimlane). Station 1 in-app (user active) passes to station 2 email (user away 24 hours or more), which passes to station 3 a person (user stuck or high-fit). One shared gate under all three stations labeled suppress when done. Text panel: the channel handoff table. File onboarding-channel-handoff.svg -->

The relay below passes each user between channels by state, with one shared gate that stops every channel once the step is done.

![Onboarding channel handoff relay from in-app guidance to email to a person, with a shared suppress-when-done gate under all three stations](/blog/user-onboarding-automation/onboarding-channel-handoff.svg "Onboarding channel handoff: in-app, email and a person, with one shared suppression gate")

<details class="astext"><summary>Show as text</summary>

This table maps each user state to its channel, the message's job and what suppresses it.

Table: Channel handoff by user state in automated onboarding

| User state | Channel | What the message does | Suppressed when |
|---|---|---|---|
| Active in a session | In-app | Points at the next step on the current screen | The step's event fires |
| Away for 24 hours or more | Email | Brings the user back to that same step | The step's event fires or the user returns to it |
| Stuck on a repeated error | A person | Solves what a message can't | The person closes the case |
| Finished the step | None | Nothing for that step | Always: every channel stops |

</details>

One suppression list shared across channels keeps a user from getting the in-app prompt and the email for the same step. The broader guide shows how to map each onboarding email to the screen it opens<!-- link: /blog/saas-onboarding/#how-do-saas-onboarding-emails-fit-the-in-app-flow (anchor "map each onboarding email to the screen it opens", conditional: skip and leave plain text if fragments count as the same target as the sideways link) -->, so I won't rebuild that table here.

These emails answer to 2 US rule sets. The Controlling the Assault of Non-Solicited Pornography and Marketing (CAN-SPAM) Act sorts an email by its primary purpose. The Federal Trade Commission (FTC) guide covers any message whose primary purpose is the commercial advertisement or promotion of a product or service. Commercial email needs a working opt-out, and you must honor an opt-out request within 10 business days.<!-- source: https://www.ftc.gov/business-guidance/resources/can-spam-act-compliance-guide-business --> The FAQs below cover how that applies to onboarding emails; this is not legal advice, so ask your counsel.

Google's email sender guidelines set the technical bar. A bulk sender sends close to 5,000 or more messages to personal Gmail accounts in 24 hours, and that status is permanent once reached.<!-- source: https://support.google.com/a/answer/14229414 --> Bulk senders set up Sender Policy Framework (SPF), DomainKeys Identified Mail (DKIM) and Domain-based Message Authentication, Reporting and Conformance (DMARC). They offer one-click unsubscribe on marketing and subscribed messages, process it within 2 days and keep the spam rate in Postmaster Tools below 0.3%.<!-- source: https://support.google.com/a/answer/81126 --> Gmail stepped up enforcement in November 2025, including rejections for mail that fails these rules.<!-- source: https://support.google.com/a/answer/14229414 -->

The design consequence: fewer emails, each fired by behavior, keep complaints down and protect the password resets and invites that must arrive. A user who can unsubscribe from onboarding emails in one click has less reason to press "report spam." If you also sell in the European Union (EU), the General Data Protection Regulation (GDPR) adds consent rules. Count your emails per user per week before adding another, because some users need a person instead.

## When should user onboarding automation hand off to a person?

**User onboarding automation should hand off to a person when a high-fit account stalls, when product use crosses your product-qualified lead (PQL) threshold, or when the user asks.**

TechTarget defines a PQL as a person or business that has experienced value from a product through a free trial, a limited free version or other first-hand use.<!-- source: https://www.techtarget.com/searchcustomerexperience/definition/Product-Qualified-Lead-PQL --> I set the product-qualified lead threshold just past your activation event, never from a published conversion rate, because every product defines activation differently. Admins of high-fit accounts are the usual handoff candidates, since invited members land in a workspace someone already set up. A customer success manager (CSM) takes their setup problems, and sales takes the accounts that cross the PQL line.

<!-- visual: vertical signal ladder with 5 rungs from automation only at the bottom to user asks for a person at the top, with an owner icon on each rung (product, support, CSM, sales, whoever answers) and a small handoff-note card on the side listing role, plan, steps done, last error and messages already sent. Must not reuse the is-discovery-phase-worth-it escalation ladder style: draw it vertically with owner avatars as icons, not rung labels only. Text panel: the 5 signals with owners and the note fields. File onboarding-human-handoff-ladder.svg -->

The ladder below climbs from automation alone to a person, with the owner of each rung.

![Onboarding human handoff ladder with five rungs from automation only to the user asking for a person, each with its owner and a handoff note card](/blog/user-onboarding-automation/onboarding-human-handoff-ladder.svg "Onboarding human handoff ladder: five signals, their owners and the handoff note")

<details class="astext"><summary>Show as text</summary>

1. **Automation only:** the user keeps moving; product owns the rules.
2. **Automation plus a help offer:** a help-center article or chat appears after a repeated error; support owns it.
3. **CSM alert:** a high-fit admin fails the warehouse connection 2 times in one day (an illustrative rule, not a benchmark); the CSM owns it.
4. **Sales-assist:** product use crosses your PQL threshold; sales owns it.
5. **The user asks for a person:** this rung always wins, whatever the rules say.

**Handoff note fields:** role, plan, steps done, last error and the messages automation already sent.

</details>

A sales-assist handoff fails when the person starts cold. I design the handoff note as part of the rule, so the rep or CSM opens it and sees the context in 1 screen. When sales accepts the handoff, automation pauses every onboarding rule for that user, so the person and the bot don't talk over each other. Write your 5 rungs with a named owner on each before you build a single alert. More teams now put an AI assistant between the user and that person.

## Where does AI fit in user onboarding automation?

**AI fits in user onboarding automation as an assistant that answers setup questions in the user's own words, as long as it states its limits and hands off to a person fast.**

AI user onboarding assistants answer questions like "how do I connect BigQuery?" in plain language. They suggest the next step from the user's own data, and they draft the CSM's handoff note. Where they shouldn't act alone: permissions, billing, data deletion and anything in the keep-human quadrant of the matrix above.

Google's People + AI Research (PAIR) team gives the design rule in the Mental Models chapter of its People + AI Guidebook. Onboard in stages, and explain what the AI can do, what it can't do, how it is likely to change and how users can improve it. The chapter warns that mismatched mental models lead to unmet expectations, frustration, misuse and product abandonment.<!-- source: https://pair.withgoogle.com/chapter/mental-models/ -->

An AI assistant with no route to a person turns one wrong answer into a lost trial. In our chatbot UI design<!-- link: /services/ai-products/chatbot-ui-design/ (anchor "chatbot UI design", the post's one cross-hub link, required) --> work, we add a visible handoff option after two failed turns, with the chat history passed along so users never repeat themselves.

If your product is itself AI, onboarding sets expectations about its answers before users rely on them, for example with a sample answer that shows its limits on day 1. Write the assistant's handoff condition into your rule sheet like any other rule.

## How do you design an automated onboarding flow?

**Design an automated onboarding flow in 6 steps: name milestones, map stall points, write one rule per moment, prototype messages on real screens, test with new users and release behind a holdout.**

1. **Name 3 to 6 milestones** up to your activation event, such as warehouse connected, first chart saved and first report shared. The broader guide explains how to choose your activation event<!-- link: /blog/saas-onboarding/#where-does-saas-onboarding-end (anchor "how to choose your activation event", conditional: same rule as the other fragment link) -->.
2. **Map the stall points** between milestones from analytics and session recordings, so every rule answers a real drop-off.
3. **Write one rule per moment** in the rule sheet below, as one sentence first.
4. **Prototype the messages on the real screens**, with dismissed, finished and error states. I prototype every tooltip on the screen it sits on, never in a slide deck.
5. **Test with people new to the product.** In our onboarding projects, we talk to 5 to 8 recent sign-ups, both activated and lost, about what they expected, and we test the prototype with new users.
6. **Release in stages behind a holdout group**, a few rules at a time, so each rule's effect stays readable.

The onboarding automation rule sheet is the template I'd fill in before building anything. One row holds one rule, and its last column asks whether the rule is patching a screen.

<!-- visual: the lead asset as a fill-in rule sheet drawn as a ruled worksheet with a sticky-note callout (not the saas-onboarding 12-point audit grid and not the web-app-design-rfp fill-in table look). Columns: moment, trigger event, segment, channel, message job, exit, owner, metric, patch or fix. Two illustrative rows filled as in the text panel, 4 blank rows. The patch cell of rule 2 highlighted, with a sticky note: patch means fix the screen behind it. File onboarding-automation-rule-sheet.svg -->

The worksheet below shows 9 columns, 2 hypothetical rules filled in and 4 blank rows for yours.

![Onboarding automation rule sheet worksheet with nine columns, two filled example rules and a highlighted patch-or-fix cell that flags a screen to redesign](/blog/user-onboarding-automation/onboarding-automation-rule-sheet.svg "Onboarding automation rule sheet: one row per rule, with a patch-or-fix column")

<details class="astext"><summary>Show as text</summary>

This table shows each column of the rule sheet with two hypothetical rules filled in.

Table: Onboarding automation rule sheet with two hypothetical rules

| Column | Rule 1: warehouse reminder | Rule 2: chart builder help |
|---|---|---|
| Moment | Admin hasn't connected a warehouse | Analyst opens the chart builder and leaves without saving |
| Trigger event | No `warehouse_connected` 24 hours after sign-up | `chart_builder_opened` with no `chart_saved` in the session |
| Segment | Trial admins | Analyst role, any plan |
| Channel | Email | In-app tooltip |
| Message job | Connect | Explain which field goes on which axis |
| Exit | `warehouse_connected` fires from any path | `chart_saved` fires |
| Owner | Lifecycle marketing | Product |
| Metric | Completion after trigger | Dismiss rate |
| Patch or fix? | No patch: a real nudge | Patch: fix the chart builder's field labels |

</details>

A rule whose message job is "explain," not "connect," "invite" or "try," usually patches a screen. Rule 2 exists because the builder's fields are unclear, so its real fix is in the screen. Fill in one row per live rule and count the patches. Shipping the rules is half the job; proving they help is the other half.

## How do you measure user onboarding automation?

**Measure user onboarding automation against a holdout group: compare activation for users who got the rules with a random group that got none, then check each rule for harm.**

Without a holdout, a team credits its emails for activations that would have happened anyway. Braze, one engagement platform, documents a global control group of 1% to 15% of users who receive no campaigns.<!-- source: https://braze.com/resources/articles/using-global-control-groups-to-measure-the-impact-of-customer-engagement --> The method is tool-neutral, and a random flag in your own code does the same job. I read lift from the holdout, never from a before-and-after chart. In our onboarding projects, we help set up an A/B test where possible and compare activation before and after.

<!-- visual: holdout comparison chart with 2 cumulative activation curves over the first 14 days, rules on vs holdout, with the gap labeled lift you can credit to automation. Mark it clearly as illustrative, no real data, and print no axis numbers that read as benchmarks. Beside it, a small table of the rule-level warning signs. Text panel: the metrics table. File onboarding-automation-holdout.svg -->

The illustrative chart below shows 2 activation curves over the first 14 days and the gap you can credit to automation; it holds no real data.

![Illustrative holdout comparison chart of activation for users with onboarding rules on versus a holdout group over 14 days, with the lift gap labeled](/blog/user-onboarding-automation/onboarding-automation-holdout.svg "Onboarding automation holdout chart: lift is the gap between rules on and the holdout group")

<details class="astext"><summary>Show as text</summary>

This table lists each metric, what it tells you and the warning sign to watch.

Table: Metrics for measuring onboarding automation, rule by rule

| Metric | What it tells you | Warning sign |
|---|---|---|
| Trigger rate | How often the rule fires | It fires far more often than the moment happens, which often means a missing event |
| Completion after trigger | Whether users do the step after the message | No higher than the holdout's rate for the same step |
| Dismiss rate | Whether guidance arrives at the wrong moment | Most users close it on sight |
| Unsubscribes and spam complaints | Whether emails feel unwanted | The spam rate creeps toward Gmail's 0.3% ceiling |
| Handoff acceptance | Whether the person acts on alerts | Alerts sit unread for days |
| Outcome vs holdout | Whether the whole system helps | No gap between rules on and the holdout |

</details>

For the outcome row, I use the 3 metrics on our service page: activation rate, time to first value and day-7 return rate, each compared with the holdout. I quote no benchmark rates for these, because they vary by product; pause any rule whose dismissals or complaints climb. Sometimes the numbers say the rules make things worse.

## When does user onboarding automation hurt?

**User onboarding automation hurts when it patches a confusing screen, fires on missing events, stacks messages, uses the wrong segment or traps users with no exit; then fix the product.**

These 5 failure modes cover most of the damage:

- **Patching a screen:** a rule whose job is to explain points to a design problem in sign-up, setup or an empty state, because a clear screen needs no explanation.
- **Bad events:** rules fire on users who already did the step, because a second path never sends the event, as in the intro.
- **Stacking:** 3 rules hit one user on the same day, because nobody set a shared frequency cap or a priority order.
- **Wrong segment:** personalization runs on a welcome answer the user picked at random to get past the screen, so every later message misses.
- **No exit:** tours without a close button, AI assistants without a handoff and emails without an unsubscribe link, because each one traps a user who wanted out.

Go back to the patch-or-fix column. If more than a few rules say "patch," the screens underneath need a redesign, and no new rule fixes that. That's the screen-first work described at the top of this guide. In our services, an onboarding redesign runs in 4 steps over 3 to 6 weeks, and here's what that redesign costs<!-- link: /services/saas-products/saas-onboarding-design/#how-much-does-saas-onboarding-design-cost (anchor idea "what an onboarding redesign costs", varied here to avoid repeating the sibling post's anchor; required) -->: $15,000–$45,000. We design onboarding that your team builds in code or in tools such as Appcues, Userpilot or Pendo, and we judge it by the 3 outcome metrics above.

If your problems go well past onboarding, our wider SaaS product design<!-- link: /services/saas-products/ (anchor "SaaS product design", pillar mention, required) --> practice covers the rest of the product. Either way, mark every patch in your sheet before the next sprint planning.

## Bottom line

**Automate the frequent, low-risk moments with behavior-based rules, keep people on the high-context ones, and fix the screens before you add rules.**

Fill in the rule sheet for every rule you run today. For each rule marked "patch," book a free consultation<!-- link: /contact/ (anchor "book a free consultation", MOFU closing CTA, required) --> and bring the screen behind it; you'll hear back from a senior designer within one business day, Eastern Time (ET). When the patches pile up, see how we redesign the screens behind your onboarding rules<!-- link: /services/saas-products/saas-onboarding-design/ (anchor "redesign the screens behind your onboarding rules", second UP link to hub, required) -->.

Before you write your next rule, I'd make sure the event behind it fires from every path a user can take.

## FAQs

### Is SaaS user onboarding the same as employee onboarding?

No. SaaS user onboarding guides new customers inside a software product toward their first result. Employee onboarding sets up accounts, equipment and paperwork for new hires, with different tools, owners and metrics.

### Do you need an onboarding tool to automate user onboarding?

No. Product events, an email platform and in-app components built in code can run the same rules. Onboarding tools let a product team change guidance without a release. As for the best user onboarding software, tools only deliver rules, so design the rules first and pick the tool that fits them.

### How many automated messages should a new user get in a day?

No published number fits every product. I'd set one per-user daily cap across all rules and channels, give each moment one channel and stop every rule the moment its step is done.

### How does CAN-SPAM treat onboarding emails?

By primary purpose. Under the FTC's guidance, an email that mainly helps a customer use an account they signed up for can be transactional or relationship content, while an upgrade pitch can make it commercial and require an opt-out. I keep setup help at the top of each onboarding email and send upgrade offers separately; ask your counsel to review your own templates.

### Can an AI assistant replace human onboarding?

No. An AI assistant can answer setup questions and suggest next steps, but it needs a clear path to a person, with the conversation passed along, for permissions, billing, data and frustrated customers.
