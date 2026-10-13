import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, Plus_Jakarta_Sans } from "next/font/google";
import { FloatingBar } from "@/components/layout/FloatingBar";
import Script from "next/script";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { JsonLd } from "@/components/ui/JsonLd";
import { anchorOf, getIndustries, servicesByCategory, locationCities, pillarOf } from "@/lib/content";
import { organizationLd } from "@/lib/seo";
import { SITE, cap, routes } from "@/lib/site";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"], variable: "--font-jakarta", display: "swap" });
const plexMono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-plex-mono", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: "ui-ux.agency", template: "%s" },
  description: SITE.description,
  applicationName: SITE.brand,
  formatDetection: { telephone: false },
};

export const viewport: Viewport = { themeColor: "#1B232E", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const serviceGroups = servicesByCategory().map((g) => {
    const pillar = pillarOf(g);
    return {
      category: g.category,
      href: pillar && routes.service(pillar.slug),
      items: g.services.map((s) => ({ title: cap(anchorOf(s)), href: routes.service(s.slug) })),
    };
  });
  const industries = getIndustries().map((i) => ({ title: i.title, href: routes.industry(i.slug) }));
  const locations = locationCities().map((l) => ({ title: l.title, href: routes.location(l.slug) }));
  return (
    <html lang="en-US" className={`${jakarta.variable} ${plexMono.variable}`}>
      <body>
        <a href="#main" className="skip-link">Skip to content</a>
        <Header serviceGroups={serviceGroups} industries={industries} locations={locations} />
        <main id="main">{children}</main>
        <Footer />
        <FloatingBar />
        <JsonLd data={organizationLd()} />
        {/* Microsoft Clarity (heatmaps + session recordings); loads only once SITE.clarityId is set */}
        {SITE.clarityId && <Script id="ms-clarity" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","${SITE.clarityId}");`}
        </Script>}
      </body>
    </html>
  );
}
