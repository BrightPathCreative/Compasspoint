"use client";

import type { LucideIcon } from "lucide-react";
import { Clock, Cpu, MapPin, Target, TrendingUp } from "lucide-react";
import Image from "next/image";
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react";
import { gsap } from "@/lib/gsap-config";

const ORBIT_ICONS = {
  target: Target,
  clock: Clock,
  cpu: Cpu,
  trendingUp: TrendingUp,
  mapPin: MapPin,
} as const;

/** Serializable from Server Components. */
export type OrbitItemSerialized = {
  iconKey: keyof typeof ORBIT_ICONS;
  title: string;
  body: string;
};

export type OrbitItem = {
  icon: LucideIcon;
  title: string;
  body: string;
};

type WhyCompassOrbitProps = {
  items: OrbitItemSerialized[];
};

const START_DEG = -90;
const CARD_HALF = 110;
const RING_GAP = 28;

/** Desktop: ring + dots + compass + copy blocks (no card chrome). Mobile: stacked copy + icons. */
export function WhyCompassOrbit({ items: serialized }: WhyCompassOrbitProps) {
  const items: OrbitItem[] = useMemo(
    () =>
      serialized.map(({ iconKey, ...rest }) => ({
        ...rest,
        icon: ORBIT_ICONS[iconKey],
      })),
    [serialized],
  );

  const rootRef = useRef<HTMLDivElement>(null);
  const ringScaleRef = useRef<HTMLDivElement>(null);
  const compassRef = useRef<HTMLDivElement>(null);
  const blockRefs = useRef<(HTMLDivElement | null)[]>([]);
  const dotRefs = useRef<(HTMLDivElement | null)[]>([]);

  const stageRef = useRef<HTMLDivElement>(null);
  const [layout, setLayout] = useState({
    ringD: 400,
    ringR: 200,
    orbitR: 338,
    stageSize: 880,
  });

  useEffect(() => {
    const el = stageRef.current;
    if (!el || typeof ResizeObserver === "undefined") return;

    const update = () => {
      const w = el.offsetWidth;
      const ringD = Math.round(Math.min(400, Math.max(260, w * 0.48)));
      const ringR = ringD / 2;
      const orbitR = ringR + RING_GAP + CARD_HALF;
      const extent = orbitR + CARD_HALF + 40;
      setLayout({ ringD, ringR, orbitR, stageSize: Math.min(920, Math.ceil(extent * 2)) });
    };

    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useLayoutEffect(() => {
    const root = rootRef.current;
    const ringEl = ringScaleRef.current;
    const compass = compassRef.current;
    const blocks = blockRefs.current.filter(Boolean) as HTMLDivElement[];
    const dots = dotRefs.current.filter(Boolean) as HTMLDivElement[];
    if (!root || !ringEl || blocks.length !== 5) return;

    const ctx = gsap.context(() => {
      gsap.set(ringEl, { scale: 0.8, opacity: 0 });
      if (compass) gsap.set(compass, { opacity: 0 });
      gsap.set(blocks, { opacity: 0 });
      gsap.set(dots, { opacity: 0, scale: 0.5 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root,
          start: "top 82%",
          once: true,
        },
      });

      tl.to(ringEl, { scale: 1, opacity: 1, duration: 0.75, ease: "power2.out" });
      tl.to(
        dots,
        { opacity: 1, scale: 1, duration: 0.35, stagger: 0.06, ease: "back.out(1.4)" },
        "-=0.35",
      );
      if (compass) tl.to(compass, { opacity: 1, duration: 0.4 }, "-=0.5");

      blocks.forEach((block, i) => {
        const angleDeg = START_DEG + i * (360 / 5);
        const rad = (angleDeg * Math.PI) / 180;
        const inwardX = -Math.cos(rad) * 32;
        const inwardY = -Math.sin(rad) * 32;
        tl.fromTo(
          block,
          { opacity: 0, x: inwardX, y: inwardY },
          { opacity: 1, x: 0, y: 0, duration: 0.5, ease: "power2.out" },
          i === 0 ? ">0.05" : "+=0.15",
        );
      });
    }, root);

    return () => ctx.revert();
  }, [layout.stageSize, layout.ringD, layout.orbitR]);

  return (
    <div ref={rootRef} className="mt-14 w-full">
      <div className="md:hidden">
        <div className="mb-8 flex justify-center">
          <Image
            src="/brand-icon.svg"
            alt=""
            width={72}
            height={72}
            className="h-[72px] w-[72px] opacity-[0.35]"
          />
        </div>
        <ul className="mx-auto flex max-w-lg flex-col gap-8">
          {items.map((item) => (
            <li key={item.title}>
              <DifferentiatorCopy item={item} variant="stack" />
            </li>
          ))}
        </ul>
      </div>

      <div
        ref={stageRef}
        className="relative mx-auto hidden w-full max-w-[920px] md:block"
        style={{ minHeight: layout.stageSize }}
      >
        <div
          className="relative left-1/2 -translate-x-1/2"
          style={{ width: layout.stageSize, height: layout.stageSize }}
        >
          <div
            ref={ringScaleRef}
            className="pointer-events-none absolute left-1/2 top-1/2 z-[2] -translate-x-1/2 -translate-y-1/2"
            style={{ width: layout.ringD, height: layout.ringD }}
            aria-hidden
          >
            <div className="orbit-ring-spin h-full w-full">
              <div className="h-full w-full rounded-full border-2 border-[#D4AF37]/30 bg-transparent shadow-[0_0_60px_rgba(212,175,55,0.08),0_0_120px_rgba(212,175,55,0.04)]" />
            </div>
          </div>

          <div
            ref={compassRef}
            className="pointer-events-none absolute left-1/2 top-1/2 z-[5] -translate-x-1/2 -translate-y-1/2"
          >
            <Image
              src="/brand-icon.svg"
              alt=""
              width={96}
              height={96}
              className="h-[72px] w-[72px] opacity-40 md:h-[88px] md:w-[88px]"
            />
          </div>

          {items.map((item, i) => {
            const angleDeg = START_DEG + i * (360 / 5);
            const rad = (angleDeg * Math.PI) / 180;
            const dotR = layout.ringR - 2;
            const dx = Math.cos(rad) * dotR;
            const dy = Math.sin(rad) * dotR;
            return (
              <div
                key={`dot-${item.title}`}
                ref={(el) => {
                  dotRefs.current[i] = el;
                }}
                className="pointer-events-none absolute left-1/2 top-1/2 z-[4] h-2 w-2 rounded-full bg-[#D4AF37]/80 shadow-[0_0_10px_rgba(212,175,55,0.45)]"
                style={{ transform: `translate(calc(-50% + ${dx}px), calc(-50% + ${dy}px))` }}
                aria-hidden
              />
            );
          })}

          {items.map((item, i) => {
            const angleDeg = START_DEG + i * (360 / 5);
            const rad = (angleDeg * Math.PI) / 180;
            const x = Math.cos(rad) * layout.orbitR;
            const y = Math.sin(rad) * layout.orbitR;
            return (
              <div
                key={item.title}
                ref={(el) => {
                  blockRefs.current[i] = el;
                }}
                className="absolute left-1/2 top-1/2 z-[20] w-[220px] max-w-[220px] -translate-x-1/2 -translate-y-1/2"
                style={{ left: `calc(50% + ${x}px)`, top: `calc(50% + ${y}px)` }}
              >
                <DifferentiatorCopy item={item} variant="orbit" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/** Copy + icon only — no white card panel. */
function DifferentiatorCopy({ item, variant }: { item: OrbitItem; variant: "orbit" | "stack" }) {
  const Icon = item.icon;
  const widthCls = variant === "stack" ? "w-full max-w-lg" : "w-[220px]";

  return (
    <div className={widthCls}>
      <div className="flex gap-2.5">
        <Icon className="mt-0.5 h-4 w-4 shrink-0 text-[#D4AF37]" strokeWidth={2} aria-hidden />
        <div className="min-w-0">
          <h3 className="font-[family-name:var(--font-cormorant)] text-base font-bold leading-snug text-[#5B184C]">
            {item.title}
          </h3>
          <p className="mt-1.5 font-[family-name:var(--font-lato)] text-[15px] font-normal leading-relaxed text-[#2E2E2E]">
            {item.body}
          </p>
        </div>
      </div>
    </div>
  );
}
