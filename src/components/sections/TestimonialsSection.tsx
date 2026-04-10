"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { Quote } from "lucide-react";
import "@/lib/gsap-config";
import { SectionWrapper } from "../global/SectionWrapper";

const placeholders = [
  { kicker: "Case study", line: "Representative client story and measurable outcome will appear here." },
  { kicker: "Quote", line: "Short endorsement with name and role - content to be supplied." },
  { kicker: "Engagement", line: "Project snapshot: challenge, approach, and result - to be supplied." },
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
        Representative feedback will appear here - content to be supplied.
      </p>

      <div className="testimonials-grid mt-14 grid gap-8 md:grid-cols-3 md:gap-6">
        {placeholders.map((p, i) => (
          <article
            key={i}
            className="testimonial-card group relative flex min-h-[200px] flex-col overflow-hidden rounded-sm border border-[var(--brand-gold)]/18 bg-gradient-to-b from-[var(--brand-ivory)]/[0.06] to-transparent px-6 pb-8 pt-10 shadow-[inset_0_1px_0_0_rgba(199,154,68,0.12)] before:pointer-events-none before:absolute before:left-0 before:top-0 before:h-[3px] before:w-full before:bg-[var(--brand-gold)]/35"
          >
            <Quote
              className="h-6 w-6 text-[var(--brand-gold)]/40 transition-colors group-hover:text-[var(--brand-gold)]/55"
              strokeWidth={1.5}
              aria-hidden
            />
            <p className="mt-1 font-[family-name:var(--font-montserrat)] text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-[var(--brand-gold)]/80">
              {p.kicker}
            </p>
            <p className="mt-4 flex-1 font-[family-name:var(--font-lato)] text-[15px] leading-relaxed text-[var(--text-secondary)]">
              {p.line}
            </p>
            <footer className="mt-6 flex items-center gap-2 border-t border-[var(--brand-gold)]/12 pt-5">
              <span className="h-px flex-1 bg-[var(--brand-gold)]/20" aria-hidden />
              <span className="font-[family-name:var(--font-montserrat)] text-[10px] font-medium uppercase tracking-[0.18em] text-[var(--text-tertiary)]">
                Pending
              </span>
              <span className="h-px flex-1 bg-[var(--brand-gold)]/20" aria-hidden />
            </footer>
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
}
