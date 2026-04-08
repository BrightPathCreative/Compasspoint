import type { Metadata } from "next";
import { SiteShell } from "@/components/global/SiteShell";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of service for CompassPoint Advisory Pty Ltd.",
  alternates: { canonical: "/terms" },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <SiteShell>
      <article className="mx-auto max-w-3xl px-8 pb-28 pt-32 md:px-14 md:pb-36 md:pt-40 lg:px-20">
        <h1 className="font-[family-name:var(--font-cormorant)] text-4xl font-bold text-[var(--text-primary)]">
          Terms of Service
        </h1>
        <p className="mt-8 font-[family-name:var(--font-lato)] text-sm text-[var(--text-secondary)]">
          Last updated: April 2026
        </p>
        <div className="mt-10 space-y-6 font-[family-name:var(--font-lato)] leading-[1.7] text-[var(--text-secondary)]">
          <p>
            These terms govern your use of the CompassPoint Advisory Pty Ltd website. By using this site, you
            agree to these terms.
          </p>
          <h2 className="font-[family-name:var(--font-cormorant)] text-2xl font-bold text-[var(--text-primary)]">
            Not professional advice
          </h2>
          <p>
            Website content is for general information only and does not constitute professional, financial, or
            legal advice. Engagements are governed by separate written agreements.
          </p>
          <h2 className="font-[family-name:var(--font-cormorant)] text-2xl font-bold text-[var(--text-primary)]">
            Intellectual property
          </h2>
          <p>
            All content on this site is owned by CompassPoint Advisory Pty Ltd or its licensors unless
            otherwise stated. You may not reproduce or distribute it without permission.
          </p>
          <h2 className="font-[family-name:var(--font-cormorant)] text-2xl font-bold text-[var(--text-primary)]">
            Limitation of liability
          </h2>
          <p>
            To the extent permitted by Australian law, we exclude liability arising from your use of this website.
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
