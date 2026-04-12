import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/global/Button";
import { SiteShell } from "@/components/global/SiteShell";
import { PageHero } from "@/components/sections/PageHero";
import { BOOK_DISCOVERY_PATH } from "@/lib/site";
import { SERVICES } from "@/lib/services";

export const metadata: Metadata = {
  title: "Business Consulting Services for Australian SMEs - CompassPoint Advisory",
  description:
    "From strategy and operations to AI transformation and executive coaching. Explore CompassPoint Advisory's tailored consulting services for growing Australian businesses.",
  alternates: { canonical: "/services" },
};

/** Rotating section surfaces - royal plum, charcoal, gold-tinted neutrals (see globals brand tokens). */
const SECTION_SURFACES = [
  "",
  "section-brand-plum",
  "bg-[var(--bg-secondary)]",
  "bg-[color-mix(in_srgb,var(--royal-plum)_30%,var(--brand-black))]",
] as const;

/** Light cream / gold chip on dark band — charcoal label (no low-contrast purple on dark). */
const tagClassName =
  "rounded-full border border-[var(--metallic-gold)]/45 bg-[color-mix(in_srgb,var(--metallic-gold)_28%,var(--ivory-warm))] px-[14px] py-2 font-[family-name:var(--font-montserrat)] text-xs font-medium leading-snug text-[var(--charcoal)] shadow-sm";

export default function ServicesPage() {
  return (
    <SiteShell>
      <PageHero
        title="Consulting Services"
        subtitle="Tailored engagements for Australian SMEs - explore each service and who it fits best."
      />
      <div className="mx-auto w-full max-w-[min(100%,1920px)] px-8 pb-8 pt-16 md:px-14 md:pt-20 lg:px-20">
        <p className="max-w-3xl font-[family-name:var(--font-lato)] text-lg leading-[1.7] text-[var(--text-secondary)]">
          Every engagement is tailored to your business, your industry, and your goals. Below is an overview of each
          offering - including who it&apos;s best for - with full detail on dedicated pages.
        </p>
      </div>

      <div className="mt-8 pb-16 md:mt-10 md:pb-28">
        {SERVICES.map((s, index) => {
          const surface = SECTION_SURFACES[index % SECTION_SURFACES.length];
          return (
            <section
              key={s.slug}
              className={`scroll-mt-28 border-t border-[var(--metallic-gold)]/18 ${surface}`.trim()}
              id={s.slug}
            >
              <div className="mx-auto w-full max-w-[min(100%,1920px)] px-8 py-16 md:px-14 md:py-20 lg:px-20">
                <div className="min-w-0 border-l-2 border-[var(--metallic-gold)]/50 pl-6 md:pl-8">
                  <h2 className="font-[family-name:var(--font-cormorant)] text-2xl font-bold text-[var(--text-primary)] md:text-3xl">
                    {s.title}
                  </h2>
                  <p className="mt-4 font-[family-name:var(--font-cormorant)] text-lg italic text-[var(--text-secondary)] md:text-xl">
                    {s.question}
                  </p>
                  <p className="mt-6 font-[family-name:var(--font-lato)] leading-[1.7] text-[var(--text-secondary)]">
                    {s.description}
                  </p>
                  <div className="mt-8">
                    <p className="font-[family-name:var(--font-montserrat)] text-xs font-semibold uppercase tracking-[0.12em] text-[var(--metallic-gold)]">
                      Best for
                    </p>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {s.bestFor.map((tag) => (
                        <li key={tag} className={tagClassName}>
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link
                    href={`/services/${s.slug}`}
                    className="mt-8 inline-flex font-[family-name:var(--font-montserrat)] text-sm font-semibold tracking-wide text-[var(--soft-ivory)]/85 underline-offset-4 transition-colors hover:text-[var(--metallic-gold)] hover:underline"
                  >
                    Full service detail →
                  </Link>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      <section className="border-t border-[var(--metallic-gold)]/18 bg-[var(--ivory-warm)] py-16 md:py-24">
        <div className="mx-auto w-full max-w-[min(100%,1920px)] px-8 text-center md:px-14 lg:px-20">
          <h2 className="font-[family-name:var(--font-cormorant)] text-2xl font-bold text-[var(--royal-plum)] md:text-3xl">
            Ready for a conversation?
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-[family-name:var(--font-lato)] text-base leading-relaxed text-[var(--charcoal)] md:text-lg">
            One free discovery call to align on your goals and whether CompassPoint is the right fit. No obligation.
          </p>
          <div className="mt-10 flex justify-center">
            <Button href={BOOK_DISCOVERY_PATH} className="cta-gold-halo">
              Book a Discovery Call
            </Button>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
