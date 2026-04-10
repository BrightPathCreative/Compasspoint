"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "@/lib/gsap-config";

interface StaggerRevealProps {
  children: React.ReactNode;
  className?: string;
  childSelector?: string;
  stagger?: number;
}

export default function StaggerReveal({
  children,
  className = "",
  childSelector = ":scope > *",
  stagger = 0.12,
}: StaggerRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const items = ref.current.querySelectorAll(childSelector);
    if (!items.length) return;

    const ctx = gsap.context(() => {
      gsap.from(items, {
        y: 60,
        opacity: 0,
        duration: 0.7,
        stagger,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });
    }, ref);

    return () => ctx.revert();
  }, [childSelector, stagger]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
