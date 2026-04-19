"use client";

import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "@/lib/gsap-config";

/**
 * Refreshes ScrollTrigger after layout / mobile viewport settle so reveal tweens
 * are not stuck at from-values (e.g. opacity 0) when rects were wrong on first paint.
 */
export function ScrollTriggerLayoutSync() {
  useEffect(() => {
    let cancelled = false;
    const refresh = () => {
      if (!cancelled) ScrollTrigger.refresh();
    };

    refresh();
    requestAnimationFrame(() => {
      requestAnimationFrame(refresh);
    });

    const onLoad = () => refresh();
    window.addEventListener("load", onLoad);

    let resizeTimer: ReturnType<typeof setTimeout> | undefined;
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(refresh, 120);
    };
    window.addEventListener("resize", onResize, { passive: true });
    window.addEventListener("orientationchange", refresh);

    let vvTimer: ReturnType<typeof setTimeout> | undefined;
    const onVisualViewport = () => {
      clearTimeout(vvTimer);
      vvTimer = setTimeout(refresh, 80);
    };
    const vv = window.visualViewport;
    vv?.addEventListener("resize", onVisualViewport);
    vv?.addEventListener("scroll", onVisualViewport);

    return () => {
      cancelled = true;
      window.removeEventListener("load", onLoad);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("orientationchange", refresh);
      vv?.removeEventListener("resize", onVisualViewport);
      vv?.removeEventListener("scroll", onVisualViewport);
      clearTimeout(resizeTimer);
      clearTimeout(vvTimer);
    };
  }, []);

  return null;
}
