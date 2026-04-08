"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { Quote } from "lucide-react";
import "@/lib/gsap-config";
import { SectionWrapper } from "../global/SectionWrapper";

const placeholders = [
  { title: "Client testimonial", subtitle: "To be supplied" },
  { title: "Client testimonial", subtitle: "To be supplied" },
  { title: "Client testimonial", subtitle: "To be supplied" },
];

export function TestimonialsSection() {
  const containerRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".testimonial-card", {
        y: 36,
        opacity: 0,
        scale: 0.98,
        duration: 0.7,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".testimonials-grid",
          start: "top 82%",
        },
      });
    },
    { scope: containerRef },
  );

  return (
    <SectionWrapper id="testimonials" ref={containerRef} className="bg-[var(--bg-primary)]">
      <h2 className="text-center font-[family-name:var(--font-cormorant)] text-3xl font-bold text-[var(--text-primary)] md:text-5xl">
        What Our Clients Say
      </h2>
      <p className="mx-auto mt-6 max-w-3xl text-center font-[family-name:var(--font-lato)] text-[var(--text-secondary)]">
        Representative feedback will appear here — content to be supplied.
      </p>

      <div className="testimonials-grid mt-14 grid gap-6 md:grid-cols-3 md:gap-8">
        {placeholders.map((p, i) => (
          <article
            key={i}
            className="testimonial-card flex min-h-[220px] flex-col rounded-2xl border border-dashed border-[var(--brand-gold)]/35 bg-[var(--bg-secondary)]/40 p-8 ring-1 ring-white/[0.04]"
          >
            <Quote className="h-8 w-8 text-[var(--brand-gold)]/50" strokeWidth={1.5} aria-hidden />
            <p className="mt-6 flex-1 font-[family-name:var(--font-lato)] text-lg italic text-[var(--text-secondary)]">
              {p.title}
            </p>
            <footer className="mt-6 border-t border-white/[0.08] pt-6">
              <p className="font-[family-name:var(--font-montserrat)] text-sm font-medium uppercase tracking-wide text-[var(--text-tertiary)]">
                {p.subtitle}
              </p>
            </footer>
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
}
