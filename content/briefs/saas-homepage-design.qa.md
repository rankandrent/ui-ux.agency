# QA: saas-homepage-design

- Post: `content/blog/saas-homepage-design.md` (draft), route `/blog/saas-homepage-design/`
- Checked: 2026-10-17 by content-qa, loop 1
- Scratch builds (shared `out/` untouched): `/tmp/claude-0/-home-user/fe69f371-e23c-50e5-9047-e154a04e6691/scratchpad/shd-qa` (QA fixes) and `.../shd-qa2` (QA fixes + fact-check F1–F8 merged)
- QA fixes Q1–Q19 were applied to the post after testing (orchestrator instruction). The post is byte-identical to the tested scratch copy (draft/qa fields aside).

## Checklist

| # | Check | Result | Evidence |
|---|---|---|---|
| 1 | Intent & cannibalization | PASS | No other file in content/ (outside briefs) mentions "saas homepage design", "homepage design" or "web design for saas". "SaaS design agency" appears only as anchor text. Commercial-investigation how-to intent is served (promise, sections, CTA, handoff, tests). |
| 4 | Semantic SEO | PASS after Q1–Q15 | Bold answers 22–30 words, one sentence each. Title 55, metaTitle 52, description 143 on built HTML, ending on "Then book a free consultation." (MOFU). Keyword uses 10 → 12 after Q14/Q15 (0.91% of body words, 1.13% of open text; brief target 11–14). Abbreviations: AMA was bare (Q3); all others expanded on first open-text use. Boolean FAQs open with No/Yes. No banned phrases, no might/may/could/perhaps. 7 serial commas against house style (Q6–Q13). `vs` hit has a head noun ("gap"). No digit-led sentences, no HTML comments. Keyword sentences read naturally. Semantic score 94: the only ✗ is facts density (0.5/100 words). The 3 "missing" attributes (core job, promise vs delivery, value perception) are covered in the text in other words. |
| 5 | Internal links | PASS | 6 contextual links: hub ×2 (word ~115 and Bottom line deep link `#saas-design-agency-faqs`), onboarding hub ×1 (the one cross-hub link), Digno, pillar `/services/saas-products/`, `/contact/`. All targets build. Anchors vary. |
| 6 | Images | PASS after Q6 | 6 inline SVGs + cover exist and render. At 1440px each image renders 760px wide (scale 0.633, smallest text 20 → 12.7px). The cover at 390px is not cropped. No third-party brand assets; spelling checked. Promise flow is drawn top to bottom (steps 1–5, thread nodes on 1, 3 and 5). The floating "Our services / Free consultation" bar in screenshots is site chrome. Mobile: at 354px the text renders about 6px, the same as every post; the always-visible panels carry the text. |
| 6b | Duplication / panels | PASS after Q6 | Every image has an `astext` panel; no list is visible twice. Section stack: the 10 sections and jobs match the panel table row for row. Leaving out "Must match in the product" is fine (panel ⊇ image). The image also showed the 57% / 74% attention band and "Source: NN/g eyetracking, 2018", which the panel lacked. Q6 adds that line. Headline rewrites, decision tree, promise flow, ledger and funnel panels match their images label for label. |
| 7 | Readability | PASS after Q1–Q2 | 2 paragraphs had 5 sentences (Wes Bush, CTA label); both are split. 5-gram overlap: saas-onboarding 0.53%, user-onboarding-automation 0.63%, product-discovery 0.25%, hub JSON 0.93%, Digno case study 0.40% (all below the 5% task limit and the 12% rule). |
| 7a | Competitor originality | PASS (not comparable) | `beats` huemor.rocks/blog/saas-homepage-design returns 301 to /blog/top-saas-website-examples/, a SaaS website examples gallery. 5-gram overlap is 0.00%, with no mirrored headings or examples. poweredbysearch returned 403 (curl) and ENOTFOUND (WebFetch). Every serpGap is covered: handoff, promise ledger, CTA decision rule plus the NN/g Get Started finding, metrics on homepage sign-ups, the US frame (WCAG 2.2, ROSCA, CWV) and sourced figures only. |
| 7b | Silo & leads | PASS (note) | services[0] = saas-design-agency, funnel mofu, service-support 4 (meets MOFU ≥ 4). The lead angle sits in the ledger section ("Copy can be fixed alone…"), with no homepage price and no free audit. The onboarding section stays a handoff: field count, SSO, promise echo, first screen, empty state, the hub deliverable sentence and one link to the onboarding hub; it has no checklist, tour or email patterns. Note: the MOFU template CTA renders "See how we did this for Digno / Overall revenue up 5x" (app/blog/[slug]/page.tsx L102–103). The post body credits nothing to the homepage, but the template places Digno's revenue next to a homepage guide. Owner/orchestrator decision; the industry-enterprise precedent accepted it as the case study's published headline. |
| 7c | Variety | PASS after Q16–Q17 | The imperative try-this-now intro is new. The intro's credential and roadmap sentences repeated the shape of product-discovery and user-onboarding-automation ("I'm X, … at ui-ux.agency … 200+ products since 2017. The guide below covers…"). Q16/Q17 reshape both. The closing is unique. |
| 7d | Completeness | PASS after Q18 | The Digno H3 described only the homepage, not the product side it points to. Q18 adds a paragraph from digno.md: the org dashboard health score and the My Digno Score page, plus a reader step. Every outline point and question is covered. The mistakes table has 6 of the outline's 10 items, but the other 4 are covered in earlier sections: roadmap claims L66, one primary CTA L125, hero LCP L253, cookie banner L259. |
| 7e | On-page | PASS | `npm run onpage -- /blog/saas-homepage-design/` score 100, failed []. Built HTML: 0 `&lt;`. FAQPage answers hold only their answers. 6 figures / 6 figcaptions; each table has an intro sentence and a `Table:` line. |
| 8 | Build | PASS | build exit 0; seo:check 0 errors (12 pre-existing warnings); feed-validator 0 errors with `qa: pass` in scratch (1 expected error with `qa: pending`); lint 0 errors (1 pre-existing warning in scripts/onpage-audit.mjs). Same results on the combined QA + fact-check copy (onpage 100, semantic 94, 0 `&lt;`). |
| — | Sister site | PASS | The uiuxdesignservices.us sitemap has no homepage/website/landing blog post. Its blog list holds 10 posts, none on this topic. 5-gram overlap with its /services/ui-ux-web-design/, /services/saas-ux-design/ and /industries/saas/ is 0.10%, 0.10% and 0.20%. |

