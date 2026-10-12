# ui-ux.agency: new site setup

This repo is a copy of the uiuxdesignservices.us system: the same Next.js site, Cloudflare Worker,
content agents (`.claude/agents`), skills, rules (`docs/content-system/`), owner rules, checks and
publishing scripts. Only the content and the brand are new.

**Pre-launch safety:** `SITE.launched` is `false` in `lib/site.ts`. While it is false, robots.txt
blocks all crawlers and every page is `noindex`, so placeholder copy can never be indexed as a
duplicate of uiuxdesignservices.us. Set it to `true` only after the checklist at the end passes.

## What was copied as is

| Part | Where |
|---|---|
| Site code, design, components | `app/`, `components/`, `lib/` |
| Worker: lead form → email, http/www → https redirects | `worker/index.ts`, `wrangler.jsonc` |
| Content agents (researcher, writer, visual designer, link builder, QA, fact-checker, on-page auditor, site auditor) | `.claude/agents/` |
| Skills (content pipeline, on-page audit, site audit, train agent) | `.claude/skills/` |
| Rules, on-page checklist, owner rules, agent learnings | `docs/content-system/` |
| Checks and scripts (seo:check, onpage audit, location publisher 3/week at random times, location images) | `scripts/`, `.github/workflows/` |

## What was removed (starts empty)

Blog posts, briefs, location pages, case studies and their images, the content ledger and
fingerprints, on-page reports. Links to those pages were unlinked in the remaining copy.

## What still holds uiuxdesignservices.us copy (must be rewritten before launch)

Google treats the same text on two domains as duplicate content, so none of this may go live as is:

- `content/home.ts`: home page copy, stats, FAQs, team, client logos, testimonials
- `content/services/*.json`: 17 service pages
- `content/industries/*.json`: 6 industry pages
- `content/pages/about.md`, `privacy.md`, `terms.md`
- `content/authors.json` and `public/team/`: authors and team photos
- `public/brand/`: logo and wordmark SVGs, favicons; `public/logos/`: client logos
- `public/images/industries/`: industry images

## What the owner sends (one Markdown file each)

Put the files in a folder `owner-input/` (or paste them in chat). Claude converts them into the site's
JSON and Markdown formats, then runs QA, fact-check and the on-page checks.

### 1. `brand.md`
```
Brand name (shown in titles and schema):
Domain: ui-ux.agency
Company / legal name:
Same company as uiuxdesignservices.us? (yes/no):
Founded (year):
Address:
Phone:
Public email: hello@ui-ux.agency
Lead emails go to:
Social profile URLs:
Brand colours (hex), fonts:
Logo files: (attach SVG or PNG)
Microsoft Clarity project ID:
```

### 2. `services/<service-name>.md` (one file per service)
```
Service name (H1):
Primary keyword (must have search volume):
Who it is for:
What is included (deliverables):
Process steps and timeline:
Price range (only real numbers):
Tools used:
Related case studies:
FAQs (question + answer):
Anything we must NOT claim:
```

### 3. `industries/<industry>.md`
```
Industry name:
Primary keyword:
Typical products and users:
Problems we solve:
Standards and regulations that apply:
Related case studies:
FAQs:
```

### 4. `case-studies/<client>.md`
Use the fields in `content/case-studies/_template.md`, plus the full story (overview, challenge,
approach, solution, results) and the images (attach them, or push them to `public/work/<client>/`).
Only real clients, real results and quotes the client approved.

### 5. `home.md`
```
Hero headline and sub-line:
3–4 stats (real only):
Client logos we may show:
Testimonials (with permission):
Why choose us (3–5 points):
Home FAQs:
```

### 6. `team.md`
Name, role, photo, LinkedIn, short bio for every person shown on the site or as a blog author.

### 7. `locations.md`
List of US cities for location pages. They publish 3 a week at random days and times.

## Owner setup outside the repo (step by step, Claude guides each one)

1. **Cloudflare Workers:** Workers & Pages → Create → Import a repository → `rankandrent/ui-ux.agency`.
   Build command `npm run build`, deploy command `npx wrangler deploy`, variable
   `NEXT_PUBLIC_SITE_URL=https://ui-ux.agency`.
2. **Domains:** add `ui-ux.agency` and `www.ui-ux.agency` under Worker → Settings → Domains & Routes.
3. **Email Routing:** Email → Email Routing → Enable, add and verify every lead address
   (they must also be listed in `worker/index.ts` and `wrangler.jsonc`).
4. **Microsoft Clarity:** new project, then put its ID in `lib/site.ts`.
5. **Google Search Console:** add the domain property.
6. **Claude:** a new Claude Code session on this repo, with network access to `ui-ux.agency`
   and the keyword data source (Ahrefs `api.ahrefs.com` or Semrush), then a new daily routine
   (1 blog post for the hub with the fewest posts + on-page audit).

## Launch checklist

- [ ] Every file in "must be rewritten" above has new copy (no sentence copied from uiuxdesignservices.us)
- [ ] Brand, logo, contact details and lead emails updated
- [ ] `npm run build`, `npm run seo:check`, `npm run lint` pass; `npm run onpage` average ≥ 95
- [ ] Lead form tested end to end (email arrives)
- [ ] `SITE.launched = true` in `lib/site.ts`, then deploy
