type ServiceImageHeroProps = {
  title: string;
  /** Lead line under the H1 — emotional hook (gold, on plum). */
  question: string;
  shortSummary: string;
  /** Stable id for `aria-labelledby` on wrapping `<article>`. */
  headingId?: string;
};

/**
 * Plum banner service hero (no photography). Photography sits with the body copy on the page below.
 * Matches inner-page plum rhythm (`PageHero`) with safe-area padding for notched devices.
 */
export function ServiceImageHero({
  title,
  question,
  shortSummary,
  headingId = "service-hero-heading",
}: ServiceImageHeroProps) {
  return (
    <section className="relative flex min-h-[min(48dvh,640px)] flex-col items-center justify-center overflow-hidden bg-[var(--royal-plum)] px-8 pb-16 pt-36 text-center md:min-h-[42vh] md:px-14 md:pb-20 md:pt-40 lg:px-20">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        aria-hidden
        style={{
          backgroundImage: `url("/brand-icon.svg")`,
          backgroundPosition: "50% 55%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "min(420px, 70vw)",
          transform: "rotate(10deg)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(62,15,52,0.55)_100%)]"
        aria-hidden
      />

      <div className="relative z-[1] mx-auto w-full max-w-4xl pb-[max(0.5rem,env(safe-area-inset-bottom,0px))]">
        <h1
          id={headingId}
          className="text-balance font-[family-name:var(--font-cinzel)] text-[clamp(1.65rem,4vw,2.75rem)] font-bold uppercase leading-[1.15] tracking-[0.05em] text-[var(--soft-ivory)]"
        >
          {title}
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-pretty font-[family-name:var(--font-cormorant)] text-[clamp(1.15rem,2.5vw,1.5rem)] italic leading-snug text-[var(--metallic-gold)] md:mt-7">
          {question}
        </p>
        <p className="mx-auto mt-6 max-w-2xl text-pretty font-[family-name:var(--font-lato)] text-base leading-relaxed text-[var(--soft-ivory)]/82 md:text-lg">
          {shortSummary}
        </p>
      </div>
    </section>
  );
}
