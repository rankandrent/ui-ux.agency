import { notFound } from "next/navigation";
import { ServiceView, serviceMetadata } from "@/components/sections/ServiceView";
import { getService, getServices, pillarOf } from "@/lib/content";

type Props = { params: Promise<{ slug: string; service: string }> };

export const dynamicParams = false;
/** /services/<pillar>/<service>/: every service that belongs to a pillar */
export const generateStaticParams = () =>
  getServices().flatMap((s) => {
    const p = pillarOf(s);
    return p ? [{ slug: p.slug, service: s.slug }] : [];
  });

const find = async ({ params }: Props) => {
  const { slug, service } = await params;
  const s = getService(service);
  return s && pillarOf(s)?.slug === slug ? s : undefined;
};

export async function generateMetadata(props: Props) {
  const s = await find(props);
  return s ? serviceMetadata(s) : {};
}

export default async function NestedServicePage(props: Props) {
  const s = await find(props);
  if (!s) notFound();
  return <ServiceView s={s} />;
}
