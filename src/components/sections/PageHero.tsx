type PageHeroProps = {
  title: string;
  subtitle?: string;
};

/** Plum banner hero for inner pages (~40vh). */
export function PageHero({ title, subtitle }: PageHeroProps) {
  return (
    <section className="relative flex min-h-[40vh] flex-col items-center justify-center overflow-hidden bg-[var(--royal-plum)] px-8 pb-16 pt-36 text-center md:px-14 md:pb-20 md:pt-40 lg:px-20">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        aria-hidden
        style={{
          backgroundImage: `url("/brand-icon.svg")`,
          backgroundPosition: "50% 55%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "min(420px, 70vw)",
          transform: "rotate(10deg)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(62,15,52,0.55)_100%)]"
        aria-hidden
      />
      <div className="relative z-[1] mx-auto max-w-4xl">
        <h1 className="font-[family-name:var(--font-cinzel)] text-3xl font-bold uppercase tracking-[0.06em] text-[var(--soft-ivory)] md:text-4xl lg:text-[2.75rem]">
          {title}
        </h1>
        {subtitle ? (
          <p className="mt-6 font-[family-name:var(--font-lato)] text-lg text-[var(--soft-ivory)]/75 md:text-xl">
            {subtitle}
          </p>
        ) : null}
      </div>
    </section>
  );
}
