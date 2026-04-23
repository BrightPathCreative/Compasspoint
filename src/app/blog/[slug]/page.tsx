import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteShell } from "@/components/global/SiteShell";
import { Button } from "@/components/global/Button";
import { JsonLd } from "@/components/seo/JsonLd";
import { CtaSection } from "@/components/sections/CtaSection";
import { getArticleHtml } from "@/lib/article-content";
import { formatArticleDate, getArticleBySlug, getArticlesNewestFirst } from "@/lib/articles";
import { BOOK_DISCOVERY_PATH, SITE_URL } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getArticlesNewestFirst().map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return { title: "Insight" };

  const pagePath = `/blog/${article.slug}`;
  return {
    title: article.pageTitle,
    description: article.metaDescription,
    alternates: { canonical: pagePath },
    openGraph: {
      type: "article",
      title: article.pageTitle,
      description: article.metaDescription,
      url: pagePath,
      images: [{ url: `${SITE_URL}/images/og-image.jpg`, alt: article.title }],
      publishedTime: `${article.date}T00:00:00+10:00`,
      authors: ["Amelia Ghofrany"],
    },
    twitter: {
      card: "summary_large_image",
      title: article.pageTitle,
      description: article.metaDescription,
      images: [`${SITE_URL}/images/og-image.jpg`],
    },
  };
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const html = await getArticleHtml(slug);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.metaDescription,
    author: {
      "@type": "Person",
      name: "Amelia Ghofrany",
      jobTitle: "Founder & Principal Consultant",
      worksFor: {
        "@type": "Organization",
        name: "CompassPoint Advisory",
      },
    },
    publisher: {
      "@type": "Organization",
      name: "CompassPoint Advisory",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/brand-icon.svg`,
      },
    },
    datePublished: article.date,
    dateModified: article.date,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${article.slug}`,
    },
    keywords: article.topics.join(", "),
  };

  return (
    <SiteShell>
      <JsonLd data={articleJsonLd} />
      <section className="relative flex min-h-[40vh] items-center justify-center bg-[#5B184C] px-8 pb-16 pt-36 text-center md:px-14 md:pb-20 md:pt-40 lg:px-20">
        <div className="mx-auto w-full max-w-4xl">
          <div className="flex flex-wrap justify-center gap-2">
            {article.topics.map((topic) => (
              <span
                key={topic}
                className="rounded-full border border-[var(--metallic-gold)]/45 bg-[rgba(246,241,231,0.08)] px-3 py-1 font-[family-name:var(--font-montserrat)] text-[11px] font-semibold uppercase tracking-[0.08em] text-[var(--metallic-gold)]"
              >
                {topic}
              </span>
            ))}
          </div>
          <h1 className="mt-6 font-[family-name:var(--font-cinzel)] text-3xl font-bold text-[var(--soft-ivory)] md:text-4xl lg:text-[2.75rem]">
            {article.title}
          </h1>
          <p className="mt-5 font-[family-name:var(--font-montserrat)] text-xs uppercase tracking-[0.18em] text-[var(--soft-ivory)]/60">
            {formatArticleDate(article.date)}
          </p>
          <p className="mt-3 font-[family-name:var(--font-lato)] text-base text-[var(--soft-ivory)]/70">
            By Amelia Ghofrany
          </p>
        </div>
      </section>

      <article className="bg-[var(--soft-ivory)]">
        <div className="mx-auto w-full max-w-[720px] px-8 py-16 md:py-20">
          <div className="article-body" dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </article>

      <section className="bg-[var(--soft-ivory)] pb-20">
        <div className="mx-auto w-full max-w-[min(100%,1920px)] px-8 md:px-14 lg:px-20">
          <div className="mx-auto max-w-[720px] border-t border-[var(--metallic-gold)]/20 pt-10">
            <div className="flex flex-wrap gap-2">
              {article.topics.map((topic) => (
                <span
                  key={topic}
                  className="rounded-full border border-[var(--metallic-gold)]/35 bg-[var(--royal-plum)]/5 px-3 py-1 font-[family-name:var(--font-montserrat)] text-[11px] font-semibold uppercase tracking-[0.08em] text-[var(--royal-plum)]"
                >
                  {topic}
                </span>
              ))}
            </div>

            <div className="mt-12">
              <h2 className="font-[family-name:var(--font-cormorant)] text-3xl font-bold text-[var(--royal-plum)]">
                Explore related services
              </h2>
              <div className="mt-4 h-px bg-[var(--metallic-gold)]/30" aria-hidden />
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {article.relatedServices.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="rounded-sm border border-[var(--metallic-gold)]/25 bg-white/55 px-5 py-4 font-[family-name:var(--font-cormorant)] text-xl font-bold text-[var(--royal-plum)] transition-colors hover:bg-[var(--royal-plum)]/5 hover:text-[var(--metallic-gold)]"
                  >
                    {service.title}
                  </Link>
                ))}
              </div>
            </div>

            <div className="mt-12 border-y border-[var(--metallic-gold)]/30 py-8">
              <p className="font-[family-name:var(--font-montserrat)] text-xs font-semibold uppercase tracking-[0.16em] text-[var(--metallic-gold)]">
                About the author
              </p>
              <h3 className="mt-3 font-[family-name:var(--font-cormorant)] text-2xl font-bold text-[var(--royal-plum)]">
                Amelia Ghofrany — Founder &amp; Principal Consultant, CompassPoint Advisory
              </h3>
              <p className="mt-4 font-[family-name:var(--font-lato)] text-[17px] leading-[1.8] text-[var(--charcoal)]">
                20+ years of senior experience across IBM, Fujitsu, DXC Technology, and Bupa.
              </p>
              <p className="mt-6">
                <Button href={BOOK_DISCOVERY_PATH}>Book a Discovery Call →</Button>
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaSection
        heading="Ready to put strategy into action?"
        body="If these ideas reflect where your business is today, we can help you turn them into practical momentum."
        buttonLabel="Book a Discovery Call"
      />
    </SiteShell>
  );
}
