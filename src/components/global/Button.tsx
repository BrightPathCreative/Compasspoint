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
    "inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-medium transition-all duration-300 md:text-base";

  const variants = {
    primary:
      "bg-[#D4A574] text-[#0A0A0A] hover:bg-[#E8C9A0] hover:scale-105 active:scale-100",
    secondary:
      "border border-[#D4A574] bg-transparent text-[#D4A574] hover:bg-[#D4A574] hover:text-[#0A0A0A]",
  };

  return (
    <button type="button" className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
