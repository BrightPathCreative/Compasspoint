import Link from "next/link";
import { SERVICES } from "@/lib/services";

export function HomeServicesOverviewSection() {
  return (
    <section id="services-overview" className="border-t border-[var(--brand-gold)]/15 bg-[var(--brand-ivory)] py-24 md:py-32">
      <div className="mx-auto w-full max-w-[min(100%,1920px)] px-8 md:px-14 lg:px-20 xl:px-28">
        <h2 className="text-center font-[family-name:var(--font-cormorant)] text-3xl font-bold text-[var(--brand-charcoal)] md:text-4xl">
          Consulting and Advisory Services for Growing Australian Businesses
        </h2>
        <p className="mx-auto mt-6 max-w-3xl text-center font-[family-name:var(--font-lato)] text-base leading-[1.7] text-[var(--brand-charcoal)] md:text-lg">
          Every engagement with CompassPoint Advisory is tailored to your business, your industry, and your
          goals. Here&apos;s how we work with SMEs across Australia.
        </p>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {SERVICES.map((s) => (
            <article
              key={s.slug}
              className="flex flex-col rounded-lg border-t-[3px] border-[var(--brand-gold)] bg-[#FAF6EE] p-6 shadow-[0_4px_24px_rgba(91,24,76,0.08)]"
            >
              <span className="font-[family-name:var(--font-montserrat)] text-xs font-semibold uppercase tracking-[0.08em] text-[var(--brand-plum)]">
                {String(s.order).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-[family-name:var(--font-cormorant)] text-xl font-bold text-[var(--brand-charcoal)]">
                {s.title}
              </h3>
              <p className="mt-3 flex-1 font-[family-name:var(--font-lato)] text-sm leading-relaxed text-[var(--brand-charcoal)]/90">
                {s.shortSummary}
              </p>
              <Link
                href={`/services/${s.slug}`}
                className="mt-5 inline-flex font-[family-name:var(--font-montserrat)] text-sm font-semibold uppercase tracking-wide text-[var(--brand-plum)] hover:text-[var(--brand-gold)]"
              >
                Learn more →
              </Link>
            </article>
          ))}
        </div>

        <p className="mt-12 text-center">
          <Link
            href="/services"
            className="font-[family-name:var(--font-montserrat)] text-sm font-semibold uppercase tracking-wide text-[var(--brand-plum)] underline-offset-4 hover:underline"
          >
            View all services
          </Link>
        </p>
      </div>
    </section>
  );
}
