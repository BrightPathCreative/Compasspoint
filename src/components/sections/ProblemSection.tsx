"use client";

import Image from "next/image";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import "@/lib/gsap-config";
import { SectionWrapper } from "../global/SectionWrapper";

const placecard =
  "rounded-2xl border border-[var(--border-gold-soft)] bg-[color-mix(in_srgb,var(--brand-plum-deep)_88%,transparent)] ring-1 ring-[var(--brand-gold)]/10";

export function ProblemSection() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".problem-copy", {
        y: 48,
        opacity: 0,
        duration: 0.95,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".problem-section",
          start: "top 92%",
          toggleActions: "play none none none",
          once: true,
          invalidateOnRefresh: true,
        },
      });

      gsap.from(".problem-placecard", {
        y: 40,
        opacity: 0,
        scale: 0.96,
        duration: 1.05,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".problem-placecard",
          start: "top 92%",
          toggleActions: "play none none none",
          once: true,
          invalidateOnRefresh: true,
        },
      });

      gsap.to(".problem-neon-bloom", {
        opacity: 0.75,
        scale: 1.08,
        duration: 2.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".problem-placecard-inner", {
        yPercent: -4,
        ease: "none",
        scrollTrigger: {
          trigger: ".problem-section",
          start: "top bottom",
          end: "bottom top",
          scrub: 1.2,
          invalidateOnRefresh: true,
        },
      });
    },
    { scope: containerRef },
  );

  return (
    <SectionWrapper ref={containerRef} className="problem-section section-brand-plum">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-24">
        <div className="problem-copy max-w-2xl">
          <h2 className="font-[family-name:var(--font-cormorant)] text-3xl font-semibold text-[var(--text-on-dark)] md:text-5xl">
            Scaling a business shouldn&apos;t mean sacrificing control.
          </h2>
          <div className="mt-8 space-y-6 text-base leading-relaxed text-[var(--text-on-dark-muted)] md:text-lg">
            <p>
              Many founders reach a point where passion and momentum outpace structure and strategy. The
              decisions become more complex, the stakes grow higher, and the gap between where you are and
              where you need to be starts to feel wider.
            </p>
            <p>
              That is precisely where CompassPoint Advisory comes in. We bridge the space between
              entrepreneurial vision and institutional execution, bringing the rigour of enterprise strategy to
              the businesses that need it most.
            </p>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[min(100%,340px)] lg:mx-0 lg:max-w-none lg:justify-self-end">
          <div
            className="problem-neon-bloom pointer-events-none absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-[var(--brand-gold)]/30 via-[var(--brand-gold-bright)]/12 to-transparent opacity-50 blur-2xl md:-inset-8"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -inset-px rounded-2xl opacity-80 blur-sm"
            style={{
              boxShadow:
                "0 0 24px rgba(199, 154, 68, 0.32), 0 0 48px rgba(199, 154, 68, 0.12), inset 0 0 18px rgba(199, 154, 68, 0.1)",
            }}
            aria-hidden
          />

          <div className={`problem-placecard relative ${placecard} p-1.5 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.55)] md:p-2`}>
            <div className="problem-placecard-inner relative aspect-[3/4] w-full overflow-hidden rounded-xl">
              <Image
                src="/coaching.jpg"
                alt="Strategic collaboration and growth"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 340px, 380px"
                quality={92}
                priority={false}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[var(--brand-plum)]/35 via-transparent to-[var(--cream)]/10" />
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
