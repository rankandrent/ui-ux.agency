import type { MetadataRoute } from "next";
import { SITE, absoluteUrl } from "@/lib/site";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  if (!SITE.launched) return { rules: { userAgent: "*", disallow: "/" } }; // pre-launch: keep the template out of Google
  return { rules: { userAgent: "*", allow: "/" }, sitemap: absoluteUrl("/sitemap.xml") };
}
