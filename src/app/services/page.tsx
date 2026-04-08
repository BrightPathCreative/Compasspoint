import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/components/global/SiteShell";
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
      <div className="mx-auto w-full max-w-[min(100%,1920px)] px-8 pb-28 pt-32 md:px-14 md:pb-36 md:pt-40 lg:px-20">
        <h1 className="max-w-4xl font-[family-name:var(--font-cormorant)] text-4xl font-bold text-[var(--text-primary)] md:text-5xl">
          Consulting and Advisory Services for Growing Australian Businesses
        </h1>
        <p className="mt-8 max-w-3xl font-[family-name:var(--font-lato)] text-lg leading-[1.7] text-[var(--text-secondary)]">
          Every engagement is tailored to your business, your industry, and your goals. Explore each service
          below—including who it&apos;s best for—and book a free discovery call when you&apos;re ready to talk.
        </p>

        <div className="mt-16 space-y-16">
          {SERVICES.map((s) => (
            <section
              key={s.slug}
              className="scroll-mt-28 rounded-2xl border border-[var(--brand-gold)]/15 bg-[var(--bg-secondary)]/60 p-8 md:p-10"
              id={s.slug}
            >
              <div className="flex flex-wrap items-baseline gap-3">
                <span className="font-[family-name:var(--font-montserrat)] text-sm font-bold text-[var(--brand-gold)]">
                  {String(s.order).padStart(2, "0")}
                </span>
                <h2 className="font-[family-name:var(--font-cormorant)] text-2xl font-bold text-[var(--text-primary)] md:text-3xl">
                  {s.title}
                </h2>
              </div>
              <p className="mt-4 font-[family-name:var(--font-cormorant)] text-lg italic text-[var(--text-secondary)] md:text-xl">
                {s.question}
              </p>
              <p className="mt-6 font-[family-name:var(--font-lato)] leading-[1.7] text-[var(--text-secondary)]">
                {s.description}
              </p>
              <div className="mt-6">
                <p className="font-[family-name:var(--font-montserrat)] text-xs font-semibold uppercase tracking-wide text-[var(--brand-gold)]">
                  Best for
                </p>
                <ul className="mt-2 flex flex-wrap gap-2">
                  {s.bestFor.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-[var(--brand-gold)]/30 bg-[var(--brand-plum)]/20 px-3 py-1 font-[family-name:var(--font-lato)] text-sm text-[var(--text-primary)]"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                href={`/services/${s.slug}`}
                className="mt-8 inline-flex font-[family-name:var(--font-montserrat)] text-sm font-semibold uppercase tracking-wide text-[var(--brand-gold)] hover:underline"
              >
                Full service detail →
              </Link>
            </section>
          ))}
        </div>
      </div>
    </SiteShell>
  );
}
