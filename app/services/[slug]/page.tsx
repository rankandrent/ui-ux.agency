import { notFound } from "next/navigation";
import { PillarPage } from "@/components/sections/PillarPage";
import { ServiceView, serviceMetadata } from "@/components/sections/ServiceView";
import { getPillar, getPillars, getService, getServices, pillarOf, staticParams } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";
import { routes } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
// /services/<slug>/ holds the pillar (category hub) pages and the services that sit under no pillar;
// services inside a pillar live one level deeper, at /services/<pillar>/<slug>/
const flatServices = () => getServices().filter((s) => !pillarOf(s));
export const generateStaticParams = () => staticParams("slug", [...getPillars().map((p) => p.slug), ...flatServices().map((s) => s.slug)]);

export async function generateMetadata({ params }: Props) {
  const slug = (await params).slug;
  const pillar = getPillar(slug);
  if (pillar)
    return pageMetadata({
      title: pillar.metaTitle,
      description: pillar.metaDescription,
      path: routes.service(pillar.slug),
      image: `/og/services/${pillar.slug}.png`,
      keyword: pillar.anchor,
    });
  const s = getService(slug);
  return s && !pillarOf(s) ? serviceMetadata(s) : {};
}

export default async function ServiceOrPillarPage({ params }: Props) {
  const slug = (await params).slug;
  const pillar = getPillar(slug);
  if (pillar) return <PillarPage p={pillar} />;
  const s = getService(slug);
  if (!s || pillarOf(s)) notFound();
  return <ServiceView s={s} />;
}
