import Link from "next/link";
import GoldDivider from "@/components/GoldDivider";
import ScrollReveal from "@/components/ScrollReveal";
import { TestimonialsGrid } from "@/components/sections/TestimonialsGrid";
import { TESTIMONIALS } from "@/lib/testimonials";

export function HomeTestimonialsSection() {
  return (
    <section
      id="client-testimonials"
      aria-labelledby="home-testimonials-heading"
      className="border-t border-[var(--metallic-gold)]/12 bg-[var(--white)] py-24 md:py-32"
    >
      <div className="mx-auto w-full max-w-[min(100%,1920px)] px-8 md:px-14 lg:px-20 xl:px-28">
        <ScrollReveal className="mx-auto max-w-3xl text-center">
          <h2
            id="home-testimonials-heading"
            className="font-[family-name:var(--font-cormorant)] text-4xl font-bold leading-tight text-[var(--royal-plum)] md:text-5xl lg:text-[2.85rem] lg:leading-[1.12]"
          >
            Client Testimonials
          </h2>
          <p className="mx-auto mt-5 max-w-2xl font-[family-name:var(--font-lato)] text-base leading-relaxed text-[var(--charcoal)]/80 md:text-lg">
            What our clients say
          </p>
          <div className="mt-8 flex justify-center">
            <GoldDivider />
          </div>
        </ScrollReveal>

        <div className="mt-14">
          <TestimonialsGrid testimonials={TESTIMONIALS} />
        </div>

        <p className="mt-12 text-center">
          <Link
            href="/testimonials"
            className="font-[family-name:var(--font-montserrat)] text-sm font-semibold tracking-wide text-[var(--metallic-gold)] underline-offset-4 transition-colors hover:text-[var(--accent-gold-hover)] hover:underline"
          >
            View all testimonials
          </Link>
        </p>
      </div>
    </section>
  );
}
