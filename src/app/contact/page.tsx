import type { Metadata } from "next";
import Link from "next/link";
import { GhlContactFormEmbed } from "@/components/contact/GhlContactFormEmbed";
import { SiteShell } from "@/components/global/SiteShell";
import { CONTACT_EMAIL_PUBLIC } from "@/lib/contact";
import { BOOK_DISCOVERY_PATH } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact CompassPoint Advisory - Send an Enquiry",
  description:
    "Send a message to CompassPoint Advisory - general enquiries, introductions, and questions. Melbourne-based, serving Australian SMEs nationally.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact CompassPoint Advisory - Send an Enquiry",
    description: "Written enquiries and questions. We read every message.",
    url: "/contact",
  },
};

export default function ContactPage() {
  return (
    <SiteShell>
      <div className="bg-[var(--bg-primary)]">
        <div className="mx-auto w-full max-w-5xl px-8 pb-4 pt-32 text-center md:px-14 md:pb-6 md:pt-40 lg:px-20">
          <p className="font-[family-name:var(--font-montserrat)] text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--metallic-gold)]">
            Contact
          </p>
          <h1 className="mt-4 font-[family-name:var(--font-cormorant)] text-4xl font-bold text-[var(--text-primary)] md:text-5xl">
            Send an enquiry
          </h1>
          <p className="mx-auto mt-6 max-w-xl font-[family-name:var(--font-lato)] text-sm text-[var(--text-secondary)] md:text-base">
            Prefer email?{" "}
            <a
              href={`mailto:${CONTACT_EMAIL_PUBLIC}`}
              className="text-[var(--metallic-gold)] underline-offset-2 hover:underline"
            >
              {CONTACT_EMAIL_PUBLIC}
            </a>
          </p>
        </div>

        <div className="mx-auto w-full max-w-5xl px-8 pb-14 pt-2 md:px-14 md:pb-20 md:pt-4 lg:px-20">
          <section aria-label="Enquiry form">
            <GhlContactFormEmbed />
          </section>

          <p className="mt-14 text-center font-[family-name:var(--font-lato)] text-sm text-[var(--text-tertiary)]">
            Looking for the calendar only?{" "}
            <Link href={BOOK_DISCOVERY_PATH} className="text-[var(--metallic-gold)] underline-offset-2 hover:underline">
              Book a discovery call
            </Link>
          </p>
        </div>
      </div>
    </SiteShell>
  );
}
