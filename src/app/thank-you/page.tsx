import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/components/global/SiteShell";
import { BOOK_DISCOVERY_PATH } from "@/lib/site";

export const metadata: Metadata = {
  title: "Thank You - CompassPoint Advisory",
  description: "Your message has been received. We will be in touch soon.",
  alternates: { canonical: "/thank-you" },
  robots: { index: false, follow: true },
  openGraph: {
    title: "Thank You - CompassPoint Advisory",
    description: "Your message has been received.",
    url: "/thank-you",
  },
};

export default function ThankYouPage() {
  return (
    <SiteShell>
      <div className="border-b border-[var(--metallic-gold)]/12 bg-[color-mix(in_srgb,var(--bg-secondary)_92%,var(--royal-plum))]">
        <div className="mx-auto w-full max-w-[min(100%,640px)] px-8 pb-12 pt-32 text-center md:px-14 md:pb-16 md:pt-40 lg:px-20">
          <p className="font-[family-name:var(--font-montserrat)] text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--metallic-gold)]">
            Thank you
          </p>
          <h1 className="mt-4 font-[family-name:var(--font-cormorant)] text-4xl font-bold text-[var(--text-primary)] md:text-5xl">
            We received your message
          </h1>
        </div>
      </div>

      <div className="mx-auto w-full max-w-[min(100%,640px)] px-8 py-14 md:px-14 md:py-20 lg:px-20">
        <div className="rounded-xl border border-[var(--metallic-gold)]/25 bg-[var(--bg-secondary)]/80 p-8 text-center md:p-10">
          <p className="font-[family-name:var(--font-lato)] text-base leading-relaxed text-[var(--text-secondary)]">
            Thank you for getting in touch. We read every enquiry and will respond as soon as we can.
          </p>
          <p className="mt-4 font-[family-name:var(--font-lato)] text-sm leading-relaxed text-[var(--text-tertiary)]">
            If your matter is time-sensitive, booking a short call is often the fastest next step.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
            <Link
              href="/"
              className="inline-flex min-h-11 items-center justify-center rounded-md border border-[var(--metallic-gold)]/35 bg-[var(--white)] px-6 py-3 font-[family-name:var(--font-montserrat)] text-sm font-semibold uppercase tracking-wide text-[var(--royal-plum)] transition-colors hover:border-[var(--metallic-gold)]/55"
            >
              Back to home
            </Link>
            <Link
              href={BOOK_DISCOVERY_PATH}
              className="inline-flex min-h-11 items-center justify-center rounded-md bg-[var(--metallic-gold)] px-6 py-3 font-[family-name:var(--font-montserrat)] text-sm font-semibold uppercase tracking-wide text-[var(--royal-plum)] transition-transform hover:scale-[1.02]"
            >
              Book a discovery call
            </Link>
          </div>
        </div>
      </div>
    </SiteShell>
  );
}
