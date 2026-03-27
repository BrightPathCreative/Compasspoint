"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import "@/lib/gsap-config";
import { SectionWrapper } from "../global/SectionWrapper";

const logos = ["Telstra", "Qantas", "TechCo", "ProServices", "GrowthLab"];

const frame =
  "rounded-2xl border border-[#D4A574]/20 bg-[#141414]/50 p-2 shadow-[0_28px_70px_-28px_rgba(0,0,0,0.6)] ring-1 ring-white/[0.05] md:p-2.5";

export function AboutSection() {
  const containerRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [portraitMaxH, setPortraitMaxH] = useState<number | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const textEl = textRef.current;

    const measure = () => {
      if (!textEl || !mq.matches) {
        setPortraitMaxH(null);
        return;
      }
      setPortraitMaxH(textEl.offsetHeight);
    };

    measure();
    const ro = new ResizeObserver(measure);
    if (textEl) ro.observe(textEl);
    mq.addEventListener("change", measure);
    window.addEventListener("resize", measure);

    return () => {
      ro.disconnect();
      mq.removeEventListener("change", measure);
      window.removeEventListener("resize", measure);
    };
  }, []);

  useGSAP(
    () => {
      gsap.from(".about-text", {
        x: -36,
        opacity: 0,
        duration: 0.95,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-text",
          start: "top 78%",
        },
      });

      gsap.from(".about-portrait-wrap", {
        x: 36,
        opacity: 0,
        scale: 0.98,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-portrait-wrap",
          start: "top 80%",
        },
      });

      gsap.to(".about-image-inner", {
        yPercent: -5,
        ease: "none",
        scrollTrigger: {
          trigger: ".about-section",
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      gsap.from(".client-logo", {
        opacity: 0,
        y: 16,
        duration: 0.45,
        stagger: 0.08,
        scrollTrigger: {
          trigger: ".client-logos-row",
          start: "top 88%",
        },
      });
    },
    { scope: containerRef },
  );

  return (
    <SectionWrapper id="about" ref={containerRef} className="about-section bg-[#141414]">
      <div className="grid gap-14 lg:grid-cols-2 lg:items-start lg:gap-20">
        <div ref={textRef} className="about-text order-2 lg:order-1">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl font-semibold text-[#F3F4F6] md:text-5xl">
            Guiding Your True North.
          </h2>
          <div className="mt-8 space-y-6 text-base leading-relaxed text-[#9CA3AF] md:text-lg">
            <p>
              Amelia Ghofrany founded CompassPoint Advisory after more than two decades operating at the
              intersection of corporate strategy and entrepreneurial growth. Her career has spanned some of
              Australia&apos;s most recognised organisations, including Telstra and Qantas, as well as a
              diverse portfolio of high-growth startups across technology, professional services, and consumer
              sectors.
            </p>
            <p>
              She is not a consultant who observes from the outside. Amelia has sat in the founder&apos;s
              chair, navigated board rooms, and made the difficult calls that define a business&apos;s
              trajectory. That lived experience is what she brings to every client engagement, combining the
              analytical rigour of enterprise strategy with the practical empathy of someone who has built and
              scaled businesses herself.
            </p>
            <p>
              As an active investor and advisor, Amelia brings a network and perspective that extends well
              beyond the advisory engagement itself. Her clients gain not just a strategist, but a genuine
              partner in their growth.
            </p>
          </div>
          <div className="client-logos-row mt-12 flex flex-wrap items-center gap-8 opacity-50 grayscale">
            {logos.map((name) => (
              <span
                key={name}
                className="client-logo font-[family-name:var(--font-playfair)] text-sm font-semibold tracking-wide text-[#9CA3AF]"
              >
                {name}
              </span>
            ))}
          </div>
        </div>

        <div
          className="about-portrait-wrap order-1 mx-auto flex w-full max-w-[min(100%,380px)] flex-col lg:order-2 lg:mx-0 lg:max-w-none lg:min-h-0"
          style={
            portraitMaxH != null
              ? { height: portraitMaxH, maxHeight: portraitMaxH, minHeight: 0 }
              : undefined
          }
        >
          <div className="flex min-h-0 w-full flex-1 flex-col justify-center gap-4 lg:items-end">
            <div className={`about-image ${frame} flex min-h-0 w-full max-w-[min(100%,380px)] flex-1 flex-col`}>
              <div className="about-image-inner relative min-h-[220px] w-full flex-1 overflow-hidden rounded-xl lg:min-h-0">
                <Image
                  src="/amelia-standing-suit.png"
                  alt="Amelia Ghofrany, founder of Compass Point Advisory"
                  fill
                  className="scale-x-[-1] object-cover object-center"
                  sizes="(max-width: 1024px) 380px, 480px"
                  quality={92}
                  priority
                />
              </div>
            </div>
            <p className="w-full max-w-[min(100%,380px)] shrink-0 text-center text-sm text-[#6B7280] lg:text-right">
              Amelia Ghofrany — Compass Point Advisory.
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
