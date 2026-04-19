import { Quote } from "lucide-react";
import GoldDivider from "@/components/GoldDivider";
import ScrollReveal from "@/components/ScrollReveal";

const TESTIMONIALS = [
  {
    body: (
      <>
        <p>
          Amelia is an exceptional leader with a proven ability to translate strategy into measurable outcomes. In
          my capacity at Harbour Consulting, I&apos;ve engaged Amelia and her team across multiple initiatives,
          where they consistently delivered high-quality, insight-led outcomes.
        </p>
        <p className="mt-4">
          She brings a structured, commercially grounded approach to every engagement, with a clear focus on
          enabling growth and scale for SMEs. Amelia has a natural ability to build trust with stakeholders while
          maintaining a sharp consulting lens, making her a highly effective partner for organisations navigating
          digital transformation.
        </p>
      </>
    ),
    name: "Suzi Nikoloski",
    attribution: "Managing Partner, Harbour Consulting",
    surface: "cream" as const,
  },
  {
    body: (
      <>
        <p>
          We had a fantastic experience working with Amelia. She is incredibly knowledgeable in her field and
          genuinely passionate about helping others succeed. Her advice was not only practical but also tailored to
          our situation, making it easy to understand and implement.
        </p>
        <p className="mt-4">
          Amelia had a willingness to share valuable insights and tips that we could apply immediately to improve
          our business. She is approachable, supportive, and truly cares about her clients&apos; outcomes. I highly
          recommend Amelia to anyone looking for a skilled and reliable business advisor. Thank you again for your
          guidance and support.
        </p>
      </>
    ),
    name: "Navid K. Baghi",
    attribution: "Principal Solicitor, Amity Lawyers",
    surface: "white" as const,
  },
];

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

        <div className="mt-14 grid gap-8 lg:grid-cols-2 lg:gap-10 lg:items-stretch">
          {TESTIMONIALS.map((t, i) => (
            <ScrollReveal key={t.name} delay={i * 0.08} className="h-full">
              <figure
                className={`flex h-full min-h-0 flex-col rounded-sm border p-8 shadow-[0_2px_28px_-10px_rgba(56,7,41,0.1)] md:p-10 ${
                  t.surface === "cream"
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
                    {t.body}
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
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
