"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLenisScroll } from "@/components/global/LenisProvider";

type NavbarLogoProps = {
  className?: string;
  /** e.g. close mobile drawer after navigation */
  onNavigate?: () => void;
};

/** Header: compass icon only (wordmark lives in the hero). Always acts as Home. */
export function NavbarLogo({ className = "", onNavigate }: NavbarLogoProps) {
  const pathname = usePathname();
  const { scrollToTopSmooth } = useLenisScroll();
  const isHome = pathname === "/" || pathname === "";

  return (
    <Link
      href="/"
      className={`inline-flex shrink-0 rounded-xl p-1 transition-opacity hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-gold)]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--brand-black)] ${className}`}
      aria-label="Home"
      onClick={(e) => {
        if (isHome) {
          e.preventDefault();
          scrollToTopSmooth();
        }
        onNavigate?.();
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/brand-icon.svg"
        alt=""
        width={80}
        height={80}
        className="h-14 w-14 object-contain md:h-16 md:w-16"
      />
    </Link>
  );
}
