---
title: "User onboarding metrics: 6 numbers that point to the screen to fix"
metaTitle: "User Onboarding Metrics: 6 Numbers That Point to the Fix"
description: "User onboarding metrics for SaaS teams: 6 definitions, the events behind them and a metrics tree that tells you which onboarding screen to redesign first."
date: 2026-10-24
updated: 2026-10-24
contributors: [umar-sarwar]
author: ahmad-ullah
type: Comparison
services: [saas-onboarding-design]
industries: []
tags: [user onboarding metrics, user onboarding analytics, in-app analytics for user onboarding, onboarding activation rate, time to value, onboarding KPIs]
keyword: "user onboarding metrics"
funnel: tofu
takeaways:
  - "Read the 6 numbers as a tree: start at the outcome that moved and walk down to the screen beneath it."
  - "Each metric needs a fixed denominator, window and pair of events, or this month's number cannot be compared with last month's."
  - "Rank setup steps by users lost, not by percentage, before you pick a screen to redesign."
  - "Report time to value as a median plus its slow tail, because a few multi-day accounts distort the average."
  - "Prove a redesign with a concurrent split, or compare sign-up cohorts only after every activation window has closed."
draft: true
qa: pending
---

User onboarding metrics earn their keep only when a weak number walks you back to one screen you can change. Say you run an invoicing software as a service (SaaS) product for US contractors, and trial-to-paid conversion slips for 2 monthly cohorts in a row. I trace that slip backward one level at a time: it led to a lower activation rate, which traced to falling setup completion. Setup completion traced to step 3 of the setup wizard, a screen that asks for a comma-separated values (CSV) file of past invoices that most new users in this example do not have on hand.

That backward walk is how an onboarding redesign<!-- link: /services/saas-products/saas-onboarding-design/ (UP link 1) --> starts at ui-ux.agency, the design arm of tkxel<!-- link: /about/ (credibility line) -->, a team with 200+ products designed since 2017. Every number below depends on one earlier decision, so if your team has not settled it, first read how to choose the activation event<!-- link: /blog/saas-onboarding/#where-does-saas-onboarding-end -->. The rest of this comparison covers the 6 numbers, the events behind them and the proof that a redesigned screen moved one.

## Which user onboarding metrics point to a screen to fix?

**Six user onboarding metrics point to screens: sign-up completion, setup completion, step drop-off, time to value, activation rate and first-week retention, arranged as a tree under trial-to-paid conversion.**

These six are a slice of product analytics, and of SaaS metrics in general, narrowed to user onboarding. I read the metrics tree from the top down. Start at the root that moved, go down one level, follow the branch that moved most and stop at the leaf beneath it.

<!-- visual: metrics tree (user-onboarding-metrics-tree.svg). Top-down tree. Root in gray labeled lagging: trial-to-paid conversion. Level 2: activation rate and first-week retention. Level 3 under activation rate: sign-up completion rate, setup completion rate (with step drop-off rate as its child) and time to value. Leaf chips name the screens each number implicates: sign-up form; setup wizard; the single setup step losing the most users; empty state, first task and invite flow; second-session prompt. Small read-downward arrow. Caption: User onboarding metrics as a tree, read from the lagging outcome down to the screen to fix -->

<details class="astext"><summary>Show as text</summary>

Read the tree from the top down and stop at the leaf that moved most.

- **Trial-to-paid conversion** (lagging outcome, outside the 6)
  - **Activation rate**
    - **Sign-up completion rate.** Screen: sign-up form.
    - **Setup completion rate.** Screen: setup wizard.
      - **Step drop-off rate.** Screen: the single setup step losing the most users.
    - **Time to value.** Screens: empty state, first task and invite flow.
  - **First-week retention.** Screen: second-session prompt.

</details>

A leaf is a stretch of screens, not one person's metric. Trial-to-paid conversion sits at the root but stays out of the 6, because it is a lagging number. It settles only when the trial ends, and pricing, sales calls and billing all push it around. The 6 below it are leading numbers you can read within 7 days of sign-up.

A tree only helps if every team computes each number the same way.

## How do the 6 user onboarding metrics compare?

**The 6 metrics differ in their denominator, their time window and the two events they sit between, and those three choices decide whether this month's number matches last month's.**

