"use client";

import "@/lib/gsap-config";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { SERVICES } from "@/lib/services";
import { BOOK_DISCOVERY_PATH } from "@/lib/site";
import { NavbarLogo } from "./NavbarLogo";
import { Button } from "./Button";
import { useLenisScroll } from "./LenisProvider";

const linksAfterServices = [
  { href: "/methodology", label: "Methodology" },
  { href: "/faq", label: "FAQ" },
] as const;

export function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const [open, setOpen] = useState(false);
  const [servicesExpanded, setServicesExpanded] = useState(false);
  const { scrollY } = useLenisScroll();
  const scrolled = scrollY > 60;

  useEffect(() => {
    navRef.current?.classList.toggle("nav-scrolled", scrolled);
  }, [scrolled]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) setServicesExpanded(false);
  }, [open]);

  return (
    <>
      <header
        ref={navRef}
        className={`fixed inset-x-0 top-0 z-50 flex min-h-[5.25rem] items-center border-b border-transparent transition-all duration-300 ease-out md:min-h-[6rem] ${scrolled ? "py-3 md:py-3" : "py-5 md:py-6"}`}
      >
        <div className="mx-auto flex w-full max-w-[min(100%,1920px)] items-center justify-between px-8 md:px-14 lg:px-20">
          <NavbarLogo />

          <nav
            className="hidden flex-1 items-center justify-center gap-10 font-[family-name:var(--font-lato)] md:flex lg:gap-12"
            aria-label="Primary"
          >
            <a
              href="/about"
              className="relative text-[15px] font-normal text-[var(--soft-ivory)] transition-colors hover:text-[var(--metallic-gold)] after:absolute after:inset-x-0 after:-bottom-1 after:h-px after:scale-x-0 after:bg-[var(--metallic-gold)] after:transition-transform hover:after:scale-x-100"
            >
              About
            </a>

            <div className="group relative">
              <span className="inline-flex items-center gap-1">
                <a
                  href="/services"
                  className="relative text-[15px] font-normal text-[var(--soft-ivory)] transition-colors hover:text-[var(--metallic-gold)] after:absolute after:inset-x-0 after:-bottom-1 after:h-px after:scale-x-0 after:bg-[var(--metallic-gold)] after:transition-transform hover:after:scale-x-100"
                >
                  Services
                </a>
                <ChevronDown
                  className="h-4 w-4 shrink-0 text-[var(--soft-ivory)]/75 transition-transform group-hover:rotate-180"
                  aria-hidden
                />
              </span>
              <div
                className="pointer-events-none invisible absolute left-1/2 top-full z-[60] min-w-[17.5rem] -translate-x-1/2 pt-4 opacity-0 transition-[opacity,visibility] duration-200 group-hover:pointer-events-auto group-hover:visible group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:visible group-focus-within:opacity-100"
                role="presentation"
              >
                <div className="rounded-md border border-[var(--metallic-gold)]/25 bg-[var(--plum-dark)]/95 py-2 shadow-2xl backdrop-blur-md">
                  <a
                    href="/services"
                    className="block px-4 py-2.5 text-[15px] font-medium text-[var(--soft-ivory)] transition-colors hover:bg-[var(--metallic-gold)]/10 hover:text-[var(--metallic-gold)]"
                  >
                    All services
                  </a>
                  <div className="mx-3 my-1 h-px bg-[var(--metallic-gold)]/15" aria-hidden />
                  {SERVICES.map((s) => (
                    <a
                      key={s.slug}
                      href={`/services/${s.slug}`}
                      className="block px-4 py-2 text-left text-[14px] leading-snug text-[var(--soft-ivory)]/92 transition-colors hover:bg-[var(--metallic-gold)]/10 hover:text-[var(--metallic-gold)]"
                    >
                      {s.title}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {linksAfterServices.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="relative text-[15px] font-normal text-[var(--soft-ivory)] transition-colors hover:text-[var(--metallic-gold)] after:absolute after:inset-x-0 after:-bottom-1 after:h-px after:scale-x-0 after:bg-[var(--metallic-gold)] after:transition-transform hover:after:scale-x-100"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden shrink-0 items-center gap-3 md:flex">
            <Button
              variant="secondary"
              href="/contact"
              className="btn-secondary btn-secondary--header"
            >
              Contact
            </Button>
            <Button href={BOOK_DISCOVERY_PATH} className="btn-primary btn-primary--header">
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
          className={`absolute right-0 top-0 flex h-full w-full max-w-sm flex-col bg-[var(--plum-dark)] shadow-2xl transition-transform duration-300 ease-out ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between border-b border-[var(--metallic-gold)]/25 px-6 py-6">
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
          <nav className="flex flex-1 flex-col gap-0 overflow-y-auto px-6 py-8 font-[family-name:var(--font-cormorant)]">
            <a
              href="/about"
              onClick={() => setOpen(false)}
              className="border-b border-[var(--metallic-gold)]/20 py-5 text-[1.75rem] leading-tight text-[var(--soft-ivory)] transition-colors hover:text-[var(--metallic-gold)]"
            >
              About
            </a>

            <div className="border-b border-[var(--metallic-gold)]/20">
              <button
                type="button"
                className="flex w-full items-center justify-between gap-3 py-5 text-left text-[1.75rem] leading-tight text-[var(--soft-ivory)] transition-colors hover:text-[var(--metallic-gold)]"
                aria-expanded={servicesExpanded}
                onClick={() => setServicesExpanded((v) => !v)}
              >
                Services
                <ChevronDown
                  className={`h-7 w-7 shrink-0 transition-transform ${servicesExpanded ? "rotate-180" : ""}`}
                  aria-hidden
                />
              </button>
              {servicesExpanded ? (
                <div className="space-y-0 pb-4 pl-3">
                  <div className="border-l-2 border-[var(--metallic-gold)]/35 pl-4">
                    <a
                      href="/services"
                      onClick={() => setOpen(false)}
                      className="block py-2 text-[1.2rem] font-semibold text-[var(--metallic-gold)]"
                    >
                      All services
                    </a>
                    {SERVICES.map((s) => (
                      <a
                        key={s.slug}
                        href={`/services/${s.slug}`}
                        onClick={() => setOpen(false)}
                        className="block py-2.5 text-[1.05rem] leading-snug text-[var(--soft-ivory)]/88 transition-colors hover:text-[var(--metallic-gold)]"
                      >
                        {s.title}
                      </a>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>

            {linksAfterServices.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-[var(--metallic-gold)]/20 py-5 text-[1.75rem] leading-tight text-[var(--soft-ivory)] transition-colors hover:text-[var(--metallic-gold)]"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <div className="border-t border-[var(--metallic-gold)]/25 p-6">
            <div className="flex flex-col gap-3">
              <Button
                variant="secondary"
                href="/contact"
                className="w-full"
                onClick={() => setOpen(false)}
              >
                Contact
              </Button>
              <Button href={BOOK_DISCOVERY_PATH} className="w-full" onClick={() => setOpen(false)}>
                Book a Free Discovery Call
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
