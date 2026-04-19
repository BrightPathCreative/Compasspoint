"use client";

import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "@/lib/gsap-config";

/** Desktop only (touch devices use native scroll in LenisProvider). */
export function initSmoothScroll() {
  const lenis = new Lenis({
    lerp: 0.08,
    duration: 1.6,
    smoothWheel: true,
  });

  lenis.on("scroll", ScrollTrigger.update);

  const onGsapTick = (time: number) => {
    lenis.raf(time * 1000);
  };
  gsap.ticker.add(onGsapTick);
  gsap.ticker.lagSmoothing(0);

  const origDestroy = lenis.destroy.bind(lenis);
  lenis.destroy = () => {
    gsap.ticker.remove(onGsapTick);
    origDestroy();
  };

  return lenis;
}
