import Image from "next/image";
import Link from "next/link";
import GoldDivider from "@/components/GoldDivider";
import ScrollReveal from "@/components/ScrollReveal";
import StaggerReveal from "@/components/StaggerReveal";
import { getServiceImagePath, SERVICES } from "@/lib/services";

export function HomeServicesOverviewSection() {
  return (
    <section id="services-overview" className="border-t border-[var(--metallic-gold)]/15 bg-[var(--soft-ivory)] py-24 md:py-32">
      <div className="mx-auto w-full max-w-[min(100%,1920px)] px-8 md:px-14 lg:px-20 xl:px-28">
        <ScrollReveal className="text-center">
          <h2 className="font-[family-name:var(--font-cormorant)] text-3xl font-bold text-[var(--royal-plum)] md:text-4xl">
            Consulting and Advisory Services for Growing Australian Businesses
          </h2>
          <div className="mt-8">
            <GoldDivider />
          </div>
          <p className="mx-auto mt-10 max-w-3xl font-[family-name:var(--font-lato)] text-base leading-[1.7] text-[var(--charcoal)] md:text-lg">
            Every engagement with CompassPoint Advisory is tailored to your business, your industry, and your
            goals. Here&apos;s how we work with SMEs across Australia.
          </p>
        </ScrollReveal>

        <StaggerReveal className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <article key={s.slug} className="service-card service-card--has-image flex flex-col overflow-hidden">
              <div className="relative aspect-[16/10] w-full shrink-0">
                <Image
                  src={getServiceImagePath(s.slug)}
                  alt={s.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover"
                  priority={s.order <= 3}
                />
              </div>
              <div className="service-card__body flex flex-1 flex-col px-7 pb-8 pt-6">
              <span className="service-number">{String(s.order).padStart(2, "0")}</span>
              <h3>{s.title}</h3>
              <p className="mt-2 flex-1 font-[family-name:var(--font-lato)] text-sm leading-relaxed text-[var(--charcoal)]/90">
                {s.shortSummary}
              </p>
              <Link href={`/services/${s.slug}`} className="learn-more mt-6 inline-flex">
                Learn more →
              </Link>
              </div>
            </article>
          ))}
        </StaggerReveal>

        <p className="mt-14 text-center">
          <Link
            href="/services"
            className="font-[family-name:var(--font-montserrat)] text-sm font-semibold uppercase tracking-wide text-[var(--royal-plum)] underline-offset-4 hover:text-[var(--metallic-gold)] hover:underline"
          >
            View all services
          </Link>
        </p>
      </div>
    </section>
  );
}
