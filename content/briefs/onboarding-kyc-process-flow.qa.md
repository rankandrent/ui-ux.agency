# QA: onboarding-kyc-process-flow

QA run 2026-10-20 on content/blog/onboarding-kyc-process-flow.md against content/briefs/onboarding-kyc-process-flow.json. The fact-check (facts.md F1–F9) was merged. The fixes were scripted as exact single-match replacements (scratchpad kyc-tools/fixes.py, 28 items) and tested in a scratch copy with draft:false. They were then applied to the post. The post is byte-identical to the tested copy apart from `draft: true`.

## Gates (scratch copy, after all fixes)

| Gate | Result |
|---|---|
| `SHOW_DRAFTS=1 npm run build` | PASS (exit 0) |
| `npm run seo:check` | 0 errors, 13 warnings (pre-existing, other pages). Feed validator: 1 expected error (`qa: pending`). It shows 0 errors with `qa: pass` set in scratch only. |
| `npm run lint` | 0 errors, 1 pre-existing warning (unused `cls`) |
| `npm run onpage -- /blog/onboarding-kyc-process-flow/` | 100, failed [] |
| `node scripts/semantic-score.mjs` | 94 (was 75). Attributes 18/21, sentences 7/219 over 30 (5 are scorer artefacts: lists, non-question H2s, a table caption). Facts ✗ 0.3/100: this would need ~40 more numbers and is not fixable honestly. |
| Built HTML literal `&lt;` | 0 |
| FAQPage answers | 5, each only its own answer, 39–45 words |

## Checklist

| # | Item | Result | Notes |
|---|---|---|---|
| 1 | Intent & cannibalisation | PASS | Article, TOFU, product-team process how-to. No other page targets the keyword. Fintech phrases appear once, as the /industries/fintech/ anchor. 5-gram overlap: saas-onboarding 0.08%, user-onboarding-automation 0.19%, no shared 8-grams. |
| 4 | Semantic SEO | FIX → PASS | Bold answers are each one sentence, ≤ 30 words. Boolean FAQs start Yes/No. No banned phrases or hedges. No serial commas. US spelling. Abbreviations expanded (CFR added, Q1). Title 69, metaTitle 59, description 155 on the built HTML. The description ends on the payoff, which differs from the last 3 posts, with no consultation ask. Keyword is in the first sentence. Not definition-first (rule-to-screen intro). |
| 5 | Internal links | PASS (exception) | 6 body links to 5 pages: /about/, hub ×2 (word ~110 and the closing section), the two siblings and /industries/fintech/. All targets and both #fragments exist. 6 is below TOFU 8–12. I did not add the pillar: both siblings already close with "our wider [SaaS product design](/services/saas-products/)", so a third use repeats a closing shape. Precedent: product-discovery, chatbot-design. backlinkSuggestions 1–3 (all required) are not applied yet. That is an orchestrator task on publish day; each `old` string was verified by the link builder. |
| 5a | Named sources linked | PASS | 8 externals. The swaps (FDIC press release, OFAC FAQ 246) and de-links (1030.3, NIST pages) are recorded in `related`. F9: the W3C URL now ends in `.html` in the post. Brief JSON line 361 still holds the extensionless URL (orchestrator FIX). |
| 6 | Images | PASS | 5 SVGs + cover exist, 1200×750 / 1600×600, brand palette (green/red only on ✓/✕ states). No third-party assets. Minimum font 20px renders as 12.7px at 1440 (760px column). The cover title stays inside the 390 16:9 crop. Spelling checked label by label. |
| 6b | Duplication / panel ⊇ image | PASS | Every image label appears in its always-visible panel. Field-reasons panel: keep the current order (Step 3 rows, then Step 2), because it follows the image's left-to-right phones. Reordering the panel by step would break the image–text match. No designer swap is needed. |
| 7 | Readability | FIX → PASS | One 5-sentence paragraph (field order) was split. 14 run-on sentences were split. Paragraphs are ≤ 4 sentences after the fixes. |
| 7a | Competitor originality | PASS | seon.io fetched with curl: 0.06% 5-gram overlap (2 grams, the CIP data list). Its headings are definition-led; ours are chart-first. docbyte: 0.00%. Its 9 steps (capture, identification, extraction, integration, verification, document generation, signature, archive, authentication) share no order with ours. theskinsfactory: 0.03%. All 8 serpGaps are covered. |
| 7a' | Sister site | PASS | finance.txt 5-gram 0.17%, no 8-grams. "KYC friction" and "identity checks to trading dashboards" are absent. |
| 7b | Silo & leads | PASS | services[0] is saas-onboarding-design. Funnel TOFU, service-support 3. The lead angle is delivered at both moments without a hard sell. |
| 7c | Variety | FIX → PASS | The intro credential sentence plus "This post covers…" repeated product-discovery's shape ("I'm a principal UX designer… The guide below covers"). Rewritten (Q3). The shared 8-gram "principal user experience (UX) designer at ui-ux.agency" is gone. |
| 7d | Completeness | FIX → PASS | (a) The closing bold answer promised prototype testing that the body never covered. Q21 adds the sentence (hub step 3 fact). (b) The KYB list's "Pending tracker" repeated "Owner list", and "a consumer flow never uses" contradicted the consumer pending-tracker H2 (Q18, Q19). |
| 7e | On-page | PASS | 100, manual items met (figure captions, table intros, h2-then-text, no hidden content). |
| 8 | Build | PASS | See gates. |
| — | Fintech-page overlap | FIX → PASS | "We don't pick the vendor or set risk rules" was verbatim from fintech.json (Q12). Fact-check F8's replacement copied fintech.json 8-grams ("annotated Figma files mark each regulated screen", "instead of a folder of screenshots"), so F8 was merged with a rewrite. Remaining 8-grams with fintech.json: the FDIC statistic wording and the NIST name expansion only (0.67% 5-gram). |

