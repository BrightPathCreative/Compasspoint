import Link from "next/link";

type BrandLockupProps = {
  className?: string;
  variant?: "onDark" | "onPlum";
  href?: string;
  clickable?: boolean;
};

/** Footer / contexts that need full lockup: icon + wordmark. */
export function BrandLockup({
  className = "",
  variant = "onDark",
  href = "/",
  clickable = true,
}: BrandLockupProps) {
  const ringOffset =
    variant === "onPlum" ? "focus-visible:ring-offset-[var(--brand-plum)]" : "focus-visible:ring-offset-[var(--cream)]";

  const inner = (
    <div className={`flex items-center gap-3 md:gap-4 ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/brand-icon.svg"
        alt=""
        width={56}
        height={56}
        className="h-12 w-12 shrink-0 object-contain md:h-14 md:w-14"
      />
      <div className="min-w-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/compasspoint-logotext.svg"
          alt="CompassPoint Advisory"
          className="h-auto max-h-10 w-auto max-w-[min(260px,55vw)] object-contain object-left md:max-h-11 md:max-w-[280px]"
        />
      </div>
    </div>
  );

  if (clickable) {
    return (
      <Link
        href={href}
        className={`inline-flex max-w-full shrink-0 items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-gold)]/60 focus-visible:ring-offset-2 ${ringOffset}`}
      >
        {inner}
      </Link>
    );
  }

  return <div className="inline-flex max-w-full">{inner}</div>;
}
