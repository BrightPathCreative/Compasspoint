"use client";

import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";
import type { FaqItem } from "@/lib/faq";

type FaqAccordionProps = {
  items: FaqItem[];
};

export function FaqAccordion({ items }: FaqAccordionProps) {
  const baseId = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((item, i) => {
        const panelId = `${baseId}-panel-${i}`;
        const headerId = `${baseId}-header-${i}`;
        const isOpen = openIndex === i;

        return (
          <div
            key={item.question}
            className="rounded-xl border border-[var(--brand-charcoal)]/20 bg-[var(--brand-ivory)] shadow-sm"
          >
            <h2 className="text-base font-semibold md:text-lg">
              <button
                type="button"
                id={headerId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-[family-name:var(--font-cormorant)] text-[var(--brand-charcoal)] transition-colors hover:text-[var(--brand-plum)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-gold)] focus-visible:ring-offset-2 md:px-6 md:py-5"
                onClick={() => setOpenIndex(isOpen ? null : i)}
              >
                <span>{item.question}</span>
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-[var(--brand-gold)] transition-transform ${isOpen ? "rotate-180" : ""}`}
                  aria-hidden
                />
              </button>
            </h2>
            <div
              id={panelId}
              role="region"
              aria-labelledby={headerId}
              hidden={!isOpen}
              className={isOpen ? "block" : "hidden"}
            >
              <p className="border-t border-[var(--brand-charcoal)]/10 px-5 py-4 font-[family-name:var(--font-lato)] leading-[1.7] text-[var(--brand-charcoal)] md:px-6 md:py-5">
                {item.answer}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
