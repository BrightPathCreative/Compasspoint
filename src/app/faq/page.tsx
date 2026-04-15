import type { Metadata } from "next";
import GoldDivider from "@/components/GoldDivider";
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
      <div className="relative overflow-hidden border-b border-[var(--metallic-gold)]/10 bg-[var(--bg-primary)]">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `radial-gradient(ellipse 80% 50% at 50% -20%, var(--metallic-gold), transparent)`,
          }}
          aria-hidden
        />
        <div className="relative mx-auto w-full max-w-[min(100%,1920px)] px-8 pb-6 pt-32 md:px-14 md:pt-40 lg:px-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-[family-name:var(--font-montserrat)] text-xs font-semibold uppercase tracking-[0.2em] text-[var(--metallic-gold)]">
              FAQ
            </p>
            <h1 className="mt-5 font-[family-name:var(--font-cormorant)] text-4xl font-bold leading-tight text-[var(--text-primary)] md:text-5xl">
              Frequently Asked Questions
            </h1>
            <p className="mt-3 font-[family-name:var(--font-lato)] text-lg text-[var(--text-secondary)] md:text-xl">
              Business consulting for Australian SMEs
            </p>
            <div className="mt-10">
              <GoldDivider />
            </div>
            <p className="mx-auto mt-10 max-w-2xl font-[family-name:var(--font-lato)] text-[var(--text-secondary)] md:text-lg">
              Straight answers on how we work, who we serve, and how to get started.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[var(--bg-secondary)]/35">
        <div className="mx-auto w-full max-w-[min(100%,1920px)] px-8 py-14 md:px-14 md:py-20 lg:px-20">
          <div className="mx-auto max-w-3xl">
            <FaqAccordion items={FAQ_ITEMS} variant="minimal" initialOpenIndex={0} />
          </div>
        </div>
      </div>
      <CtaSection />
    </SiteShell>
  );
}
