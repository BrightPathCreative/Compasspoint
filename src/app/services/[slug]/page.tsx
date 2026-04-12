import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import GoldDivider from "@/components/GoldDivider";
import ScrollReveal from "@/components/ScrollReveal";
import { SiteShell } from "@/components/global/SiteShell";
import { Button } from "@/components/global/Button";
import { JsonLd } from "@/components/seo/JsonLd";
import { CtaSection } from "@/components/sections/CtaSection";
import { ServiceImageHero } from "@/components/sections/ServiceImageHero";
import { faqJsonLdFromItems, serviceBreadcrumbJsonLd, serviceJsonLd } from "@/lib/seo-schemas";
import { BOOK_DISCOVERY_PATH, SITE_URL } from "@/lib/site";
import { getServiceFaqItems } from "@/lib/faq";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import {
  getRelatedServices,
  getServiceBySlug,
  getServiceHeroImageAlt,
  getServiceImageAbsoluteUrl,
  getServiceImagePath,
  SERVICES,
} from "@/lib/services";

/** Cream / gold surfaces only; charcoal copy for contrast (no plum on dark). */
const bestForTagClass =
  "rounded-full border border-[var(--metallic-gold)]/45 bg-[color-mix(in_srgb,var(--metallic-gold)_32%,var(--ivory-warm))] px-[14px] py-2 font-[family-name:var(--font-montserrat)] text-xs font-medium leading-snug text-[var(--charcoal)] shadow-sm";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "Service" };
  const pagePath = `/services/${slug}` as const;
  const heroImage = getServiceImagePath(slug);
  const ogImageAlt = getServiceHeroImageAlt(service);
  return {
    title: service.metaTitle,
    description: service.metaDescription,
    keywords: [
      "CompassPoint Advisory",
      "Australian SMEs",
      "business consulting",
      "Melbourne",
      service.title,
    ],
    alternates: { canonical: pagePath },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: pagePath,
      type: "website",
      locale: "en_AU",
      images: [{ url: heroImage, alt: ogImageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: service.metaTitle,
      description: service.metaDescription,
      images: [heroImage],
    },
    robots: { index: true, follow: true },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const related = getRelatedServices(slug, 3);
  const serviceFaqs = getServiceFaqItems(slug);

  const servicePageUrl = `${SITE_URL}/services/${slug}`;

  const structuredData: Record<string, unknown>[] = [
    serviceJsonLd({
      name: service.title,
      description: service.description,
      url: servicePageUrl,
      image: getServiceImageAbsoluteUrl(slug),
    }),
    serviceBreadcrumbJsonLd({ serviceName: service.title, serviceUrl: servicePageUrl }),
  ];
  if (serviceFaqs.length > 0) {
    structuredData.push(faqJsonLdFromItems(serviceFaqs) as Record<string, unknown>);
  }

  return (
    <SiteShell>
      <JsonLd data={structuredData} />
      <article aria-labelledby="service-hero-heading">
        <ServiceImageHero
        title={service.title}
        question={service.question}
        shortSummary={service.shortSummary}
        imageSrc={getServiceImagePath(service.slug)}
        imageAlt={getServiceHeroImageAlt(service)}
        />

        {/* Narrative on warm ivory — hook lives on hero; body starts here */}
      <section className="border-b border-[var(--metallic-gold)]/15 bg-[var(--ivory-warm)] pb-20 pt-16 md:pb-28 md:pt-20">
        <div className="mx-auto w-full max-w-[min(100%,1920px)] px-8 md:px-14 lg:px-20 xl:px-28">
          <ScrollReveal className="mx-auto max-w-3xl text-center">
            <div className="flex justify-center">
              <GoldDivider />
            </div>
            <p className="mt-10 font-[family-name:var(--font-lato)] text-base leading-[1.75] text-[var(--charcoal)] md:text-lg">
              {service.description}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Scope + process on white with credential-style card (home about rhythm) */}
      <section className="border-b border-[var(--metallic-gold)]/15 bg-[var(--white)] py-20 md:py-28">
        <div className="mx-auto w-full max-w-[min(100%,1920px)] px-8 md:px-14 lg:px-20 xl:px-28">
          <div className="grid gap-14 lg:grid-cols-2 lg:items-start lg:gap-20">
            <ScrollReveal>
              <p className="font-[family-name:var(--font-montserrat)] text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--metallic-gold)]">
                Best for
              </p>
              <h2 className="mt-3 font-[family-name:var(--font-cormorant)] text-2xl font-bold text-[var(--royal-plum)] md:text-3xl">
                Who this fits
              </h2>
              <ul className="mt-8 flex flex-wrap gap-2">
                {service.bestFor.map((tag) => (
                  <li key={tag} className={bestForTagClass}>
                    {tag}
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            <ScrollReveal delay={0.08}>
              <div className="rounded-sm border border-[var(--metallic-gold)]/18 bg-[color-mix(in_srgb,var(--soft-ivory)_88%,var(--royal-plum))] p-8 md:p-10">
                <p className="font-[family-name:var(--font-montserrat)] text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--metallic-gold)]">
                  Engagement
                </p>
                <h2 className="mt-3 font-[family-name:var(--font-cormorant)] text-2xl font-bold text-[var(--royal-plum)]">
                  What to expect
                </h2>
                <ul className="mt-6 list-disc space-y-3.5 pl-5 font-[family-name:var(--font-lato)] leading-[1.75] text-[var(--charcoal)]">
                  <li>
                    We start with a structured{" "}
                    <strong className="font-semibold text-[var(--royal-plum)]">discovery and audit</strong> to align on
                    goals, constraints, and context.
                  </li>
                  <li>
                    You receive a clear{" "}
                    <strong className="font-semibold text-[var(--royal-plum)]">strategic roadmap</strong> with
                    priorities, owners, and measurable outcomes.
                  </li>
                  <li>
                    During execution, we stay close - advising, coaching, and course-correcting as the plan meets
                    reality.
                  </li>
                  <li>
                    Read our full{" "}
                    <Link
                      href="/methodology"
                      className="font-semibold text-[var(--metallic-gold)] underline-offset-2 hover:underline"
                    >
                      methodology
                    </Link>{" "}
                    for how engagements typically unfold.
                  </li>
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Mid-page CTA — centered on plum band */}
      <section className="section-brand-plum border-y border-[var(--metallic-gold)]/12 py-16 md:py-20">
        <div className="mx-auto w-full max-w-[min(100%,1920px)] px-8 text-center md:px-14 lg:px-20">
          <p className="font-[family-name:var(--font-cormorant)] text-xl text-[var(--soft-ivory)] md:text-2xl">
            Ready to talk this through for your business?
          </p>
          <p className="mx-auto mt-4 max-w-xl font-[family-name:var(--font-lato)] text-sm leading-relaxed text-[var(--soft-ivory)]/72 md:text-base">
            Book a confidential discovery call. No pressure - just clarity on whether we are the right partner.
          </p>
          <div className="mt-10 flex justify-center">
            <Button href={BOOK_DISCOVERY_PATH} className="cta-gold-halo">
              Book a Discovery Call
            </Button>
          </div>
        </div>
      </section>

      {serviceFaqs.length > 0 ? (
        <section className="border-b border-[var(--metallic-gold)]/15 bg-[var(--soft-ivory)] py-20 md:py-28">
          <div className="mx-auto w-full max-w-[min(100%,1920px)] px-8 md:px-14 lg:px-20 xl:px-28">
            <div className="text-center">
              <h2 className="font-[family-name:var(--font-cormorant)] text-3xl font-bold text-[var(--royal-plum)] md:text-4xl">
                Common questions
              </h2>
              <div className="mt-8 flex justify-center">
                <GoldDivider />
              </div>
              <p className="mx-auto mt-8 max-w-2xl font-[family-name:var(--font-lato)] text-[var(--charcoal)]/88 md:text-lg">
                Answers drawn from our{" "}
                <Link
                  href="/faq"
                  className="font-semibold text-[var(--metallic-gold)] underline-offset-2 hover:text-[var(--royal-plum)] hover:underline"
                >
                  full FAQ
                </Link>
                .
              </p>
            </div>
            <div className="mx-auto mt-12 max-w-3xl">
              <FaqAccordion items={serviceFaqs} variant="card" initialOpenIndex={null} />
            </div>
          </div>
        </section>
      ) : null}

      <section className="bg-[color-mix(in_srgb,var(--royal-plum)_32%,var(--brand-black))] py-20 md:py-28">
        <div className="mx-auto w-full max-w-[min(100%,1920px)] px-8 md:px-14 lg:px-20 xl:px-28">
          <h2 className="font-[family-name:var(--font-cormorant)] text-3xl font-bold text-[var(--text-primary)] md:text-4xl">
            Related services
          </h2>
          <p className="mt-4 max-w-2xl font-[family-name:var(--font-lato)] text-[var(--text-secondary)]">
            Explore adjacent ways we support leadership teams and founders.
          </p>
          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            {related.map((r) => (
              <li key={r.slug}>
                <Link
                  href={`/services/${r.slug}`}
                  className="group flex h-full min-h-[120px] flex-col justify-center rounded-sm border border-[var(--metallic-gold)]/18 bg-[color-mix(in_srgb,var(--brand-black)_55%,transparent)] px-5 py-6 transition-colors hover:border-[var(--metallic-gold)]/40 hover:bg-[color-mix(in_srgb,var(--royal-plum)_25%,var(--brand-black))]"
                >
                  <span className="font-[family-name:var(--font-cormorant)] text-lg font-semibold text-[var(--text-primary)] transition-colors group-hover:text-[var(--metallic-gold)] md:text-xl">
                    {r.title}
                  </span>
                  <span className="mt-3 font-[family-name:var(--font-montserrat)] text-xs font-semibold uppercase tracking-[0.12em] text-[var(--metallic-gold)]/85">
                    View detail →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-12 text-center md:text-left">
            <Link
              href="/methodology"
              className="inline-flex font-[family-name:var(--font-montserrat)] text-sm font-semibold text-[var(--metallic-gold)] underline-offset-4 transition-colors hover:text-[var(--accent-gold-hover)] hover:underline"
            >
              How we work - our methodology →
            </Link>
          </p>
        </div>
      </section>
      </article>
      <CtaSection />
    </SiteShell>
  );
}
