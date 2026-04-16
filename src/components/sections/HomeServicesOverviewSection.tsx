import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import GoldDivider from "@/components/GoldDivider";
import ScrollReveal from "@/components/ScrollReveal";
import StaggerReveal from "@/components/StaggerReveal";
import type { Service } from "@/lib/services";
import {
  getHomeServiceAboutAccordionLabel,
  getServiceHeroImageAlt,
  getServiceImagePath,
  SERVICES,
} from "@/lib/services";

const ROW1 = 4;

function HomeServiceTile({ service, priority }: { service: Service; priority: boolean }) {
  const href = `/services/${service.slug}`;

  return (
    <article className="home-service-tile group relative isolate flex min-h-[340px] flex-col overflow-visible rounded-2xl border border-white/10 shadow-[0_28px_70px_-28px_rgba(0,0,0,0.65)] sm:min-h-[380px] lg:min-h-[400px]">
      {/* Clip image + gradient only; card body stays overflow-visible so accordion + CTA can grow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl">
        <Image
          src={getServiceImagePath(service.slug)}
          alt={getServiceHeroImageAlt(service)}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
          priority={priority}
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-[#1a0516] via-[#1a0516]/55 to-transparent"
          aria-hidden
        />
      </div>
      <div className="relative z-[1] mt-auto flex flex-col p-5 pb-6 pt-16 sm:p-6 sm:pb-7 sm:pt-20">
        <p className="font-[family-name:var(--font-montserrat)] text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--metallic-gold)]">
          <span className="inline-block border border-[var(--metallic-gold)]/75 bg-[var(--royal-plum)]/35 px-2.5 py-1 backdrop-blur-[2px]">
            {service.categoryLabel}
          </span>
        </p>
        <h3 className="mt-3 font-[family-name:var(--font-cormorant)] text-xl font-bold leading-snug text-white sm:text-2xl">
          {service.title}
        </h3>

        <details
          className="mt-4 border-t border-white/15 pt-4 text-left [&[open]>summary_svg]:rotate-180 [&[open]>summary]:border-[color-mix(in_srgb,var(--royal-plum)_45%,rgba(255,255,255,0.12))] [&[open]>summary]:bg-[color-mix(in_srgb,var(--royal-plum)_28%,rgba(0,0,0,0.35))] [&[open]>summary]:text-white/55 [&[open]>summary]:shadow-none [&[open]>summary]:ring-1 [&[open]>summary]:ring-white/10 [&[open]>summary]:hover:bg-[color-mix(in_srgb,var(--royal-plum)_38%,rgba(0,0,0,0.3))] [&[open]>summary]:hover:text-white/75 [&[open]>summary]:focus-visible:outline-[color-mix(in_srgb,var(--royal-plum)_70%,#fff)]"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-3 rounded-md border border-[var(--metallic-gold)] bg-[var(--royal-plum)]/50 px-3.5 py-3 font-[family-name:var(--font-montserrat)] text-[11px] font-bold text-[var(--metallic-gold)] transition-colors hover:bg-[var(--royal-plum)]/65 hover:text-[color-mix(in_srgb,var(--metallic-gold)_88%,#fff)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--metallic-gold)] sm:text-xs [&::-webkit-details-marker]:hidden">
            <span className="min-w-0 flex-1 text-left leading-snug tracking-wide">
              {getHomeServiceAboutAccordionLabel(service)}
            </span>
            <ChevronDown
              className="h-4 w-4 shrink-0 transition-transform duration-300"
              aria-hidden
            />
          </summary>
          <div className="mt-4 space-y-4 border-t border-white/15 pt-4">
            <p className="font-[family-name:var(--font-lato)] text-sm leading-relaxed text-white/88">{service.shortSummary}</p>
            <Link
              href={href}
              className="inline-flex w-full items-center justify-center rounded-sm bg-[var(--metallic-gold)] px-4 py-3 text-center font-[family-name:var(--font-montserrat)] text-xs font-bold uppercase tracking-[0.12em] text-[var(--plum-dark)] transition-colors hover:bg-[color-mix(in_srgb,var(--metallic-gold)_88%,#fff)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              View service
            </Link>
          </div>
        </details>
      </div>
    </article>
  );
}

export function HomeServicesOverviewSection() {
  const ordered = [...SERVICES].sort((a, b) => a.order - b.order);
  const firstRow = ordered.slice(0, ROW1);
  const secondRow = ordered.slice(ROW1);

  return (
    <section
      id="services-overview"
      className="section-brand-plum border-t border-[var(--metallic-gold)]/20 py-24 md:py-32"
    >
      <div className="mx-auto w-full max-w-[min(100%,1920px)] px-8 md:px-14 lg:px-20 xl:px-28">
        <ScrollReveal className="text-center">
          <h2 className="gold-shimmer-text font-[family-name:var(--font-cormorant)] text-3xl font-bold md:text-4xl lg:text-[2.35rem]">
            Consulting and Advisory Services for Growing Australian Businesses
          </h2>
          <div className="mt-8">
            <GoldDivider />
          </div>
          <p className="mx-auto mt-10 max-w-3xl font-[family-name:var(--font-lato)] text-base leading-[1.7] text-white/80 md:text-lg">
            Every engagement with CompassPoint Advisory is tailored to your business, your industry, and your
            goals. Here&apos;s how we work with SMEs across Australia.
          </p>
        </ScrollReveal>

        <StaggerReveal
          className="mt-16 flex flex-col gap-6 lg:gap-6"
          childSelector=".home-service-tile"
          stagger={0.1}
        >
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {firstRow.map((s) => (
              <HomeServiceTile key={s.slug} service={s} priority={s.order <= 4} />
            ))}
          </div>
          <div className="flex flex-col gap-6 sm:grid sm:grid-cols-2 lg:flex lg:flex-row lg:flex-wrap lg:justify-center lg:gap-6">
            {secondRow.map((s) => (
              <div key={s.slug} className="lg:w-[calc((100%-4.5rem)/4)] lg:max-w-none lg:flex-initial">
                <HomeServiceTile service={s} priority={false} />
              </div>
            ))}
          </div>
        </StaggerReveal>

        <p className="mt-14 text-center">
          <Link
            href="/services"
            className="font-[family-name:var(--font-montserrat)] text-sm font-semibold uppercase tracking-wide text-[var(--metallic-gold)] underline-offset-4 hover:text-white hover:underline"
          >
            View all services
          </Link>
        </p>
      </div>
    </section>
  );
}
