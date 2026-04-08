import type { ReactNode } from "react";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-[var(--brand-ivory)] focus:px-4 focus:py-3 focus:font-[family-name:var(--font-montserrat)] focus:text-sm focus:font-semibold focus:text-[var(--brand-plum)] focus:outline-none focus:ring-2 focus:ring-[var(--brand-gold)]"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content">{children}</main>
      <Footer />
    </>
  );
}
