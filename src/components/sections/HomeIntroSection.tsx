import Link from "next/link";
import GoldDivider from "@/components/GoldDivider";
import ScrollReveal from "@/components/ScrollReveal";

/** Intro / value proposition — ivory background per site spec */
export function HomeIntroSection() {
  return (
    <section
      id="intro"
      className="border-b border-[var(--metallic-gold)]/15 bg-[var(--ivory-warm)] py-24 md:py-32"
    >
      <div className="mx-auto w-full max-w-[min(100%,1920px)] px-8 md:px-14 lg:px-20 xl:px-28">
        <ScrollReveal className="mx-auto max-w-3xl text-center">
          <h2 className="font-[family-name:var(--font-cormorant)] text-[clamp(1.8rem,3vw,2.5rem)] font-bold text-[var(--royal-plum)]">
            Strategic Clarity. Sustainable Growth.
          </h2>
          <div className="mt-8">
            <GoldDivider />
          </div>
          <p className="mt-10 font-[family-name:var(--font-lato)] text-base leading-[1.7] text-[var(--charcoal)] md:text-lg">
            CompassPoint Advisory partners with Australian small and medium businesses and startups to unlock
            the strategy, structure, and systems that ambitious founders need — without the corporate price tag.
          </p>
          <Link
            href="/about"
            className="mt-10 inline-flex items-center gap-2 font-[family-name:var(--font-montserrat)] text-sm font-semibold uppercase tracking-wide text-[var(--metallic-gold)] underline-offset-4 transition-colors hover:text-[var(--royal-plum)] hover:underline"
          >
            Learn more about our approach <span aria-hidden>→</span>
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
