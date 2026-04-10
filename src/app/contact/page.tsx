import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "@/components/ContactForm";
import { Button } from "@/components/global/Button";
import { SiteShell } from "@/components/global/SiteShell";
import { BOOK_DISCOVERY_PATH, FOUNDER_WEBSITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact CompassPoint Advisory — Send an Enquiry",
  description:
    "Send a message to CompassPoint Advisory — general enquiries, introductions, and questions. Melbourne-based, serving Australian SMEs nationally.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact CompassPoint Advisory — Send an Enquiry",
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
          <p className="mx-auto mt-6 max-w-xl font-[family-name:var(--font-lato)] text-lg leading-relaxed text-[var(--text-secondary)]">
            Use this page for <strong className="font-medium text-[var(--text-primary)]">written messages</strong>{" "}
            — scope questions, introductions, or anything that isn&apos;t urgent. We typically reply within two
            business days.
          </p>
        </div>
      </div>

      <div className="mx-auto w-full max-w-[min(100%,720px)] px-8 py-14 md:px-14 md:py-20 lg:px-20">
        <section
          aria-labelledby="book-call-heading"
          className="rounded-sm border border-[var(--metallic-gold)]/30 bg-[var(--royal-plum)]/35 p-8 text-center md:p-10"
        >
          <h2 id="book-call-heading" className="font-[family-name:var(--font-cormorant)] text-2xl font-bold text-[var(--text-primary)] md:text-3xl">
            Want a discovery call instead?
          </h2>
          <p className="mx-auto mt-4 max-w-md font-[family-name:var(--font-lato)] text-[var(--text-secondary)]">
            If you&apos;d rather speak live first, book a free 30-minute call — confidential, no obligation — on our
            scheduling page.
          </p>
          <div className="mt-8">
            <Button href={BOOK_DISCOVERY_PATH}>Book a free discovery call</Button>
          </div>
          <p className="mt-5 font-[family-name:var(--font-lato)] text-sm text-[var(--text-tertiary)]">
            Next, you&apos;ll open our scheduling page with the live calendar — still on this website.
          </p>
        </section>

        <div className="relative my-14 flex items-center gap-4">
          <span className="h-px flex-1 bg-[var(--metallic-gold)]/20" aria-hidden />
          <span className="font-[family-name:var(--font-montserrat)] text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--text-tertiary)]">
            Or write to us
          </span>
          <span className="h-px flex-1 bg-[var(--metallic-gold)]/20" aria-hidden />
        </div>

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

        <ul className="mt-14 space-y-3 border-t border-[var(--metallic-gold)]/15 pt-10 font-[family-name:var(--font-lato)] text-[var(--text-secondary)]">
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

        <p className="mt-10 text-center font-[family-name:var(--font-lato)] text-sm text-[var(--text-tertiary)]">
          Looking for the calendar only?{" "}
          <Link href={BOOK_DISCOVERY_PATH} className="text-[var(--metallic-gold)] underline-offset-2 hover:underline">
            Book a discovery call
          </Link>
        </p>
      </div>
    </SiteShell>
  );
}
