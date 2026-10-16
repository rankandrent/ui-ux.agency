# QA: /industries/enterprise/ (content/industries/enterprise.json)

Date: 2026-10-16. Re-QA after: digno + mass-media-co tagged `industries: [enterprise]`, CardList intro rendered as HTML, challengesIntro/solutionsIntro wrapped in `<strong>`. No earlier QA report existed. The fact-check fixes F1–F8 (industry-enterprise.facts.md) are all present.
Built in scratch copy /tmp/claude-0/-home-user/fe69f371-e23c-50e5-9047-e154a04e6691/scratchpad/ent-qa (the shared out/ was not touched).

| # | Check | Result | Evidence |
|---|---|---|---|
| 1 | Intent and cannibalization | PASS | The page is the only file in content/ (briefs excluded) that targets "enterprise ux". It gives the definition in the abstract and then sells, which fits the mixed commercial intent. |
| 4 | Semantic SEO | PASS after FIX Q1–Q8 | Title 52 chars, description 154 chars and ends on a next step ("Book a free consultation"). Keyword density 1.74%. All 25 entities and 12 attributes appear in open text. Boolean FAQs open with "Yes." Every bold answer is 30 words or fewer. No banned words. The secondary "enterprise saas dashboard design patterns" was missing (fixed in Q8). |
| 5 | Internal links | PASS | 8 contextual links, all targets built, including the redesign #anchor. Anchors are varied. All 3 required backlinks are live (saas-design-agency "complex roles and data tables", pillars.ts "enterprise UX", workshop "enterprise AI tools"). The saas-onboarding suggestion is skipped with the brief's reason. |
| 6 | Images | PASS (n/a) | The page has no images of its own. og/industries/enterprise.png is generated and legible. The rail covers come from the case studies. |
| 6b | Duplication | PASS | No table or image pairs. |
| 7 | Readability / US English | PASS | seo:check finds no British spellings. Every card has 4 or fewer sentences. |
| 7a | Competitor originality | PASS (structure) | The beats pages could not be fetched earlier. The challenge→solution pairs are deliberate (per the brief). |
| 7b | Silo and leads | PASS | 5 relatedServices (serviceSupport 5). The CTA band offers the 45-minute review and the hero has the consultation form, as the leadAngle asks. |
| 7c | Variety vs fintech/healthcare | PASS after FIX Q1, Q3–Q6 | 5-gram overlap in JSON: fintech 0.50%, healthcare 1.51% (before the fixes: 0.51% / 1.66%). The shared shapes "Which services cover X UX design?", "How does X UX design handle A, B and C?", "Why do X teams hire/choose us…?", "How does a/an X UX … run?" and the abstract opening "X UX is the user experience (UX) design of…" were all rewritten. |
| 7d | Completeness / frame mapping | PASS after FIX Q2, Q7 | Before the fix, the challengesIntro item "a legacy workflow to replace" had no matching card (Q7). The solutionsIntro named 3 of the 6 answers, and "matching each challenge above" was a dangling participle (Q2). |
| 7e | On-page | PASS | `npm run onpage -- /industries/enterprise/`: score 100, failed []. |
| 8 | Build | PASS | `SHOW_DRAFTS=1 npm run build` exit 0. seo:check: 0 errors, 9 warnings, none of them new to this page. lint: 0 errors. |
| — | Sister site | PASS | `curl uiuxdesignservices.us/sitemap.xml`: its industries are healthcare, ecommerce, finance, saas, supply-chain, startups and gaming, with no enterprise or B2B page. Overlap with the closest page (saas) is 0.14%; all.txt 1.05% (≤ 2%). |
| — | Literal `&lt;` | PASS | 0 in the visible HTML of fintech, healthcare and enterprise. |

## Fixes applied to enterprise.json (exact)
- Q1 abstract → "Enterprise UX applies user experience (UX) design to software that organizations buy, roll out and govern for many roles at once: software as a service (SaaS) platforms, internal tools and artificial intelligence (AI) features. ui-ux.agency, the design team of tkxel, designs their complex workflows, permissions, data-dense dashboards and design systems so they hold up in security and accessibility reviews."
- Q2 solutionsIntro → "<strong>In enterprise software UX, each challenge above has its answer below: a role-permission matrix, table patterns, admin screens, an accessible design system, AI review steps and a phased rollout.</strong>" (29 words, matches the 6 cards in order)
- Q3 headings.solutions → "Which enterprise UX patterns answer each challenge?"
- Q4 headings.services → "New build, redesign, AI or a team: which fits your enterprise UX?" (3 lines at 1440, like the other H2s)
- Q5 headings.benefits → "What do product and IT teams get when we design their enterprise UX?"
- Q6 headings.process → "Which steps take enterprise UX from role map to rollout?"
- Q7 challenges[5] "…saved views, and a changed interface" → "…saved views in the legacy workflow, and a changed interface"
- Q8 solutions[1] first sentence → "The data table, filter bar, bulk actions and saved views become our enterprise SaaS dashboard design patterns, which keep data density in check: summary first, detail on demand."

## Orchestrator notes (not page defects)
- The rail Digno card shows the case study's own `result` "Overall revenue up 5x" under "Which enterprise UX projects have we shipped?". The brief bars citing Digno revenue as a UX result in our copy. Consider a per-industry card metric, or accept it as the case study's published headline.
- Three live pages now link to /industries/enterprise/ while it is `draft: true`. Publish the page (draft: false) in the same release, otherwise production has 3 broken links.
- The template gives the rail, Benefits and Process H2s no intro/answer field (the same holds on fintech and healthcare). Add benefitsIntro/processIntro if the "every H2 opens with an answer" rule is meant to apply to them.
- Cards above the brief's 30–55 word range: challenges[3] 62 (fact-checker F1 text), challenges[4] 61, solutions[2] 62, solutions[3] 61, solutions[1] 59. All are under the 90-word section-body-short limit, and onpage passes.
- "RFC 7644" is not expanded (Request for Comments). Minor; left as is to keep the card length.

VERDICT: PASS
