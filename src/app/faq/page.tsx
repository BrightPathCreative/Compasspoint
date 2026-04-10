import type { Metadata } from "next";
import Link from "next/link";
import GoldDivider from "@/components/GoldDivider";
import { SiteShell } from "@/components/global/SiteShell";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { JsonLd } from "@/components/seo/JsonLd";
import { CtaSection } from "@/components/sections/CtaSection";
import { faqPageJsonLd } from "@/lib/seo-schemas";
import { FAQ_ITEMS } from "@/lib/faq";
import { BOOK_DISCOVERY_PATH } from "@/lib/site";

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

          <div className="mx-auto mt-16 max-w-3xl rounded-sm border border-[var(--metallic-gold)]/20 bg-[var(--bg-primary)]/80 p-8 text-center md:p-10">
            <p className="font-[family-name:var(--font-cormorant)] text-2xl font-semibold text-[var(--text-primary)]">
              Still have questions?
            </p>
            <p className="mx-auto mt-3 max-w-lg font-[family-name:var(--font-lato)] text-[var(--text-secondary)]">
              Book a free discovery call — we&apos;ll help you decide if we&apos;re the right fit.
            </p>
            <p className="mt-8">
              <Link
                href={BOOK_DISCOVERY_PATH}
                className="inline-flex min-h-[44px] items-center justify-center rounded-sm border border-[var(--metallic-gold)]/45 bg-transparent px-8 py-3 font-[family-name:var(--font-montserrat)] text-sm font-semibold uppercase tracking-wide text-[var(--metallic-gold)] transition-colors hover:border-[var(--metallic-gold)] hover:bg-[var(--metallic-gold)]/10"
              >
                Book a discovery call
              </Link>
            </p>
          </div>
        </div>
      </div>
      <CtaSection />
    </SiteShell>
  );
}
