"use client";

import { useId, useState } from "react";
import type { FaqItem } from "@/lib/faq";

type FaqAccordionProps = {
  items: FaqItem[];
  /** `minimal` — flat dividers, dark-theme friendly. `card` — bordered ivory cards (e.g. light sections). */
  variant?: "minimal" | "card";
  /** Default open panel; `undefined` opens the first item. Pass `null` to start with all panels closed. */
  initialOpenIndex?: number | null;
};

export function FaqAccordion({
  items,
  variant = "minimal",
  initialOpenIndex,
}: FaqAccordionProps) {
  const baseId = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(() =>
    initialOpenIndex === undefined ? 0 : initialOpenIndex,
  );

  return (
    <div className={variant === "card" ? "space-y-3" : "divide-y divide-[var(--border-gold-soft)] border border-[var(--border-gold-soft)]/80 rounded-sm"}>
      {items.map((item, i) => {
        const panelId = `${baseId}-panel-${i}`;
        const headerId = `${baseId}-header-${i}`;
        const isOpen = openIndex === i;

        const cardShell =
          variant === "card"
            ? "overflow-hidden rounded-sm border border-[var(--metallic-gold)]/22 bg-[var(--brand-ivory)] shadow-sm"
            : "overflow-hidden bg-transparent";

        const questionClass =
          variant === "card"
            ? "faq-accordion-question flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-[family-name:var(--font-cormorant)] text-xl font-bold leading-[1.2] text-[var(--royal-plum)] transition-colors hover:text-[var(--metallic-gold)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--metallic-gold)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--brand-ivory)] md:px-6 md:py-5 md:text-2xl"
            : "faq-accordion-question flex w-full items-center justify-between gap-4 px-5 py-5 text-left font-[family-name:var(--font-cormorant)] text-xl font-bold leading-[1.2] text-[var(--text-primary)] transition-colors hover:text-[var(--metallic-gold)] md:px-6 md:py-[1.35rem] md:text-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--metallic-gold)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg-primary)]";

        const chevronClass =
          variant === "card"
            ? "flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[var(--metallic-gold)]/30 bg-[color-mix(in_srgb,var(--metallic-gold)_12%,#ffffff)] font-[family-name:var(--font-montserrat)] text-base font-semibold text-[var(--metallic-gold)]"
            : "flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[var(--metallic-gold)]/25 bg-[var(--bg-secondary)]/80 font-[family-name:var(--font-montserrat)] text-base text-[var(--metallic-gold)]";

        const answerClass =
          variant === "card"
            ? "border-t border-[var(--metallic-gold)]/15 px-5 py-4 font-[family-name:var(--font-lato)] text-base font-normal leading-[1.75] text-[var(--charcoal)] md:px-6 md:py-5 md:text-lg"
            : "px-5 pb-6 font-[family-name:var(--font-lato)] text-base font-normal leading-[1.75] text-[var(--text-secondary)] md:px-6 md:pb-7 md:text-lg";

        return (
          <div key={`${baseId}-${i}`} className={cardShell}>
            <h2 className="m-0">
              <button
                type="button"
                id={headerId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                className={questionClass}
                onClick={() => setOpenIndex(isOpen ? null : i)}
              >
                <span className="pr-4">{item.question}</span>
                <span className={chevronClass} aria-hidden>
                  {isOpen ? "−" : "+"}
                </span>
              </button>
            </h2>
            <div
              id={panelId}
              role="region"
              aria-labelledby={headerId}
              className="grid transition-[grid-template-rows] duration-300 ease-out"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className="min-h-0 overflow-hidden">
                <p className={answerClass}>{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
