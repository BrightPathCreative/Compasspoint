import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "../global/Button";

export function HomeAboutSnapshotSection() {
  return (
    <section id="about-snapshot" className="bg-[var(--white)] py-24 md:py-32">
      <div className="mx-auto w-full max-w-[min(100%,1920px)] px-8 md:px-14 lg:px-20 xl:px-28">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20 lg:items-start">
          <ScrollReveal>
            <h2 className="font-[family-name:var(--font-cormorant)] text-3xl font-bold text-[var(--royal-plum)] md:text-4xl lg:text-[2.5rem]">
              About CompassPoint Advisory - Melbourne-Based Business Consultants for Australian SMEs
            </h2>
            <p className="mt-8 font-[family-name:var(--font-lato)] text-base leading-[1.7] text-[var(--charcoal)] md:text-lg">
              CompassPoint Advisory is a Melbourne-based strategic consulting firm purpose-built for Australian
              SMEs and startups in the $5M–$20M revenue range. We combine enterprise-grade rigour with practical,
              founder-friendly delivery - so you get clarity and momentum without the overhead of a big-four
              engagement.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="rounded-sm border border-[var(--metallic-gold)]/15 bg-[color-mix(in_srgb,var(--soft-ivory)_88%,var(--royal-plum))] p-8 md:p-10">
              <p className="font-[family-name:var(--font-montserrat)] text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--metallic-gold)]">
                Credentials
              </p>
              <p className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 font-[family-name:var(--font-montserrat)] text-xs font-semibold uppercase tracking-[0.14em] text-[var(--metallic-gold)]">
                <span>IBM</span>
                <span className="text-[var(--metallic-gold)]/40" aria-hidden>
                  ·
                </span>
                <span>Fujitsu</span>
                <span className="text-[var(--metallic-gold)]/40" aria-hidden>
                  ·
                </span>
                <span>DXC Technology</span>
                <span className="text-[var(--metallic-gold)]/40" aria-hidden>
                  ·
                </span>
                <span>Bupa</span>
              </p>
              <p className="mt-8 font-[family-name:var(--font-lato)] text-base leading-[1.7] text-[var(--charcoal)]">
                Founded by Amelia Ghofrany, our work is grounded in 20+ years of senior experience across these
                organisations. We help leadership teams align on strategy, tighten operations, navigate change,
                and adopt AI where it genuinely moves the needle.
              </p>
              <blockquote className="mt-8 border-l-[3px] border-[var(--metallic-gold)] pl-6 font-[family-name:var(--font-lato)] text-lg font-medium leading-snug text-[var(--royal-plum)]">
                Scaling a business shouldn&apos;t mean sacrificing control.
              </blockquote>
            </div>
          </ScrollReveal>
        </div>

        <div className="mt-12">
          <Button variant="secondary" href="/about">
            Learn More About Us →
          </Button>
        </div>
      </div>
    </section>
  );
}
