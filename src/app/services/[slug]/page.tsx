import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteShell } from "@/components/global/SiteShell";
import { Button } from "@/components/global/Button";
import { JsonLd } from "@/components/seo/JsonLd";
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
      <article className="mx-auto w-full max-w-[min(100%,1920px)] px-8 pb-28 pt-32 md:px-14 md:pb-36 md:pt-40 lg:px-20">
        <p className="font-[family-name:var(--font-montserrat)] text-sm font-semibold text-[var(--brand-gold)]">
          Service {String(service.order).padStart(2, "0")}
        </p>
        <h1 className="mt-2 max-w-4xl font-[family-name:var(--font-cormorant)] text-4xl font-bold text-[var(--text-primary)] md:text-5xl">
          {service.title}
        </h1>
        <p className="mt-6 max-w-3xl font-[family-name:var(--font-cormorant)] text-xl italic text-[var(--text-secondary)] md:text-2xl">
          {service.question}
        </p>
        <div className="mt-10 max-w-3xl font-[family-name:var(--font-lato)] text-lg leading-[1.7] text-[var(--text-secondary)]">
          <p>{service.description}</p>
        </div>
        <div className="mt-10">
          <h2 className="font-[family-name:var(--font-cormorant)] text-2xl font-bold text-[var(--text-primary)]">
            Best for
          </h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {service.bestFor.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-[var(--brand-gold)]/35 px-4 py-2 font-[family-name:var(--font-lato)] text-sm text-[var(--text-primary)]"
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-12">
          <Button href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
            Book a Discovery Call
          </Button>
        </div>

        <aside className="mt-20 border-t border-[var(--brand-gold)]/20 pt-12">
          <h2 className="font-[family-name:var(--font-cormorant)] text-2xl font-bold text-[var(--text-primary)]">
            Related services
          </h2>
          <ul className="mt-6 space-y-3">
            {related.map((r) => (
              <li key={r.slug}>
                <Link
                  href={`/services/${r.slug}`}
                  className="font-[family-name:var(--font-lato)] text-[var(--brand-gold)] hover:underline"
                >
                  {r.title}
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-8">
            <Link href="/methodology" className="font-[family-name:var(--font-montserrat)] text-sm font-semibold text-[var(--text-secondary)] hover:text-[var(--brand-gold)]">
              How we work — our methodology →
            </Link>
          </p>
        </aside>
      </article>
    </SiteShell>
  );
}
