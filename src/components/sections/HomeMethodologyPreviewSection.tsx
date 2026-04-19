"use client";

import Link from "next/link";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import GoldDivider from "@/components/GoldDivider";
import ScrollReveal from "@/components/ScrollReveal";
import { firstSentence, METHODOLOGY_STEPS } from "@/lib/methodology";
import "@/lib/gsap-config";

const shortLabels = ["Discovery & Audit", "Strategic Roadmap", "Execution & Alignment", "Ongoing Optimisation"];

export function HomeMethodologyPreviewSection() {
  const sectionRef = useRef<HTMLElement>(null);
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
            start: "top 65%",
            end: "bottom 45%",
            scrub: true,
            invalidateOnRefresh: true,
          },
        },
      );
    },
    { scope: sectionRef },
  );

  return (
    <section
      ref={sectionRef}
      id="methodology-preview"
      className="bg-[var(--bg-primary)] py-24 md:py-32"
    >
      <div className="mx-auto w-full max-w-[min(100%,1920px)] px-8 md:px-14 lg:px-20 xl:px-28">
        <ScrollReveal className="text-center">
          <h2 className="font-[family-name:var(--font-cormorant)] text-3xl font-bold text-[var(--text-primary)] md:text-4xl">
            How We Work
          </h2>
          <div className="mt-8">
            <GoldDivider />
          </div>
          <p className="mx-auto mt-8 max-w-2xl font-[family-name:var(--font-lato)] text-[var(--text-secondary)] md:text-lg">
            A disciplined, collaborative process - from first conversation to sustained momentum.
          </p>
        </ScrollReveal>

        <div className="relative mx-auto mt-16 max-w-3xl">
          <div
            ref={lineRef}
            className="pointer-events-none absolute left-[19px] top-0 bottom-0 w-px origin-top bg-gradient-to-b from-[var(--metallic-gold)] to-[rgba(199,154,68,0.15)]"
            aria-hidden
          />
          <ul className="relative z-[1] space-y-12">
            {METHODOLOGY_STEPS.map((step, i) => (
              <li key={step.title} className="relative min-h-[4rem] pl-[60px]">
                <span className="step-number">{i + 1}</span>
                <h3 className="font-[family-name:var(--font-cormorant)] text-xl font-bold text-[var(--text-primary)]">
                  {shortLabels[i] ?? step.title}
                </h3>
                <p className="mt-3 font-[family-name:var(--font-lato)] text-base leading-relaxed text-[var(--text-secondary)]">
                  {firstSentence(step.body)}
                </p>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-14 text-center">
          <Link
            href="/methodology"
            className="font-[family-name:var(--font-montserrat)] text-sm font-semibold uppercase tracking-[0.1em] text-[var(--metallic-gold)] underline-offset-4 hover:underline"
          >
            See our full methodology →
          </Link>
        </p>
      </div>
    </section>
  );
}
