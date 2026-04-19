const PILLARS = [
  {
    title: "Senior expertise on every engagement",
    body: "You work directly with our founder — no junior handoffs, no recycled frameworks.",
  },
  {
    title: "Tailored to your business",
    body: "Every recommendation is built around your specific context, industry, and stage of growth.",
  },
  {
    title: "Practical, implementable outcomes",
    body: "We focus on what you can actually do — not theoretical frameworks that sit in a drawer.",
  },
  {
    title: "Flexible engagement models",
    body: "From hourly on-demand advisory to full project engagements — no lock-in required.",
  },
] as const;

const cardClass =
  "rounded-2xl border border-[rgba(56,7,41,0.08)] bg-[color-mix(in_srgb,var(--cream)_88%,#ffffff)] p-6 shadow-[0_2px_28px_-14px_rgba(56,7,41,0.08)] transition-[box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_36px_-18px_rgba(56,7,41,0.12)]";

/** Value pillars — soft cards instead of rigid full-width columns. */
export function ServicesIntroStrip() {
  return (
    <div className="border-b border-[rgba(56,7,41,0.08)] bg-[var(--cream)] px-4 py-12 sm:px-6 md:px-8 md:py-14 lg:px-12">
      <div className="mx-auto grid max-w-[1120px] grid-cols-1 gap-4 sm:grid-cols-2 min-[1080px]:grid-cols-4 min-[1080px]:gap-5">
        {PILLARS.map((pillar) => (
          <div key={pillar.title} className={cardClass}>
            <span className="mb-3 block font-[family-name:var(--font-cormorant)] text-lg text-[var(--gold)]" aria-hidden>
              ◈
            </span>
            <h4 className="font-[family-name:var(--font-cormorant)] text-[1.05rem] font-medium leading-snug text-[var(--plum)]">
              {pillar.title}
            </h4>
            <p className="mt-2 font-[family-name:var(--font-montserrat)] text-sm leading-[1.75] text-[var(--charcoal)] md:text-base">
              {pillar.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
