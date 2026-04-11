import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteShell } from "@/components/global/SiteShell";
import { Button } from "@/components/global/Button";
import { JsonLd } from "@/components/seo/JsonLd";
import { CtaSection } from "@/components/sections/CtaSection";
import { PageHero } from "@/components/sections/PageHero";
import { faqJsonLdFromItems, serviceJsonLd } from "@/lib/seo-schemas";
import { BOOK_DISCOVERY_PATH } from "@/lib/site";
import { getServiceFaqItems } from "@/lib/faq";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { getRelatedServices, getServiceBySlug, getServiceImagePath, SERVICES } from "@/lib/services";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "Service" };
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: `/services/${slug}` },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `/services/${slug}`,
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const related = getRelatedServices(slug, 3);
  const serviceFaqs = getServiceFaqItems(slug);
  const orderLabel = String(service.order).padStart(2, "0");

  return (
    <SiteShell>
      <JsonLd data={serviceJsonLd({ name: service.title, description: service.description })} />
      {serviceFaqs.length > 0 ? <JsonLd data={faqJsonLdFromItems(serviceFaqs)} /> : null}
      <PageHero title={service.title} subtitle={service.shortSummary} />

      <div className="relative border-b border-[var(--metallic-gold)]/12 bg-[var(--bg-primary)]">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.2]"
          aria-hidden
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.055'/%3E%3C/svg%3E")`,
          }}
        />

        <div className="relative mx-auto w-full max-w-[min(100%,1920px)] px-8 pb-20 pt-12 md:px-14 md:pb-28 md:pt-16 lg:px-20">
          <p className="font-[family-name:var(--font-montserrat)] text-[11px] font-semibold uppercase tracking-[0.26em] text-[var(--metallic-gold)]/90">
            <Link href="/services" className="transition-colors hover:text-[var(--accent-gold-light)]">
              Services
            </Link>
            <span className="mx-2 text-[var(--text-tertiary)]" aria-hidden>
              /
            </span>
            <span className="text-[var(--text-secondary)]">{orderLabel}</span>
          </p>

          <div className="mt-12 grid gap-14 lg:mt-16 lg:grid-cols-12 lg:gap-16 lg:items-start">
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <div className="relative ml-0 aspect-[5/4] max-h-[min(72vh,560px)] min-h-[240px] overflow-hidden rounded-sm shadow-[0_40px_80px_-40px_rgba(0,0,0,0.75)] ring-1 ring-[var(--metallic-gold)]/22 md:aspect-[4/5] lg:max-h-none">
                <Image
                  src={getServiceImagePath(service.slug)}
                  alt={service.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-transparent to-[color-mix(in_srgb,var(--royal-plum)_35%,transparent)] opacity-90 mix-blend-multiply"
                  aria-hidden
                />
              </div>
            </div>

            <article className="min-w-0 lg:col-span-7">
              <blockquote className="relative border-l-2 border-[var(--metallic-gold)]/55 pl-6 md:pl-8">
                <p className="font-[family-name:var(--font-cormorant)] text-xl italic leading-snug text-[var(--metallic-gold)] md:text-2xl md:leading-snug">
                  {service.question}
                </p>
              </blockquote>

              <div className="mt-10 font-[family-name:var(--font-lato)] text-lg leading-[1.78] text-[var(--text-secondary)] md:text-[1.125rem]">
                <p>{service.description}</p>
              </div>

              <section className="mt-14">
                <h2 className="font-[family-name:var(--font-cinzel)] text-xs font-semibold uppercase tracking-[0.2em] text-[var(--metallic-gold)]">
                  Best for
                </h2>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {service.bestFor.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-sm border border-[var(--metallic-gold)]/22 bg-[color-mix(in_srgb,var(--metallic-gold)_8%,transparent)] px-4 py-2 font-[family-name:var(--font-montserrat)] text-[11px] font-medium uppercase tracking-[0.06em] text-[var(--text-primary)]"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </section>

              <section className="mt-14 rounded-sm border border-[var(--metallic-gold)]/18 bg-[color-mix(in_srgb,var(--bg-secondary)_88%,var(--royal-plum))] p-8 md:p-10">
                <h2 className="font-[family-name:var(--font-cormorant)] text-2xl font-bold text-[var(--text-primary)]">
                  What to expect
                </h2>
                <ol className="mt-8 space-y-6">
                  {[
                    <>
                      We start with a structured{" "}
                      <strong className="font-semibold text-[var(--text-primary)]">discovery and audit</strong> to
                      align on goals, constraints, and context.
                    </>,
                    <>
                      You receive a clear{" "}
                      <strong className="font-semibold text-[var(--text-primary)]">strategic roadmap</strong> with
                      priorities, owners, and measurable outcomes.
                    </>,
                    <>During execution, we stay close—advising, coaching, and course-correcting as the plan meets reality.</>,
                    <>
                      Read our full{" "}
                      <Link href="/methodology" className="text-[var(--metallic-gold)] underline-offset-2 hover:underline">
                        methodology
                      </Link>{" "}
                      for how engagements typically unfold.
                    </>,
                  ].map((body, i) => (
                    <li key={i} className="flex gap-4 font-[family-name:var(--font-lato)] text-[var(--text-secondary)]">
                      <span
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[var(--metallic-gold)]/35 font-[family-name:var(--font-cinzel)] text-xs font-bold text-[var(--metallic-gold)]"
                        aria-hidden
                      >
                        {i + 1}
                      </span>
                      <span className="pt-1 leading-[1.65]">{body}</span>
                    </li>
                  ))}
                </ol>
              </section>

              <div className="mt-12">
                <Button href={BOOK_DISCOVERY_PATH}>Book a Discovery Call</Button>
              </div>

              {serviceFaqs.length > 0 ? (
                <section className="mt-20 border-t border-[var(--metallic-gold)]/18 pt-14">
                  <h2 className="font-[family-name:var(--font-cormorant)] text-2xl font-bold text-[var(--text-primary)]">
                    Common questions
                  </h2>
                  <p className="mt-3 font-[family-name:var(--font-lato)] text-[var(--text-secondary)]">
                    Answers drawn from our{" "}
                    <Link href="/faq" className="text-[var(--metallic-gold)] underline-offset-2 hover:underline">
                      full FAQ
                    </Link>
                    .
                  </p>
                  <div className="mt-8">
                    <FaqAccordion items={serviceFaqs} variant="minimal" initialOpenIndex={null} />
                  </div>
                </section>
              ) : null}

              <aside className="mt-20 border-t border-[var(--metallic-gold)]/18 pt-14">
                <h2 className="font-[family-name:var(--font-cormorant)] text-2xl font-bold text-[var(--text-primary)]">
                  Related services
                </h2>
                <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-5">
                  {related.map((r) => (
                    <li key={r.slug}>
                      <Link
                        href={`/services/${r.slug}`}
                        className="group flex h-full flex-col overflow-hidden rounded-sm border border-[var(--metallic-gold)]/16 bg-[var(--bg-secondary)]/50 transition-[border-color,transform] duration-300 hover:-translate-y-0.5 hover:border-[var(--metallic-gold)]/35"
                      >
                        <div className="relative aspect-[16/9] w-full shrink-0">
                          <Image
                            src={getServiceImagePath(r.slug)}
                            alt={r.title}
                            fill
                            sizes="(max-width: 640px) 100vw, 50vw"
                            className="object-cover opacity-90 transition-opacity duration-300 group-hover:opacity-100"
                          />
                          <div
                            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)]/90 to-transparent"
                            aria-hidden
                          />
                        </div>
                        <div className="flex flex-1 flex-col px-4 pb-5 pt-4">
                          <span className="font-[family-name:var(--font-cormorant)] text-lg font-semibold leading-snug text-[var(--text-primary)] group-hover:text-[var(--accent-gold-light)]">
                            {r.title}
                          </span>
                          <span className="mt-3 font-[family-name:var(--font-montserrat)] text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--metallic-gold)]">
                            View service →
                          </span>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
                <p className="mt-10">
                  <Link
                    href="/methodology"
                    className="font-[family-name:var(--font-montserrat)] text-sm font-semibold text-[var(--text-secondary)] transition-colors hover:text-[var(--metallic-gold)]"
                  >
                    How we work — our methodology →
                  </Link>
                </p>
              </aside>
            </article>
          </div>
        </div>
      </div>
      <CtaSection />
    </SiteShell>
  );
}
