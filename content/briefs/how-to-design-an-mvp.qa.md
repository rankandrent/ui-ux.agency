# QA: how-to-design-an-mvp

QA ran on 2026-10-18 against content/blog/how-to-design-an-mvp.md and content/briefs/how-to-design-an-mvp.json, and merged with how-to-design-an-mvp.facts.md (06:48).
Scratch build: /tmp/claude-0/-home-user/fe69f371-e23c-50e5-9047-e154a04e6691/scratchpad/mvp-qa (draft: false). The shared out/ was not touched.
At the orchestrator's request, all 24 fixes below are applied to the post. They are scripted as exact old → new pairs (tools/fixes.py in the scratchpad, each must match exactly once). The post now matches the tested scratch copy byte for byte, apart from `draft: true`.

## Checklist

| # | Check | Result | Evidence |
|---|---|---|---|
| 1 | Intent and cannibalization | PASS | The intent is an informational how-to, and it matches the brief. No other content/ page targets "how to design an mvp", "design mvp", "mvp ux design" or "mvp ui design". The hub-owned phrase "MVP design" is not in the title, H1, metaTitle, description or any H2. Body uses: 2 (the hub anchor and the cost-link anchor), within the cap of 4. The fact-check merge (C4, C5) uses "MVP service page" so the count stays at 2. |
| 4 | Semantic SEO | PASS after F3–F7, F16 | 5 bold answers ran 32–34 words: H2 2 (32), H2 3 (34), H2 4 (32), H2 5 (34) and H2 9 (32). All 10 now run 27–30 words, one sentence each. The three salience edits now read naturally and keep "design an MVP": H2 4 lost the "one flow … core flow" repeat, H2 9 lost the "design team to design" repeat, and H2 5 is cut to 30 words. Title 66 chars, metaTitle 51, description 147 on the built HTML, ending "Then book a free consultation." (MOFU). Keyword: H1, first sentence, 5 body uses. Word share is 0.68%, below the 1–2% guide but inside the brief's own target of 6–8 uses including H1. The scorer reports no n-gram stuffing. Boolean FAQs and the inline answer open with Yes/No. No banned phrases. The only hedge-word hit is MoSCoW's own label "Could have". Takeaways used WCAG and NN/g before the body expanded them; F16 expands both. |
| 5 | Internal links | PASS | 7 internal links (MOFU range 6–10): hub (about word 70), design-sprint (the one cross-hub link), /services/startups/ (pillar), Vocable, Elia Wellness, hub #how-much-does-an-mvp-design-agency-cost (id present in the built hub) and /contact/. All targets exist in out/. Anchors vary. Hub cap 2 respected. backlinkSuggestions: 3 required (hub JSON p, pillars.ts startups FAQ, vocable.md L43) are not applied yet. Status: conditional on publish, for the orchestrator to apply on publish day, because a link to a draft would 404. home.ts is skipped per the brief. |
| 6 | Images | PASS after F10–F12 | 6 SVGs plus the cover exist and render (naturalWidth 1200; 760 px at 1440, 354 px at 390). Smallest text is 20 px, which renders at 12.7 px on desktop. The cover is not cropped at 390. Alt text and captions share their subject. No third-party brand assets. Panel ⊇ image: added "illustrative example" (brief), "hypothetical example" (flow states) and the two ladder badges (F12). The cut board is drawn as lane rows. The post's alt and caption never say "columns", but visuals.json L11 does (housekeeping H2). |
| 6b | Duplication | PASS | Each image's items appear only in its astext panel. The flow-states panel holds 20 state descriptions that are not on the image (panel ⊇ image, allowed). |
| 7 | Readability | PASS after F8 and C3 | The accessibility paragraph had 5 sentences and is now split into 2 + 4. No paragraph runs over 4 sentences, including after the fact merge. No serial commas: every ", and" hit is a clause comma. US spelling: "grey" ×2 → "gray" (F9). No "&lt;" in the built HTML. No HTML comments. 5-gram overlap: hub JSON 0.40%, product-discovery 0.34%, saas-homepage-design 0.55%, saas-onboarding 0.08%, user-onboarding-automation 0.37% (all ≤ 5%). |
| 7a | Competitor | PASS | `beats` = upsilonit (curl 200, on topic). 5-gram overlap 0.05%. Its order is a generic 7-step process (problem → research → personas → features → wireframes → prototypes → feedback) plus UX/UI "types" and a cost section. Ours routes by riskiest assumption to an MVP type and adds the brief card, cut reasons, screen states, written thresholds, WCAG and handoff contents (every serpGap). Nothing is mirrored. |
| 7b | Silo and leads | PASS (template note T1) | services[0] = mvp-design-agency. funnel mofu, service-support 4 (meets the MOFU minimum of 4). leadAngle delivered at the end of H2 7, in H2 9 and in the closing. F14 removes a third restatement of the hub's 4–8 weeks in the H2 7 lead paragraph. That section now names the package once without repeating the timeline, which lives in H2 9 and the FAQ. |
| 7c | Variety | PASS after F1 | Intro credential and roadmap shapes repeated across posts: "…at ui-ux.agency, the design team of tkxel…" (product-discovery, saas-onboarding, user-onboarding-automation, saas-homepage-design) and the colon roadmap ("This guide follows the order I work in: …" ≈ "The guide below covers …" ≈ "Below, I follow a visitor …: …"). F1 puts the author's point of view first, drops the tkxel appositive and the roadmap, and merges facts #19 (role). The WCAG/ADA sentence was verbatim in saas-homepage-design and user-onboarding-automation, and F8 rewrites it. Fingerprint: originator-quote intro is new, and ≥ 4 of 7 dimensions differ from each of the last 3 posts. |
| 7d | Completeness | PASS | Every H2 runs bold answer → detail → example (groomer app) → next step. All 13 brief questions are answered (cost by link). FAQs have ≥ 2 sentences. The intro promises only what the body delivers. Each takeaway is backed by a section. F13 adds the lead-in sentence the ladder image lacked. |
| 7e | On-page | PASS | `npm run onpage -- /blog/how-to-design-an-mvp/` = 100, failed []. Semantic 94 (facts density 0.6 is the accepted miss). Entities rose from 25/26 to 26/26 with the "WCAG 2.2 AA" sentence in F8. "contrast … 4.5:1" can never match, because the scorer tokenizes "4.5:1" as 4 / 5 / 1. That is a scorer quirk, not a gap. |
| 8 | Build | PASS | Scratch `SHOW_DRAFTS=1 npm run build` exit 0. seo:check: 0 errors (13 warnings on other pages). feed-validator: 1 expected error (qa pending), 0 with qa: pass in scratch. lint: 0 errors (1 pre-existing warning in scripts/onpage-audit.mjs). |
| — | Sister site | PASS | curl uiuxdesignservices.us /services/ui-ux-design-services-for-startups/ 0.03% and /industries/startups/ 0.08% (≤ 2%). The sitemap has no MVP or prototype page. No links between the sites. |
| — | Case studies and honesty | PASS | Vocable (vocable.md L25/43/59) and Elia Wellness (L25/41/91) match. No results are credited. The scorecard is labeled example data and the brief card an illustrative example. No invented stats. |

