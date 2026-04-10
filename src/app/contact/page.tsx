import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { SiteShell } from "@/components/global/SiteShell";
import { CtaSection } from "@/components/sections/CtaSection";
import { CALENDLY_URL, FOUNDER_WEBSITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact CompassPoint Advisory — Book a Free Discovery Call",
  description:
    "Get in touch with CompassPoint Advisory. Book a free, confidential discovery call with founder Amelia Ghofrany. Melbourne-based, serving all of Australia.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <SiteShell>
      <div className="mx-auto w-full max-w-[min(100%,1920px)] px-8 pb-16 pt-32 md:px-14 md:pb-24 md:pt-40 lg:px-20">
        <h1 className="font-[family-name:var(--font-cormorant)] text-4xl font-bold text-[var(--text-primary)] md:text-5xl">
          Get in Touch
        </h1>
        <p className="mt-6 max-w-2xl font-[family-name:var(--font-lato)] text-lg text-[var(--text-secondary)]">
          Book a free 30-minute discovery call — or send a message and we&apos;ll respond as soon as we can.
        </p>

        <div className="mt-14 grid gap-16 lg:grid-cols-2 lg:gap-20">
          <div className="min-w-0">
            <h2 className="font-[family-name:var(--font-cormorant)] text-2xl font-bold text-[var(--text-primary)]">
              Book a discovery call
            </h2>
            <p className="mt-3 font-[family-name:var(--font-lato)] text-sm text-[var(--text-secondary)]">
              Scheduling opens below — pick a time that suits you.
            </p>
            <div className="mt-6 min-h-[640px] overflow-hidden rounded-xl border border-[var(--metallic-gold)]/20 bg-[var(--bg-secondary)]">
              <iframe
                title="Schedule a discovery call with CompassPoint Advisory"
                src={`${CALENDLY_URL}?embed=true`}
                width="100%"
                height="100%"
                className="min-h-[640px] w-full border-0"
                loading="lazy"
              />
            </div>
            <p className="mt-4 font-[family-name:var(--font-lato)] text-sm text-[var(--text-secondary)]">
              Prefer a new tab?{" "}
              <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="text-[var(--metallic-gold)] underline">
                Open Calendly
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="font-[family-name:var(--font-cormorant)] text-2xl font-bold text-[var(--text-primary)]">
              Send a message
            </h2>
            <p className="mt-3 font-[family-name:var(--font-lato)] text-sm leading-relaxed text-[var(--text-secondary)]">
              Share a short brief — we read every note. For urgent topics, booking a call is still fastest.
            </p>
            <div className="mt-8 rounded-xl border border-[var(--metallic-gold)]/25 bg-[var(--bg-secondary)]/80 p-8">
              <ContactForm />
            </div>
            <ul className="mt-10 space-y-3 font-[family-name:var(--font-lato)] text-[var(--text-secondary)]">
              <li>
                <span className="font-semibold text-[var(--text-primary)]">Website: </span>
                <a
                  href={FOUNDER_WEBSITE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--metallic-gold)] hover:underline"
                >
                  {FOUNDER_WEBSITE.replace(/^https?:\/\//, "")}
                </a>
              </li>
              <li>
                <span className="font-semibold text-[var(--text-primary)]">Location: </span>
                Melbourne, Victoria, Australia
              </li>
            </ul>
          </div>
        </div>
      </div>
      <CtaSection />
    </SiteShell>
  );
}
