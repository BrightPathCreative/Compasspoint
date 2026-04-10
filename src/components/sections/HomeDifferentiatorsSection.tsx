import { Brain, Clock, Cpu, MapPin, Target } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import StaggerReveal from "@/components/StaggerReveal";

const items = [
  {
    icon: Target,
    title: "Enterprise Experience, SME Focus",
    body: "20+ years of senior corporate expertise, now exclusively focused on SMEs.",
  },
  {
    icon: Clock,
    title: "Results-First, Not Hours-First",
    body: "Every project scoped around your outcomes - not billing targets.",
  },
  {
    icon: Brain,
    title: "AI-Ready Advisory",
    body: "We stay at the leading edge of AI and digital transformation so you don't have to.",
  },
  {
    icon: Cpu,
    title: "Built for the $5M–$20M Business",
    body: "Designed around the specific challenges of this growth stage.",
  },
  {
    icon: MapPin,
    title: "Melbourne-Based, Nationally Active",
    body: "In-person, remote, or hybrid across Australia.",
  },
];

export function HomeDifferentiatorsSection() {
  return (
    <section id="why-compasspoint" className="border-t border-[var(--metallic-gold)]/15 bg-[var(--soft-ivory)] py-24 md:py-32">
      <div className="mx-auto w-full max-w-[min(100%,1920px)] px-8 md:px-14 lg:px-20 xl:px-28">
        <ScrollReveal className="text-center">
          <h2 className="font-[family-name:var(--font-cormorant)] text-3xl font-bold text-[var(--royal-plum)] md:text-4xl">
            Why Australian SMEs Choose CompassPoint Advisory
          </h2>
          <p className="mx-auto mt-8 max-w-3xl font-[family-name:var(--font-lato)] text-base leading-[1.7] text-[var(--charcoal)] md:text-lg">
            We&apos;re not a generalist consulting firm. We&apos;re not a freelance marketplace. And we&apos;re not a
            coaching program that hands you a workbook and wishes you luck. We are a dedicated strategic partner  - 
            one that rolls up its sleeves, learns your business deeply, and works alongside you to drive real,
            measurable outcomes.
          </p>
        </ScrollReveal>

        <StaggerReveal
          className="mx-auto mt-16 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3"
          childSelector=":scope > article"
        >
          {items.map(({ icon: Icon, title, body }) => (
            <article
              key={title}
              className="border-l-2 border-[var(--metallic-gold)] bg-[var(--white)] p-7 shadow-[0_4px_24px_rgba(91,24,76,0.06)]"
            >
              <div className="flex items-start gap-4">
                <span className="mt-1 text-lg text-[var(--metallic-gold)]" aria-hidden>
                  ✦
                </span>
                <div>
                  <div className="flex items-center gap-3">
                    <Icon className="h-5 w-5 shrink-0 text-[var(--metallic-gold)]" strokeWidth={1.5} aria-hidden />
                    <h3 className="font-[family-name:var(--font-cormorant)] text-xl font-bold text-[var(--royal-plum)]">
                      {title}
                    </h3>
                  </div>
                  <p className="mt-3 font-[family-name:var(--font-lato)] text-base leading-relaxed text-[var(--charcoal)]">
                    {body}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}
