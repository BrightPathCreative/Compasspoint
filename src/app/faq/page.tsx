import type { Metadata } from "next";
import { SiteShell } from "@/components/global/SiteShell";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { JsonLd } from "@/components/seo/JsonLd";
import { CtaSection } from "@/components/sections/CtaSection";
import { faqPageJsonLd } from "@/lib/seo-schemas";
import { FAQ_ITEMS } from "@/lib/faq";

export const metadata: Metadata = {
  title: "Business Consulting FAQ — CompassPoint Advisory",
  description:
    "Answers to common questions about business consulting for Australian SMEs, including costs, AI consulting, and how to get started.",
  alternates: { canonical: "/faq" },
};

export default function FaqPage() {
  return (
    <SiteShell>
      <JsonLd data={faqPageJsonLd()} />
      <div className="mx-auto w-full max-w-[min(100%,1920px)] px-8 pb-16 pt-32 md:px-14 md:pb-20 md:pt-40 lg:px-20">
        <h1 className="max-w-4xl font-[family-name:var(--font-cormorant)] text-4xl font-bold text-[var(--text-primary)] md:text-5xl">
          Frequently Asked Questions — Business Consulting for Australian SMEs
        </h1>
        <p className="mt-8 max-w-3xl font-[family-name:var(--font-lato)] text-lg text-[var(--text-secondary)]">
          Straight answers on how we work, who we serve, and how to get started.
        </p>
        <div className="mx-auto mt-14 max-w-3xl">
          <FaqAccordion items={FAQ_ITEMS} />
        </div>
        <p className="mx-auto mt-16 max-w-3xl text-center font-[family-name:var(--font-cormorant)] text-2xl font-semibold text-[var(--text-primary)]">
          Still have questions?
        </p>
        <p className="mx-auto mt-3 max-w-3xl text-center font-[family-name:var(--font-lato)] text-[var(--text-secondary)]">
          Book a free discovery call — we&apos;ll help you decide if we&apos;re the right fit.
        </p>
      </div>
      <CtaSection />
    </SiteShell>
  );
}
