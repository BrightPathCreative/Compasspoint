import type { Metadata } from "next";
import { SiteShell } from "@/components/global/SiteShell";
import { CtaSection } from "@/components/sections/CtaSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { HomeAboutSnapshotSection } from "@/components/sections/HomeAboutSnapshotSection";
import { HomeDifferentiatorsSection } from "@/components/sections/HomeDifferentiatorsSection";
import { HomeIntroSection } from "@/components/sections/HomeIntroSection";
import { HomeMethodologyPreviewSection } from "@/components/sections/HomeMethodologyPreviewSection";
import { HomeServicesOverviewSection } from "@/components/sections/HomeServicesOverviewSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { localBusinessJsonLd } from "@/lib/seo-schemas";

export const metadata: Metadata = {
  title: "CompassPoint Advisory — Strategic Business Consulting for Australian SMEs",
  description:
    "CompassPoint Advisory partners with Australian SMEs and startups to deliver growth strategy, operational excellence, AI consulting, and executive coaching. Melbourne-based, nationally active.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "CompassPoint Advisory — Strategic Business Consulting for Australian SMEs",
    description:
      "Growth strategy, operations, AI transformation, and executive coaching for Australian SMEs.",
    url: "/",
  },
};

export default function Home() {
  return (
    <SiteShell>
      <JsonLd data={localBusinessJsonLd()} />
      <HeroSection />
      <HomeIntroSection />
      <HomeAboutSnapshotSection />
      <HomeServicesOverviewSection />
      <HomeMethodologyPreviewSection />
      <HomeDifferentiatorsSection />
      <TestimonialsSection />
      <CtaSection />
    </SiteShell>
  );
}