Change any one of those choices and the number moves with no change in the product. Call them onboarding KPIs, activation metrics, onboarding funnel metrics or new-user metrics; the label matters far less than the formula behind it.

<!-- visual: comparison card table (user-onboarding-metrics-comparison.svg). 6 horizontal cards, one per metric, each showing formula, denominator, window, start and end event and a small screen icon on the right. Colored left edge per tree level (level 2 for activation rate and first-week retention, level 3 for the rest). Not a plain grid. Caption: The 6 user onboarding metrics compared by formula, denominator, window and events -->

<details class="astext"><summary>Show as text</summary>

This table compares the 6 metrics by formula, denominator, window, events and the screen each one points to.

Table: The 6 user onboarding metrics compared, formula by formula

| Metric | Formula | Denominator | Window | Start and end events | Screen it points to |
|---|---|---|---|---|---|
| Sign-up completion rate | Accounts created ÷ users who opened the sign-up form. | Users who opened the form, split by channel. | The same session. | Form opened to account created. | Sign-up form, single sign-on buttons and email verification. |
| Setup completion rate | Users who finish the last required setup step ÷ accounts created. | Every new account in the period. | The activation window, such as 7 days. | Account created to setup completed. | Setup wizard. |
| Step drop-off rate | Users at step n minus users at step n+1, divided by users at step n. | Users who reached that step. | The funnel's own window. | Step n completed to step n+1 completed. | The one step with the largest loss. |
| Time to value | Median time from account created to first value, plus the share who never got there. | Users who reached first value. | The activation window. | Account created to first value reached. | Empty state, imports and integrations. |
| Activation rate | Users who reach the activation event inside the window ÷ the sign-up cohort. | Every new sign-up in the period. | Shorter than the trial, such as 7 days. | Account created to activation event. | First task and empty state. |
| First-week retention | Users with a session on days 2 to 7 ÷ all new sign-ups. | Every new sign-up in the period. | Days 2 to 7 after sign-up. | Account created to a later session. | Second-session prompt. |

</details>

The denominator trap catches most teams. For step metrics I count only users who started that funnel step; for activation and retention I count the whole sign-up cohort. Mix the two and a healthy setup step looks broken, because users who never reached it drag its rate down.

Onboarding completion is not activation, since a finished checklist proves clicks, not value; the FAQs below give the full answer. Our onboarding service page tracks a day-7 return rate, a session exactly 7 days after sign-up, which is the stricter member of the first-week retention family.

Four numbers stay off the list on purpose. Trial-to-paid conversion is the lagging root. Holdout lift is a way to compare, covered in the proof section. Invite acceptance rate is a business-to-business (B2B) split, and guardrails such as support tickets watch for harm.

With 6 candidates on the table, the next decision is which three earn a place on the dashboard.

## How does HEART narrow user onboarding metrics to three?

**Google's HEART framework and its goals, signals and metrics process narrow the list: state the onboarding goal, pick the behavior that shows progress and keep only numbers tracking it.**

