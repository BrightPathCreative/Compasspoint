"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { CALENDLY_URL } from "@/lib/site";
import "@/lib/gsap-config";
import { Button } from "../global/Button";

export function CtaSection() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".cta-section",
          start: "top 75%",
        },
      });

      tl.from(".cta-bg-fill", {
        scaleX: 0,
        transformOrigin: "left center",
        duration: 1,
        ease: "power3.inOut",
      }).from(
        ".cta-content",
        {
          opacity: 0,
          y: 30,
          duration: 0.7,
          ease: "power2.out",
        },
        "-=0.3",
      );
    },
    { scope: containerRef },
  );

  return (
    <section id="cta" ref={containerRef} className="cta-section section-brand-plum relative overflow-hidden">
      <div
        className="cta-bg-fill pointer-events-none absolute inset-y-0 left-0 w-full bg-[var(--brand-plum-deep)]/80"
        aria-hidden
      />
      <div className="cta-content relative z-10 mx-auto w-full max-w-[min(100%,1920px)] px-8 py-28 text-center md:px-14 md:py-36 lg:px-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-[family-name:var(--font-cormorant)] text-3xl font-bold text-[var(--text-primary)] md:text-5xl">
            Ready to Grow Your Business with Confidence?
          </h2>
          <p className="mt-6 font-[family-name:var(--font-lato)] text-lg leading-relaxed text-[color-mix(in_srgb,var(--brand-ivory)_94%,transparent)] md:text-xl">
            Whether you&apos;re navigating a growth inflection point, looking to sharpen your strategy, or exploring
            how AI can future-proof your operations — CompassPoint Advisory is your trusted partner.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4">
            <Button href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
              Book Your Free Discovery Call →
            </Button>
            <p className="max-w-md font-[family-name:var(--font-montserrat)] text-xs font-medium uppercase tracking-[0.08em] text-[var(--text-tertiary)]">
              Confidential. No sales pressure. Just straight-talking strategic advice.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
