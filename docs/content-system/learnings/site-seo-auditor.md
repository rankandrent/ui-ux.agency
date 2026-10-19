# Learnings: site-seo-auditor

Lessons this agent has learned. Read before every run; add new lessons at the end of every run.
Each lesson: date, what happened (evidence), the rule to follow next time. Keep the file under
80 lessons; merge duplicates and delete lessons proven wrong.

## Owner rules (highest priority — written by the site owner, never removed by agents)

<!-- add owner rules here, e.g. "- Always prefer US cost/pricing keywords for the SaaS silo." -->

## Lessons (learned from runs, QA, audits and results)

<!-- lessons below -->

- 2026-10-14 (owner rule): the site is USA-based — follow RULES.md "US market" on every page: American spelling, USD, US time zones (ET), US examples, cities and data sources, and US regulations (HIPAA, CCPA/CPRA, SOC 2, ADA/Section 508 + WCAG 2.2 AA, PCI DSS, SEC/FINRA, FDA). British spellings or a non-US frame are a FAIL.
- 2026-10-19: the WebSearch tool ignores `site:` (returned only other domains) and Semrush had no API units, with no GSC export in `docs/data/`. Rule: don't spend calls on `site:` searches. Use `npm run links:find` on the build plus an in-`<main>` inbound-link count as the source of truth for link routing, and list "no performance data" as proposal #2 or higher until a GSC export exists.
- 2026-10-19: in the external-link check, ftc.gov returned 404 even for its homepage, and 403/429/999/000 came from bot or proxy blocks (LinkedIn, Gartner, BLS, NN/g). Only Userpilot's report was really gone (blog index 200, report 404, WP post ID 401). Rule: before calling a link broken, curl the domain root. Report a 404 as broken only when the root returns 200, and never swap a source without verifying the replacement.
- 2026-10-19: the new city and industry pages had no informational sources, but sibling city pages' sector cards (health tech, enterprise, life sciences) naturally match the industry pages. In case studies, link the existing words only. Adding words to a case-study sentence (I nearly wrote "to a first result") changes case facts. Rule: route city→industry links from sector cards, and link case-study text verbatim.
