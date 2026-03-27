"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import "@/lib/gsap-config";
import { SectionWrapper } from "../global/SectionWrapper";

const steps = [
  {
    title: "Discovery and Audit",
    body:
      "We begin every engagement with a structured discovery process. We examine your business model, your market position, your team, your financials, and your goals. This gives us a clear, unbiased picture of where you are and what is standing between you and where you want to be.",
  },
  {
    title: "Strategic Roadmap",
    body:
      "From the discovery findings, we build a clear, prioritised strategic roadmap. This is not a theoretical document; it is a practical guide that your team can execute against, with defined milestones, owners, and success metrics.",
  },
  {
    title: "Execution and Alignment",
    body:
      "Strategy without execution is just planning. We work alongside your team during the implementation phase, providing guidance, accountability, and course corrections as the plan meets reality. We help you build the internal capability to execute with confidence.",
  },
  {
    title: "Ongoing Optimisation",
    body:
      "The best strategies evolve. We maintain an ongoing advisory relationship with our clients, reviewing progress, adapting the roadmap as conditions change, and ensuring that the momentum built in the early phases is sustained over the long term.",
  },
];

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
    <div ref={containerRef} className="methodology-root w-full bg-[#0A0A0A]">
      <SectionWrapper id="methodology" className="bg-[#0A0A0A]">
        <div className="methodology-section grid gap-12 md:grid-cols-2 md:gap-16 lg:gap-24">
          <div className="methodology-left-column md:sticky md:top-40 md:h-fit md:self-start">
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-semibold text-[#F3F4F6] md:text-5xl">
              How We Work
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-[#9CA3AF] md:text-lg">
              A disciplined, collaborative process—from first conversation to sustained momentum.
            </p>
          </div>

          <div className="space-y-0">
            {steps.map((step, i) => (
              <div
                key={step.title}
                className="methodology-step border-t border-[#2A2A2A] py-12 first:border-t-0 first:pt-0 md:py-16"
              >
                <span
                  className="font-[family-name:var(--font-playfair)] text-5xl font-bold text-[#D4A574]/25 md:text-6xl"
                  aria-hidden
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-[family-name:var(--font-playfair)] text-xl font-semibold text-[#F3F4F6] md:text-2xl">
                  {step.title}
                </h3>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#9CA3AF] md:text-lg">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
