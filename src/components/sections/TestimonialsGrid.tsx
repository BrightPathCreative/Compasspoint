import { Quote } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import type { Testimonial } from "@/lib/testimonials";

type TestimonialsGridProps = {
  testimonials: Testimonial[];
  animate?: boolean;
};

export function TestimonialsGrid({ testimonials, animate = true }: TestimonialsGridProps) {
  return (
    <div className="grid gap-8 lg:grid-cols-2 lg:gap-10 lg:items-stretch">
      {testimonials.map((t, i) => {
        const surface = i % 2 === 0 ? "cream" : "white";
        const card = (
          <figure
            className={`flex h-full min-h-0 flex-col rounded-sm border p-8 shadow-[0_2px_28px_-10px_rgba(56,7,41,0.1)] md:p-10 ${
              surface === "cream"
                ? "border-[var(--metallic-gold)]/18 bg-[var(--cream)]"
                : "border-[var(--metallic-gold)]/22 bg-[var(--white)] ring-1 ring-[var(--metallic-gold)]/12"
            }`}
          >
            <Quote
              className="mb-5 h-9 w-9 shrink-0 text-[var(--metallic-gold)]/45"
              strokeWidth={1.25}
              aria-hidden
            />
            <blockquote className="flex min-h-0 flex-1 flex-col">
              <div className="font-[family-name:var(--font-lato)] text-[15px] leading-[1.75] text-[var(--charcoal)] md:text-base">
                {t.paragraphs.map((paragraph, paragraphIndex) => (
                  <p key={paragraphIndex} className={paragraphIndex > 0 ? "mt-4" : undefined}>
                    {paragraph}
                  </p>
                ))}
              </div>
              <figcaption className="mt-8">
                <p className="font-[family-name:var(--font-cormorant)] text-lg font-semibold text-[var(--royal-plum)]">
                  {t.name}
                </p>
                <p className="mt-1.5 font-[family-name:var(--font-lato)] text-sm text-[var(--charcoal)]/78">
                  {t.attribution}
                </p>
              </figcaption>
            </blockquote>
          </figure>
        );

        if (!animate) {
          return (
            <div key={t.name} className="h-full">
              {card}
            </div>
          );
        }

        return (
          <ScrollReveal key={t.name} delay={i * 0.08} className="h-full">
            {card}
          </ScrollReveal>
        );
      })}
    </div>
  );
}
