# QA report: saas-onboarding (final QA, blog v2, 2026-10-14)

Post: content/blog/saas-onboarding.md at HEAD 79d86dd. That HEAD includes 03bc55b (the fact-checker's fixes after the semantic pass) and 79d86dd ("labelled" → "labeled" in the alt). Both landed during this run, and every check below was rerun on them.
Brief: content/briefs/saas-onboarding.json. Images: public/blog/saas-onboarding/ (7 SVGs, redrawn in the brand style).
Facts and honesty (items 2–3) are left to the fact-checker.
Build: a scratch copy of the repo (node_modules hard-linked with `cp -al`), built drafts-free because the post has `draft: false`. The shared `out/` was not touched. The `serve out -l 4568` process (PIDs 801/813/814) belongs to someone else and was left running. My own http.server (2875) was stopped, and `ps` confirms it is gone.

## Gates (current HEAD, unmodified)

| Gate | Result |
|---|---|
| `npm run build` | exit 0 |
| `npm run seo:check` | 37 of 53 pages, 0 errors, 0 warnings; "US English: no British spellings"; feed 0 errors |
| `npm run lint` | 0 errors (1 pre-existing warning in scripts/onpage-audit.mjs:77) |
| `npm run onpage -- /blog/saas-onboarding/` | 100, failed [] |
| `node scripts/semantic-score.mjs saas-onboarding` | 100 (skip-grams 13/14: "aha moment … retention" was lost in 03bc55b, still a pass) |
| With every FIX below applied (scratch rebuild) | build 0, seo:check 0/0, onpage 100, semantic 100 |

## Word count

The counts strip image alt text and link URLs.

| Text | HEAD | After A + B + C fixes |
|---|---|---|
| Open prose without FAQs | 2,695 | 2,603 |
| Open prose with FAQs | 2,943 | 2,851 |
| Everything visible, including the always-on "Text version" panels | 3,376 | 3,300 |

Against the ~2,700 cap, the prose without FAQs is at the limit (2,695), and the prose with FAQs is 243 words over. The B cuts below remove only redundant sentences. A further ~150 words would have to come out of brief-required substance (the email table, the TradeZella routing or the FAQs), so I do not prescribe that. The orchestrator should decide which count the cap applies to. I recommend prose without FAQs, because the FAQ block is a separate schema unit.

## Summary

| # | Check | Result |
|---|---|---|
| 1 | Intent and cannibalisation | PASS |
| 4 | Semantic SEO | PASS (density 1.56%, all bold answers 19–29 words) |
| 5 | Internal links | PASS (6 out, all 3 backlinkSuggestions live) |
| 6 | Images | FIX (C1 text panel; D1 SVG title spelling; D2 legibility, non-blocking) |
| 6b | Duplication | FIX (A6 removes the 4th visible repeat of the sort counts) |
| 7 | Readability and voice | FIX (A1–A9: keyword and value swaps that read robotically; B1–B6 length) |
| 7a | Competitor originality | PASS (beats page still ENOTFOUND; structure unchanged since loop 1) |
| 7b | Silo and leads | PASS |
| 7c | Variety | PASS |
| 7d | Semantic completeness | PASS with FIX (A7 and A8 logic) |
| 7e | On-page checklist | PASS (100) |
| 8 | Build, seo:check, lint | PASS |
| — | First-person voice (owner rule) | PASS |
| — | Brand infographics (owner rule) | PASS (palette, font, weights, canvas); D1 spelling |
| — | US market (owner rule, 79d86dd) | FIX (A9 ET time zone; D1 "labelled") |
| — | Layout v2 (hero, figures, Text version, FAQ) | PASS; L1 and L2 are template notes |

## 1. Intent and cannibalisation: PASS

The post is the only one in content/blog. The hub anchor "SaaS onboarding design" is used only as a link.
5-gram overlap: hub 1.9%, pillar 0.2%, about 0.4%, saas-product-redesign 0.0%, home 0.0%. All are below 12%.
One near-copy of the hub remains: L42 "the first minutes and days a new user spends in subscription software…" is the hub's abstract. It is under the threshold, but the brief asked for a rephrase. It is optional, not a FIX.

## 4. Semantic SEO: PASS

- Exact "SaaS onboarding" appears 23 times in 2,943 open words, a 1.56% word share.
- All 16 n-grams and 20/20 attributes are covered. Every one of the 11 content H2s has a one-sentence bold answer of 24–29 words.
- Keyword in 11 of 12 H2s or their first sentences.
- metaTitle 59 chars; H1 67 chars; description 157 chars, ending on "Then book a free consultation".
- No hedges, no banned phrases, no `<!--`.
- `every/all/never` hits were tested against the post's rules, and none contradicts them.
- `vs` hits: the H2 "User vs customer onboarding" has the head noun "onboarding", so it passes.
- No keyword is stacked onto another noun.

## 5. Internal links: PASS

There are 6 contextual links: the hub (L48, early), hub#cost, TradeZella, saas-product-redesign (the one cross-hub link), the pillar and contact. Every backlinkSuggestion is applied:

- Hub sections[0]: "how SaaS onboarding works from sign-up to first value".
- Hub FAQ: "choose the activation event" → `#where-does-saas-onboarding-end`. The id exists in the built HTML.
- pillars.ts: "SaaS onboarding guide".

## 6. Images, 6b. Duplication and brand style

**Brand style.** I checked all 7 SVGs:

- Canvas 1200×750; the cover is 1600×600.
- Only palette colors are used. Green and red appear only on ✓/keep and ✕/cut.
- Plus Jakarta Sans at weights 500/700/800 only. No gradients inside the content area, and no external references.

**Text panels.** Every label matches its text version word for word, apart from C1 below. Each figure sits directly after the paragraph it explains and has a figcaption that shares a key noun with its alt.

**Screenshots** (1440 and 390):

- The hero shows the navy band, breadcrumb, H1, description, byline and dates. The cover overlaps the band. At 390 the cover title sits inside the 16:9 crop.
- The figure with its Text version card renders cleanly at 1440.
- The FAQ answers are open, and FAQPage `acceptedAnswer` holds only the answer text.

**C1 (empty-state text panel misses the image's "Before" panel).** In the empty-state `astext` block, replace

```
<details class="astext"><summary>Show as text</summary>

1. Why it's empty
```

with

```
<details class="astext"><summary>Show as text</summary>

Before: a blank dashboard that says "No projects yet." After: the same dashboard with four parts.

1. Why it's empty
```

**D1 (designer, US market rule).** In public/blog/saas-onboarding/empty-state-anatomy.svg, change `<title>` "…with four labelled parts" to "…with four labeled parts". Make the same change in content/briefs/saas-onboarding.visuals.json (marker L15 and markdown L16; marker L7 "labelled" too). seo-check misses this because it reads only `<main>` text.

**D2 (designer and template, non-blocking).**

- At 1440 the 760px image scales 0.63×. 20px body text renders at 12.7px, which is fine. The 16px row labels ("Stage", "Message row", "Metric", the column labels in the audit grid) render at 10.1px, below the 12px floor in my 2026-10-05 lesson.
- At 390 the image is 354px wide (0.295×), so 20px text renders at about 5.9px. It cannot be read, and the content survives only through the Text version card.
- Proposed fix: raise the labels to ≥ 19px, and wrap `figure img` in a link to the SVG (tap to zoom) on screens ≤ 900px.

**L1 (template).** At 390 the `.astext` tables keep `min-width: 600px` inside a 306px scroller, so the "Message row" and "Metric" columns and the table caption sit off screen until the reader scrolls. A two- or three-column table could wrap instead.

**L2 (template).** At 390 the email table's `.ptable` is 370px wide in a 354px column, an 18px bleed. The page itself does not scroll sideways.

**6b.** The straight-line sort counts are visible 4 times: the L161 prose (twice in two sentences), the caption, the image title and the Text version. A6 below removes the prose repeat.

## 7. Readability and Eleken voice: FIX

The first-person voice is intact: "I" for method, "we" for the team's documented work, "you" for the reader, and the Bottom line closes on the author's recommendation. The keyword and EAV swaps left these sentences robotic or wrong. Every old string matches exactly once at HEAD 79d86dd. All of A, B and C were applied together on a scratch copy and rebuilt: semantic 100, onpage 100, seo:check 0/0.

**A1 (L26, "SaaS trial … its SaaS onboarding is the minutes").** Replace
`When I look at a software as a service (SaaS) trial, the first number I check in its SaaS onboarding is the minutes a new user spends before getting anything they came for.`
with
`When I review a software as a service (SaaS) product, the first number I check in its SaaS onboarding is how many minutes a new user spends before getting anything they came for.`
This also removes the "trial … B2B trial" echo two sentences later. Keep the literal "SaaS onboarding": the version "software as a service (SaaS) onboarding" would fail the first-60-words keyword check.

**A2 (L56, hypernym stuffing).** Replace
`B2B SaaS customer onboarding usually opens the customer lifecycle on two tracks with two owners:`
with
`B2B SaaS customer onboarding usually runs on two tracks with two owners:`

**A3 (L104, prose does not match the redrawn image).** The image now has three rows: Stage, Message row, Metric. Replace
`The map below puts screens and messages on two rows, with the activation event as the finish line.`
with
`The map below gives each stage its message and its metric, with the activation event as the finish line.`

**A4 (L128, the hub's parts-list wording pasted as a "rule"; "short forms" for one form).** Replace
`Every required field is one more chance to quit. My rule for the sign-up form: short forms, single sign-on and clear plan choices that don't block the first session.`
with
`I keep the sign-up form short, with single sign-on and a plan choice that doesn't block the first session, because every required field is one more chance to quit.`

**A5 (L187, 03bc55b broke the "helps when …; backfires …" pattern of the list).** Replace
`- **Onboarding checklist:** helps when it ends at the activation event, and I cap mine at 3–5 items; backfires with "watch a video" filler.`
with
`- **Onboarding checklist:** helps when it ends at activation after 3–5 items; backfires with "watch a video" filler.`

**A6 (L161, "steps" 6 times in two sentences; the counts repeat the caption and image).** Replace
`Back to the scheduling SaaS, with 11 steps before the first booking: 4 steps stay, 5 steps move later and 2 steps go. The sort cuts the number of steps from sign-up to first value from 11 steps to 4.`
with
`Back to the scheduling SaaS: the sort cuts the number of steps from sign-up to first value from 11 steps to 4, with 5 steps moved later and 2 steps cut.`

**A7 (L234, robotic value sentence that also contradicts the paragraph).** "Starting 24 hours after sign-up" describes the fixed schedule the paragraph argues against. Replace
`For the scheduler, follow-up onboarding emails bring inactive trial users back to the next step, starting 24 hours after sign-up.`
with
`In the scheduler's trial, the first onboarding email fires only if the calendar is still unconnected 24 hours after sign-up, and it brings inactive users back to that step.`
This matches table row 1.

**A8 (L283, the spelled-out durations contradict the stated total).** 1 + 1 + (1–3) + 1 = 4–6 weeks, not "3 to 6 weeks". The sentence also has the agreement slip "A redesign and prototype … takes". Replace
`Our onboarding redesign runs in 4 steps over 3 to 6 weeks. A funnel review takes 1 week, and interviews with 5 to 8 users who signed up recently take 1 week. A redesign and prototype tested with new users takes 1–3 weeks, then release and measurement take 1 week.`
with
`Our onboarding redesign runs in 4 steps: a funnel review (1 week), interviews with 5 to 8 recent sign-ups (1 week), a redesign and prototype tested with new users (1–3 weeks), then release and measurement (1 week).`
See O1 for the hub.

**A9 (L291, US market rule: "within one business day, ET").** Replace
`A senior designer replies within one business day.`
with
`A senior designer replies within one business day, ET.`

Length cuts (redundant only):

- **B1 (L36, −17; the "On this page" box lists the same sections).** Delete ` Below: the end point, the flow, the cuts, first-run patterns, B2B roles, emails and a 12-point audit.`
- **B2 (L82, −13).** Delete ` If every account starts with a kickoff call, jump to admins and members.`
- **B3 (L175, −25; the image and Text version already show where each moved step goes).** Delete the paragraph `When I move those 5 steps later, I don't hide them: each becomes a settings placeholder, a checklist item or a prompt at first use.` together with the blank line before it.
- **B4 (L188).** Replace `backfires as a long tour at first login, which users click through.` with `backfires as a long tour at first login.`
- **B5 (L278).** Replace `Onboarding tools such as Appcues, Userpilot and Pendo handle checklists, tours and in-app messages well, and we design for them too. A tool sits on top of your screens, so I read an audit this way:` with `Onboarding tools such as Appcues, Userpilot and Pendo handle checklists, tours and in-app messages well, but they sit on top of your screens. So I read an audit this way:`
- **B6 (L50).** Replace `creates the tenant admin in an identity provider. Engineering owns that work, not design. So when a team says` with `creates its admin in an identity provider. That's engineering work, so when a team says`

Do not swap numerals for words ("1 step" → "one step") without rerunning semantic-score. The `facts` check needs 1.2 per 100 words in code (see O2), and A + B sits exactly at that line.

## 7a. Competitor originality: PASS

The `beats` page (appcues.com/blog/saas-user-onboarding) still returns ENOTFOUND, so the numeric overlap could not be computed. The section order and examples are unchanged since loop 1, where they passed, and all 7 serpGaps are covered.

## 7b–7c. Silo, leads and variety: PASS

- services[0] is saas-onboarding-design, the funnel is mofu and serviceSupport is 4. "free consultation" appears once.
- The leadAngle comes through the pain CTA after the cut method, the tool-vs-designer routing and the stopwatch close. There is no hard sell.
- Intro, CTA angle and visual types are unchanged from the passed version.

## 7d. Semantic completeness: PASS after A7 and A8

Every H2 and H3 runs answer → why → example → next step. I walked the frames again:

- After A6, the sort's 4/5/2 counts are consistent with the image.
- The audit grid matches its text version.
- The Bottom line matches the audit order.
- After B1 the intro promises nothing the body lacks. Every takeaway has a section.

## 8. Build: PASS

See the Gates table above.

## Notes for the orchestrator (not post defects)

- **O1.** content/services/saas-onboarding-design.json lists step durations of 1 + 1 + 1–3 + 1 weeks (4–6) and says "3 to 6 weeks" in its metaTitle, abstract and two answers. The fact-checker should settle which is right. Until then the post states only the step durations (A8).
- **O2.** scripts/semantic-score.mjs L124 passes `facts` at `>= 1.2` but prints "(≥ 1.0)", and RULES.md says 1 per 100 words. At HEAD it reads "1.3 ✓". During testing it showed "✗ … 1.2 (≥ 1.0)". Align the threshold with RULES or the label.
- **O3.** The metric pushes writers to bolt units onto numbers ("4 steps stay, 5 steps move later and 2 steps go"). A6 and A8 keep the numbers in natural form.
- **O4.** L1 and L2 are template items (app/globals.css "Blog post v2").

## Guidance for the writer

There are no content gaps. Apply A1–A9, B1–B6 and C1 exactly as written. Then rerun `node scripts/semantic-score.mjs saas-onboarding` (expect 100) and `npm run onpage -- /blog/saas-onboarding/` (expect 100).

## FAIL list

None. Open items: FIX A1–A9, B1–B6, C1 (post); D1 (SVG title spelling, designer); D2, L1, L2 (non-blocking layout); O1–O2 (orchestrator).

VERDICT: PASS
