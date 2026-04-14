import ScrollReveal from "@/components/ScrollReveal";
import { WhyCompassOrbit, type OrbitItemSerialized } from "@/components/sections/WhyCompassOrbit";

/** Clockwise from top: Enterprise → Results → AI → Built for → Melbourne */
const items: OrbitItemSerialized[] = [
  {
    title: "Enterprise experience, SME focus",
    body: "20+ years of senior corporate expertise, now exclusively focused on SMEs.",
  },
  {
    title: "Results-first, not hours-first",
    body: "Every project scoped around your outcomes — not billing targets.",
  },
  {
    title: "AI-ready advisory",
    body: "We stay at the leading edge of AI and digital transformation so you don't have to.",
  },
  {
    title: "Built for the $5M–$20M business",
    body: "Designed around the specific challenges of this growth stage.",
  },
  {
    title: "Melbourne-based, nationally active",
    body: "In-person, remote, or hybrid across Australia.",
  },
];

type WhyCompassPointSectionProps = {
  id?: string;
  className?: string;
};

/** “Why Australian SMEs Choose CompassPoint Advisory” — pentagon layout (md+) / stack (mobile). */
export function WhyCompassPointSection({
  id = "differentiators",
  className = "",
}: WhyCompassPointSectionProps) {
  return (
    <section
      id={id}
      aria-label="Why choose CompassPoint Advisory"
      className={`differentiators-section border-t border-[#D4AF37]/15 ${className}`}
    >
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="font-[family-name:var(--font-cormorant)] text-3xl font-semibold text-[#5B184C] md:text-4xl">
            Why Australian SMEs Choose CompassPoint Advisory
          </h2>
          <p className="mx-auto mt-8 font-[family-name:var(--font-lato)] text-base leading-[1.7] text-[#2E2E2E] md:text-lg">
            We&apos;re not a generalist consulting firm. We&apos;re not a freelance marketplace. And we&apos;re not a
            coaching program that hands you a workbook and wishes you luck. We are a dedicated strategic partner —
            one that rolls up its sleeves, learns your business deeply, and works alongside you to drive real,
            measurable outcomes.
          </p>
        </ScrollReveal>

        <WhyCompassOrbit items={items} />
      </div>
    </section>
  );
}

export { WhyCompassPointSection as HomeDifferentiatorsSection };
