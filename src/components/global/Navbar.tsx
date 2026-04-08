"use client";

import "@/lib/gsap-config";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { NavbarLogo } from "./NavbarLogo";
import { Button } from "./Button";
import { useLenisScroll } from "./LenisProvider";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#methodology", label: "Methodology" },
  { href: "#testimonials", label: "Testimonials" },
];

export function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const [open, setOpen] = useState(false);
  const scrollY = useLenisScroll();

  useEffect(() => {
    navRef.current?.classList.toggle("nav-scrolled", scrollY > 80);
  }, [scrollY]);

  return (
    <>
      <header
        ref={navRef}
        className="fixed inset-x-0 top-0 z-50 flex min-h-[5.25rem] items-center border-b border-transparent transition-colors duration-300 md:min-h-[6rem]"
      >
        <div className="mx-auto flex w-full max-w-[min(100%,1920px)] items-center justify-between px-8 md:px-14 lg:px-20">
          <NavbarLogo />

          <nav
            className="hidden flex-1 items-center justify-center gap-10 font-[family-name:var(--font-montserrat)] md:flex lg:gap-12"
            aria-label="Primary"
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="relative text-sm font-medium text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)] after:absolute after:inset-x-0 after:-bottom-1 after:h-px after:scale-x-0 after:bg-[var(--brand-gold)] after:transition-transform hover:after:scale-x-100"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button
              className="!py-2.5 !text-sm"
              onClick={() => document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" })}
            >
              Book a Consultation
            </Button>
          </div>

          <button
            type="button"
            className="rounded-md p-2 text-[var(--text-primary)] md:hidden"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      {open && (
        <div
          className="fixed inset-0 z-40 flex flex-col bg-[var(--brand-black)]/98 px-8 pb-12 pt-28 backdrop-blur-md md:hidden"
          role="dialog"
          aria-modal="true"
        >
          <div className="mb-8 shrink-0 border-b border-[var(--brand-charcoal)] pb-6">
            <NavbarLogo />
          </div>
          <nav className="flex flex-1 flex-col gap-8 font-[family-name:var(--font-cinzel)] text-2xl text-[var(--text-primary)]">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-[var(--brand-charcoal)] pb-4"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <Button
            className="w-full"
            onClick={() => {
              setOpen(false);
              document.getElementById("cta")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Book a Consultation
          </Button>
        </div>
      )}
    </>
  );
}
