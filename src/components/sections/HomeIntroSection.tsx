import Link from "next/link";

/** Intro / value proposition — ivory background per site spec */
export function HomeIntroSection() {
  return (
    <section
      id="intro"
      className="border-b border-[var(--brand-gold)]/15 bg-[var(--brand-ivory)] py-24 md:py-32"
    >
      <div className="mx-auto w-full max-w-[min(100%,1920px)] px-8 md:px-14 lg:px-20 xl:px-28">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-[family-name:var(--font-cormorant)] text-3xl font-bold text-[var(--brand-charcoal)] md:text-4xl">
            Strategic Clarity. Sustainable Growth.
          </h2>
          <p className="mt-8 font-[family-name:var(--font-lato)] text-base leading-[1.7] text-[var(--brand-charcoal)] md:text-lg">
            CompassPoint Advisory partners with Australian small and medium businesses and startups to unlock
            the strategy, structure, and systems that ambitious founders need — without the corporate price tag.
          </p>
          <Link
            href="/about"
            className="mt-10 inline-flex font-[family-name:var(--font-montserrat)] text-sm font-semibold uppercase tracking-wide text-[var(--brand-plum)] underline-offset-4 hover:underline"
          >
            Learn more about our approach
          </Link>
        </div>
      </div>
    </section>
  );
}
