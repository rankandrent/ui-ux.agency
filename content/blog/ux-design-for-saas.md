---
title: "UX design for SaaS: a teardown of the 7 surfaces users live in"
metaTitle: "UX Design for SaaS: 7 In-Product Surfaces, Torn Down"
description: "UX design for SaaS after onboarding: dashboards, roles, settings, billing, tables and empty states torn down, plus a triage grid to rate yours."
date: 2026-10-21
updated: 2026-10-21
contributors: [umar-sarwar]
author: faizan-khan
type: Comparison
services: [saas-design-agency]
industries: []
tags: [ux design for saas, b2b saas design, saas ux, ux for saas, saas ui ux design, ux design saas, ux saas]
keyword: "ux design for saas"
funnel: tofu
takeaways:
  - "Seven in-product surfaces keep or lose a paying customer after onboarding, from the dashboard to the retention loops."
  - "Pair each surface with one failure metric from your own analytics or support queue, such as access requests for roles."
  - "A plan-limit message answers four things in order: what stopped, what still works, what it costs to continue and who approves."
  - "California's amended Automatic Renewal Law lets consumers who signed up online cancel online, for contracts from July 1, 2025."
  - "Rate each surface red, amber or green and fix the reddest one first; one surface can be a project on its own."
draft: true
qa: pending
---

When I review user experience (UX) work on software as a service (SaaS) products, I judge UX design for SaaS by the screens a paying customer opens every week, not by the first-run flow. Our [SaaS design agency](/services/saas-products/saas-design-agency/) lists six parts it designs for a subscription product. Take sign-up and onboarding off that list, and four of the five parts left are screens people use long after their first week. The fifth, a design system, is the kit those screens share.

The [ui-ux.agency team at tkxel](/about/) has designed 200+ products since 2017, and I'm one of its senior product designers. This teardown splits in-product UX into seven surfaces and sets a weak version against a strong one for each, with the metric that shows the surface failing. The first-run flow belongs to onboarding, and [the promise your homepage makes](/blog/saas-homepage-design/) has its own guide, so neither is repeated here. The last section turns the seven surfaces into a triage grid you can fill in.

## Which surfaces decide UX design for SaaS after onboarding?

**Seven in-product surfaces decide whether UX design for SaaS keeps a paying customer: the dashboard, roles and permissions, data tables, settings, plans and billing, system states and retention loops.**

I group the work by surface rather than by principle because a subscriber pays each month for weekly work, and each surface fails in its own way. Good UX for SaaS earns the next login, not just the first one. The SaaS UX design patterns below follow the order a returning user meets them, and each comes with one metric from your own analytics or support queue.

The map below pairs each surface with its job and the number that shows it failing.

<!-- visual: framework ring surface map. A product window in the center with 7 tiles around it (dashboard, roles and permissions, data tables, settings, plans and billing, system states, retention loops). Each tile shows the surface name, its job for a paying customer and a small metric chip. A faded tile outside the ring reads "sign-up and first run, covered by onboarding". No benchmark values on the chips. -->

![Surface map of UX design for SaaS: seven in-product surfaces around a product window, each tile with its job and failure metric, with sign-up and first run outside the ring](/blog/ux-design-for-saas/ux-design-for-saas-surface-map.svg "Surface map of UX design for SaaS: seven in-product surfaces, each with its job and failure metric")

<details class="astext"><summary>Show as text</summary>

This table lists each in-product surface, the job it does for a paying customer and the metric that shows it failing. Sign-up and first run sit outside the map.

Table: The seven in-product surfaces of a SaaS product, their jobs and failure metrics

| Surface | Job for a paying customer | Metric that shows it failing |
|---|---|---|
| Dashboard. | Shows whether work is on track and what to do next. | Return visits to the home screen. |
| Roles and permissions. | Shows each person what they can see and do. | Access requests and permission tickets. |
| Data tables. | Lets people find, compare, edit and act on records. | Task time and bulk-action use. |
| Settings. | Keeps personal, workspace and admin controls findable. | Settings-related support tickets. |
| Plans and billing. | Shows the plan, usage and the next charge. | Upgrade starts and completed cancellations. |
| System states. | Explains empty, slow and broken screens. | Recovery after an error. |
| Retention loops. | Brings people back for new work. | Weekly active use and retention. |

