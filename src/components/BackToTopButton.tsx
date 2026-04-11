"use client";

import { ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";
import { useLenisScroll } from "@/components/global/LenisProvider";

/** ~2/3 of previous 64px control; ring mask matches thin stroke */
const OUTER_PX = 43;
const RING_MASK =
  "radial-gradient(farthest-side, transparent calc(100% - 2px), #000 calc(100% - 1.5px))";

const SHOW_AFTER = 360;

type BackToTopButtonProps = {
  /** Renders centered in the document flow (e.g. under the contact form) instead of fixed to the viewport. */
  inline?: boolean;
};

export function BackToTopButton({ inline = false }: BackToTopButtonProps) {
  const { scrollY, scrollToTopSmooth } = useLenisScroll();
  const [docMax, setDocMax] = useState(1);

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

  const progress = Math.min(1, Math.max(0, scrollY / docMax));
  const visible = scrollY > SHOW_AFTER;
  const progressDeg = progress * 360;

  const positionClass = inline
    ? `pointer-events-none relative z-10 flex w-full justify-center overflow-hidden transition-[opacity,max-height,margin,transform] duration-500 ease-out motion-reduce:transition-opacity ${
        visible
          ? "mt-10 max-h-[4rem] translate-y-0 opacity-100 md:mt-12"
          : "mt-0 max-h-0 -translate-y-1 opacity-0"
      }`
    : `pointer-events-none fixed bottom-6 right-6 z-[70] md:bottom-10 md:right-10 ${visible ? "opacity-100" : "opacity-0"} transition-[opacity,transform] duration-500 ease-out motion-reduce:transition-opacity ${visible ? "translate-y-0" : "translate-y-3"}`;

  return (
    <div className={positionClass} aria-hidden={!visible}>
      <div
        className={`relative ${visible ? "pointer-events-auto" : "pointer-events-none"}`}
        style={{ width: OUTER_PX, height: OUTER_PX }}
      >
        <div
          className="absolute inset-0 rounded-full border border-[color-mix(in_srgb,var(--metallic-gold)_18%,transparent)]"
          aria-hidden
        />
        <div
          className="absolute inset-0 rounded-full motion-reduce:transition-none"
          style={{
            WebkitMaskImage: RING_MASK,
            maskImage: RING_MASK,
            background: `conic-gradient(from -90deg, var(--metallic-gold) 0deg ${progressDeg}deg, transparent ${progressDeg}deg)`,
            opacity: 0.62,
          }}
          aria-hidden
        />
        <button
          type="button"
          tabIndex={visible ? 0 : -1}
          onClick={() => scrollToTopSmooth()}
          className="absolute inset-[3px] flex items-center justify-center rounded-full bg-gradient-to-br from-[var(--plum-dark)] to-[var(--royal-plum)] text-[var(--metallic-gold)] shadow-[0_6px_18px_rgba(0,0,0,0.4),0_0_0_1px_rgba(212,175,55,0.1)] transition-[transform,box-shadow,background-color] duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_10px_26px_rgba(0,0,0,0.48),0_0_0_1px_rgba(212,175,55,0.22),0_0_16px_rgba(212,175,55,0.08)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--metallic-gold)] active:translate-y-0"
          aria-label="Back to top"
        >
          <ChevronUp className="size-[15px]" strokeWidth={2} aria-hidden />
        </button>
      </div>
    </div>
  );
}
