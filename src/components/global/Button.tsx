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

  const variants = {
    primary: "btn-primary",
    secondary: "btn-secondary",
    ghost: "border-0 bg-transparent font-[family-name:var(--font-montserrat)] text-sm font-semibold uppercase tracking-[0.08em] text-[var(--metallic-gold)] underline-offset-4 transition-colors hover:underline",
  };

  const cls = `${variants[variant]} ${className}`.trim();

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
