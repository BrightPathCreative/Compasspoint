"use client";

import { Mail } from "lucide-react";
import { LINKEDIN_URL } from "@/lib/contact";
import { BOOK_DISCOVERY_PATH, BRIGHT_PATH_CONTACT_URL } from "@/lib/site";
import { BrandLockup } from "./BrandLockup";

const footerLinks = [
  ["/about", "About"],
  ["/services", "Services"],
  ["/methodology", "Methodology"],
  ["/faq", "FAQ"],
  ["/contact", "Contact"],
  ["/privacy-policy", "Privacy Policy"],
  ["/terms", "Terms of Service"],
] as const;

export function Footer() {
  return (
    <footer className="site-footer text-[var(--text-on-dark)]">
      <div className="mx-auto w-full max-w-[min(100%,1920px)] px-8 pb-10 md:px-14 md:pb-12 lg:px-20">
        <div className="grid gap-12 md:grid-cols-3">
          <div className="space-y-4">
            <div className="footer-emblem-glow flex flex-col gap-3 sm:flex-row sm:items-center">
              <BrandLockup variant="onPlum" clickable={false} />
            </div>
            <p className="max-w-sm font-[family-name:var(--font-lato)] text-sm leading-relaxed text-[var(--text-on-dark-muted)]">
              Strategic consulting for Australian SMEs and startups - Melbourne-based, nationally active.
            </p>
            <div className="flex gap-4">
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/20 p-2 transition-colors hover:border-[var(--brand-gold)] hover:text-[var(--brand-gold)]"
                aria-label="CompassPoint Advisory on LinkedIn"
              >
                <LinkedInGlyph className="h-5 w-5" />
              </a>
              <a
                href="/contact"
                className="rounded-full border border-white/20 p-2 transition-colors hover:border-[var(--brand-gold)] hover:text-[var(--brand-gold)]"
                aria-label="Contact us"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-[family-name:var(--font-montserrat)] text-sm font-semibold uppercase tracking-wider text-[var(--brand-gold)]">
              Quick links
            </h3>
            <ul className="space-y-2 font-[family-name:var(--font-lato)] text-sm">
              {footerLinks.map(([href, label]) => (
                <li key={href}>
                  <a
                    href={href}
                    className="text-[var(--text-on-dark-muted)] transition-colors hover:text-[var(--text-on-dark)]"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-[family-name:var(--font-montserrat)] text-sm font-semibold uppercase tracking-wider text-[var(--brand-gold)]">
              Contact
            </h3>
            <p className="font-[family-name:var(--font-lato)] text-sm text-[var(--text-on-dark-muted)]">
              Melbourne, Victoria, Australia
            </p>
            <p className="mt-3">
              <a
                href={BOOK_DISCOVERY_PATH}
                className="inline-flex font-[family-name:var(--font-montserrat)] text-sm font-semibold uppercase tracking-wide text-[var(--brand-gold)] underline-offset-4 hover:underline"
              >
                Book a discovery call
              </a>
            </p>
            <form className="mt-6 flex max-w-md flex-col gap-2 sm:flex-row" onSubmit={(e) => e.preventDefault()}>
              <label htmlFor="footer-email" className="sr-only">
                Email for newsletter
              </label>
              <input
                id="footer-email"
                type="email"
                placeholder="Your email"
                className="min-h-11 flex-1 rounded-md border border-[var(--metallic-gold)]/25 bg-[var(--cream)]/90 px-3 font-[family-name:var(--font-lato)] text-sm text-[var(--charcoal)] placeholder:text-[var(--text-tertiary)] focus:border-[var(--metallic-gold)] focus:outline-none"
              />
              <button
                type="submit"
                className="rounded-md border border-[var(--metallic-gold)] bg-[var(--metallic-gold)] px-4 py-2 font-[family-name:var(--font-montserrat)] text-sm font-semibold text-[var(--royal-plum)] transition-colors hover:bg-[var(--bright-gold)]"
              >
                Subscribe
              </button>
            </form>
            <p className="mt-3 max-w-md font-[family-name:var(--font-lato)] text-[11px] leading-relaxed text-[var(--text-on-dark-subtle)]">
              We won&apos;t spam you. Expect only occasional emails with practical insights, educational content, and
              CompassPoint Advisory updates - unsubscribe any time.
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/[0.12] px-8 py-6 text-center text-xs text-[var(--text-on-dark-muted)] md:px-14 lg:px-20">
        <p className="font-[family-name:var(--font-montserrat)] leading-snug">
          © {new Date().getFullYear()} CompassPoint Advisory Pty Ltd. All rights reserved.
        </p>
        <p className="mt-1.5 font-[family-name:var(--font-montserrat)] text-[12px] leading-snug text-[var(--soft-ivory)]/40">
          Built and maintained by{" "}
          <a
            href={BRIGHT_PATH_CONTACT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--accent-gold-light)] underline decoration-[var(--brand-gold)]/50 underline-offset-2 transition-colors hover:text-[var(--text-on-dark)] hover:decoration-[var(--brand-gold)]"
          >
            Bright Path Creative
          </a>
          .
        </p>
      </div>
    </footer>
  );
}

function LinkedInGlyph({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}
