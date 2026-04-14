import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/global/Button";
import { WhyCompassOrbit, type OrbitItemSerialized } from "@/components/sections/WhyCompassOrbit";
import { BOOK_DISCOVERY_PATH } from "@/lib/site";

/** Row 1 → 01–02, row 2 → 03–05 (matches concept board). */
const items: OrbitItemSerialized[] = [
  {
    title: "Enterprise experience, SME focus",
    body: "20+ years of senior corporate expertise, now exclusively focused on SMEs.",
  },
  {
    title: "Melbourne-based, nationally active",
    body: "In-person, remote, or hybrid across Australia.",
  },
  {
    title: "Results-first, not hours-first",
    body: "Every project scoped around your outcomes — not billing targets.",
  },
  {
    title: "Built for the $5M–$20M business",
    body: "Designed around the specific challenges of this growth stage.",
  },
  {
    title: "AI-ready advisory",
    body: "We stay at the leading edge of AI and digital transformation so you don't have to.",
  },
];

type WhyCompassPointSectionProps = {
  id?: string;
  className?: string;
};

/** Editorial differentiators — split header + 2×3 card grid + plum CTA. */
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
        <ScrollReveal>
          <div className="mb-14 text-left lg:mb-20">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-x-16 lg:gap-y-8 lg:items-start">
              <div>
                <p className="mb-4 font-[family-name:var(--font-montserrat)] text-[11px] font-semibold uppercase tracking-[0.22em] text-[#D4AF37]">
                  Our difference
                </p>
                <h2 className="font-[family-name:var(--font-cormorant)] text-3xl font-semibold leading-[1.15] text-[#5B184C] md:text-4xl lg:text-[2.4rem]">
                  Why Australian SMEs Choose CompassPoint Advisory
                </h2>
              </div>
              <p className="font-[family-name:var(--font-lato)] text-base leading-[1.75] text-[#3d3d3d] md:text-[17px] lg:pt-1">
                We&apos;re not a generalist consulting firm. We&apos;re not a freelance marketplace. And we&apos;re
                not a coaching program that hands you a workbook and wishes you luck. We are a dedicated strategic
                partner — one that rolls up its sleeves, learns your business deeply, and works alongside you to drive
                real, measurable outcomes.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <WhyCompassOrbit items={items} />

        <div className="mt-12 flex justify-center sm:justify-start lg:mt-14">
          <Button href={BOOK_DISCOVERY_PATH} variant="plum">
            Book a Free Discovery Call
          </Button>
        </div>
      </div>
    </section>
  );
}

export { WhyCompassPointSection as HomeDifferentiatorsSection };
