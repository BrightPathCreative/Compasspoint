import Link from "next/link";
import { METHODOLOGY_STEPS } from "@/lib/methodology";

const shortLabels = ["Discovery & Audit", "Strategic Roadmap", "Execution & Alignment", "Ongoing Optimisation"];

export function HomeMethodologyPreviewSection() {
  return (
    <section id="methodology-preview" className="bg-[var(--bg-primary)] py-24 md:py-32">
      <div className="mx-auto w-full max-w-[min(100%,1920px)] px-8 md:px-14 lg:px-20 xl:px-28">
        <h2 className="text-center font-[family-name:var(--font-cormorant)] text-3xl font-bold text-[var(--text-primary)] md:text-4xl">
          How We Work
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-center font-[family-name:var(--font-lato)] text-[var(--text-secondary)] md:text-lg">
          A disciplined, collaborative process — from first conversation to sustained momentum.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {METHODOLOGY_STEPS.map((step, i) => (
            <div
              key={step.title}
              className="relative rounded-xl border border-[var(--brand-gold)]/20 bg-[var(--bg-secondary)]/80 p-6 pt-10"
            >
              <span className="absolute left-6 top-0 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-[var(--brand-gold)] font-[family-name:var(--font-cinzel)] text-sm font-bold text-[var(--brand-plum)]">
                {i + 1}
              </span>
              <h3 className="font-[family-name:var(--font-cormorant)] text-lg font-bold text-[var(--text-primary)]">
                {shortLabels[i] ?? step.title}
              </h3>
              <p className="mt-3 font-[family-name:var(--font-lato)] text-sm leading-relaxed text-[var(--text-secondary)]">
                {step.body.slice(0, 140)}…
              </p>
            </div>
          ))}
        </div>

        <p className="mt-14 text-center">
          <Link
            href="/methodology"
            className="font-[family-name:var(--font-montserrat)] text-sm font-semibold uppercase tracking-[0.1em] text-[var(--brand-gold)] underline-offset-4 hover:underline"
          >
            See our full methodology →
          </Link>
        </p>
      </div>
    </section>
  );
}
