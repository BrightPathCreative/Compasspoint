import type { Metadata } from "next";
import { SiteShell } from "@/components/global/SiteShell";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for CompassPoint Advisory Pty Ltd.",
  alternates: { canonical: "/privacy-policy" },
  robots: { index: true, follow: true },
};

export default function PrivacyPolicyPage() {
  return (
    <SiteShell>
      <article className="mx-auto max-w-3xl px-8 pb-28 pt-32 md:px-14 md:pb-36 md:pt-40 lg:px-20">
        <h1 className="font-[family-name:var(--font-cormorant)] text-4xl font-bold text-[var(--text-primary)]">
          Privacy Policy
        </h1>
        <p className="mt-8 font-[family-name:var(--font-lato)] text-sm text-[var(--text-secondary)]">
          Last updated: April 2026
        </p>
        <div className="mt-10 space-y-6 font-[family-name:var(--font-lato)] leading-[1.7] text-[var(--text-secondary)]">
          <p>
            CompassPoint Advisory Pty Ltd (&quot;we&quot;, &quot;us&quot;) respects your privacy. This policy
            describes how we collect, use, and protect personal information you provide through this website,
            contact forms, and discovery calls.
          </p>
          <h2 className="font-[family-name:var(--font-cormorant)] text-2xl font-bold text-[var(--text-primary)]">
            Information we collect
          </h2>
          <p>
            We may collect your name, email address, phone number, company details, and message content when you
            contact us, book a call via our scheduling tool, or subscribe to updates.
          </p>
          <h2 className="font-[family-name:var(--font-cormorant)] text-2xl font-bold text-[var(--text-primary)]">
            How we use information
          </h2>
          <p>
            We use this information to respond to enquiries, deliver services, improve our website, and comply
            with legal obligations. We do not sell your personal information.
          </p>
          <h2 className="font-[family-name:var(--font-cormorant)] text-2xl font-bold text-[var(--text-primary)]">
            Third parties
          </h2>
          <p>
            Scheduling, analytics, and hosting may be provided by trusted processors (for example Calendly,
            Vercel) under their respective privacy terms.
          </p>
          <h2 className="font-[family-name:var(--font-cormorant)] text-2xl font-bold text-[var(--text-primary)]">
            Contact
          </h2>
          <p>
            For privacy questions, contact us using the details on our{" "}
            <a href="/contact" className="text-[var(--brand-gold)] hover:underline">
              contact page
            </a>
            .
          </p>
          <p className="text-sm text-[var(--text-tertiary)]">
            This is a summary template only and does not constitute legal advice. Have it reviewed by a qualified
            professional before publication.
          </p>
        </div>
      </article>
    </SiteShell>
  );
}
