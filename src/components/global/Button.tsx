import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link";

type Shared = {
  variant?: "primary" | "secondary" | "ghost";
  children: ReactNode;
  className?: string;
};

type ButtonProps = Shared &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> & {
    href?: undefined;
  };

type AnchorProps = Shared &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "className" | "children"> & {
    href: string;
  };

export function Button(props: ButtonProps | AnchorProps) {
  const { variant = "primary", className = "", children, ...rest } = props;

  const base =
    "inline-flex items-center justify-center rounded-md px-6 py-3 font-[family-name:var(--font-montserrat)] text-sm font-semibold uppercase tracking-[0.08em] transition-all duration-300 md:text-base";

  const variants = {
    primary:
      "bg-[var(--brand-gold)] text-[var(--brand-plum)] hover:bg-[var(--brand-gold-bright)] hover:scale-[1.02] active:scale-100",
    secondary:
      "border-[1.5px] border-[var(--brand-gold)] bg-transparent text-[var(--brand-gold)] hover:bg-[var(--brand-gold)] hover:text-[var(--brand-plum)]",
    ghost:
      "border-0 bg-transparent text-[var(--brand-gold)] underline-offset-4 hover:underline",
  };

  const cls = `${base} ${variants[variant]} ${className}`;

  if ("href" in rest && rest.href) {
    const { href, onClick, ...aRest } = rest as AnchorProps;
    if (href.startsWith("/")) {
      return (
        <Link href={href} className={cls} onClick={onClick}>
          {children}
        </Link>
      );
    }
    return (
      <a href={href} className={cls} onClick={onClick} {...aRest}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={cls} {...(rest as ButtonProps)}>
      {children}
    </button>
  );
}
