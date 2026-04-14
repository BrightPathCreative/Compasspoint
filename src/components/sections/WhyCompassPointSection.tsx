import ScrollReveal from "@/components/ScrollReveal";
import { WhyCompassOrbit, type OrbitItemSerialized } from "@/components/sections/WhyCompassOrbit";

const items: OrbitItemSerialized[] = [
  {
    iconKey: "target",
    title: "Enterprise Experience, SME Focus",
    body: "20+ years of senior corporate expertise, now exclusively focused on SMEs.",
  },
  {
    iconKey: "clock",
    title: "Results-First, Not Hours-First",
    body: "Every project scoped around your outcomes — not billing targets.",
  },
  {
    iconKey: "cpu",
    title: "AI-Ready Advisory",
    body: "We stay at the leading edge of AI and digital transformation so you don't have to.",
  },
  {
    iconKey: "trendingUp",
    title: "Built for the $5M–$20M Business",
    body: "Designed around the specific challenges of this growth stage.",
  },
  {
    iconKey: "mapPin",
    title: "Melbourne-Based, Nationally Active",
    body: "In-person, remote, or hybrid across Australia.",
  },
];

type WhyCompassPointSectionProps = {
  id?: string;
  className?: string;
};

/** “Why Australian SMEs Choose CompassPoint Advisory” — orbit layout (desktop) / stacked (mobile). */
export function WhyCompassPointSection({
  id = "differentiators",
  className = "bg-[#F6F1E7]",
}: WhyCompassPointSectionProps) {
  return (
    <section
      id={id}
      aria-label="Why choose CompassPoint Advisory"
      className={`border-t border-[#D4AF37]/15 py-20 md:py-28 ${className}`}
    >
      <div className="mx-auto w-full max-w-6xl overflow-visible px-8 md:px-14 lg:px-20 xl:px-28">
        <ScrollReveal className="text-center">
          <h2 className="font-[family-name:var(--font-cormorant)] text-3xl font-semibold text-[#5B184C] md:text-4xl">
            Why Australian SMEs Choose CompassPoint Advisory
          </h2>
          <p className="mx-auto mt-8 max-w-3xl font-[family-name:var(--font-lato)] text-base leading-[1.7] text-[#2E2E2E] md:text-lg">
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
