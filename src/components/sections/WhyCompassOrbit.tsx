"use client";

import { useLayoutEffect, useMemo, useRef } from "react";
import { gsap } from "@/lib/gsap-config";

export type OrbitItemSerialized = {
  title: string;
  body: string;
};

type WhyCompassOrbitProps = {
  items: OrbitItemSerialized[];
};

const POSITION_CLASS = ["diff-item--1", "diff-item--2", "diff-item--3", "diff-item--4", "diff-item--5"] as const;

/** Pentagon layout around centre compass — desktop; stacked on small screens. */
export function WhyCompassOrbit({ items: serialized }: WhyCompassOrbitProps) {
  const items = useMemo(() => serialized.slice(0, 5), [serialized]);
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    const container = containerRef.current;
    const blocks = itemRefs.current.filter(Boolean) as HTMLDivElement[];
    if (!container || blocks.length !== 5) return;

    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      if (reduced) {
        gsap.set(blocks, { opacity: 1, y: 0 });
        return;
      }

      gsap.from(blocks, {
        y: 30,
        opacity: 0,
        duration: 0.7,
        stagger: 0.12,
        ease: "power3.out",
        scrollTrigger: {
          trigger: container,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });
    }, container);

    return () => ctx.revert();
  }, [items]);

  return (
    <div className="mt-14 w-full">
      <div
        ref={containerRef}
        className="differentiators-container"
        aria-label="CompassPoint differentiators"
      >
        <div className="diff-compass-wrap">
          <div className="compass-glow" aria-hidden />
          <div className="compass-centre">
            {/* eslint-disable-next-line @next/next/no-img-element -- CSS spin animation on img */}
            <img src="/brand-icon.svg" alt="" width={120} height={120} aria-hidden />
          </div>
        </div>

        {items.map((item, i) => (
          <div
            key={item.title}
            ref={(el) => {
              itemRefs.current[i] = el;
            }}
            className={`diff-item ${POSITION_CLASS[i]}`}
          >
            <div className="diff-divider" aria-hidden />
            <h3 className="diff-title">{item.title}</h3>
            <p className="diff-description">{item.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
