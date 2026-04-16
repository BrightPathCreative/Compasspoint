"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "@/lib/gsap-config";

export default function GoldDivider({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const el = ref.current;
    const ctx = gsap.context(() => {
      gsap.from(el, {
        scaleX: 0,
        transformOrigin: "left center",
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 88%",
          toggleActions: "play none none reverse",
        },
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return <div ref={ref} className={`gold-divider-line ${className}`} />;
}
