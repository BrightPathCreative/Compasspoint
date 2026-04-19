import type { Metadata } from "next";
import { Fragment } from "react";
import { SiteShell } from "@/components/global/SiteShell";
import { ServiceOverviewRow } from "@/components/sections/services-overview/ServiceOverviewRow";
import { ServicesIntroStrip } from "@/components/sections/services-overview/ServicesIntroStrip";
import { ServicesOverviewBottomCta } from "@/components/sections/services-overview/ServicesOverviewBottomCta";
import { ServicesOverviewHero } from "@/components/sections/services-overview/ServicesOverviewHero";
import { WhyCompassPointSection } from "@/components/sections/WhyCompassPointSection";
import { SERVICES } from "@/lib/services";

export const metadata: Metadata = {
  title: "Consulting Services for Australian SMEs - CompassPoint Advisory",
  description:
    "From strategy and operations to AI transformation and executive coaching. Explore CompassPoint Advisory's tailored consulting services for growing Australian businesses.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  const ordered = [...SERVICES].sort((a, b) => a.order - b.order);

  return (
    <SiteShell>
      <div className="bg-[var(--cream)] text-[var(--text-body)]">
        <ServicesOverviewHero />
        <ServicesIntroStrip />
        {ordered.map((s, i) => (
          <Fragment key={s.slug}>
            <ServiceOverviewRow
              service={s}
              flip={i % 2 === 1}
              bodySurface={i % 2 === 0 ? "cream" : "cream-dark"}
              imagePriority={i === 0}
              isFirst={i === 0}
              signature={s.slug === "growth-accelerator-workshop"}
            />
          </Fragment>
        ))}
        <WhyCompassPointSection id="differentiators" className="bg-[var(--cream)]" />
      </div>
      <ServicesOverviewBottomCta />
    </SiteShell>
  );
}
