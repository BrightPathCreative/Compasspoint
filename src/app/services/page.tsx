import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteShell } from "@/components/global/SiteShell";
import { PageHero } from "@/components/sections/PageHero";
import { getServiceHomeTeaserParagraph, getServiceImagePath, SERVICES } from "@/lib/services";

export const metadata: Metadata = {
  title: "Business Consulting Services for Australian SMEs - CompassPoint Advisory",
  description:
    "From strategy and operations to AI transformation and executive coaching. Explore CompassPoint Advisory's tailored consulting services for growing Australian businesses.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <SiteShell>
      <PageHero
        title="Consulting Services"
        subtitle="Tailored engagements for Australian SMEs—explore each service and who it fits best."
      />

      <div className="relative border-b border-[var(--metallic-gold)]/12 bg-[var(--soft-ivory)]">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.4]"
          aria-hidden
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.06'/%3E%3C/svg%3E")`,
          }}
        />

        <div className="relative mx-auto w-full max-w-[min(100%,1920px)] px-8 pb-12 pt-16 md:px-14 md:pb-16 md:pt-20 lg:px-20">
          <p className="max-w-2xl font-[family-name:var(--font-lato)] text-lg leading-[1.75] text-[var(--charcoal)]/88">
            Every engagement is tailored to your business, your industry, and your goals. Skim the overview below,
            then open a service page for the full picture. Book a free discovery call when you are ready to talk.
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-[min(100%,1920px)] px-8 pb-20 md:px-14 md:pb-28 lg:px-20">
          <div className="flex flex-col gap-0">
            {SERVICES.map((s, index) => {
              const reverse = index % 2 === 1;
              const teaser = getServiceHomeTeaserParagraph(s.description);
              const label = String(index + 1).padStart(2, "0");

              return (
                <section
                  key={s.slug}
                  id={s.slug}
                  className="scroll-mt-28 border-t border-[color-mix(in_srgb,var(--royal-plum)_15%,transparent)] py-16 first:border-t-0 first:pt-0 md:py-20 lg:py-24"
                >
                  <div
                    className={`grid items-center gap-12 lg:gap-16 ${reverse ? "lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)]" : "lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)]"}`}
                  >
                    <div className={`relative min-h-[200px] ${reverse ? "lg:order-2" : ""}`}>
                      <div className="relative aspect-[16/10] overflow-hidden rounded-sm shadow-[0_32px_70px_-28px_rgba(91,24,76,0.35)] ring-1 ring-[var(--metallic-gold)]/28 md:aspect-[5/4]">
                        <Image
                          src={getServiceImagePath(s.slug)}
                          alt={s.title}
                          fill
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          className="object-cover"
                          priority={index < 2}
                        />
                        <div
                          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[var(--royal-plum)]/20 via-transparent to-[var(--metallic-gold)]/10"
                          aria-hidden
                        />
                      </div>
                    </div>

                    <div className={`min-w-0 ${reverse ? "lg:order-1" : ""}`}>
                      <span className="font-[family-name:var(--font-cinzel)] text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--metallic-gold)]">
                        {label}
                      </span>
                      <h2 className="mt-3 font-[family-name:var(--font-cormorant)] text-2xl font-bold leading-tight text-[var(--royal-plum)] md:text-3xl">
                        {s.title}
                      </h2>
                      <p className="mt-4 font-[family-name:var(--font-cormorant)] text-lg italic leading-snug text-[color-mix(in_srgb,var(--royal-plum)_75%,var(--charcoal))] md:text-xl">
                        {s.shortSummary}
                      </p>
                      <p className="mt-2 font-[family-name:var(--font-cormorant)] text-base italic text-[var(--charcoal)]/75 md:text-lg">
                        {s.question}
                      </p>
                      <p className="mt-6 font-[family-name:var(--font-lato)] leading-[1.75] text-[var(--charcoal)]/88">
                        {teaser}
                      </p>
                      <div className="mt-6 flex flex-wrap gap-2">
                        {s.bestFor.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-[color-mix(in_srgb,var(--royal-plum)_22%,var(--metallic-gold))] bg-[color-mix(in_srgb,var(--metallic-gold)_10%,#fff)] px-3 py-1 font-[family-name:var(--font-montserrat)] text-[10px] font-semibold uppercase tracking-[0.08em] text-[var(--royal-plum)]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <Link
                        href={`/services/${s.slug}`}
                        className="mt-10 inline-flex items-center gap-2 border-b-2 border-[var(--metallic-gold)]/45 pb-1 font-[family-name:var(--font-montserrat)] text-[12px] font-semibold uppercase tracking-[0.14em] text-[var(--royal-plum)] transition-colors hover:border-[var(--metallic-gold)]"
                      >
                        Full service detail
                        <span aria-hidden>→</span>
                      </Link>
                    </div>
                  </div>
                </section>
              );
            })}
          </div>
        </div>
      </div>
    </SiteShell>
  );
}
