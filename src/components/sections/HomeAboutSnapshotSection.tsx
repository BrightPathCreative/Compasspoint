import { Button } from "../global/Button";

export function HomeAboutSnapshotSection() {
  return (
    <section id="about-snapshot" className="bg-[var(--bg-primary)] py-24 md:py-32">
      <div className="mx-auto w-full max-w-[min(100%,1920px)] px-8 md:px-14 lg:px-20 xl:px-28">
        <h2 className="max-w-4xl font-[family-name:var(--font-cormorant)] text-3xl font-bold text-[var(--text-primary)] md:text-4xl lg:text-[2.5rem]">
          About CompassPoint Advisory — Melbourne-Based Business Consultants for Australian SMEs
        </h2>
        <div className="mt-10 max-w-3xl space-y-6 font-[family-name:var(--font-lato)] text-base leading-[1.7] text-[var(--text-secondary)] md:text-lg">
          <p>
            CompassPoint Advisory is a Melbourne-based strategic consulting firm purpose-built for Australian
            SMEs and startups in the $5M–$20M revenue range. We combine enterprise-grade rigour with practical,
            founder-friendly delivery — so you get clarity and momentum without the overhead of a big-four
            engagement.
          </p>
          <p>
            Founded by Amelia Ghofrany, our work is grounded in 20+ years of senior experience across IBM,
            Fujitsu, DXC Technology, and Bupa. We help leadership teams align on strategy, tighten operations,
            navigate change, and adopt AI where it genuinely moves the needle.
          </p>
          <p>
            Scaling a business shouldn&apos;t mean sacrificing control. We act as a dedicated partner —
            learning your business deeply and working alongside you to drive measurable outcomes.
          </p>
        </div>
        <div className="mt-10">
          <Button variant="secondary" href="/about">
            Learn More About Us →
          </Button>
        </div>
      </div>
    </section>
  );
}
