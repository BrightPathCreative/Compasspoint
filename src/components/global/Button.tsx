import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
  children: ReactNode;
  className?: string;
};

export function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-md px-6 py-3 font-[family-name:var(--font-montserrat)] text-sm font-semibold transition-all duration-300 md:text-base";

  const variants = {
    primary:
      "bg-[var(--brand-gold)] text-[var(--brand-black)] hover:bg-[var(--accent-gold-hover)] hover:scale-105 active:scale-100",
    secondary:
      "border border-[var(--brand-gold)] bg-transparent text-[var(--brand-gold)] hover:bg-[var(--brand-gold)] hover:text-[var(--brand-black)]",
  };

  return (
    <button type="button" className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
