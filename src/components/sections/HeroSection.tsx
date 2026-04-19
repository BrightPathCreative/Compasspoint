"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { BOOK_DISCOVERY_PATH } from "@/lib/site";
import "@/lib/gsap-config";
import { Button } from "../global/Button";

export function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      gsap.set([".hero-compass", ".hero-brand-logo", ".hero-headline", ".hero-subheadline", ".hero-cta"], {
        opacity: 0,
        y: 30,
      });
      gsap.set(".hero-compass", { scale: 0.8, rotation: -15 });

      tl.to(".hero-compass", {
        opacity: 1,
        scale: 1,
        rotation: 0,
        y: 0,
        duration: 1,
        ease: "power2.out",
      })
        .to(
          ".hero-brand-logo",
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
          },
          "-=0.3",
        )
        .to(
          ".hero-headline",
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
          },
          "-=0.2",
        )
        .to(
          ".hero-subheadline",
          {
            opacity: 0.85,
            y: 0,
            duration: 0.6,
          },
          "-=0.3",
        )
        .to(
          ".hero-cta",
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.15,
          },
          "-=0.2",
        );
    },
    { scope: containerRef },
  );

  return (
    <section
      ref={containerRef}
      className="hero-section px-8 pb-24 pt-28 md:px-14 md:pt-36 lg:px-20"
    >
      <div className="hero-content flex w-full min-w-0 max-w-4xl flex-col items-center px-0">
        <div className="hero-compass mb-10 md:mb-12">
          <div className="hero-compass-visual relative mx-auto flex h-[100px] w-[100px] items-center justify-center md:h-[120px] md:w-[120px]">
            <div className="hero-compass-torch-beam pointer-events-none absolute z-0" aria-hidden />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/brand-icon.svg"
              alt=""
              width={150}
              height={150}
              className="hero-compass-emblem relative z-[1] h-[100px] w-[100px] object-contain md:h-[120px] md:w-[120px]"
            />
          </div>
        </div>

        <div className="hero-brand-logo mb-12 flex w-full justify-center px-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/compasspoint-logotext.svg"
            alt="CompassPoint Advisory"
            width={360}
            height={72}
            className="h-auto w-auto max-w-[min(300px,88vw)] object-contain md:max-w-[340px]"
          />
        </div>

        <h1
          className="hero-headline w-full min-w-0 max-w-[min(22ch,100%)] text-balance text-center font-[family-name:var(--font-cinzel)] text-[clamp(1.5rem,2.65vw+0.85rem,3.75rem)] font-bold uppercase leading-[1.12] tracking-[0.04em] break-words"
          data-hero-heading
        >
          <span className="block text-[var(--soft-ivory)]">Big Business Thinking.</span>
          <span className="gold-shimmer-text mt-2 block">Built for Yours.</span>
        </h1>

        <p className="hero-subheadline mt-6 w-full min-w-0 max-w-2xl font-[family-name:var(--font-lato)] text-lg font-light leading-relaxed text-[var(--soft-ivory)]/80 md:text-xl">
          Strategic consulting for Australian SMEs and startups ready to grow smarter, scale faster, and lead
          with confidence.
        </p>

        <div className="hero-cta mt-10 flex w-full max-w-lg flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
          <Button href={BOOK_DISCOVERY_PATH} className="hero-cta w-full sm:w-auto">
            Book a Free Discovery Call
          </Button>
          <Button variant="secondary" href="/services" className="hero-cta w-full sm:w-auto">
            Explore Our Services →
          </Button>
        </div>
      </div>
    </section>
  );
}
