import { forwardRef, type ReactNode } from "react";

/** Wide content shell — use for full-bleed sections that manage their own grid. */
export const SECTION_CONTENT_CLASS =
  "mx-auto w-full max-w-[min(100%,1920px)] px-8 py-24 md:px-14 md:py-32 lg:px-20 xl:px-28";

type SectionWrapperProps = {
  children: ReactNode;
  className?: string;
  id?: string;
};

export const SectionWrapper = forwardRef<HTMLElement, SectionWrapperProps>(
  function SectionWrapper({ children, className = "", id }, ref) {
    return (
      <section ref={ref} id={id} className={`w-full ${className}`}>
        <div className={SECTION_CONTENT_CLASS}>{children}</div>
      </section>
    );
  },
);
