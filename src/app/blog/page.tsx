import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/components/global/SiteShell";
import { Button } from "@/components/global/Button";
import { JsonLd } from "@/components/seo/JsonLd";
import { PageHero } from "@/components/sections/PageHero";
import { getArticleExcerpt } from "@/lib/article-content";
import { BOOK_DISCOVERY_PATH, SITE_URL } from "@/lib/site";
import { formatArticleDate, getArticlesNewestFirst } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Insights — CompassPoint Advisory",
  description:
    "Strategic insights for Australian SME leaders. Articles on growth strategy, AI transformation, leadership, operations, and culture — by CompassPoint Advisory.",
  alternates: { canonical: "/blog" },
  openGraph: {
    type: "website",
    title: "Insights — CompassPoint Advisory",
    description:
      "Strategic insights for Australian SME leaders. Articles on growth strategy, AI transformation, leadership, operations, and culture — by CompassPoint Advisory.",
    url: "/blog",
  },
};

export default async function BlogPage() {
  const ordered = getArticlesNewestFirst();
  const cards = await Promise.all(
    ordered.map(async (article) => ({
      ...article,
      excerpt: await getArticleExcerpt(article.slug, 160),
    })),
  );

  const collectionPageJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Insights — CompassPoint Advisory",
    description: "Strategic insights for Australian SME leaders.",
    url: `${SITE_URL}/blog`,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: ordered.map((article, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `${SITE_URL}/blog/${article.slug}`,
      })),
    },
  };

  return (
    <SiteShell>
      <JsonLd data={collectionPageJsonLd} />
      <PageHero title="Insights" subtitle="Strategic thinking for growing Australian businesses" />

      <section className="mx-auto w-full max-w-[min(100%,1920px)] px-8 pb-24 pt-16 md:px-14 md:pb-28 md:pt-20 lg:px-20">
        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          {cards.map((article) => (
            <article
              key={article.slug}
              className="rounded-sm border border-[var(--metallic-gold)]/18 bg-[var(--soft-ivory)] p-7 md:p-8"
            >
              <p className="font-[family-name:var(--font-montserrat)] text-xs uppercase tracking-[0.14em] text-[var(--text-secondary)]">
                {formatArticleDate(article.date)}
              </p>
              <h2 className="mt-4 font-[family-name:var(--font-cormorant)] text-2xl font-bold text-[var(--royal-plum)] md:text-3xl">
                <Link href={`/blog/${article.slug}`} className="hover:text-[var(--metallic-gold)]">
                  {article.title}
                </Link>
              </h2>
              <p className="mt-4 font-[family-name:var(--font-lato)] text-[var(--charcoal)]">{article.excerpt}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {article.topics.map((topic) => (
                  <span
                    key={topic}
                    className="rounded-full border border-[var(--metallic-gold)]/35 bg-[var(--royal-plum)]/5 px-3 py-1 font-[family-name:var(--font-montserrat)] text-[11px] font-semibold uppercase tracking-[0.08em] text-[var(--royal-plum)]"
                  >
                    {topic}
                  </span>
                ))}
              </div>
              <p className="mt-6">
                <Link
                  href={`/blog/${article.slug}`}
                  className="font-[family-name:var(--font-montserrat)] text-sm font-semibold text-[var(--metallic-gold)] underline-offset-4 hover:text-[var(--royal-plum)] hover:underline"
                >
                  Read article →
                </Link>
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-brand-plum border-y border-[var(--metallic-gold)]/15 py-16 md:py-20">
        <div className="mx-auto w-full max-w-[min(100%,1920px)] px-8 text-center md:px-14 lg:px-20">
          <h2 className="font-[family-name:var(--font-cormorant)] text-3xl font-bold text-[var(--metallic-gold)] md:text-4xl">
            Ready to put these ideas into action?
          </h2>
          <div className="mt-8 flex justify-center">
            <Button href={BOOK_DISCOVERY_PATH}>Book a Discovery Call</Button>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
