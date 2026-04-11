"use client";

import { ChevronUp } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useLenisScroll } from "@/components/global/LenisProvider";

const RING_MASK =
  "radial-gradient(farthest-side, transparent calc(100% - 3px), #000 calc(100% - 2.5px))";

const SHOW_AFTER = 360;

export function BackToTopButton() {
  const { scrollY, scrollToTopSmooth } = useLenisScroll();
  const [docMax, setDocMax] = useState(1);
  const [isScrolling, setIsScrolling] = useState(false);
  const idleTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const measure = () => {
      const el = document.documentElement;
      setDocMax(Math.max(1, el.scrollHeight - el.clientHeight));
    };
    measure();
    window.addEventListener("resize", measure, { passive: true });
    const ro = new ResizeObserver(measure);
    ro.observe(document.documentElement);
    return () => {
      window.removeEventListener("resize", measure);
      ro.disconnect();
    };
  }, []);

  useEffect(() => {
    const raf = requestAnimationFrame(() => setIsScrolling(true));
    if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
    idleTimerRef.current = setTimeout(() => setIsScrolling(false), 140);
    return () => {
      cancelAnimationFrame(raf);
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
    };
  }, [scrollY]);

  const progress = Math.min(1, Math.max(0, scrollY / docMax));
  const visible = scrollY > SHOW_AFTER;
  const progressDeg = progress * 360;

  return (
    <div
      className={`pointer-events-none fixed bottom-6 right-6 z-[70] md:bottom-10 md:right-10 ${visible ? "opacity-100" : "opacity-0"} transition-[opacity,transform] duration-500 ease-out motion-reduce:transition-opacity ${visible ? "translate-y-0" : "translate-y-3"}`}
      aria-hidden={!visible}
    >
      <div className={`relative size-16 ${visible ? "pointer-events-auto" : "pointer-events-none"}`}>
        <div
          className="absolute inset-0 rounded-full border-2 border-[color-mix(in_srgb,var(--metallic-gold)_22%,transparent)]"
          aria-hidden
        />
        <div
          className="absolute inset-0 rounded-full motion-reduce:transition-none"
          style={{
            WebkitMaskImage: RING_MASK,
            maskImage: RING_MASK,
            background: `conic-gradient(from -90deg, var(--metallic-gold) 0deg ${progressDeg}deg, transparent ${progressDeg}deg)`,
            opacity: 0.85,
          }}
          aria-hidden
        />
        {isScrolling ? (
          <div
            className="absolute inset-0 motion-safe:animate-[spin_0.75s_linear_infinite] motion-reduce:animate-none"
            style={{
              WebkitMaskImage: RING_MASK,
              maskImage: RING_MASK,
              background:
                "conic-gradient(from 0deg, transparent 0deg 286deg, var(--bright-gold) 292deg 322deg, var(--metallic-gold) 328deg 360deg, transparent 0deg)",
              willChange: "transform",
            }}
            aria-hidden
          />
        ) : null}
        <button
          type="button"
          tabIndex={visible ? 0 : -1}
          onClick={() => scrollToTopSmooth()}
          className="absolute inset-[5px] flex items-center justify-center rounded-full bg-gradient-to-br from-[var(--plum-dark)] to-[var(--royal-plum)] text-[var(--metallic-gold)] shadow-[0_10px_28px_rgba(0,0,0,0.45),0_0_0_1px_rgba(212,175,55,0.12)] transition-[transform,box-shadow,background-color] duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_14px_36px_rgba(0,0,0,0.5),0_0_0_1px_rgba(212,175,55,0.28),0_0_24px_rgba(212,175,55,0.12)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--metallic-gold)] active:translate-y-0"
          aria-label="Back to top"
        >
          <ChevronUp className="size-[22px]" strokeWidth={2.35} aria-hidden />
        </button>
      </div>
    </div>
  );
}
