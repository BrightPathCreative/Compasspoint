"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ChevronDown } from "lucide-react";
import { CALENDLY_URL } from "@/lib/site";
import "@/lib/gsap-config";
import { Button } from "../global/Button";

const headline = "Big Business Thinking. Built for Yours.";

function splitWords(text: string) {
  return text.split(/\s+/).filter(Boolean);
}

export function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from(".hero-compass-wrap", {
        y: 20,
        opacity: 0,
        duration: 0.75,
      })
        .from(
          ".hero-wordmark-wrap",
          {
            y: 24,
            opacity: 0,
            duration: 0.7,
          },
          "-=0.4",
        )
        .from(
          ".hero-headline .word",
          {
            y: 72,
            opacity: 0,
            duration: 0.95,
            stagger: 0.06,
          },
          "-=0.35",
        )
        .from(
          ".hero-subheadline",
          {
            y: 28,
            opacity: 0,
            duration: 0.75,
          },
          "-=0.45",
        )
        .from(
          ".hero-cta-group",
          {
            y: 20,
            opacity: 0,
            duration: 0.55,
          },
          "-=0.35",
        )
        .from(
          ".hero-scroll-indicator",
          {
            opacity: 0,
            duration: 0.45,
          },
          "-=0.2",
        );
    },
    { scope: containerRef },
  );

  const words = splitWords(headline);

  return (
    <section
      ref={containerRef}
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[var(--brand-plum)] px-8 pt-28 md:px-14 md:pt-36 lg:px-20"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_15%,rgba(56,7,41,0.45)_0%,var(--brand-plum)_42%,rgba(0,0,0,0.5)_100%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
        aria-hidden
      />

      <div className="relative z-10 flex max-w-4xl flex-col items-center text-center">
        <div className="hero-compass-wrap mb-6">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/brand-icon.svg"
            alt=""
            width={120}
            height={120}
            className="hero-compass-emblem mx-auto h-20 w-20 object-contain md:h-28 md:w-28"
          />
        </div>

        <div className="hero-wordmark-wrap mb-8 w-full max-w-lg md:mb-10">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/compasspoint-logotext.svg"
            alt="Compass Point Advisory"
            className="mx-auto block h-auto w-full max-w-[min(100%,24rem)] object-contain opacity-95 md:max-w-[28rem]"
          />
          <p className="mx-auto mt-5 max-w-md px-2 text-center font-[family-name:var(--font-montserrat)] text-[0.65rem] font-medium uppercase leading-relaxed tracking-[0.18em] text-[var(--text-secondary)] sm:text-xs md:tracking-[0.22em]">
            Guiding businesses toward clarity, growth, and transformation
          </p>
        </div>

        <h1 className="hero-headline font-[family-name:var(--font-cinzel)] text-4xl font-bold uppercase leading-[1.15] tracking-[0.04em] text-[var(--text-primary)] md:text-5xl md:leading-tight lg:text-[3.25rem]">
          {words.map((w, i) => (
            <span key={i} className="word inline-block">
              {w}
              {i < words.length - 1 ? "\u00A0" : ""}
            </span>
          ))}
        </h1>
        <p className="hero-subheadline mt-8 max-w-2xl font-[family-name:var(--font-lato)] text-base leading-relaxed text-[var(--text-secondary)] md:text-lg">
          Strategic consulting for Australian SMEs and startups ready to grow smarter, scale faster, and lead
          with confidence.
        </p>
        <div className="hero-cta-group mt-10 flex flex-col gap-4 sm:flex-row sm:gap-4">
          <Button href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
            Book a Free Discovery Call
          </Button>
          <Button variant="secondary" href="/services">
            Explore Our Services
          </Button>
        </div>
      </div>

      <div className="hero-scroll-indicator absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 font-[family-name:var(--font-montserrat)] text-[var(--text-secondary)]">
        <span className="text-xs uppercase tracking-[0.2em]">Scroll</span>
        <ChevronDown className="h-6 w-6 animate-bounce" aria-hidden />
      </div>
    </section>
  );
}
