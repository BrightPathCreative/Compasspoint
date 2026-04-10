import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteShell } from "@/components/global/SiteShell";
import { Button } from "@/components/global/Button";
import { JsonLd } from "@/components/seo/JsonLd";
import { CtaSection } from "@/components/sections/CtaSection";
import { PageHero } from "@/components/sections/PageHero";
import { serviceJsonLd } from "@/lib/seo-schemas";
import { CALENDLY_URL } from "@/lib/site";
import { getRelatedServices, getServiceBySlug, SERVICES } from "@/lib/services";

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

  return (
    <SiteShell>
      <JsonLd data={serviceJsonLd({ name: service.title, description: service.description })} />
      <PageHero title={service.title} subtitle={`Service ${String(service.order).padStart(2, "0")}`} />

      <article className="mx-auto w-full max-w-[min(100%,1920px)] px-8 pb-24 pt-16 md:px-14 md:pb-28 md:pt-20 lg:px-20">
        <p className="mx-auto max-w-3xl text-center font-[family-name:var(--font-cormorant)] text-xl italic leading-snug text-[var(--metallic-gold)] md:text-2xl">
          {service.question}
        </p>

        <div className="mx-auto mt-12 max-w-3xl font-[family-name:var(--font-lato)] text-lg leading-[1.7] text-[var(--text-secondary)]">
          <p>{service.description}</p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl">
          <h2 className="font-[family-name:var(--font-cormorant)] text-2xl font-bold text-[var(--text-primary)]">
            Best for
          </h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {service.bestFor.map((tag) => (
              <li
                key={tag}
                className="rounded-full bg-[rgba(212,175,55,0.1)] px-[14px] py-1 font-[family-name:var(--font-montserrat)] text-xs text-[var(--royal-plum)]"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <section className="mx-auto mt-16 max-w-3xl rounded-sm border border-[var(--metallic-gold)]/20 bg-[var(--bg-secondary)]/60 p-8 md:p-10">
          <h2 className="font-[family-name:var(--font-cormorant)] text-2xl font-bold text-[var(--text-primary)]">
            What to expect
          </h2>
          <ul className="mt-6 list-disc space-y-3 pl-5 font-[family-name:var(--font-lato)] text-[var(--text-secondary)]">
            <li>
              We start with a structured <strong className="text-[var(--text-primary)]">discovery and audit</strong>{" "}
              to align on goals, constraints, and context.
            </li>
            <li>
              You receive a clear <strong className="text-[var(--text-primary)]">strategic roadmap</strong> with
              priorities, owners, and measurable outcomes.
            </li>
            <li>
              During execution, we stay close — advising, coaching, and course-correcting as the plan meets reality.
            </li>
            <li>
              Read our full <Link href="/methodology" className="text-[var(--metallic-gold)] underline-offset-2 hover:underline">methodology</Link>{" "}
              for how engagements typically unfold.
            </li>
          </ul>
        </section>

        <div className="mt-14">
          <Button href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
            Book a Discovery Call
          </Button>
        </div>

        <aside className="mx-auto mt-20 max-w-3xl border-t border-[var(--metallic-gold)]/20 pt-14">
          <h2 className="font-[family-name:var(--font-cormorant)] text-2xl font-bold text-[var(--text-primary)]">
            Related services
          </h2>
          <ul className="mt-6 space-y-4">
            {related.map((r) => (
              <li key={r.slug}>
                <Link
                  href={`/services/${r.slug}`}
                  className="flex items-baseline gap-4 rounded-sm border border-[var(--metallic-gold)]/15 bg-[var(--bg-secondary)]/40 px-4 py-4 transition-colors hover:border-[var(--metallic-gold)]/35"
                >
                  <span className="font-[family-name:var(--font-cinzel)] text-lg font-bold text-[var(--metallic-gold)]/35">
                    {String(r.order).padStart(2, "0")}
                  </span>
                  <span className="font-[family-name:var(--font-cormorant)] text-lg font-semibold text-[var(--text-primary)]">
                    {r.title}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-8">
            <Link
              href="/methodology"
              className="font-[family-name:var(--font-montserrat)] text-sm font-semibold text-[var(--text-secondary)] hover:text-[var(--metallic-gold)]"
            >
              How we work — our methodology →
            </Link>
          </p>
        </aside>
      </article>
      <CtaSection />
    </SiteShell>
  );
}
