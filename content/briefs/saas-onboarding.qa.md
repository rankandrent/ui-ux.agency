# QA report: saas-onboarding (loop 2, 2026-10-13)

Post: content/blog/saas-onboarding.md (commit 523ecad, working tree clean) · Brief: content/briefs/saas-onboarding.json · Images: public/blog/saas-onboarding/ (7 SVG, unchanged since c5b31af)
Facts and honesty (items 2–3) are left to the fact-checker. The backlinks in F12 are applied by the orchestrator at ship, so `internal-in` is not failed here.
Build: a scratch copy of the repo (node_modules hard-linked with `cp -al`; Turbopack rejects a symlink) built with SHOW_DRAFTS=1. The shared `out/` was not touched.

Word count (markdown body, links unwrapped, image alt removed):

| Text | Words |
|---|---|
| Open text as committed | 2,629 |
| Open text without FAQs | 2,408 |
| Including the `<details>` panels | 3,001 |
| Open text after C1–C6 below | 2,589 |

The committed post is 29 words over the 2,600 cap. C1–C6 bring it back inside and remove three repetitions created by the repairs.

## Summary

| # | Check | Result |
|---|---|---|
| 1 | Intent and cannibalisation | PASS |
| 4 | Semantic SEO | PASS |
| 5 | Internal links | PASS |
| 6 | Images | PASS (unchanged) |
| 6b | Duplication | PASS |
| 7 | Readability | FIX (C1–C6: length, repetition, punctuation) |
| 7a | Competitor originality | PASS (unchanged since loop 1) |
| 7b | Silo and leads | PASS |
| 7c | Variety | PASS |
| 7d | Semantic completeness | FIX (C2 logic; G1–G3 landed) |
| 7e | On-page checklist | PASS for the post (score 95; the only miss is `internal-in`, which F12 clears at ship) |
| 8 | Build, seo:check, lint | PASS |

## Verification of the loop-1 fixes

| Fix | Landed | Note |
|---|---|---|
| F1 process bold answer | Yes (L98, 27 words) | |
| F2 end-point bold answer and first sentence of L86 | Yes (L82, 28 words) | L86 reads "after the activation event" rather than "after it", which is correct because the G2 sentence now sits between them. "Some teams call that event" resolves correctly. |
| F3 Bottom line | Yes (L279) | Matches the audit's "earliest stage first" and the keep/later/cut method. |
| F4 cost sentence | Yes (L273) | |
| F5 two tracks | Yes (L56) | |
| F6 process-flow sentence | Yes (L138) | |
| F7 "Most B2B products" | Yes (L303) | |
| F8 kickoff sentence | Yes (L78) | 4 sentences. |
| F9 FAQ 1 opening | Yes (L287) | The FAQPage JSON-LD holds only the answer. |
| F10 TradeZella tense | Yes (L275) | |
| F11 recording link | Yes (L281) | |
| F13 routing | Yes (L271) | Audit items 9–10 now route to design. |
| G1 process H3s | Yes (L118–136) | Each H3 now has a why and a line from the scheduler example (34–43 words). Two side effects: C2 (stage 4) and C4 (intro/L169). |
| G2 day-7 return rate | Yes (L84) | "Three numbers follow" was updated. |
| G3 cut test | Landed, but wrong | My loop-1 wording sorts billing into "cut": a payment card does not "help the user at any point before upgrade", yet the sort image moves it later. See C2. |

Other repair edits outside my list (fact-checker): the intro's second sentence (L36), the hub-link sentence (L48) and the Slack method sentence (L88). The admin paragraph about large accounts was also removed (L220). All were reread; the only new defects are C4 and C6.

## 1. Intent and cannibalisation: PASS

No change since loop 1. The post is informational and MOFU. It is the only post in content/blog. It uses "SaaS onboarding design" only as the hub anchor.

## 4. Semantic SEO: PASS

- Bold answers: all 11 content H2s have one sentence of 25–29 words; the Bottom line has 19.
- Density: 22 exact "SaaS onboarding" in 2,629 open words, a 1.67% word share (1.70% after the cuts).
- Entities and n-grams: all 16 brief n-grams and every attribute appear in open text. "Day-7 return rate" is now defined (L84).
- Abbreviations: expanded on first open use, unchanged.
- Boolean FAQs: FAQ 3 and FAQ 5 start with "No."
- Hedges and banned phrases: 0 hits for might/may/could/perhaps/leverage/seamless/delve/unlock/elevate. No HTML comments (`<!--`: 0).
- Meta, measured on the built HTML:
  - metaTitle and og:title: 59 characters. H1: 67.
  - Description: 157 characters and ends in a next step.
  - The first meta keyword is "saas onboarding".
- Keyword sentences:
  - L26 "its SaaS onboarding log" still reads naturally.
  - The new bold answers read naturally. Shared-verb test on L98: "four lead to the activation event" and "a fifth brings the user back" are both true.

## 5. Internal links: PASS

There are 6 contextual links: hub (L48, early), hub#cost, TradeZella, saas-product-redesign, pillar and contact. All targets and the `#how-much-does-saas-onboarding-design-cost` fragment exist in the drafts build, and the hub cap of 2 is respected. Internal-in is handled by F12 at ship.

## 6. Images and 6b. Duplication: PASS

- `git diff c5b31af HEAD -- public/blog/saas-onboarding/` is empty, so the loop-1 render, legibility, spelling and label checks stand. All 7 files are present in the build output.
- Prose against the images:
  - H3 1 "work email or a Google or Microsoft sign-in" matches the sort's "work email or SSO".
  - H3 2's question matches "say what you'll book first".
  - H3 3's "availability from default hours" matches "set availability (default hours in settings)".
  - H3 4's pre-copied booking link matches "share your booking link".
