export const SITE = {
  name: "UI-UX.agency",
  /** Brand name Google should show as the site name and in titles (owner, 2026-10-09) */
  brand: "UI UX Agency by tkxel",
  /** Microsoft Clarity project ID (heatmaps and session recordings) */
  clarityId: "" /* TODO(owner): new Microsoft Clarity project ID */,
  domain: "ui-ux.agency",
  /** Year the company started */
  founded: 2017,
  address: {
    street: "11921 Freedom Drive, Two Fountain Square, Center Ste 550",
    city: "Reston",
    region: "VA",
    postalCode: "20190",
    country: "US",
    countryName: "United States",
  },
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://ui-ux.agency").replace(/\/$/, ""),
  /** Public contact email + social/profile URLs (LinkedIn, Clutch, G2 …) for Organization schema */
  email: "hello@ui-ux.agency",
  /** E.164 for links and schema; display form is formatted in the UI */
  phone: "+12029783410",
  phoneDisplay: "(202) 978-3410",
  social: [] as { name: string; icon: string; url: string }[], // TODO(owner): new profile URLs
  /** false until launch: every page is noindex and robots.txt disallows crawling (no duplicate content while placeholders remain) */
  launched: true,
  get sameAs(): string[] {
    return this.social.map((s) => s.url);
  },
  description:
    "The UI UX design agency of tkxel. AI UX design, SaaS product design and MVP design for startups, delivered by senior designers who stay through launch.",
};

/** One-line postal address for display */
export const addressLine = `${SITE.address.street}, ${SITE.address.city}, ${SITE.address.region} ${SITE.address.postalCode}, ${SITE.address.countryName}`;

/** Whole years since SITE.founded, recomputed on every build */
export const yearsInBusiness = new Date().getFullYear() - SITE.founded;

export const absoluteUrl = (p = "/") => `${SITE.url}${p.startsWith("/") ? p : `/${p}`}`;

export const routes = {
  home: "/",
  services: "/services/",
  service: (slug: string) => `/services/${slug}/`,
  industries: "/industries/",
  industry: (slug: string) => `/industries/${slug}/`,
  locations: "/location/",
  location: (slug: string) => `/location/${slug}/`,
  caseStudies: "/case-studies/",
  caseStudy: (slug: string) => `/case-studies/${slug}/`,
  blog: "/blog/",
  post: (slug: string) => `/blog/${slug}/`,
  contact: "/contact/",
  page: (slug: string) => `/${slug}/`,
};

/** Lower-case a title for use mid-sentence while keeping acronyms/brands like UX, UI, SaaS, AI intact */
export const lower = (s: string) =>
  s
    .split(" ")
    .map((w) => (/[A-Z].*[A-Z]/.test(w) ? w : w.toLowerCase()))
    .join(" ");

/** Capitalise the first letter (anchors are stored as lower-case queries) */
export const cap = (s: string) =>
  /^[a-z][A-Z]/.test(s) ? s : s.charAt(0).toUpperCase() + s.slice(1); // keeps "iOS …" intact