</details>

The same map fits vertical SaaS UX, product-led growth UX and admin console design; only the weight of each surface changes. In-product UX is still user experience design, interaction design and software design. Product design for a subscription adds one condition: every screen has to justify next month's invoice.

A returning user lands on the home screen first, so I start there.

## What should a SaaS dashboard answer first?

**In UX design for SaaS, a dashboard first answers one question at a glance: is my work on track, and what do I do next?**

[Nielsen Norman Group (NN/g) describes dashboards](https://www.nngroup.com/articles/dashboards-preattentive/) as collections of data visualizations in a single-page view that give at-a-glance information people can act on quickly. <!-- source: https://www.nngroup.com/articles/dashboards-preattentive/ --> The same article covers preattentive processing: length and position, as in bar and line charts, are read before conscious attention starts. So status numbers belong in those forms, and secondary metrics wait one click away.

The weak version puts every metric on screen at once, all at the same size. The strong one leads with status, then what changed since the last visit, then up to 3 next actions, with detail on demand.

<!-- visual: before/after annotated wireframe pair. Left, weak: a SaaS dashboard with 12 equal cards and no hierarchy. Right, strong: a status line, a "changed since your last visit" block, 3 next-action items and a drill-down link, with 5 numbered callouts on the strong side. No real product names. -->

![Before and after SaaS dashboard wireframes: a weak dashboard with 12 equal metric cards beside a strong dashboard with a status line, changes since the last visit, three next actions and a drill-down link](/blog/ux-design-for-saas/ux-design-for-saas-dashboard-teardown.svg "SaaS dashboard teardown: every metric at once against status, change and next actions")

<details class="astext"><summary>Show as text</summary>

The 5 callouts on the strong version:

1. **Status line:** one sentence on whether the user's work is on track.
2. **Changed since your last visit:** only the numbers that moved.
3. **Next actions:** up to 3 tasks the user can act on now.
4. **Drill-down link:** detail on demand, off the first screen.
5. **Bar and line charts for status:** numbers read by length and position.

</details>

[TradeZella's dashboard redesign](/case-studies/tradezella/) shows the move from crowded to focused. The case study describes a busy interface that hid the metrics traders cared about most. We pulled ratios such as win rate and profit factor into compact widgets and let each trader pick and arrange their own. Across the whole web and mobile redesign, with dashboard analytics as its main focus, TradeZella reports 40% more user interaction and 25% higher user retention.

The user interface (UI) layer of color, type and density matters in SaaS UI UX design only once the screen asks the right question. Write that question for your main role in one line before you move a single dashboard widget. An answer that is right for an admin can be wrong for a guest, which brings in roles.

## How should roles and permissions show in a SaaS interface?

**Roles and permissions should change what each person sees and can do on the same screen, and a blocked action should explain why and offer a way to request access.**

The [National Institute of Standards and Technology (NIST) glossary](https://csrc.nist.gov/glossary/term/role_based_access_control) describes role-based access control (RBAC) as access in which permissions attach to roles rather than to individual identities. <!-- source: https://csrc.nist.gov/glossary/term/role_based_access_control --> Roles can also inherit permissions through a hierarchy. So I design permissions UX per role. I draw one screen once for an admin, once for a member and once for a guest, then test it with a role switcher in the prototype.

<!-- visual: role lens triptych plus denied state. The same project screen 3 times (admin, member, guest), with each module shown, hidden or disabled with a one-line reason. A 4th frame shows a "You need Editor access" message with the admin's name and a Request access button. -->

![The same SaaS project screen seen by an admin, a member and a guest, plus a fourth frame showing a no-permission state with the admin's name and a Request access button](/blog/ux-design-for-saas/ux-design-for-saas-role-lens.svg "Roles and permissions in a SaaS interface: one screen through three roles and a request-access state")

<details class="astext"><summary>Show as text</summary>

This table shows what each role sees and can do on the same project screen, and what happens when it is blocked.

Table: One SaaS project screen by role, with the blocked state

| Role | Sees | Can do | When blocked |
|---|---|---|---|
| Admin. | Every module, the member list and billing. | Invites people, changes roles and edits settings. | Owns the approval for everyone else's requests. |
| Member. | The modules for projects they belong to. | Creates and edits items in those projects. | Sees a disabled control with a one-line reason. |
| Guest. | Only the items shared with them. | Views and comments. | Sees the admin's name and a Request access button. |
| No-permission state. | A message naming the role the screen needs. | Sends a request to a named approver. | Gets a confirmation that the request went out. |

</details>

I hide modules a role can never use, because a control nobody can unlock is noise. I disable a control with a one-line reason when the person can get access by asking. When a permission is missing, the screen offers to request access from a named admin, so the request-access screen reaches a person instead of a generic error.

[Digno's three-level scores](/case-studies/digno/) show role-level views at product scale. Digno computes one score at the organization, department and individual level, and each employee's My Digno Score page explains the factors behind the number. The organization overview, the department pages and the personal score page each serve one level.

Does your product show one "Access denied" page to every role? That gap is the roles and settings work our team designs: admin, member and guest views, permissions, integrations and audit logs. We agree on 2 or 3 metrics at kick-off to judge it. Roles decide which rows a person sees; the table decides whether they can work with them.

## Which 4 jobs must SaaS data tables support?

**SaaS data tables work when they support the jobs people bring to them: find records, compare them, view or edit one row and act on many rows at once.**

[NN/g's article on data tables](https://www.nngroup.com/articles/data-tables/) names these four tasks and argues that tables beat cards for comparison, because people see adjacent values without holding them in memory. <!-- source: https://www.nngroup.com/articles/data-tables/ --> Two details carry most of the weight in my data table design. A readable record identifier sits in the first column, and a side panel opens one row while the table stays in view.

The matrix below pairs each task with the pattern that serves it and the symptom that shows it failing.

Table: Data table tasks, the pattern that serves each and the failure symptom

| Task | Pattern that serves it | Symptom when it fails |
|---|---|---|
| Find records. | A filter bar plus saved views for repeat searches. | Users export to a spreadsheet to filter. |
| Compare data. | A frozen header and an identifier column that stay put on scroll. | Users scroll back and forth to read one row. |
| View, edit or add one row. | A side panel that keeps the table in view. | Users lose their place after every edit. |
| Act on records. | Row selection plus a bulk action toolbar. | Users repeat the same action row by row. |

The [IBM Carbon Design System's data table guidance](https://carbondesignsystem.com/components/data-table/usage/) shows a batch actions toolbar when rows are selected, and users leave batch mode by canceling or deselecting. <!-- source: https://carbondesignsystem.com/components/data-table/usage/ --> I ship a data table with bulk actions only when that toolbar shows how many rows are selected, so nobody deletes records they cannot see.

[Web Content Accessibility Guidelines (WCAG) 2.2 Success Criterion 2.5.8](https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html) sets pointer targets at Level AA to at least 24 × 24 Cascading Style Sheets (CSS) pixels, or enough spacing around smaller ones, with listed exceptions. <!-- source: https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html --> Row actions and icon buttons in dense tables are where WCAG 2.2 targets fail first, so I check them before anything else.

The [Mass Media Co. order platform](/case-studies/mass-media-co/) shows tables and workflow designed together. Order work had been spread across tools that did not talk to each other. On the new order screen, the team combines services, channels and data products into one order, and the estimated cost updates as items are added. For the whole platform revamp, the case study reports order processing efficiency up 30% and an order processing error rate of 2+, reduced from 25%.

Saved views and column choices live somewhere, and that somewhere is settings.

## Where do settings belong in UX design for SaaS?

**Settings belong in three separate places (personal preferences, workspace settings and admin controls), each no more than two levels deep.**

In [his article on progressive disclosure](https://www.nngroup.com/articles/progressive-disclosure/), Jakob Nielsen of NN/g moves advanced or rarely used options to a secondary screen. <!-- source: https://www.nngroup.com/articles/progressive-disclosure/ --> He warns that designs with more than 2 disclosure levels usually have low usability, because users get lost moving between levels. That is my depth cap for settings navigation.

- **Personal preferences:** notifications, theme and profile, because each person changes them only for themselves.
- **Workspace settings:** integrations, defaults and shared views, because a change here affects the whole team.
- **Admin controls:** members, roles, security and billing access, because only an admin can carry the risk of a change.

Products with dozens of controls need a settings search, so people type a setting's name instead of guessing its section. Destructive actions such as deleting a workspace or removing a member sit apart from everyday options. They ask the user to type the object's name to confirm, and they stay reversible for a set period where the data model allows.

Sort your current settings into those three groups before you redraw a single page. One setting every subscriber eventually opens is the plan, and that is where SaaS UX touches revenue.

## How should SaaS billing, plan limits and cancellation work?

**SaaS billing screens show the plan, usage against its limits and the next charge, turn a limit into a clear choice and let people cancel the way they signed up.**

Good billing UX puts the current plan, a usage meter for each of the usage limits, the next charge with its date, invoice history and the payment method on one screen. I show the usage meter before the limit, at a warning threshold you choose, so the limit never arrives as a surprise. Our plans-and-billing work treats upgrade prompts, usage limits, invoices and the cancellation flow as one path, because the customer walks it as one.

When someone hits one of the plan limits, the message answers four questions in a fixed order.

<!-- visual: message anatomy, weak against strong. Top: a red "Limit reached" banner with no next step. Bottom: a 4-part limit message (what stopped, what still works, cost to continue, who approves) with a usage meter above it and an "Ask your admin to upgrade" path for members. -->

![Weak and strong SaaS plan-limit messages: a dead-end Limit reached banner above a four-part message with a usage meter and a path for members to ask an admin to upgrade](/blog/ux-design-for-saas/ux-design-for-saas-plan-limit.svg "SaaS plan-limit message anatomy: a dead-end banner against a four-part message with an approver")

<details class="astext"><summary>Show as text</summary>

The four parts of a plan-limit message, in order:

1. **What stopped:** the action that did not go through and the limit behind it.
2. **What still works:** everything the user can keep doing on the current plan.
3. **What it costs to continue:** the plan upgrade or add-on and its price.
4. **Who can approve it:** the user, or a named approver who receives a request.

The weak version is a red banner that says the limit was reached and offers no next step.

</details>

In business-to-business (B2B) products, the member who hits a plan limit often cannot upgrade. So the upgrade prompt routes a request to the admin instead of opening a checkout page.

Cancellation has US rules behind it. For consumer subscriptions, [Assembly Bill (AB) 2863](https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=202320240AB2863) amended the California Automatic Renewal Law for contracts entered into, amended or extended on or after July 1, 2025. <!-- source: https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=202320240AB2863 --> A consumer who accepted the offer online must be able to cancel online, and cancellation must be available in the same medium used to sign up.

Federally, the Eighth Circuit vacated the Federal Trade Commission (FTC) click-to-cancel rule on July 8, 2025, as [Morgan Lewis reported](https://www.morganlewis.com/pubs/2025/07/ftcs-click-to-cancel-rule-vacated-ahead-of-planned-july-14-effective-date). <!-- source: https://www.morganlewis.com/pubs/2025/07/ftcs-click-to-cancel-rule-vacated-ahead-of-planned-july-14-effective-date --> The Restore Online Shoppers' Confidence Act (ROSCA) still applies, and the FTC reads it as [requiring clear terms, express informed consent and an easy way to stop the recurring charge](https://www.ftc.gov/business-guidance/blog/2019/03/recipe-rosca-violation). <!-- source: https://www.ftc.gov/business-guidance/blog/2019/03/recipe-rosca-violation --> Counsel decides which rules cover your contracts; design makes the cancel path easy to find on the billing page.

A limit message is a system state, and so are the blank, slow and broken screens covered next.

## What do empty, loading and error states owe returning users?

**Good UX design for SaaS gives every state a returning user hits, from an empty filter to a failed sync, two things: what happened and the next action.**

NN/g's [guidelines for empty states in complex applications](https://www.nngroup.com/articles/empty-state-interface-design/) give a blank container 3 jobs. <!-- source: https://www.nngroup.com/articles/empty-state-interface-design/ --> It should tell people what the system is doing, help them learn the feature and hand them a shortcut into the main task. Most advice stops at the first-run screen, but a returning user meets more empty states than a new one: a filter that matches nothing, records someone deleted, a sync that failed.

The matrix below lists each state a returning user can hit, what they need to know and the one action to offer.

Table: System states for returning SaaS users, what each must say and the action to offer

| State | What the user needs to know | The one action to offer |
|---|---|---|
| Empty, never used. | This area has no records yet and what will appear here. | Create the first record or import data. |
| Empty, filtered to nothing. | The filters, not the data, caused the empty result. | Clear or edit the filters. |
| Loading. | Data is on its way, shown by a loading skeleton of the layout. | Cancel a long-running query. |
| Partial data. | Which parts loaded and which are still missing. | Retry the missing part. |
| Error or failed sync. | What failed, when it failed and whether their input is safe. | Retry, or open the sync settings. |
| No permission. | Which role the screen needs. | Request access from a named approver. |

I never show a "no results" message while data is still loading, because people read it as an answer. Every empty state in the matrix ends in a next step the user can take. For an error message, I say what failed in plain words and keep everything the user typed, so a retry costs one click.

First-run empty states and setup checklists belong to [SaaS onboarding design](/services/saas-products/saas-onboarding-design/), so this post leaves them there. Check your three most common filters for an empty result today. States tell a user what just happened; loops give them a reason to come back tomorrow.

## Which retention loops bring SaaS users back?

**Retention loops bring SaaS users back when each message points to new work that matters to them, such as a mention, an approval or a changed number, and stays quiet otherwise.**

[NN/g's comparison of indicators, validations and notifications](https://www.nngroup.com/articles/indicators-validations-notifications/) picks between them by the type of information, its urgency and whether the user has to act. <!-- source: https://www.nngroup.com/articles/indicators-validations-notifications/ --> Each notification gets an urgency level before it gets a channel. Action-required events, such as an approval waiting, interrupt in the product and by email. Passive events collect in a notification center and a weekly digest.

The best retention loop comes from the product's own data: a task assigned to you, an approval waiting, a score that moved or a saved view with new rows. In TradeZella's mentor mode, a coach compares the cumulative profit and loss of every mentee in one view. Mass Media Co.'s creative task cards name the owner, the due date and the progress. Digno's personal score page tracks each employee's score over time.

Good SaaS user experience is judged on activation and retention, so I read them together. I track weekly active use and retention for this surface, because a loop only works for people who already reached first value. List the events in your product that create new work for someone, and cut every message that does not map to one.

In B2B products every surface has two readers, the person who pays and the person who works.

## How does B2B SaaS design change roles, tables and billing?

**B2B SaaS design adds a second reader to every surface: the admin or buyer who controls seats, security and invoices, next to the member who does the daily work.**

For roles, the admin reads an audit log of who changed what, next to members, roles and single sign-on (SSO) in the admin console. For tables, teams turn shared filters into saved views and exports, so one person's setup becomes the team's report. For billing, finance needs invoices it can file, and upgrades wait for approval, which is why the limit message names an approver.

Enterprise buyers add a security review of SSO, System for Cross-domain Identity Management (SCIM) provisioning, audit logs, System and Organization Controls 2 (SOC 2) evidence and Section 508 conformance. That review shapes [admin consoles that pass security reviews](/industries/enterprise/), a layer that sits on top of the surfaces above.

In business-to-consumer (B2C) products one person is buyer and user at once, so the consumer cancellation rules in the billing section bite harder. Write down who pays and who works in your product before you score anything. With seven surfaces and two readers, UX design for SaaS needs a way to choose where to start.

## How do you rate your own UX design for SaaS?

**Rate your own UX design for SaaS by marking each of the 7 surfaces red, amber or green on one visible symptom and one metric, then fix the reddest surface first.**

Pull each metric from your analytics and support tickets, then watch 3 users work through each surface in recorded sessions. A row turns red when the symptom shows up in those sessions and the metric moves the wrong way. It turns amber when only one of the two does, and green when neither does.

<!-- visual: triage heat-map grid. 7 rows (the surfaces) by 4 columns: symptom you can see, metric to pull, first fix, your rating. The rating column holds blank red, amber and green swatches to fill in. Not a scorecard with points. -->

![Triage grid for UX design for SaaS: seven in-product surfaces, each with a visible symptom, a metric to pull, a first fix and blank red, amber and green swatches to rate it](/blog/ux-design-for-saas/ux-design-for-saas-triage-grid.svg "Triage grid for UX design for SaaS: rate each in-product surface red, amber or green")

<details class="astext"><summary>Show as text</summary>

This table lists each surface with the symptom to look for, the metric to pull and the first fix. The last column is yours to fill in.

Table: Triage grid for rating seven in-product surfaces

| Surface | Symptom you can see | Metric to pull | First fix | Your rating |
|---|---|---|---|---|
| Dashboard. | Users open other tools to check status. | Return visits to the home screen. | Lead with status, change and next actions. | |
| Roles and permissions. | Tickets asking who can do what. | Access requests and permission tickets. | Add a request-access screen that names the approver. | |
| Data tables. | Exports to spreadsheets for filtering. | Task time and bulk-action use. | Add saved views and a bulk action toolbar. | |
| Settings. | Users ask support where a setting lives. | Settings-related tickets. | Split personal, workspace and admin settings. | |
| Plans and billing. | Surprise at the limit or the charge. | Upgrade starts and completed cancellations. | Add a usage meter and a four-part limit message. | |
| System states. | Blank screens and lost input. | Recovery after an error. | Give each state a message and one action. | |
| Retention loops. | Notifications muted or ignored. | Weekly active use and retention. | Tie each message to new work for that user. | |

</details>

A project can start with one surface. In our [SaaS product design](/services/saas-products/) work, onboarding, a dashboard, billing or a single workflow are common starting points. When three or more rows come up red, look at a full engagement across [the six product parts we design](/services/saas-products/saas-design-agency/#what-does-our-saas-design-agency-deliver). <!-- link: second UP link to the SaaS design agency service; if the link builder counts the fragment as the same target as the intro link, switch to the plain service URL -->

I'd fill in the grid with whoever reads your support tickets, then fix the reddest row before you redesign anything else.

## FAQs

### Is SaaS UX different from designing other web apps?

Yes. Subscription software adds patterns most web apps lack, such as trials, seats, roles, usage limits, a plan upgrade and invoices. Each one is a point where a paying customer either keeps going or leaves, so each needs its own design and metric.

### Which surface should we fix first after onboarding?

Fix the surface your triage grid marks reddest, where the symptom shows in sessions and the metric moves the wrong way. One surface can be a project on its own, and a dashboard, billing or a single workflow are common starting points.

### Should every role see the same home screen?

No. Each role sees the status and next actions it can act on, and modules a role can never use stay hidden. Digno shows one score at the organization, department and individual level, each with its own view.

### Which US rules shape SaaS cancellation screens?

For consumer subscriptions, California's amended Automatic Renewal Law requires online cancellation when the customer signed up online, for contracts entered into, amended or extended from July 1, 2025. The FTC's click-to-cancel rule was vacated in July 2025, but ROSCA still applies.

### How do you measure in-product UX after launch?

Pick 2 or 3 metrics before work starts; we usually agree on activation rate, time to first value and trial-to-paid conversion at kick-off. Compare them before and after release, along with the grid metric for the surface you changed.
