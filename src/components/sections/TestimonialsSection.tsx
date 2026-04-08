"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { Quote } from "lucide-react";
import "@/lib/gsap-config";
import { SectionWrapper } from "../global/SectionWrapper";

const quotes = [
  {
    quote:
      "Amelia reframed how we thought about scale. She walked our leadership team through a disciplined discovery process, then delivered a roadmap we could actually execute—not a slide deck that sat in a drawer. Her blend of boardroom rigour and founder empathy is rare.",
    name: "Daniel Whitmore",
    role: "Managing Director",
    org: "Northbridge Analytics, Melbourne",
  },
  {
    quote:
      "We engaged CompassPoint when our raise narrative felt scattered. Amelia sharpened our story, tightened the model, and coached us through investor conversations with calm confidence. She speaks the language of both operators and capital markets.",
    name: "Elena Varga",
    role: "Co-founder & COO",
    org: "Riverside Health, Sydney",
  },
  {
    quote:
      "Working with Amelia is direct and human. She challenges assumptions without drama, and every session leaves me with clarity on the next decision—not more theory. I recommend her to any founder who is serious about growth beyond the hustle phase.",
    name: "Marcus Chen",
    role: "Founder",
    org: "Ledger & Lane, Brisbane",
  },
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
    <SectionWrapper id="testimonials" ref={containerRef} className="section-brand-plum">
      <h2 className="text-center font-[family-name:var(--font-cormorant)] text-3xl font-semibold text-[var(--text-primary)] md:text-5xl">
        What Our Clients Say
      </h2>
      <p className="mx-auto mt-6 max-w-3xl text-center text-base text-[var(--text-secondary)]">
        Representative feedback from Amelia&apos;s advisory and coaching engagements.
      </p>

      <div className="testimonials-grid mt-14 grid gap-6 sm:gap-7 md:mt-20 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
        {quotes.map((q) => (
          <article
            key={q.name}
            className="testimonial-card group flex h-full flex-col rounded-2xl border border-white/[0.08] bg-gradient-to-b from-[color-mix(in_srgb,var(--brand-plum-deep)_75%,transparent)] to-[color-mix(in_srgb,var(--brand-plum)_80%,transparent)] p-6 shadow-[0_24px_64px_-32px_rgba(0,0,0,0.55)] ring-1 ring-white/[0.05] transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-1 hover:border-[var(--brand-gold)]/25 hover:shadow-[0_28px_70px_-28px_rgba(0,0,0,0.6)] md:p-8"
          >
            <div className="mb-4 flex items-center gap-2 text-[var(--brand-gold)]/90">
              <Quote className="h-6 w-6 shrink-0" strokeWidth={1.75} aria-hidden />
              <span className="h-px flex-1 bg-gradient-to-r from-[var(--brand-gold)]/70 to-transparent" aria-hidden />
            </div>
            <p className="flex-1 text-[0.95rem] leading-relaxed text-[color-mix(in_srgb,var(--brand-ivory)_92%,white)] md:text-[1.05rem]">
              {q.quote}
            </p>
            <footer className="mt-8 border-t border-white/[0.06] pt-6">
              <p className="font-[family-name:var(--font-montserrat)] font-medium text-[var(--text-primary)]">{q.name}</p>
              <p className="mt-1 font-[family-name:var(--font-lato)] text-sm text-[var(--text-secondary)]">
                {q.role}
                <span className="text-[var(--text-tertiary)]"> · </span>
                {q.org}
              </p>
            </footer>
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
}
