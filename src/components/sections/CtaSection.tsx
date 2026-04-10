"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { BOOK_DISCOVERY_PATH } from "@/lib/site";
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
    <section
      id="cta"
      ref={containerRef}
      className="cta-section section-brand-plum relative overflow-hidden py-24 md:py-32"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(62,15,52,0.55)_100%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        aria-hidden
        style={{
          backgroundImage: `url("/brand-icon.svg")`,
          backgroundPosition: "50% 50%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "min(520px, 85vw)",
          transform: "rotate(10deg)",
        }}
      />
      <div
        className="cta-bg-fill pointer-events-none absolute inset-y-0 left-0 w-full bg-[var(--plum-dark)]/75"
        aria-hidden
      />
      <div className="cta-content relative z-10 mx-auto w-full max-w-[min(100%,1920px)] px-8 text-center md:px-14 lg:px-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-[family-name:var(--font-cormorant)] text-3xl font-bold text-[var(--metallic-gold)] md:text-5xl">
            Ready to Grow Your Business with Confidence?
          </h2>
          <p className="mt-6 font-[family-name:var(--font-lato)] text-lg leading-relaxed text-[color-mix(in_srgb,var(--soft-ivory)_94%,transparent)] md:text-xl">
            Whether you&apos;re navigating a growth inflection point, looking to sharpen your strategy, or exploring
            how AI can future-proof your operations — CompassPoint Advisory is your trusted partner.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4">
            <Button href={BOOK_DISCOVERY_PATH}>
              Book Your Free Discovery Call →
            </Button>
            <p className="max-w-lg font-[family-name:var(--font-montserrat)] text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--soft-ivory)]/60">
              Confidential. No sales pressure. Just straight-talking strategic advice.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