## Fixes applied (exact old → new in scratchpad kyc-tools/fixes.json)

QA: Q1 intro split + CFR expansion · Q2 FDIC split · Q3 credential shape · Q4 two-lane split · Q5 "approved" screen · Q6 CIP notice split · Q7 "(Truth in Savings) … go to the customer" (attribute) · Q8 "consumer consent" (attribute) · Q9 field-order paragraph split into 2, camera guidance added (attribute "our field order") · Q10 verification methods sentence (attribute) · Q11 camera-alternative split · Q12 vendor sentence reworded · Q13 lead-angle split · Q14 verification-timing split · Q15 copy example in parentheses · Q16 passkeys/SC 3.3.8 split · Q17 FinCEN order sentence + "3 moments" split · Q18 "never uses" → "built around its owners" · Q19 Pending tracker → Owner reminders · Q20 closing ≤ 30 words · Q21 prototype-testing sentence.
Fact-check: F1, F3, F6 as written. F2 changed (keeps the entity "selfie and liveness check" verbatim). F4 merged into the Q9 split. F5 merged into the FAQ (≤ 45 words; replaces the link-builder line). F7 split into 3 sentences, no serial comma, bridge sentence moved to its own paragraph. F8 rewritten (fintech.json 8-grams, 32 words). F9 applied in the post.

## Orchestrator FIX (not in the post)

- Brief `content/briefs/onboarding-kyc-process-flow.json` line 361: `https://www.w3.org/WAI/WCAG22/Understanding/redundant-entry` → `https://www.w3.org/WAI/WCAG22/Understanding/redundant-entry.html` (facts F9).
- Apply backlinkSuggestions 1–3 on publish day.

## Guidance for the writer

None open. All gaps found were closed by Q18, Q19 and Q21. Next time: every clause of a bold answer needs a body paragraph (the "testing the prototype" clause had none). List items that share a section must each add a distinct action.

VERDICT: PASS
