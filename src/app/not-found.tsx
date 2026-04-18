import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "@/components/global/SiteShell";

export const metadata: Metadata = {
  title: "Page not found - CompassPoint Advisory",
  description: "The page you are looking for does not exist or has moved.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <SiteShell>
      <div className="bg-[var(--bg-primary)]">
        <div className="mx-auto w-full max-w-lg px-8 py-28 text-center md:px-14 md:py-36 lg:px-20">
          <p className="font-[family-name:var(--font-montserrat)] text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--metallic-gold)]">
            Error 404
          </p>
          <h1 className="mt-4 font-[family-name:var(--font-cormorant)] text-4xl font-bold text-[var(--text-primary)] md:text-5xl">
            Page not found
          </h1>
          <p className="mt-6 font-[family-name:var(--font-lato)] text-base leading-relaxed text-[var(--text-secondary)]">
            This address doesn&apos;t match a page on our site. Check the URL, or head back to the homepage.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
            <Link
              href="/"
              className="inline-flex min-h-11 items-center justify-center rounded-md bg-[var(--metallic-gold)] px-6 py-3 font-[family-name:var(--font-montserrat)] text-sm font-semibold uppercase tracking-wide text-[var(--royal-plum)] transition-transform hover:scale-[1.02]"
            >
              Back to home
            </Link>
            <Link
              href="/contact"
              className="inline-flex min-h-11 items-center justify-center rounded-md border border-[var(--metallic-gold)]/35 bg-transparent px-6 py-3 font-[family-name:var(--font-montserrat)] text-sm font-semibold uppercase tracking-wide text-[var(--royal-plum)] transition-colors hover:border-[var(--metallic-gold)]/55"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </SiteShell>
  );
}