HEART stands for Happiness, Engagement, Adoption, Retention and Task success, five categories of user experience metrics from a [2010 Google paper by Kerry Rodden, Hilary Hutchinson and Xin Fu](https://research.google.com/pubs/archive/36299.pdf). <!-- source: https://research.google.com/pubs/archive/36299.pdf --> In her [GV article on picking the right metrics](https://library.gv.com/how-to-choose-the-right-ux-metrics-for-your-product-5f46359ab5be), Rodden advises using only the categories that matter for the product, not all five. <!-- source: https://library.gv.com/how-to-choose-the-right-ux-metrics-for-your-product-5f46359ab5be --> For onboarding I lean on Adoption, Task success and Retention.

The paper's Goals-Signals-Metrics process runs in that order. My onboarding version: the goal is "a new user gets a first result alone", the signal is a logged first value event and the metric is activation rate within 7 days. Run the same chain for speed and staying power and a dashboard of user onboarding metrics shrinks to three numbers.

Those three are activation rate for reach, time to value for speed and first-week retention for whether value stuck. Sign-up completion, setup completion and step drop-off sit one click down as drill-downs, because they explain a change rather than measure success.

Happiness belongs on the side as a guardrail metric, not a target. A Net Promoter Score (NPS) or customer satisfaction score (CSAT) survey, plus the support tickets new accounts open, tells you a redesign has not traded speed for frustration.

None of these numbers exists until the events behind them fire from every path.

## Which events does user onboarding analytics need first?

**User onboarding analytics needs one event per meaningful step, each carrying the same properties, plus a first value event that fires from every path into it.**

The shared properties are role, plan, acquisition channel, platform and step index, so any of the 6 numbers splits by segment. In-app analytics for user onboarding only work when every path into a step fires the same event. The table below is an example naming scheme, not a standard.

Table: Example onboarding event spec and the metrics each event feeds

| Event | When it fires | Required properties | Feeds |
|---|---|---|---|
| sign_up_started | The sign-up form opens. | Channel and platform. | Sign-up completion rate. |
| account_created | An account exists, from any path. | Role, plan, channel and platform. | Sign-up completion and every later metric. |
| setup_step_completed | Each required setup step finishes. | Step index plus the shared properties. | Step drop-off and setup completion. |
| setup_completed | The last required step finishes. | The shared properties. | Setup completion rate. |
| first_value_reached | The user reaches the activation event through the interface, an import or an application programming interface (API) call. | The shared properties plus the path. | Activation rate and time to value. |
| session_started | Any later session begins. | The shared properties. | First-week retention. |
| invite_accepted | An invited member joins the workspace. | Role and inviter. | Invite acceptance rate. |

Paths that skip the interface still count. Accounts created by import, by an API call or by an admin must fire account_created and first_value_reached with every event property filled, or they vanish from the funnel. Our guide to automating onboarding shows what one missing event does to triggered messages.

In Google Analytics 4 (GA4), a [funnel exploration](https://support.google.com/analytics/answer/9327974?hl=en) can be closed, where users must enter at step 1, or open, where they can join at any step. A user who misses a step falls out of every later step. <!-- source: https://support.google.com/analytics/answer/9327974?hl=en --> I use closed funnels for required first-run setup and open funnels for optional steps.

Mixpanel, Amplitude and GA4 all build these funnels, and Microsoft Clarity adds session recordings. Once the funnel is trustworthy, drop-off by step tells you where to look.

## Where does drop-off by step point to a redesign?

**Drop-off by step points to the screen that loses the most users in absolute numbers; one spike means fix a field, while a slow leak means cut steps.**

I rank steps by users lost, not by percentage. Say 1,000 users reach step 2 and 10% leave, while 50 users open an optional branch and 40% leave. Step 2 loses 100 users and the branch loses 20 users, so step 2 gets redesigned first despite its smaller relative loss.

<!-- visual: symptom to screen diagnosis map (user-onboarding-metrics-drop-off-diagnosis.svg). Left column: 6 small funnel-shape thumbnails showing the data pattern (one cliff, slow staircase, cliff after a plug icon, cliff at an envelope, phone-only cliff, cliff at a card icon). Arrows lead to the implicated screen and the first fix to test. Caption: Drop-off patterns mapped to the onboarding screen they implicate and the first fix to test -->

<details class="astext"><summary>Show as text</summary>

This table maps each loss pattern to the screen it implicates, the first fix to test and the evidence that confirms it.

Table: Loss patterns in the funnel, the screen each one implicates and the first fix to test

| Pattern in the data | Screen it implicates | First fix to test | Confirm with |
|---|---|---|---|
| One step loses far more users than its neighbors. | The screen at that step, often a single field. | Remove the field or move it after first value. | Session recordings of users who left there. |
| A slow, even loss across many steps. | The whole setup wizard. | Cut or defer every step that does not lead to first value. | Required steps counted against the activation event. |
| A loss right after an integration or import step. | The connect or import screen. | Offer sample data and a skip option. | The wait to first value for users who connected. |
| A loss at email verification. | The sign-up confirmation screen. | Let users in before they verify. | Sign-up completion split by verification timing. |
| A loss on mobile only. | The same screen at small widths. | Fix the layout, keyboard and input types. | A platform split of the same step. |
| A loss after a plan or payment step. | The plan choice or card request. | Ask for the card after first value. | Channel and plan splits of that step. |

</details>

Analytics tell you where users leave, not why. Nielsen Norman Group (NN/g) [places analytics among the quantitative methods](https://www.nngroup.com/articles/quantitative-user-research-methods/), which count what users do and leave the reasons to qualitative research. <!-- source: https://www.nngroup.com/articles/quantitative-user-research-methods/ --> So before I choose a fix, I watch 10 to 20 session recordings at the drop-off step, filtered to users who left.

Identity checks add their own retry and pending numbers; see how to measure drop-off in a regulated know your customer (KYC) flow<!-- link: /blog/onboarding-kyc-process-flow/#how-do-you-measure-drop-off-in-the-kyc-onboarding-flow -->.

When the leak sits in a sign-up form, a setup step or a blank first screen, a tooltip layered on top leaves the screen itself untouched. That is where our onboarding work begins. In week 1 we read this same funnel in your analytics tool and review recordings of new users' sessions. In week 2 we interview 5 to 8 people who signed up recently, some activated and some lost.

The step funnel counts who leaves; the next number shows how long the ones who stay are kept waiting.

## What does time to value show that activation rate hides?

**Time to value shows how long activated users waited, and its slow tail exposes screens that block on data, integrations or teammates even when activation rate looks healthy.**

I report median time to value, the 90th percentile and the share who never reached first value inside the window. The average misleads, because a handful of accounts that took 4 days drag it far above what a typical user went through.

Say the invoicing product's histogram shows two humps. Most users reach first value in about 10 minutes with sample invoices, while a second group lands after 2 days, once their bookkeeper sends real data. Two humps mean two paths, and the slow hump is the one to redesign.

The tail usually sits on an empty state with nothing to do while data loads, an import step, an integration that needs an admin or an invite the user waits on. TradeZella's trading journal redesign<!-- link: /case-studies/tradezella/ (DOWN link) --> started from a version of this tail: its case study lists "hard to learn" among four user experience (UX) problems, with new users taking long to get productive. The whole web and mobile redesign, centered on dashboard analytics, later reported 25% higher user retention, a result of the full product work rather than of onboarding alone.

Speed and reach still do not tell you whether first value stuck.

## How should you read activation with first-week retention?

**Read activation and first-week retention as a 2×2: those who activate but never return point to a shallow event or no second-session prompt; returners who never activate point to setup.**

I count retention in the first week as any session after the sign-up day, up to 7 days out. Crossing it with activation gives four groups, and each one sends you to a different screen.

<!-- visual: 2x2 quadrant (user-onboarding-metrics-activation-retention-2x2.svg). x axis: activated within window (no, yes). y axis: returned in first week (no, yes). Each quadrant shows a short name, what it means and which screen to open first. Axes labeled with the two metrics; not an automate or keep-human matrix. Caption: Activation rate crossed with first-week retention, with the screen each quadrant points to -->

<details class="astext"><summary>Show as text</summary>

This table lists the four groups created by crossing the two metrics.

Table: The four activation and return groups, and the screen each one points to

| Group | What it means | Screen to open first |
|---|---|---|
| Activated and returned | Healthy; first value turned into a habit. | None; use this group as your baseline segment. |
| Activated, did not return | The activation event is too shallow, or nothing brings users back. | The second-session prompt, then the event definition. |
| Returned, did not activate | Interested but stuck. | The setup wizard and the empty state. |
| Neither | The sign-up promise does not match the product, or the audience is wrong. | The acquisition channel split and the sign-up page promise. |

</details>

Users who activate and vanish usually hit an event that proves setup rather than value, so the definition needs a second look. When the event holds up, the gap is a missing reason to return, such as a saved draft or a teammate's reply.

Users who return without activating want the product but cannot get past a step. Open the setup wizard and the empty state they land on, because they keep coming back to the same wall. I read the grid by sign-up week, and only after the 7-day window has closed for the last user in it.

In a B2B product, each quadrant splits again by role.

## Which user onboarding metrics change for B2B products?

**B2B user onboarding metrics split into workspace activation for the admin, member activation for each invited user and the invite acceptance rate that connects the two.**

Workspace activation means the admin reached first value. Member activation means an invited member completed a first assigned task. Invite acceptance rate is invites accepted ÷ invites sent, and it stays out of the core 6 because single-user products have no invites.

A member's time to value should be shorter than the admin's, since the member skips setup. When it is not, members are landing on the admin's setup wizard or an empty workspace, and our guide shows how to separate admin and member paths<!-- link: /blog/saas-onboarding/#how-should-b2b-saas-onboarding-treat-admins-and-members (conditional, one-link-per-target rule) -->.

Members who join through single sign-on (SSO) or a verified email domain never see sign-up, so leave them out of the sign-up completion denominator. Segment every chart by role before you compare months. Once the numbers point at a screen and you redesign it, you need proof the change worked.

## How do you prove a redesigned screen moved the number?

**Prove a redesign moved the number with a concurrent A/B test or holdout group where traffic allows, or compare sign-up cohorts only after every activation window has closed.**

User onboarding metrics prove nothing on a plain before-and-after chart, because it mixes the redesign with everything else that changed: a new ad channel, a holiday week or a pricing update. When I have to use one, I match the baseline's segment split and read each cohort only once its window has fully closed.

A concurrent comparison removes most of that noise. New sign-ups are split at random, and a holdout group keeps the current screen while the redesign goes to everyone else in the same weeks. I check guardrail metrics beside the target, such as support tickets from new accounts and first-week retention, so a faster setup that confuses people later does not pass. For message rules rather than screens, see how to run holdout groups for onboarding messages<!-- link: /blog/user-onboarding-automation/#how-do-you-measure-user-onboarding-automation -->.

<!-- visual: cohort read timeline (user-onboarding-metrics-cohort-read.svg). Horizontal timeline of 3 weekly sign-up cohorts, each with its 7-day activation window shaded. A redesigned-screen release flag between cohort 1 and cohort 2. A read-here marker placed only after the last window closes. A side lane shows a concurrent 50/50 split as the stronger option. Illustrative, no data; not a two-curve lift chart. Caption: Reading sign-up cohorts after a redesigned onboarding screen ships, with a concurrent split as the stronger option -->

<details class="astext"><summary>Show as text</summary>

Illustrative timeline, no real data.

1. Record the baseline from weekly sign-up groups before the release, with the same segment splits.
2. Ship the redesigned screen between two sign-up weeks.
3. Wait until the 7-day activation window has closed for the last user in each week's group.
4. Read activation rate and the return rate per week, split by channel and platform.
5. Where traffic allows, run a concurrent 50/50 split instead and compare both groups over the same weeks.

</details>

Small B2B trials rarely have the traffic for an A/B test. Then a clean cohort read plus interviews with recent sign-ups is the honest fallback, because the interviews explain a change the numbers are too small to settle.

Our onboarding process<!-- link: /services/saas-products/saas-onboarding-design/#how-does-the-saas-onboarding-design-process-work (UP link 2; plain service URL if fragments count as the same target) --> runs 4 steps over 3 to 6 weeks, and in its last week we help your team set up a split test where traffic allows and compare activation from before the release with activation after it. The same tree-to-screen habit carries into the rest of a product through our SaaS product design<!-- link: /services/saas-products/ (pillar) --> work. I'd pick the weakest leaf on your own tree this week, redesign that one screen and judge it only on a cohort whose window has closed.

## FAQs

### Is onboarding completion the same as activation?

No. Completion means a user finished your checklist or tour, while activation means they reached the action that predicts they will stay. A user can tick every box and still get nothing, so track both and trust activation when they disagree.

### How are customer onboarding metrics different from user onboarding metrics?

Customer onboarding metrics track a program run by people, such as days from signed contract to go-live or time to the first training session. User onboarding metrics track what each person does alone inside the product, from sign-up to first value and a return visit.

### Which tools track user onboarding analytics?

Product analytics tools such as Mixpanel, Amplitude and GA4 build the funnels and retention charts. Microsoft Clarity adds session recordings that show why users leave. Onboarding tools such as Appcues, Userpilot or Pendo report on their own guides and checklists, not on the screens underneath.

### Should NPS or CSAT count as an onboarding metric?

Yes, as a guardrail rather than a target, and HEART files both under Happiness. Ask only after the user reaches first value, because a survey shown before it rates the sign-up form instead of the product.

### How long should you wait before reading an onboarding change?

Wait until the activation window has closed for the last user in the group you compare. With a 7-day window, users who signed up during one week become readable 7 days after that week ends, and the return metric needs the same wait.
