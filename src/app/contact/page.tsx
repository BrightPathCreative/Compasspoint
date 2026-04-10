import type { Metadata } from "next";
import { SiteShell } from "@/components/global/SiteShell";
import { Button } from "@/components/global/Button";
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
      <div className="mx-auto w-full max-w-[min(100%,1920px)] px-8 pb-28 pt-32 md:px-14 md:pb-36 md:pt-40 lg:px-20">
        <h1 className="font-[family-name:var(--font-cormorant)] text-4xl font-bold text-[var(--text-primary)] md:text-5xl">
          Get in Touch
        </h1>
        <p className="mt-6 max-w-2xl font-[family-name:var(--font-lato)] text-lg text-[var(--text-secondary)]">
          Book a free 30-minute discovery call to start the conversation.
        </p>

        <div className="mt-12 grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-[family-name:var(--font-cormorant)] text-2xl font-bold text-[var(--text-primary)]">
              Book a discovery call
            </h2>
            <div className="mt-4 min-h-[620px] overflow-hidden rounded-xl border border-[var(--brand-gold)]/20 bg-[var(--bg-secondary)]">
              <iframe
                title="Schedule a discovery call with CompassPoint Advisory"
                src={`${CALENDLY_URL}?embed=true`}
                width="100%"
                height="100%"
                className="min-h-[620px] w-full border-0"
                loading="lazy"
              />
            </div>
            <p className="mt-4 font-[family-name:var(--font-lato)] text-sm text-[var(--text-secondary)]">
              Prefer to open Calendly in a new tab?{" "}
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--brand-gold)] underline"
              >
                Open scheduling page
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="font-[family-name:var(--font-cormorant)] text-2xl font-bold text-[var(--text-primary)]">
              Other ways to connect
            </h2>
            <ul className="mt-6 space-y-3 font-[family-name:var(--font-lato)] text-[var(--text-secondary)]">
              <li>
                <span className="font-semibold text-[var(--text-primary)]">Website: </span>
                <a
                  href={FOUNDER_WEBSITE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--brand-gold)] hover:underline"
                >
                  {FOUNDER_WEBSITE.replace(/^https?:\/\//, "")}
                </a>
              </li>
              <li>
                <span className="font-semibold text-[var(--text-primary)]">Location: </span>
                Melbourne, Victoria, Australia
              </li>
            </ul>

            <div className="mt-10 rounded-xl border border-[var(--brand-gold)]/25 bg-[var(--bg-secondary)]/60 p-8">
              <h3 className="font-[family-name:var(--font-cormorant)] text-xl font-bold text-[var(--text-primary)]">
                Send a message
              </h3>
              <p className="mt-3 font-[family-name:var(--font-lato)] text-sm leading-relaxed text-[var(--text-secondary)]">
                A contact form will be available here soon. In the meantime, the fastest way to reach us is to book a
                discovery call.
              </p>
              <div className="mt-6">
                <Button href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                  Book a discovery call
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SiteShell>
  );
}