- Nothing is visible twice.

## 7. Readability: FIX

- 5-gram overlap: hub 1.3%, pillar 0.2%, saas-product-redesign 0.0%, about 0.4%, home 0.1%. All are below 12%.
- Paragraphs are at most 4 sentences. US English.
- The post is 29 words over the cap, and the repairs added three repetitions.

The orchestrator should apply these exact replacements:

**C1 (L273, repeats the H2's own bold answer at L266; −11 words).** Replace
`Drop-off in the form, the wizard or a blank screen? Our onboarding redesign runs in 4 steps:`
with
`Our onboarding redesign runs in 4 steps:`

**C2 (L151, G3 logic; −6 words).** As written, the fourth test cuts "add a payment card", which the sort image moves to upgrade. "cut it … gets cut" is also redundant. Replace
`- **Does it help the user at any point before upgrade?** If not, cut it, the way an intro video or a job-title field only sales reads gets cut.`
with
`- **Does the user ever need it?** If not, cut it, like a job-title field only sales reads or an intro video.`
Check against the 11 steps: billing is needed at upgrade (test 3, later). Job title, company size and the intro video are never needed by the user (test 4, cut). Calendar is needed now (test 1, keep). The totals stay 4 / 5 / 2.

**C3 (L58, table intro; −6 words).** Replace
`The table below compares the two by owner, place, trigger, end point and what each scales with.`
with
`The table below compares owner, place, trigger, end point and scale.`

**C4 (L169, repeats the repaired intro L36 "we watch new-user session recordings and measure drop-off from sign-up to first value"; −9 words).** Replace
`Losing trial users before setup is done? That's the exact flow our design team rebuilds, starting from drop-off data and new-user session recordings.`
with
`Losing trial users before setup is done? That's the exact flow our design team rebuilds.`

**C5 (L132, G1 sentence repeats the reason at L198, "users remember their own first result"; −7 words).** The tour-vs-task reason belongs to L198, which carries the post's only "product tour". Replace
`Give the user a real task with real or sample data instead of a menu tour, because they leave with their own result.`
with
`Give the user a real task with real or sample data instead of a menu tour.`
Stage 4 still has its example (the pre-copied link and preview) and its purpose ("The activation event follows when someone books through it").

**C6 (L220, two colons in one sentence, left when the large-accounts paragraph was removed; −2 words).** Replace
`Now test it: join your own product as an invited member: if you see the admin's setup wizard, that's your first fix.`
with
`Now join your own product as an invited member. If you see the admin's setup wizard, that's your first fix.`

I ran C1–C6 as a script on a scratch copy. Every old string matches exactly once. Open text drops to 2,589 words, and all n-grams and attributes are still covered. The only "drop-off per onboarding step" (L100) is untouched.

## 7a. Competitor originality: PASS

Unchanged since loop 1. The `beats` page fetch is blocked, so the numeric overlap could not be computed. The structure does not mirror the beats page, and all 7 serpGaps are covered.

## 7b. Silo and leads: PASS

- services[0] is saas-onboarding-design, funnel is mofu and serviceSupport is 4.
- "free consultation" appears once in the body (L281).
- The leadAngle is delivered softly through the CTA after the cut method, the routing and hub facts, and the stopwatch close. C1 and C4 keep that tone and remove only repeated wording.
- The TradeZella owner note from loop 1 still applies.

## 7c. Variety: PASS

The intro, closing, CTA angle and visual types are unchanged from loop 1 and stay new against fingerprints.json.

## 7d. Semantic completeness: FIX (C2)

- Every H2 and H3 now follows answer, then why, then example, then next step.
- The five stage H3s are 34–43 words each.
- Frame walk:
  - Keep/later/cut: every label has a test. After C2, each of the 11 sorted steps reaches its column through the tests.
  - Audit to routing: items 1–6 and 9–10 route to design and items 7, 8 and 11 to a tool. Item 12 (tracking) is measurement and needs no route.
  - The Bottom line is consistent with the audit and the method.
  - Every takeaway is backed by a section.
- No trailing sentences, TODOs, or FAQ answers under 2 sentences.

## 7e. On-page checklist: PASS for the post

- I ran `npm run onpage -- /blog/saas-onboarding/` on the scratch drafts build with the robots meta stripped. Score 95; the only failed check is `internal-in: ≥ 3 pages link here (has 0)`. That is F12 (orchestrator at ship): the hub sections[0] sentence, the hub "measure" FAQ and the pillars.ts sentence given in loop 1.
- After F12, re-run onpage on the production build and expect 100.
- Manual items: unchanged and satisfied (E-E-A-T, bold snippets of at most 30 words, 5 linked external sources, images under 10 KB, keyword in 9 of 12 H2s).

## 8. Build: PASS

- `SHOW_DRAFTS=1 npm run build` in the scratch copy: exit 0, and `out/blog/saas-onboarding/index.html` was rendered with all 7 images.
- `npm run seo:check`: 53 pages, 0 errors, 0 warnings.
- `npm run lint`: exit 0.

## Guidance for the writer

There are no new content gaps; G1–G3 landed. Apply C1–C6 exactly as written. They are wording cuts, so do not add text elsewhere: the post has about 11 words of headroom under 2,600 after the cuts.

## FAIL list

None. The open items are FIXes C1–C6 (exact replacements above) and F12 at ship.

VERDICT: PASS
