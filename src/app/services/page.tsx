import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/components/global/SiteShell";
import { PageHero } from "@/components/sections/PageHero";
import { SERVICES } from "@/lib/services";

export const metadata: Metadata = {
  title: "Business Consulting Services for Australian SMEs — CompassPoint Advisory",
  description:
    "From strategy and operations to AI transformation and executive coaching. Explore CompassPoint Advisory's tailored consulting services for growing Australian businesses.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <SiteShell>
      <PageHero
        title="Consulting Services"
        subtitle="Tailored engagements for Australian SMEs — explore each service and who it fits best."
      />
      <div className="mx-auto w-full max-w-[min(100%,1920px)] px-8 pb-24 pt-16 md:px-14 md:pb-28 md:pt-20 lg:px-20">
        <p className="max-w-3xl font-[family-name:var(--font-lato)] text-lg leading-[1.7] text-[var(--text-secondary)]">
          Every engagement is tailored to your business, your industry, and your goals. Explore each service
          below—including who it&apos;s best for—and book a free discovery call when you&apos;re ready to talk.
        </p>

        <div className="mt-16 space-y-0">
          {SERVICES.map((s, index) => (
            <section
              key={s.slug}
              className={`scroll-mt-28 border-t border-[var(--metallic-gold)]/15 py-16 first:border-t-0 first:pt-0 md:py-20 ${
                index % 2 === 0 ? "bg-transparent" : "bg-[var(--soft-ivory)]/4"
              }`}
              id={s.slug}
            >
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
                          <li
                            key={tag}
                            className="rounded-full bg-[rgba(212,175,55,0.1)] px-[14px] py-1 font-[family-name:var(--font-montserrat)] text-xs text-[var(--royal-plum)]"
                          >
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
            </section>
          ))}
        </div>
      </div>
    </SiteShell>
  );
}
