import type { Metadata } from "next";
import { SiteShell } from "@/components/global/SiteShell";
import { CtaSection } from "@/components/sections/CtaSection";
import { MethodologyFullTimeline } from "@/components/sections/MethodologyFullTimeline";
import { PageHero } from "@/components/sections/PageHero";

export const metadata: Metadata = {
  title: "How We Work - CompassPoint Advisory's Consulting Process",
  description:
    "Discovery, strategy, execution, and optimisation. A disciplined, collaborative consulting process for Australian SMEs.",
  alternates: { canonical: "/methodology" },
};

export default function MethodologyPage() {
  return (
    <SiteShell>
      <PageHero
        title="How We Work"
        subtitle="A disciplined, collaborative process - from first conversation to sustained momentum."
      />
      <article className="mx-auto w-full max-w-[min(100%,1920px)] px-8 pb-24 pt-16 md:px-14 md:pb-28 md:pt-20 lg:px-20">
        <p className="mx-auto max-w-3xl font-[family-name:var(--font-lato)] text-lg leading-[1.7] text-[var(--text-secondary)]">
          We take a data-driven approach to consulting, and our approach is highly customisable to meet the unique
          needs of each business.
        </p>

        <MethodologyFullTimeline />
      </article>
      <CtaSection />
    </SiteShell>
  );
}
