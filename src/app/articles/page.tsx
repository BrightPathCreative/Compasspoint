import type { Metadata } from "next";
import { SiteShell } from "@/components/global/SiteShell";
import { CtaSection } from "@/components/sections/CtaSection";
import { PageHero } from "@/components/sections/PageHero";

export const metadata: Metadata = {
  title: "Articles — Insights from CompassPoint Advisory",
  description:
    "Practical perspectives on strategy, operations, and growth for Australian SMEs. New articles are published here as they become available.",
  alternates: { canonical: "/articles" },
};

export default function ArticlesPage() {
  return (
    <SiteShell>
      <PageHero
        title="Articles"
        subtitle="Perspectives on strategy, operations, and sustainable growth for Australian businesses."
      />

      <article className="mx-auto w-full max-w-[min(100%,1920px)] px-8 pb-24 pt-16 md:px-14 md:pb-28 md:pt-20 lg:px-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-[family-name:var(--font-lato)] text-lg leading-[1.75] text-[var(--charcoal)] md:text-xl">
            We are preparing a library of articles to share practical guidance drawn from our consulting work. New
            pieces will appear here in due course, and we look forward to sharing our knowledge and experience with our
            readers.
          </p>
          <p className="mt-8 font-[family-name:var(--font-lato)] text-base leading-[1.7] text-[var(--text-secondary)] md:text-lg">
            In the meantime, if you would like to discuss how we can support your organisation, we welcome you to get in
            touch.
          </p>
        </div>
      </article>
      <CtaSection />
    </SiteShell>
  );
}
