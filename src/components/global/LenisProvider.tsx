"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import Lenis from "lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "@/lib/gsap-config";

const LenisScrollContext = createContext(0);

export function useLenisScroll() {
  return useContext(LenisScrollContext);
}

export function LenisProvider({ children }: { children: ReactNode }) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
    });

    lenis.on("scroll", (l: Lenis) => {
      setScrollY(l.scroll);
      ScrollTrigger.update();
    });

    let rafId = 0;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    ScrollTrigger.refresh();

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return <LenisScrollContext.Provider value={scrollY}>{children}</LenisScrollContext.Provider>;
}