## Fixes applied (exact old → new, all in the post)

- F1 intro: "I lead user experience (UX) at ui-ux.agency, the design team of tkxel in Reston, Virginia, where our [MVP design agency](…) team turns founders' ideas into prototypes tested with real users. The misreading I watch for most is … small test.\n\nThis guide follows the order I work in: …build from." → "The misreading I watch for most is a founder designing a small product when what they need is a small test. I work as Senior Manager, User Experience (UX), at ui-ux.agency in Reston, Virginia, where our [MVP design agency](/services/startups/mvp-design-agency/) team turns founders' ideas into prototypes tested with real users." (merges facts #19)
- F2 H2 1: deleted "That order is how our team works: a clickable prototype tested with real users comes before anyone writes code." (it restated the intro).
- F3 H2 2 bold → "**Before you open a design tool, name the first user, their problem in their words, the assumption that would sink the idea and the result that counts as a pass.**" (30 words)
- F4 H2 3 bold → "**The riskiest assumption picks the MVP type: smoke test for demand, concierge for payment, Wizard of Oz for unbuilt tech, clickable prototype for usability and single-feature product for repeat use.**" (30 words)
- F5 H2 4 bold → "**To design an MVP around one core flow, keep the features that flow needs to test your riskiest assumption and log why every other idea moves to later or never.**" (30 words)
- F6 H2 5 bold → "**When you design an MVP, map the core user flow from first screen to first result, then wireframe each step in low fidelity with empty, loading, error and success states.**" (30 words)
- F7 H2 9 bold → "**You need a team to help design an MVP when tests fail for unclear reasons, investors expect a credible prototype by a deadline or the product serves several user types.**" (30 words)
- F8 accessibility paragraph split and reworded → "Accessibility belongs in the first draft. I check every screen against level AA of the Web Content Accessibility Guidelines (WCAG) 2.2, and for US buyers the Americans with Disabilities Act (ADA) and Section 508 are the legal backdrop." / "The two WCAG 2.2 AA checks I run first are contrast and target size. Under [SC 1.4.3]… 4.5:1 and large text 3:1. Under [SC 2.5.8](…), a tap or click target must measure at least 24 by 24 Cascading Style Sheets (CSS) pixels unless spacing makes up for it, and links inside a sentence are exempt. Fixing contrast after launch…"
- F9 "grey boxes" → "gray boxes" and "Grey boxes prove" → "Gray boxes prove".
- F10 brief panel intro → "This illustrative example lists the 8 fields of the one-page brief with values for the hypothetical groomer app."
- F11 flow panel intro → "This hypothetical example shows the groomer app's 5 screens and their states:"
- F12 ladder panel, after the table → "The top rung carries two badges, text contrast of at least 4.5:1 and targets of at least 24 by 24 CSS px, because the finished screens must pass both; set the color tokens and tap sizes from the first draft." (facts #40 wording)
- F13 ladder lead-in, appended to "…ends the session." → " Each rung of finish answers a different question for a different audience."
- F14 H2 7: deleted " The whole process runs 4 to 8 weeks, from discovery to handoff." (third restatement of the hub timeline)
- F15 Bottom line: "Vocable shows how our team keeps a first version tight around the jobs its users named, and we can …" → "Vocable shows that cut in a launched product, and we can design your first version with you." (it repeated the H2 4 sentence)
- F16 takeaways: "meet WCAG 2.2 AA contrast" → "meet Web Content Accessibility Guidelines (WCAG) 2.2 AA contrast"; "NN/g's model" → "Nielsen Norman Group's model".

## Merge notes (facts.md)

- #5 applied as-is (C1).
- #7 applied merged (C2). The facts text had a serial comma (", and present") and an unclear "not the other way around". New text: "…Michael Seibel walks through determining an MVP feature set, building prototypes and demos for user testing and presenting the MVP to early customers or investors. I build the feature set from what users say in interviews, not from the founder's wishlist."
- #10 applied as-is (C3). The paragraph is now 4 sentences.
- #19 applied merged into F1. The facts text "I'm Senior Manager UX at ui-ux.agency, the design team of tkxel…" would bring back the repeated credential shape and leave UX unexpanded.
- #23 and #24 applied merged (C4, C5): "Our MVP service page shows the cut as a 40-idea wishlist…" and "…our MVP service page names user types and platforms as the biggest drivers of price." This keeps bare "MVP design" at 2 uses.
- #27 applied as-is (C6).
- #40 is SVG work for the designer (D1). The F12 panel text already uses the corrected wording.

## Open items (not in the post)

- D1 (designer, from facts #40): ladder badge text "Contrast 4.5:1" → "Text contrast ≥ 4.5:1" and "24 by 24 px targets" → "Targets ≥ 24×24 CSS px". Update the aria-label and visuals.json L19 to match. Optionally move the target badge to the clickable gray-box rung, because the badges on the top rung alone suggest accessibility waits for high fidelity.
- D2 (designer, recommended): the cover eyebrow reads "GUIDE · MVP DESIGN", the hub-owned head phrase, on the page's largest image. Suggest "GUIDE · FIRST VERSION" or "FOUNDER'S GUIDE".
- H1 (housekeeping): visuals.json L11 says "Three columns of sticky notes" and "column visibly short", but the board is drawn as lane rows. Change to "three lane rows" and "row".
- H2 (orchestrator, on publish): apply the 3 required backlinkSuggestions.
- T1 (owner/template): the MOFU inline CTA renders "See how we did this for Digno — Overall revenue up 5x" (relatedCaseStudies()[0]). The brief says skip Digno and credit no results to MVP design, and the post's closing names Vocable. The template has no per-post case-study override. Options: add an optional `caseStudy:` frontmatter field (set to vocable), or reorder. 
- T2 (template): the bottom CTA band heading reads "Talk to a MVP design agency lead" (app/blog/[slug]/page.tsx L271: `Talk to a ${anchorOf(hub)} lead`). "a" should be "an" before "MVP". Pick the article by first letter or sound.

## Guidance for the writer

No open content gaps after the fixes. For the next post, from this run:
- [All H2s] Bold answers must be 30 words or fewer after any salience edit. Count them after adding the keyword. 5 of 10 ran 32–34 words.
- [Intro] Do not reuse the "role at ui-ux.agency, the design team of tkxel" appositive or a colon roadmap sentence. Both repeat across the last 4 posts.
- [Accessibility] Do not paste the house WCAG/ADA sentence. Write it fresh each time. It was verbatim in 3 posts.

VERDICT: PASS
