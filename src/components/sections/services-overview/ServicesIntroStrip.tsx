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

/** Four-column value strip (responsive 4 → 2×2 → 1 col). */
export function ServicesIntroStrip() {
  return (
    <div className="border-b border-[rgba(92,26,74,0.1)] bg-[var(--cream)] px-7 py-[52px] max-[899px]:px-7 max-[899px]:py-10 md:px-14">
      <div className="mx-auto grid max-w-[1120px] grid-cols-1 gap-7 max-[559px]:grid-cols-1 min-[560px]:max-[899px]:grid-cols-2 min-[900px]:grid-cols-4 min-[900px]:gap-0">
        {PILLARS.map((pillar, i) => (
          <div
            key={pillar.title}
            className={`pr-0 max-[899px]:border-0 max-[899px]:mr-0 min-[900px]:border-r min-[900px]:border-[rgba(92,26,74,0.12)] min-[900px]:pr-10 min-[900px]:mr-10 ${
              i === PILLARS.length - 1 ? "min-[900px]:mr-0 min-[900px]:border-r-0 min-[900px]:pr-0" : ""
            }`}
          >
            <span className="mb-2.5 block text-[1.1rem] text-[var(--gold)]" aria-hidden>
              ◈
            </span>
            <h4 className="font-[family-name:var(--font-cormorant)] text-base font-medium leading-snug text-[var(--plum)]">
              {pillar.title}
            </h4>
            <p className="mt-1.5 font-[family-name:var(--font-montserrat)] text-[0.72rem] leading-[1.7] text-[var(--text-muted)]">
              {pillar.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
