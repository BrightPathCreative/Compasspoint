"use client";

import Image from "next/image";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import "@/lib/gsap-config";
import { SectionWrapper } from "../global/SectionWrapper";

const placecard =
  "rounded-2xl border border-[#D4A574]/25 bg-[#1a0a14]/90 ring-1 ring-[#E8C9A0]/10";

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
          start: "top 78%",
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
          start: "top 82%",
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
        },
      });
    },
    { scope: containerRef },
  );

  return (
    <SectionWrapper ref={containerRef} className="problem-section section-brand-plum">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-24">
        <div className="problem-copy max-w-2xl">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-semibold text-[#F3F4F6] md:text-5xl">
            Scaling a business shouldn&apos;t mean sacrificing control.
          </h2>
          <div className="mt-8 space-y-6 text-base leading-relaxed text-[#9CA3AF] md:text-lg">
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
          {/* Animated neon bloom — brand gold / cream */}
          <div
            className="problem-neon-bloom pointer-events-none absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-[#D4A574]/35 via-[#E8C9A0]/15 to-transparent opacity-50 blur-2xl md:-inset-8"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -inset-px rounded-2xl opacity-80 blur-sm"
            style={{
              boxShadow:
                "0 0 24px rgba(212, 165, 116, 0.35), 0 0 56px rgba(232, 201, 160, 0.12), inset 0 0 20px rgba(212, 165, 116, 0.08)",
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
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#440930]/30 via-transparent to-[#0a0a0a]/10" />
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
