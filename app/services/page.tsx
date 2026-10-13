import { LeadForm } from "@/components/forms/LeadForm";
import { CtaBand, FinalCta } from "@/components/sections/Blocks";
import { CategoryTabs } from "@/components/sections/CategoryTabs";
import { ServiceAccordion } from "@/components/sections/ServiceAccordion";
import { PageHero } from "@/components/sections/PageHero";
import { JsonLd } from "@/components/ui/JsonLd";
import { formInterests, home } from "@/content/home";
import { anchorOf, pillarOf, servicesByCategory } from "@/lib/content";
import { collectionLd, pageMetadata } from "@/lib/seo";
import { cap, routes } from "@/lib/site";
import type { ServiceCategory } from "@/lib/types";

export const metadata = pageMetadata({
  title: "What Our UI UX Design Agency Does | AI, SaaS & MVPs",
  description: "What our UI UX design agency does: AI UX design, chatbot UI, SaaS design and redesign, MVP and product design, dedicated designers and a cost guide.",
  path: routes.services,
  keywords: ["UI UX design agency", "AI UX design agency", "SaaS design agency", "MVP design agency", "product design agency", "hire UI UX designers"],
});

const INTRO: Record<ServiceCategory, string> = {
  "AI products":
    "Interfaces for products where a model writes, predicts or recommends. We design how people prompt, read, check and correct AI output, so they trust it for the right reasons.",
  "SaaS products":
    "Subscription software lives or dies on activation and retention. We design new SaaS products and rework existing ones around the jobs paying users come back for.",
  "Startups & product":
    "From a first clickable prototype to a product that is ready for its next funding round. Design work sized for founders who need to learn fast and ship faster.",
  "Hiring & pricing":
    "How to work with us and what it costs: dedicated designers who join your sprints, and a plain-numbers guide to the price of UI UX design.",
};

const idOf = (c: string) => c.toLowerCase().replace(/[^a-z]+/g, "-");

/** Link from a category block to its pillar page, when the category has one */
function overviewOf(g: { category: ServiceCategory }) {
  const p = pillarOf(g);
  return p && { href: routes.service(p.slug), label: `${cap(p.anchor)} overview` };
}

export default function ServicesHub() {
  const groups = servicesByCategory();
  return (
    <>
      <PageHero
        tone="light"
        crumbs={[{ name: "Services", path: routes.services }]}
        eyebrow="Service catalog"
        h1={<>Our design service catalog, <em>grouped by what you need</em></>}
        sub="Pick a single service or combine several into one engagement. Each group below covers one stage or type of product work."
      />
      <CategoryTabs items={groups.map((g) => ({ id: idOf(g.category), label: g.category }))} />
      {groups.map((g) => (
        <ServiceAccordion
          key={g.category}
          id={idOf(g.category)}
          heading={g.category}
          intro={INTRO[g.category]}
          services={g.services}
          overview={overviewOf(g)}
        />
      ))}
      <CtaBand {...home.ctaBand} />
      <FinalCta testimonial={home.testimonial}>
        <LeadForm variant="full" interests={formInterests} source="services hub" submitLabel="Submit" />
      </FinalCta>
      <JsonLd
        data={collectionLd({
          name: "UI UX design services",
          description: metadata.description as string,
          path: routes.services,
          items: groups.flatMap((g) => g.services).map((s) => ({ name: cap(anchorOf(s)), path: routes.service(s.slug) })),
        })}
      />
    </>
  );
}
