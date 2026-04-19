"use client";

import { usePathname } from "next/navigation";
import { useLayoutEffect } from "react";
import { useLenisScroll } from "@/components/global/LenisProvider";

/** After client navigations, force the document scroll root to 0 (belt-and-suspenders for mobile Safari). */
function resetWindowScroll() {
  window.scrollTo(0, 0);
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
}

export function ScrollToTop() {
  const pathname = usePathname();
  const { scrollToTop } = useLenisScroll();

  useLayoutEffect(() => {
    scrollToTop();
    resetWindowScroll();

    const t0 = window.setTimeout(() => {
      scrollToTop();
      resetWindowScroll();
    }, 0);

    let raf2 = 0;
    const raf1 = window.requestAnimationFrame(() => {
      scrollToTop();
      resetWindowScroll();
      raf2 = window.requestAnimationFrame(() => {
        scrollToTop();
        resetWindowScroll();
      });
    });

    const t1 = window.setTimeout(() => {
      scrollToTop();
      resetWindowScroll();
    }, 120);

    return () => {
      window.clearTimeout(t0);
      window.clearTimeout(t1);
      window.cancelAnimationFrame(raf1);
      window.cancelAnimationFrame(raf2);
    };
  }, [pathname, scrollToTop]);

  return null;
}
