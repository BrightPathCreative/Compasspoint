import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/components/global/SiteShell";
import { PageHero } from "@/components/sections/PageHero";
import { CALENDLY_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Book a Free Discovery Call - CompassPoint Advisory",
  description:
    "Schedule a confidential 30-minute discovery call with CompassPoint Advisory. No obligation - Melbourne-based, serving SMEs across Australia.",
  alternates: { canonical: "/book" },
  openGraph: {
    title: "Book a Free Discovery Call - CompassPoint Advisory",
    description: "Schedule a confidential 30-minute discovery call. No obligation.",
    url: "/book",
  },
};

export default function BookDiscoveryPage() {
  return (
    <SiteShell>
      <PageHero
        title="Book a discovery call"
        subtitle="30 minutes, confidential, no sales pressure - pick a time that suits you."
      />

      <div className="mx-auto w-full max-w-[min(100%,920px)] px-8 pb-24 pt-10 md:px-14 md:pb-28 lg:px-20">
        <div className="min-h-[640px] overflow-hidden rounded-xl border border-[var(--metallic-gold)]/25 bg-[var(--bg-secondary)] shadow-[0_8px_40px_rgba(0,0,0,0.25)]">
          <iframe
            title="Schedule a discovery call with CompassPoint Advisory"
            src={`${CALENDLY_URL}?embed=true`}
            width="100%"
            height="100%"
            className="min-h-[640px] w-full border-0"
            loading="lazy"
          />
        </div>
        <p className="mt-6 text-center font-[family-name:var(--font-lato)] text-sm text-[var(--text-secondary)]">
          Widget not loading?{" "}
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--metallic-gold)] underline-offset-2 hover:underline"
          >
            Open Calendly in a new tab
          </a>
          .
        </p>
        <p className="mt-10 text-center font-[family-name:var(--font-lato)] text-[var(--text-secondary)]">
          Prefer a written message first?{" "}
          <Link href="/contact" className="font-semibold text-[var(--metallic-gold)] underline-offset-2 hover:underline">
            Go to Contact
          </Link>
        </p>
      </div>
    </SiteShell>
  );
}
