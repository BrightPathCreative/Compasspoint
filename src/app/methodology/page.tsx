import type { Metadata } from "next";
import { SiteShell } from "@/components/global/SiteShell";
import { CtaSection } from "@/components/sections/CtaSection";
import { MethodologyFullTimeline } from "@/components/sections/MethodologyFullTimeline";
import { PageHero } from "@/components/sections/PageHero";

export const metadata: Metadata = {
  title: "How We Work — CompassPoint Advisory Methodology",
  description:
    "Our four-step consulting process: discovery and audit, strategic roadmap, execution and alignment, and ongoing optimisation. Built for Australian SMEs.",
  alternates: { canonical: "/methodology" },
};

export default function MethodologyPage() {
  return (
    <SiteShell>
      <PageHero
        title="How We Work"
        subtitle="A disciplined, collaborative process — from first conversation to sustained momentum."
      />

      <article className="mx-auto w-full max-w-[min(100%,1920px)] px-8 pb-24 pt-16 md:px-14 md:pb-28 md:pt-20 lg:px-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-[family-name:var(--font-lato)] text-lg leading-[1.75] text-[var(--charcoal)] md:text-xl">
            We take a structured, evidence-informed approach to consulting, and we tailor how we work to the context of
            your business — so recommendations stay practical, proportionate, and executable.
          </p>
        </div>

        <MethodologyFullTimeline />
      </article>
      <CtaSection />
    </SiteShell>
  );
}
