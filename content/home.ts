import { yearsInBusiness } from "@/lib/site";

/**
 * Home page copy. Everything here is page-specific; services, case studies and
 * blog posts come from their own content folders.
 *
 * Positioning (owner, 2026-10-13): UI UX design agency for AI products, SaaS and
 * startups, openly part of tkxel. uiuxdesignservices.us keeps the "UI UX design
 * services" queries; this site targets "agency" and "hire" queries.
 * TODO(owner): confirm the stats, ratings and awards below are true for tkxel.
 */
export const home = {
  meta: {
    title: "UI UX Design Agency for AI, SaaS & Startups | by tkxel",
    description:
      "UI UX design agency for AI products, SaaS platforms and startup MVPs. Senior designers, tested prototypes and build support from tkxel.",
  },
  hero: {
    eyebrow: "UI UX design agency · by tkxel",
    h1Before: "The UI UX design agency for ",
    h1Em: "AI, SaaS and startup products",
    sub: "We design AI features people trust, SaaS products customers renew, and MVPs founders can test in weeks. Our designers work next to tkxel engineers, so what we design gets built.",
    stats: [
      { value: "200+", label: "Digital products designed" },
      { value: `${yearsInBusiness}+ yrs`, label: "Product design since 2017" },
      { value: "1–2 wks", label: "From first call to kick-off" },
    ],
  },
  clients: {
    label: "tkxel teams have designed and built for",
    // Drop logo files into public/logos/ with these names; until a file exists the name shows as text.
    items: [
      { name: "NBCUniversal", logo: "/logos/nbcuniversal.svg" },
      { name: "7-Eleven", logo: "/logos/7-eleven.svg" },
      { name: "Groupon", logo: "/logos/groupon.svg" },
      { name: "Sterne Kessler", logo: "/logos/sterne-kessler.svg" },
      { name: "Nitro League", logo: "/logos/nitro-league.svg" },
      { name: "moment.ai", logo: "/logos/moment-ai.svg" },
      { name: "Emerald", logo: "/logos/emerald.svg" },
      { name: "Fintua", logo: "/logos/fintua.svg" },
      { name: "RCN Capital", logo: "/logos/rcn-capital.svg" },
      { name: "REI BlackBook", logo: "/logos/rei-blackbook.svg" },
      { name: "Signal", logo: "/logos/signal.svg" },
      { name: "PeopleGuru", logo: "/logos/peopleguru.svg" },
      { name: "EasyWorkforce", logo: "/logos/easyworkforce.svg" },
      { name: "Digno", logo: "/logos/digno.svg" },
      { name: "Ollivate", logo: "/logos/ollivate.svg" },
    ],
  },
  stats: {
    heading: "A design team with an engineering company behind it",
    items: [
      { value: "200+", label: "Digital products designed" },
      { value: "4–8 wks", label: "Typical MVP design timeline" },
      { value: `${yearsInBusiness}+ yrs`, label: "Product design since 2017" },
      { value: "1 day", label: "Reply time on new inquiries" },
    ],
  },
  challenges: {
    heading: "Why good design pays for itself",
    // Only figures with a specific, checkable source. Set `verified: false` to hide one.
    items: [
      {
        value: "32 pts",
        claim: "more revenue growth over five years for companies that lead McKinsey's Design Index than for their industry peers.",
        source: "McKinsey, The Business Value of Design",
        href: "https://www.mckinsey.com/capabilities/mckinsey-design/our-insights/the-business-value-of-design",
        verified: true,
      },
    ],
  },
  servicesHeading: "What our UI UX design agency does",
  ctaBand: {
    heading: "Not sure where your design loses users?",
    body: "Book a 45-minute product review. A senior designer walks through your product and names the three changes with the biggest effect.",
    cta: "Book a product review",
  },
  process: {
    heading: "How our UI UX design agency works",
    steps: [
      {
        title: "Discovery",
        body: 'We interview users, read your analytics and map the jobs your product is hired for. Early-stage founders start with our <a href="/services/startups/mvp-design-agency/">MVP design agency</a> package.',
        deliverables: "Research findings, priority list",
        timeline: "1–2 weeks",
      },
      {
        title: "Flows and prototypes",
        body: 'We design the riskiest flows first and test them as clickable prototypes. For AI features, prototypes show real model output; see our <a href="/services/ai-products/ai-ux-design-agency/">AI UX design agency</a> work.',
        deliverables: "User flows, tested prototypes",
        timeline: "2–4 weeks",
      },
      {
        title: "Interface and design system",
        body: 'Final screens plus a component library engineers reuse every sprint. Our <a href="/services/saas-products/saas-design-agency/">SaaS design agency</a> team builds systems that match your front-end code.',
        deliverables: "Final UI, component library",
        timeline: "2–6 weeks",
      },
      {
        title: "Testing with real users",
        body: "5 to 8 target users run real tasks before engineering starts, and again before launch. We fix what fails and record why.",
        deliverables: "Test results, iteration log",
        timeline: "1–2 weeks",
      },
      {
        title: "Build and launch support",
        body: 'Our designers stay in your sprints until the design is live, or tkxel engineers build it with us. Need ongoing capacity? <a href="/services/hire-ui-ux-designers/">hire UI UX designers</a> monthly.',
        deliverables: "Dev-ready specs, design QA",
        timeline: "Through launch",
      },
    ],
  },
  benefits: {
    heading: "What a specialist UI UX design agency changes",
    ctaTitle: "Want to see what we would change first?",
    items: [
      { title: "Faster activation", body: "New users reach their first result sooner, so more trials turn into paying accounts." },
      { title: "AI people trust", body: "Sources, previews and easy corrections make users rely on AI output for the right reasons." },
      { title: "Smaller first builds", body: "A tested MVP scope keeps engineering focused on the flow users actually pay for." },
      { title: "Fewer support tickets", body: "Clear screens and honest error states answer questions before customers ask them." },
      { title: "Quicker feature delivery", body: "A shared design system lets engineers ship new screens without waiting on design." },
    ],
  },
  capabilities: {
    heading: "What our designers work on",
    intro: "Three kinds of product make up most of our work. Each needs its own playbook.",
    items: [
      {
        title: "AI features and AI-first products",
        body: 'Prompt inputs, streaming answers, citations, confidence cues and correction flows, plus the states for wrong or slow answers. See <a href="/services/ai-products/ai-ux-design-agency/">AI UX design agency</a>.',
      },
      {
        title: "Chat and assistant interfaces",
        body: 'Support bots and in-product assistants with answer cards, suggested replies and a clean handoff to a person. See <a href="/services/ai-products/chatbot-ui-design/">chatbot UI design</a>.',
      },
      {
        title: "New SaaS products",
        body: 'Sign-up, onboarding, roles, dashboards and billing for subscription software. See <a href="/services/saas-products/saas-design-agency/">SaaS design agency</a>.',
      },
      {
        title: "Redesigns of live SaaS products",
        body: 'Phased redesigns that modernize an aging interface while customers keep working. See <a href="/services/saas-products/saas-product-redesign/">SaaS product redesign</a>.',
      },
      {
        title: "Startup MVPs",
        body: 'From idea to a tested, clickable prototype in 4 to 8 weeks, ready for users and investors. See <a href="/services/startups/mvp-design-agency/">MVP design agency</a>.',
      },
      {
        title: "Products after launch",
        body: 'Research, UX, UI and design systems for startups growing past version one. See <a href="/services/startups/product-design-agency/">product design agency</a>.',
      },
    ],
  },
  industriesHeading: "Products we design",
  leadMagnet: {
    heading: "Get the AI product UX checklist",
    bullets: [
      "25 checks for AI features: input, output, trust, correction and failure states",
      "A one-page scorecard to rate your product before a redesign",
      "10 questions to ask any UI UX design agency before you sign",
    ],
    cover: "AI Product UX Checklist",
  },
  compare: {
    heading: "Agency, freelancer or in-house designer: which fits?",
    intro: "Each option suits a different stage. The table shows where each one is strong and where it falls short.",
    columns: ["Freelancer", "In-house designer", "ui-ux.agency"],
    rows: [
      ["Time to start", "1–3 weeks", "2–4 months to hire", "1–2 weeks"],
      ["Research and testing", "Rarely included", "Depends on the hire", "Part of every project"],
      ["AI and SaaS patterns", "Varies", "Learned on the job", "Core focus"],
      ["Engineering partner", "No", "Your team", "tkxel engineers when you need them"],
      ["Cover for leave", "No", "No", "Yes, a team stands behind every designer"],
      ["Best for", "Small, clear tasks", "Long-term ownership of one product", "New products, AI features and redesigns"],
    ],
  },
  pricing: {
    heading: "Published prices for every engagement",
    intro: "Plan your budget before the first call. Full design and build engagements are scoped after discovery.",
    items: [
      { eyebrow: "Startups", title: "MVP design", price: "$15,000–$50,000", timeline: "4–8 weeks", body: "Research, user flows, interface design and a tested clickable prototype." },
      { eyebrow: "AI products · Popular", title: "AI UX design", price: "$25,000–$90,000", timeline: "4–10 weeks", body: "Input, output, trust and correction patterns, tested with real model answers.", featured: true },
      { eyebrow: "SaaS", title: "SaaS product design", price: "$40,000–$180,000", timeline: "6–16 weeks", body: "Onboarding, core workflows, dashboards, billing and a design system." },
      { eyebrow: "Ongoing", title: "Dedicated design team", price: "$15,000–$40,000/mo", timeline: "2–5 designers", body: "Designers inside your sprints on a monthly plan." },
    ],
  },
  whyUs: {
    heading: "Why teams pick ui-ux.agency",
    cta: "Tell us about your product",
    items: [
      { title: "Part of tkxel", body: "Our designers sit next to tkxel's engineers, so designs are checked for build effort before you see them." },
      { title: "AI and SaaS focus", body: "We design AI features, subscription software and startup products every week, not once a year." },
      { title: "Tested before built", body: "Every flow that carries risk is tested with 5 to 8 real users before engineering starts." },
      { title: "Clear prices", body: "Published price ranges and fixed-scope proposals, with no surprise change requests." },
    ],
  },
  team: {
    headingMuted: "Real people, not a logo.",
    heading: "Meet the team behind your product.",
    items: [
      { name: "Sahar Asif", role: "Senior Manager UX | KAM", photo: "/team/sahar-asif.webp", linkedin: "https://www.linkedin.com/in/sahar-asif-284a9955/" },
      { name: "Shahmir Farooq", role: "Sr. Communication Designer", photo: "/team/shahmir-farooq.webp", linkedin: "https://www.linkedin.com/in/shahmirf/" },
      { name: "Ahmad Ullah", role: "Principal UX Designer", photo: "/team/ahmad-ullah.webp", linkedin: "https://www.linkedin.com/in/iahmadullah/" },
      { name: "Saliha Shahzad", role: "UI/UX Designer", photo: "/team/saliha-shahzad.webp", linkedin: "https://www.linkedin.com/in/saliha-shahzad-330357217/" },
      { name: "Talha Saleem", role: "Senior UI/UX Designer", photo: "/team/talha-saleem.webp", linkedin: "https://www.linkedin.com/in/creativetalha/" },
      { name: "Faizan Khan", role: "Sr. Product Designer", photo: "/team/faizan-khan.webp", linkedin: "https://www.linkedin.com/in/faizan132/" },
      { name: "Umar Sarwar", role: "SEO Manager", photo: "/team/umar-sarwar.webp", linkedin: "https://www.linkedin.com/in/umar-sarwar-311aa1237/" },
    ],
  },
  tools: {
    heading: "Tools we design and test with",
    items: [
      { name: "Figma", body: "Design files, component libraries and clickable prototypes in one shared place." },
      { name: "Maze", body: "Remote usability tests that show where users succeed or fail on each task." },
      { name: "Microsoft Clarity", body: "Session recordings and heatmaps that show real behavior after launch." },
      { name: "Storybook", body: "Living documentation of the design system, shared with engineers." },
    ],
  },
  awards: {
    heading: "Recognized for design and delivery",
    items: [
      { badge: "AWWW", label: "Awwwards Honorable Mention" },
      { badge: "CSS", label: "CSS Design Awards" },
      { badge: "INC", label: "Inc. 5000" },
      { badge: "ISO", label: "ISO 27001" },
      { badge: "CMMI", label: "CMMI DEV 3" },
      { badge: "WCAG", label: "WCAG/AAA Achieved" },
    ],
  },
  ratings: [
    { score: "4.8 / 5", label: "on G2", stars: true, href: "https://www.g2.com/" },
    { score: "4.9 / 5", label: "on Clutch", stars: true, href: "https://clutch.co/" },
    { score: "Top B2B", label: "GoodFirms Verified", stars: false, href: "https://www.goodfirms.co/" },
  ],
  // Only real, attributable client quotes go here (owner, 2026-10-09: the ToolsGroup quote was not real).
  testimonial: undefined as { quote: string; cite: string } | undefined,
  faqs: [
    { q: "What does a UI UX design agency do?", a: 'A UI UX design agency researches users, designs how a product works (UX) and how it looks (UI), tests it with real people and supports engineers during the build. We focus on AI products, SaaS platforms and startup MVPs. See <a href="#services">what we do</a>.' },
    { q: "How much does a UI UX design agency cost?", a: 'Our projects range from $15,000 for MVP design to $200,000 for a full SaaS product redesign. Dedicated design teams cost $15,000 to $40,000 per month. The <a href="/services/ui-ux-design-cost/">UI UX design cost</a> guide lists every range.' },
    { q: "Is ui-ux.agency part of tkxel?", a: "Yes. ui-ux.agency is the UI UX design team of tkxel, a software engineering company. You can hire us for design only, or for design and development together." },
    { q: "Do you design AI products?", a: 'Yes. AI features and AI-first products are a core focus: prompt input, generated answers, sources, confidence cues and correction flows. See our <a href="/services/ai-products/ai-ux-design-agency/">AI UX design agency</a> page.' },
    { q: "How fast can a project start?", a: "Most projects start 1 to 2 weeks after the first call. An MVP design takes 4 to 8 weeks; a SaaS product design takes 6 to 16 weeks." },
    { q: "Can you work with our developers?", a: "Yes. We hand over annotated Figma files, components and specs, and our designers join your sprint reviews until the design is live." },
    { q: "Do you work with early-stage startups?", a: 'Yes. Founders hire our <a href="/services/startups/mvp-design-agency/">MVP design agency</a> team to turn an idea into a tested, clickable prototype before they hire developers or raise money.' },
    { q: "Who owns the designs?", a: "You do. All design files, research and components transfer to your company." },
  ],
};

/** Options shown in every lead form's "service" dropdown */
export const formInterests = [
  "AI UX design",
  "Chatbot UI design",
  "SaaS product design",
  "SaaS product redesign",
  "MVP design",
  "Product design",
  "Dedicated designers",
  "Hire a product designer",
  "Not sure yet",
];
