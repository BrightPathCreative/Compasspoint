"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { useLenisScroll } from "@/components/global/LenisProvider";

export function ScrollToTop() {
  const pathname = usePathname();
  const { scrollToTop } = useLenisScroll();

  useEffect(() => {
    scrollToTop();
  }, [pathname, scrollToTop]);

  return null;
}
