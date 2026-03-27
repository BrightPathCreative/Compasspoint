"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import "@/lib/gsap-config";
import { mailtoHref } from "@/lib/contact";
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
        className="cta-bg-fill pointer-events-none absolute inset-y-0 left-0 w-full bg-[#2A061F]/80"
        aria-hidden
      />
      <div className="cta-content relative z-10 mx-auto w-full max-w-[min(100%,1920px)] px-8 py-28 text-center md:px-14 md:py-36 lg:px-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-semibold text-[#F3F4F6] md:text-5xl">
            Ready to chart your course?
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-[#E5E7EB]/95 md:text-xl">
            Every significant business journey begins with a single, clear decision. If you are ready to bring
            strategic rigour and experienced guidance to your next stage of growth, let&apos;s talk.
          </p>
          <div className="mt-8">
            <Button
              className="!bg-[#D4A574] !text-[#0A0A0A] hover:!bg-[#E8C9A0]"
              onClick={() => {
                window.location.href = mailtoHref;
              }}
            >
              Schedule Your Introductory Call
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
