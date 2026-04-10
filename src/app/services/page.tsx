import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/components/global/SiteShell";
import { PageHero } from "@/components/sections/PageHero";
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

const tagClassName =
  "rounded-full border border-[var(--metallic-gold)]/28 bg-[color-mix(in_srgb,var(--metallic-gold)_11%,transparent)] px-[14px] py-1 font-[family-name:var(--font-montserrat)] text-xs text-[var(--soft-ivory)]/95";

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
          offering - including who it&apos;s best for - with full detail on dedicated pages. Book a free discovery call when
          you&apos;re ready to talk.
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
                <div className="relative grid gap-8 md:grid-cols-[minmax(0,5rem)_1fr] md:gap-12">
                  <div
                    className="pointer-events-none select-none font-[family-name:var(--font-cinzel)] text-[4.5rem] font-bold leading-none text-[var(--metallic-gold)]/10 md:text-[4.5rem]"
                    aria-hidden
                  >
                    {String(s.order).padStart(2, "0")}
                  </div>
                  <div className="min-w-0">
                    <div className="border-l-2 border-[var(--metallic-gold)]/50 pl-6 md:pl-8">
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
                        className="mt-8 inline-flex font-[family-name:var(--font-montserrat)] text-sm font-semibold uppercase tracking-wide text-[var(--metallic-gold)] underline-offset-4 hover:underline"
                      >
                        Full service detail →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>
    </SiteShell>
  );
}
