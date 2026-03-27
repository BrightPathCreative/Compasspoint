import Link from "next/link";

/** Header: compass icon only (wordmark lives in the hero). */
export function NavbarLogo({ className = "" }: { className?: string }) {
  return (
    <Link
      href="/"
      className={`inline-flex shrink-0 rounded-xl p-1 transition-opacity hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A574]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0A] ${className}`}
      aria-label="Compass Point Advisory — home"
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
