import type { Metadata } from "next";
import { SiteShell } from "@/components/global/SiteShell";
import { CtaSection } from "@/components/sections/CtaSection";
import { PageHero } from "@/components/sections/PageHero";
import { TestimonialsGrid } from "@/components/sections/TestimonialsGrid";
import { TESTIMONIALS } from "@/lib/testimonials";

export const metadata: Metadata = {
  title: "Client Testimonials — CompassPoint Advisory",
  description:
    "What Australian SME leaders say about working with CompassPoint Advisory — strategic consulting, practical guidance, and measurable outcomes.",
  alternates: { canonical: "/testimonials" },
};

export default function TestimonialsPage() {
  return (
    <SiteShell>
      <PageHero
        title="Client Testimonials"
        subtitle="What our clients say about working with CompassPoint Advisory."
      />

      <article className="mx-auto w-full max-w-[min(100%,1920px)] px-8 pb-24 pt-16 md:px-14 md:pb-28 md:pt-20 lg:px-20">
        <div className="mx-auto max-w-6xl">
          <TestimonialsGrid testimonials={TESTIMONIALS} animate={false} />
        </div>
      </article>
      <CtaSection />
    </SiteShell>
  );
}
