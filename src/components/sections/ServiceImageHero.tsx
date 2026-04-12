import Image from "next/image";

type ServiceImageHeroProps = {
  title: string;
  /** Lead line under the H1 — shown as the emotional hook (gold, readable on image). */
  question: string;
  shortSummary: string;
  imageSrc: string;
  /** SEO + accessibility: describe the visual; should differ from the H1 string alone. */
  imageAlt: string;
  /** Stable id for `aria-labelledby` on wrapping `<article>`. */
  headingId?: string;
};

/**
 * Full-bleed service hero: photography with layered overlay so copy stays readable.
 * Uses ivory / gold typography only (no plum on the image stack).
 * `dvh` + safe-area padding improve mobile browsers and notched devices.
 */
export function ServiceImageHero({
  title,
  question,
  shortSummary,
  imageSrc,
  imageAlt,
  headingId = "service-hero-heading",
}: ServiceImageHeroProps) {
  return (
    <section className="relative flex min-h-[min(74dvh,900px)] flex-col justify-end overflow-hidden md:min-h-[min(70dvh,820px)] md:justify-center md:pb-12">
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        priority
        fetchPriority="high"
        sizes="100vw"
        className="object-cover object-center"
      />
      {/* Base darkening + bottom weight for title stack */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-[#070307]/95 via-[#120810]/72 to-[#1a0c18]/45 md:bg-gradient-to-b md:from-[#0a0609]/80 md:via-[#140c12]/55 md:to-[#0a0609]/88"
        aria-hidden
      />
      <div className="absolute inset-0 bg-[color-mix(in_srgb,var(--royal-plum)_38%,transparent)]" aria-hidden />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_50%_20%,rgba(255,255,255,0.06)_0%,transparent_55%)]"
        aria-hidden
      />

      <div className="relative z-[1] mx-auto w-full max-w-[min(100%,1920px)] px-8 pb-[max(5rem,env(safe-area-inset-bottom,0px))] pt-36 text-center md:px-14 md:pb-24 md:pt-40 lg:px-20 lg:pt-44">
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
