"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { METHODOLOGY_STEPS } from "@/lib/methodology";
import "@/lib/gsap-config";

export function MethodologyFullTimeline() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!lineRef.current || !sectionRef.current) return;
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          transformOrigin: "top center",
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            end: "bottom 35%",
            scrub: true,
            invalidateOnRefresh: true,
          },
        },
      );
    },
    { scope: sectionRef },
  );

  return (
    <div ref={sectionRef} className="relative mx-auto mt-16 max-w-4xl">
      <div
        ref={lineRef}
        className="pointer-events-none absolute left-[19px] top-0 bottom-0 w-px origin-top bg-gradient-to-b from-[var(--metallic-gold)] to-[rgba(199,154,68,0.15)]"
        aria-hidden
      />
      <ol className="relative z-[1] space-y-14">
        {METHODOLOGY_STEPS.map((step, i) => (
          <li
            key={step.title}
            className="relative rounded-sm border border-[var(--metallic-gold)]/15 bg-[var(--bg-secondary)]/90 py-10 pl-[60px] pr-8 md:py-12 md:pr-12"
          >
            <span className="step-number">{i + 1}</span>
            <h2 className="font-[family-name:var(--font-cormorant)] text-2xl font-bold text-[var(--text-primary)] md:text-3xl">
              {step.title}
            </h2>
            <p className="mt-5 font-[family-name:var(--font-lato)] leading-[1.75] text-[var(--text-secondary)]">
              {step.body}
            </p>
          </li>
        ))}
      </ol>
    </div>
  );
}
