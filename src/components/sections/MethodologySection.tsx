"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import "@/lib/gsap-config";
import { METHODOLOGY_STEPS } from "@/lib/methodology";
import { SectionWrapper } from "../global/SectionWrapper";

export function MethodologySection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.utils.toArray<HTMLElement>(".methodology-step").forEach((step) => {
        gsap.from(step, {
          opacity: 0,
          x: 28,
          y: 20,
          duration: 0.75,
          ease: "power2.out",
          scrollTrigger: {
            trigger: step,
            start: "top 78%",
          },
        });
      });
    },
    { scope: containerRef },
  );

  return (
    <div ref={containerRef} className="methodology-root w-full bg-[var(--bg-primary)]">
      <SectionWrapper className="bg-[var(--bg-primary)]">
        <div className="methodology-section grid gap-12 md:grid-cols-2 md:gap-16 lg:gap-24">
          <div className="methodology-left-column md:sticky md:top-40 md:h-fit md:self-start">
            <h2 className="font-[family-name:var(--font-cormorant)] text-3xl font-bold text-[var(--text-primary)] md:text-5xl">
              How We Work
            </h2>
            <p className="mt-6 max-w-xl font-[family-name:var(--font-lato)] text-base leading-relaxed text-[var(--text-secondary)] md:text-lg">
              A disciplined, collaborative process—from first conversation to sustained momentum.
            </p>
          </div>

          <div className="space-y-0">
            {METHODOLOGY_STEPS.map((step, i) => (
              <div
                key={step.title}
                className="methodology-step border-t border-[var(--brand-charcoal)] py-12 first:border-t-0 first:pt-0 md:py-16"
              >
                <span
                  className="font-[family-name:var(--font-cinzel)] text-5xl font-bold text-[var(--brand-gold)]/22 md:text-6xl"
                  aria-hidden
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-[family-name:var(--font-cormorant)] text-xl font-bold text-[var(--text-primary)] md:text-2xl">
                  {step.title}
                </h3>
                <p className="mt-4 max-w-2xl font-[family-name:var(--font-lato)] text-base leading-relaxed text-[var(--text-secondary)] md:text-lg">
                  {step.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
