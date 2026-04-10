"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "@/lib/gsap-config";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  duration?: number;
}

export default function ScrollReveal({
  children,
  className = "",
  delay = 0,
  y = 50,
  duration = 0.8,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const el = ref.current;
    const ctx = gsap.context(() => {
      gsap.from(el, {
        y,
        opacity: 0,
        duration,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      });
    }, ref);

    return () => ctx.revert();
  }, [y, duration, delay]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
