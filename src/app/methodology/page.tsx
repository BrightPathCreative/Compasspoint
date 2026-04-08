import type { Metadata } from "next";
import { SiteShell } from "@/components/global/SiteShell";
import { Button } from "@/components/global/Button";
import { METHODOLOGY_STEPS } from "@/lib/methodology";
import { CALENDLY_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "How We Work — CompassPoint Advisory's Consulting Process",
  description:
    "Discovery, strategy, execution, and optimisation. A disciplined, collaborative consulting process for Australian SMEs.",
  alternates: { canonical: "/methodology" },
};

export default function MethodologyPage() {
  return (
    <SiteShell>
      <article className="mx-auto w-full max-w-[min(100%,1920px)] px-8 pb-28 pt-32 md:px-14 md:pb-36 md:pt-40 lg:px-20">
        <h1 className="font-[family-name:var(--font-cormorant)] text-4xl font-bold text-[var(--text-primary)] md:text-5xl">
          How We Work
        </h1>
        <p className="mt-8 max-w-3xl font-[family-name:var(--font-lato)] text-lg leading-[1.7] text-[var(--text-secondary)]">
          A disciplined, collaborative process — from first conversation to sustained momentum. We take a
          data-driven approach to consulting, and our approach is highly customisable to meet the unique needs
          of each business.
        </p>

        <ol className="mt-16 space-y-12">
          {METHODOLOGY_STEPS.map((step, i) => (
            <li
              key={step.title}
              className="flex gap-6 border-l-2 border-[var(--brand-gold)]/40 pl-8 md:gap-10 md:pl-12"
            >
              <span className="sr-only">Step {i + 1}</span>
              <div>
                <span className="font-[family-name:var(--font-cinzel)] text-3xl font-bold text-[var(--brand-gold)]/80">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h2 className="mt-2 font-[family-name:var(--font-cormorant)] text-2xl font-bold text-[var(--text-primary)] md:text-3xl">
                  {step.title}
                </h2>
                <p className="mt-4 max-w-3xl font-[family-name:var(--font-lato)] leading-[1.7] text-[var(--text-secondary)]">
                  {step.body}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-16">
          <Button href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
            Book a Free Discovery Call
          </Button>
        </div>
      </article>
    </SiteShell>
  );
}
