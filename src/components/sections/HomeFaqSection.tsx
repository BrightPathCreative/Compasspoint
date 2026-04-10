import Link from "next/link";
import GoldDivider from "@/components/GoldDivider";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { getFaqItemsByIndices, HOME_FAQ_INDICES } from "@/lib/faq";

export function HomeFaqSection() {
  const items = getFaqItemsByIndices(HOME_FAQ_INDICES);

  return (
    <section
      id="faq-preview"
      className="border-t border-[var(--metallic-gold)]/15 bg-[var(--bg-primary)] py-24 md:py-32"
    >
      <div className="mx-auto w-full max-w-[min(100%,1920px)] px-8 md:px-14 lg:px-20 xl:px-28">
        <div className="text-center">
          <h2 className="font-[family-name:var(--font-cormorant)] text-3xl font-bold text-[var(--text-primary)] md:text-4xl">
            Frequently Asked Questions
          </h2>
          <div className="mt-8">
            <GoldDivider />
          </div>
          <p className="mx-auto mt-8 max-w-2xl font-[family-name:var(--font-lato)] text-[var(--text-secondary)] md:text-lg">
            Straight answers on how we work, who we serve, and how to get started.
          </p>
        </div>

        <div className="mx-auto mt-14 max-w-3xl">
          <FaqAccordion items={items} variant="minimal" initialOpenIndex={null} />
        </div>

        <p className="mt-12 text-center">
          <Link
            href="/faq"
            className="font-[family-name:var(--font-montserrat)] text-sm font-semibold tracking-wide text-[var(--metallic-gold)] underline-offset-4 transition-colors hover:text-[var(--accent-gold-hover)] hover:underline"
          >
            View all questions
          </Link>
        </p>
      </div>
    </section>
  );
}
