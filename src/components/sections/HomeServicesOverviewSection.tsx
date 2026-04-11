import Image from "next/image";
import Link from "next/link";
import GoldDivider from "@/components/GoldDivider";
import ScrollReveal from "@/components/ScrollReveal";
import StaggerReveal from "@/components/StaggerReveal";
import { getServiceHomeTeaserParagraph, getServiceImagePath, SERVICES } from "@/lib/services";

export function HomeServicesOverviewSection() {
  return (
    <section
      id="services-overview"
      className="relative overflow-hidden border-t border-[var(--metallic-gold)]/20 bg-[var(--soft-ivory)] py-24 md:py-32"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        aria-hidden
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.07'/%3E%3C/svg%3E")`,
        }}
      />
      <div className="pointer-events-none absolute -right-24 top-1/4 h-[min(520px,55vw)] w-[min(520px,55vw)] rounded-full bg-[color-mix(in_srgb,var(--royal-plum)_12%,transparent)] blur-3xl" aria-hidden />

      <div className="relative mx-auto w-full max-w-[min(100%,1920px)] px-8 md:px-14 lg:px-20 xl:px-28">
        <ScrollReveal className="text-center">
          <p className="font-[family-name:var(--font-montserrat)] text-[11px] font-semibold uppercase tracking-[0.28em] text-[var(--metallic-gold)]">
            How we help
          </p>
          <h2 className="mt-4 font-[family-name:var(--font-cormorant)] text-3xl font-bold leading-tight text-[var(--royal-plum)] md:text-[2.35rem] md:leading-[1.15]">
            Consulting and advisory for growing Australian businesses
          </h2>
          <div className="mt-8 flex justify-center">
            <GoldDivider />
          </div>
          <p className="mx-auto mt-10 max-w-2xl font-[family-name:var(--font-lato)] text-base leading-[1.75] text-[var(--charcoal)]/88 md:text-lg">
            Every engagement is tailored to your context. Below, each service is introduced in full—read on, then
            open the dedicated page when you are ready to go deeper.
          </p>
        </ScrollReveal>

        <StaggerReveal className="mt-20 flex flex-col gap-0 md:mt-24" childSelector=":scope > article" stagger={0.14}>
          {SERVICES.map((s, index) => {
            const teaser = getServiceHomeTeaserParagraph(s.description);
            const reverse = index % 2 === 1;
            return (
              <article
                key={s.slug}
                className="group relative border-t border-[color-mix(in_srgb,var(--royal-plum)_18%,transparent)] py-14 first:border-t-0 first:pt-0 md:py-20"
              >
                <div
                  className={`grid items-center gap-10 md:gap-14 lg:gap-16 ${reverse ? "lg:grid-cols-[1fr_minmax(0,1.05fr)]" : "lg:grid-cols-[minmax(0,1.05fr)_1fr]"}`}
                >
                  <div className={`min-w-0 ${reverse ? "lg:order-2" : ""}`}>
                    <span className="inline-flex items-baseline gap-3 font-[family-name:var(--font-cinzel)] text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--metallic-gold)]">
                      <span className="text-[var(--royal-plum)]/35" aria-hidden>
                        —
                      </span>
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-4 font-[family-name:var(--font-cormorant)] text-2xl font-bold leading-snug text-[var(--royal-plum)] md:text-[1.85rem]">
                      {s.title}
                    </h3>
                    <p className="mt-5 font-[family-name:var(--font-cormorant)] text-lg italic leading-snug text-[color-mix(in_srgb,var(--royal-plum)_78%,var(--charcoal))] md:text-xl">
                      {s.shortSummary}
                    </p>
                    <p className="mt-5 max-w-xl font-[family-name:var(--font-lato)] text-[0.98rem] leading-[1.75] text-[var(--charcoal)]/85 md:text-[1.05rem]">
                      {teaser}
                    </p>
                    <div className="mt-8">
                      <Link
                        href={`/services/${s.slug}`}
                        className="inline-flex items-center gap-2 border-b border-[var(--metallic-gold)]/50 pb-0.5 font-[family-name:var(--font-montserrat)] text-[13px] font-semibold uppercase tracking-[0.14em] text-[var(--royal-plum)] transition-colors duration-300 group-hover:border-[var(--metallic-gold)] group-hover:text-[color-mix(in_srgb,var(--royal-plum)_85%,#000)]"
                      >
                        Read more
                        <span className="inline-block transition-transform duration-300 group-hover:translate-x-1" aria-hidden>
                          →
                        </span>
                      </Link>
                    </div>
                  </div>

                  <div className={`relative min-h-[220px] ${reverse ? "lg:order-1" : ""}`}>
                    <div className="relative aspect-[16/11] w-full overflow-hidden rounded-sm shadow-[0_28px_60px_-20px_rgba(91,24,76,0.22)] ring-1 ring-[var(--metallic-gold)]/25 transition-[transform,box-shadow] duration-500 ease-out group-hover:-translate-y-1 group-hover:shadow-[0_36px_70px_-18px_rgba(91,24,76,0.28)] md:aspect-[5/4] lg:aspect-[4/3]">
                      <Image
                        src={getServiceImagePath(s.slug)}
                        alt={s.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 42vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                        priority={s.order <= 2}
                      />
                      <div
                        className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[var(--royal-plum)]/25 via-transparent to-transparent opacity-80 mix-blend-multiply"
                        aria-hidden
                      />
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </StaggerReveal>

        <p className="mt-16 text-center md:mt-20">
          <Link
            href="/services"
            className="font-[family-name:var(--font-montserrat)] text-sm font-semibold uppercase tracking-[0.12em] text-[var(--royal-plum)] underline-offset-[6px] transition-colors hover:text-[var(--metallic-gold)] hover:underline"
          >
            View all services
          </Link>
        </p>
      </div>
    </section>
  );
}
