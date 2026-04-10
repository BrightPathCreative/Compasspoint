"use client";

import "@/lib/gsap-config";
import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { CALENDLY_URL } from "@/lib/site";
import { NavbarLogo } from "./NavbarLogo";
import { Button } from "./Button";
import { useLenisScroll } from "./LenisProvider";

const links = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/methodology", label: "Methodology" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const [open, setOpen] = useState(false);
  const scrollY = useLenisScroll();

  useEffect(() => {
    navRef.current?.classList.toggle("nav-scrolled", scrollY > 80);
  }, [scrollY]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        ref={navRef}
        className="fixed inset-x-0 top-0 z-50 flex min-h-[5.25rem] items-center border-b border-transparent transition-colors duration-300 md:min-h-[6rem]"
      >
        <div className="mx-auto flex w-full max-w-[min(100%,1920px)] items-center justify-between px-8 md:px-14 lg:px-20">
          <NavbarLogo />

          <nav
            className="hidden flex-1 items-center justify-center gap-10 font-[family-name:var(--font-lato)] md:flex lg:gap-12"
            aria-label="Primary"
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="relative text-[15px] font-normal text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)] after:absolute after:inset-x-0 after:-bottom-1 after:h-px after:scale-x-0 after:bg-[var(--brand-gold)] after:transition-transform hover:after:scale-x-100"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="!py-2.5 !text-sm">
              Book a Free Discovery Call
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

      {/* Mobile: slide-in panel from right, plum background */}
      <div
        className={`fixed inset-0 z-40 md:hidden ${open ? "pointer-events-auto" : "pointer-events-none"}`}
        aria-hidden={!open}
      >
        <button
          type="button"
          className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0"}`}
          aria-label="Close menu"
          onClick={() => setOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 flex h-full w-full max-w-sm flex-col bg-[var(--brand-plum)] shadow-2xl transition-transform duration-300 ease-out ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between border-b border-[var(--brand-gold)]/20 px-6 py-6">
            <NavbarLogo />
            <button
              type="button"
              className="rounded-md p-2 text-[var(--text-primary)]"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav className="flex flex-1 flex-col gap-1 overflow-y-auto px-6 py-8 font-[family-name:var(--font-lato)]">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-[var(--brand-gold)]/15 py-4 text-lg text-[var(--text-primary)] transition-colors hover:text-[var(--brand-gold)]"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <div className="border-t border-[var(--brand-gold)]/20 p-6">
            <Button
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
              onClick={() => setOpen(false)}
            >
              Book a Free Discovery Call
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
