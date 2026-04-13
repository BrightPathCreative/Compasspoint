/** Fading horizontal rule between service rows. */
export function ServicesOverviewDivider() {
  return (
    <div
      className="h-px w-full shrink-0 bg-[linear-gradient(to_right,transparent,rgba(92,26,74,0.15)_20%,rgba(92,26,74,0.15)_80%,transparent)]"
      aria-hidden
    />
  );
}
