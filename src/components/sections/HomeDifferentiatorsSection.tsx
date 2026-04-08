import { Brain, Clock, Cpu, MapPin, Target } from "lucide-react";

const items = [
  {
    icon: Target,
    title: "Enterprise Experience, SME Focus",
    body: "20+ years of senior corporate expertise, now exclusively focused on SMEs.",
  },
  {
    icon: Clock,
    title: "Results-First, Not Hours-First",
    body: "Every project scoped around your outcomes — not billing targets.",
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
    <section id="why-compasspoint" className="border-t border-[var(--brand-gold)]/15 bg-[var(--brand-ivory)] py-24 md:py-32">
      <div className="mx-auto w-full max-w-[min(100%,1920px)] px-8 md:px-14 lg:px-20 xl:px-28">
        <h2 className="text-center font-[family-name:var(--font-cormorant)] text-3xl font-bold text-[var(--brand-charcoal)] md:text-4xl">
          Why Australian SMEs Choose CompassPoint Advisory
        </h2>
        <p className="mx-auto mt-8 max-w-3xl text-center font-[family-name:var(--font-lato)] text-base leading-[1.7] text-[var(--brand-charcoal)] md:text-lg">
          We&apos;re not a generalist consulting firm. We&apos;re not a freelance marketplace. And we&apos;re not a
          coaching program that hands you a workbook and wishes you luck. We are a dedicated strategic partner —
          one that rolls up its sleeves, learns your business deeply, and works alongside you to drive real,
          measurable outcomes.
        </p>

        <ul className="mx-auto mt-16 grid max-w-5xl gap-10 md:grid-cols-2">
          {items.map(({ icon: Icon, title, body }) => (
            <li key={title} className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-[var(--brand-plum)]/15 bg-white">
                <Icon className="h-6 w-6 text-[var(--brand-plum)]" strokeWidth={1.5} aria-hidden />
              </div>
              <div>
                <h3 className="font-[family-name:var(--font-cormorant)] text-xl font-bold text-[var(--brand-charcoal)]">
                  {title}
                </h3>
                <p className="mt-2 font-[family-name:var(--font-lato)] text-base leading-relaxed text-[var(--brand-charcoal)]/90">
                  {body}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
