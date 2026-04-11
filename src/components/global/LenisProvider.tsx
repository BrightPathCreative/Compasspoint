"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import type Lenis from "lenis";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "@/lib/gsap-config";
import { initSmoothScroll } from "@/lib/smooth-scroll";

type LenisApi = {
  scrollY: number;
  scrollToTop: () => void;
  scrollToTopSmooth: () => void;
};

const LenisScrollContext = createContext<LenisApi>({
  scrollY: 0,
  scrollToTop: () => {},
  scrollToTopSmooth: () => {},
});

export function useLenisScroll() {
  return useContext(LenisScrollContext);
}

export function LenisProvider({ children }: { children: ReactNode }) {
  const [scrollY, setScrollY] = useState(0);
  const lenisRef = useRef<Lenis | null>(null);

  const scrollToTop = useCallback(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, []);

  const scrollToTopSmooth = useCallback(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { duration: 1.35 });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, []);

  useEffect(() => {
    const isTouchDevice = "ontouchstart" in window;

    if (!isTouchDevice) {
      const lenis = initSmoothScroll();
      lenisRef.current = lenis;
      const sync = () => setScrollY(lenis.scroll);
      lenis.on("scroll", sync);
      sync();
      ScrollTrigger.refresh();
      return () => {
        lenisRef.current = null;
        lenis.destroy();
      };
    }

    const onScroll = () => setScrollY(window.scrollY);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const value: LenisApi = { scrollY, scrollToTop, scrollToTopSmooth };

  return <LenisScrollContext.Provider value={value}>{children}</LenisScrollContext.Provider>;
}