## QA fixes applied (old → new)

- Q1 L50: split after "…keep the two closely aligned." (new paragraph starts "So I treat…")
- Q2 L125: split after "\"Start a free trial\" passes that test." (new paragraph "Keep one primary CTA…")
- Q3: "In a Pocus AMA, Ramli John" → "In an Ask Me Anything (AMA) session hosted by Pocus, Ramli John"
- Q4 CTA bold answer → "**Pick the homepage CTA by sales motion: trial or freemium when users reach value alone, a demo when setup needs a person, both when a separate buyer signs.**" (the tree never routes on price; "or both" had no condition)
- Q5 takeaway 3 → "Pick the CTA by sales motion: a free trial or freemium plan when users reach value alone, a demo when setup needs a person, and both when a separate buyer signs."
- Q6 section-stack panel intro → "This table lists each homepage section, its job and what it must match in the product. The band beside the wireframe shows NN/g's 2018 attention split: 57% of viewing time on the first screenful and 74% on the first two."
- Q7–Q13 serial commas removed (takeaway 1, promise formula, decision-tree alt, handoff bold answer, ledger sentence → "a kept-or-missing mark and the fix", ledger alt, mistakes `Table:` caption)
- Q14 → "In SaaS homepage design, I prefer a real product user interface (UI) over abstract illustration,"
- Q15 FAQ 4 → "…and that part of SaaS homepage design decides whether homepage visitors reach a first result."
- Q16 (merged with fact-check F7) → "Communication design is my job at ui-ux.agency, tkxel's design team, whose designers have worked on 200+ digital products since 2017."
- Q17 → "Below, I follow a visitor from the headline to the first result: the promise, the section order, the CTA choice, the handoff with a worksheet I call the promise ledger and the tests for the whole path."
- Q18 after "One team shaped the promise and the product it points to." new paragraph: "The product keeps that scoring promise on its main screens. The organization dashboard puts the company health score and a leaderboard on one screen, and each employee gets a My Digno Score page that explains the factors behind the number. Name the product screen that proves your own headline, the way the score pages prove Digno's." (source: digno.md L71–73, L77, L83)
- Q19 → "A senior designer replies within one business day, ET." (about.md wording)

## Merge notes for the fact-check fixes (facts.md)

- F1, F3, F4, F5, F8: apply as written; old strings still match once.
- F2: apply the panel text. The SVG "before billing" line needs the designer, otherwise image and panel disagree.
- F3 + F4 make the L155 paragraph 5 sentences. Insert a paragraph break before "Single sign-on (SSO)".
- F6: apply merged so the sentence does not start lowercase: "Google's web.dev guide counts images and video poster images among LCP candidates, so I check the hero image or hero video first."
- F7: skip (already merged into Q16; the old string no longer exists).
- Q18's new Digno paragraph needs the fact-checker's re-read.
- The combined set was tested in shd-qa2: build OK, seo:check 0 errors, lint 0 errors, onpage 100, semantic 94, no paragraph over 4 sentences, keyword 12.

## Publish-day items (orchestrator)

- backlinkSuggestions (3 required: hub FAQ, digno.md L91, pillars.ts L130) are not applied yet; `grep -rln "/blog/saas-homepage-design/" content` lists only the post. They must be live or skipped with a reason before publishing.
- The brief's `related.internalLinks[2].where` quotes the old H3; update it after F8.

## Guidance for the writer

None blocking. All gaps were closed with exact fixes Q1–Q19.

VERDICT: PASS
