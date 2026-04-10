import type { Metadata } from "next";
import { SiteShell } from "@/components/global/SiteShell";
import { Button } from "@/components/global/Button";
import { JsonLd } from "@/components/seo/JsonLd";
import { CtaSection } from "@/components/sections/CtaSection";
import { PageHero } from "@/components/sections/PageHero";
import { LINKEDIN_URL } from "@/lib/contact";
import { personAmeliaJsonLd } from "@/lib/seo-schemas";
import { BOOK_DISCOVERY_PATH } from "@/lib/site";

export const metadata: Metadata = {
  title: "About CompassPoint Advisory - Melbourne Business Consultants",
  description:
    "Founded by Amelia Ghofrany with 20+ years at IBM, Fujitsu, DXC and Bupa. Strategic consulting purpose-built for Australian SMEs turning $5M–$20M.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <SiteShell>
      <JsonLd data={personAmeliaJsonLd()} />
      <PageHero title="About CompassPoint Advisory" />

      <article className="mx-auto w-full max-w-[min(100%,1920px)] px-8 pb-24 pt-16 md:px-14 md:pb-28 md:pt-20 lg:px-20">
        <div className="grid gap-12 rounded-sm border border-[var(--metallic-gold)]/15 bg-[var(--bg-secondary)] p-10 md:grid-cols-[200px_1fr] md:gap-16 md:p-14">
          <div className="flex flex-col items-center md:items-start">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/brand-icon.svg"
              alt=""
              width={160}
              height={160}
              className="h-32 w-32 object-contain opacity-90 md:h-40 md:w-40"
            />
          </div>
          <div>
            <h2 className="font-[family-name:var(--font-cormorant)] text-3xl font-bold text-[var(--royal-plum)] md:text-4xl">
              Amelia Ghofrany
            </h2>
            <p className="mt-2 font-[family-name:var(--font-montserrat)] text-xs font-semibold uppercase tracking-[0.18em] text-[var(--metallic-gold)]">
              Founder &amp; Principal Consultant
            </p>
            <p className="mt-6 max-w-2xl font-[family-name:var(--font-lato)] text-base leading-[1.7] text-[var(--charcoal)] md:text-lg">
              20+ years across IBM, Fujitsu, DXC Technology, and Bupa - now focused exclusively on helping Australian
              SMEs grow with clarity and control.
            </p>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 font-[family-name:var(--font-montserrat)] text-sm font-semibold text-[var(--royal-plum)] hover:text-[var(--metallic-gold)]"
            >
              <LinkedInGlyph className="h-5 w-5 text-[var(--metallic-gold)]" />
              LinkedIn
            </a>
          </div>
        </div>

        <div className="prose-custom mx-auto mt-16 max-w-3xl space-y-6 font-[family-name:var(--font-lato)] text-base leading-[1.7] text-[var(--text-secondary)] md:text-lg">
          <p>
            CompassPoint Advisory is a Melbourne-based strategic consulting firm for Australian SMEs and
            startups - typically businesses in the $5M–$20M revenue range - that want Fortune 500–grade thinking without
            the corporate overhead.
          </p>
        </div>

        <h2 className="mt-16 font-[family-name:var(--font-cormorant)] text-3xl font-bold text-[var(--text-primary)] md:text-4xl">
          What we stand for
        </h2>
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <div className="rounded-sm border border-[var(--metallic-gold)]/20 border-t-[3px] border-t-[var(--metallic-gold)] bg-[var(--soft-ivory)] p-8 md:p-10">
            <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-bold text-[var(--metallic-gold)] md:text-3xl">
              Vision
            </h3>
            <p className="mt-4 font-[family-name:var(--font-lato)] leading-[1.7] text-[var(--charcoal)]">
              To give growing Australian businesses access to the same strategic rigour large enterprises rely on -
              delivered in a way that respects pace, budget, and founder realities.
            </p>
          </div>
          <div className="rounded-sm border border-[var(--metallic-gold)]/20 border-t-[3px] border-t-[var(--metallic-gold)] bg-[var(--soft-ivory)] p-8 md:p-10">
            <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-bold text-[var(--metallic-gold)] md:text-3xl">
              Mission
            </h3>
            <p className="mt-4 font-[family-name:var(--font-lato)] leading-[1.7] text-[var(--charcoal)]">
              We partner with leadership teams to unlock clarity in strategy, strength in operations, and confidence
              through change - including practical adoption of AI where it earns its place.
            </p>
          </div>
        </div>

        <blockquote className="mx-auto mt-20 max-w-3xl text-center">
          <p className="font-[family-name:var(--font-cormorant)] text-2xl italic leading-snug text-[var(--royal-plum)] md:text-3xl">
            <span className="text-[var(--metallic-gold)]">&ldquo;</span>
            Scaling a business shouldn&apos;t mean sacrificing control.
            <span className="text-[var(--metallic-gold)]">&rdquo;</span>
          </p>
        </blockquote>

        <div className="prose-custom mx-auto mt-12 max-w-3xl font-[family-name:var(--font-lato)] text-base leading-[1.7] text-[var(--text-secondary)] md:text-lg">
          <p>
            We work alongside you - not above you - so decisions stay yours, momentum builds, and your team grows
            stronger through the process.
          </p>
        </div>

        <div className="mt-12">
          <Button href={BOOK_DISCOVERY_PATH}>
            Book a Free Discovery Call
          </Button>
        </div>
      </article>
      <CtaSection />
    </SiteShell>
  );
}

function LinkedInGlyph({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}
