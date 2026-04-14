"use client";

import { forwardRef, useLayoutEffect, useMemo, useRef } from "react";
import { gsap } from "@/lib/gsap-config";

export type OrbitItemSerialized = {
  title: string;
  body: string;
};

type WhyCompassOrbitProps = {
  items: OrbitItemSerialized[];
};

function padNum(n: number) {
  return String(n).padStart(2, "0");
}

const DifferentiatorCard = forwardRef<
  HTMLElement,
  { index: number; title: string; body: string }
>(function DifferentiatorCard({ index, title, body }, ref) {
  return (
    <article
      ref={ref}
      className="diff-card group relative overflow-hidden rounded-xl border border-[#e8e2d9] bg-white pl-6 pr-6 pb-7 pt-7 shadow-[0_1px_0_rgba(62,15,52,0.04),0_12px_40px_-12px_rgba(62,15,52,0.12)] transition-[box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:shadow-[0_1px_0_rgba(62,15,52,0.06),0_20px_48px_-16px_rgba(62,15,52,0.14)]"
    >
      <div
        className="absolute bottom-0 left-0 top-0 w-[3px] bg-gradient-to-b from-[#D4AF37] via-[#c9a84c] to-[#b8860b]"
        aria-hidden
      />
      <p className="font-[family-name:var(--font-montserrat)] text-[11px] font-semibold tabular-nums tracking-[0.12em] text-[#D4AF37]">
        {padNum(index)}
      </p>
      <h3 className="mt-3 font-[family-name:var(--font-cormorant)] text-lg font-bold leading-snug text-[#5B184C] md:text-[1.15rem]">
        {title}
      </h3>
      <p className="mt-2.5 font-[family-name:var(--font-lato)] text-[13px] leading-relaxed text-[#555] md:text-[14px]">
        {body}
      </p>
    </article>
  );
});

/** Desktop: 2 + 3 card grid; mobile: stacked. Scroll-in stagger on cards. */
export function WhyCompassOrbit({ items: serialized }: WhyCompassOrbitProps) {
  const items = useMemo(() => serialized.slice(0, 5), [serialized]);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);

  const row1 = items.slice(0, 2);
  const row2 = items.slice(2, 5);

  useLayoutEffect(() => {
    const container = containerRef.current;
    const cards = cardRefs.current.filter(Boolean) as HTMLElement[];
    if (!container || cards.length !== 5) return;

    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      if (reduced) {
        gsap.set(cards, { opacity: 1, y: 0 });
        return;
      }

      gsap.from(cards, {
        y: 28,
        opacity: 0,
        duration: 0.65,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: container,
          start: "top 78%",
          toggleActions: "play none none reverse",
        },
      });
    }, container);

    return () => ctx.revert();
  }, [items]);

  const setCardRef = (index: number) => (el: HTMLElement | null) => {
    cardRefs.current[index] = el;
  };

  return (
    <div ref={containerRef} className="differentiators-grid w-full">
      <div className="grid gap-6 sm:gap-7 lg:grid-cols-2 lg:gap-8">
        {row1.map((item, i) => (
          <DifferentiatorCard
            key={item.title}
            ref={setCardRef(i)}
            index={i + 1}
            title={item.title}
            body={item.body}
          />
        ))}
      </div>
      <div className="mt-6 grid gap-6 sm:gap-7 sm:grid-cols-2 lg:mt-8 lg:grid-cols-3 lg:gap-8">
        {row2.map((item, i) => (
          <DifferentiatorCard
            key={item.title}
            ref={setCardRef(i + 2)}
            index={i + 3}
            title={item.title}
            body={item.body}
          />
        ))}
      </div>
    </div>
  );
}
