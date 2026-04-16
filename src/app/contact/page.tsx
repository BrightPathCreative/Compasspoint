import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { SiteShell } from "@/components/global/SiteShell";
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
      <div className="border-b border-[var(--metallic-gold)]/12 bg-[color-mix(in_srgb,var(--bg-secondary)_92%,var(--royal-plum))]">
        <div className="mx-auto w-full max-w-[min(100%,720px)] px-8 pb-12 pt-32 text-center md:px-14 md:pb-16 md:pt-40 lg:px-20">
          <p className="font-[family-name:var(--font-montserrat)] text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--metallic-gold)]">
            Contact
          </p>
          <h1 className="mt-4 font-[family-name:var(--font-cormorant)] text-4xl font-bold text-[var(--text-primary)] md:text-5xl">
            Send an enquiry
          </h1>
        </div>
      </div>

      <div className="mx-auto w-full max-w-[min(100%,720px)] px-8 py-14 md:px-14 md:py-20 lg:px-20">
        <section aria-labelledby="form-heading">
          <h2 id="form-heading" className="font-[family-name:var(--font-cormorant)] text-2xl font-bold text-[var(--text-primary)]">
            Message form
          </h2>
          <p className="mt-3 font-[family-name:var(--font-lato)] text-sm leading-relaxed text-[var(--text-secondary)]">
            The more context you share, the more useful our reply.
          </p>
          <div className="mt-8 rounded-xl border border-[var(--metallic-gold)]/25 bg-[var(--bg-secondary)]/80 p-8 md:p-10">
            <ContactForm />
          </div>
        </section>

        <p className="mt-14 text-center font-[family-name:var(--font-lato)] text-sm text-[var(--text-tertiary)]">
          Looking for the calendar only?{" "}
          <Link href={BOOK_DISCOVERY_PATH} className="text-[var(--metallic-gold)] underline-offset-2 hover:underline">
            Book a discovery call
          </Link>
        </p>
      </div>
    </SiteShell>
  );
}
