"use client";

import { useState } from "react";
import { CONTACT_EMAIL_PUBLIC } from "@/lib/contact";

export function ContactMessageForm() {
  const [status, setStatus] = useState<string | null>(null);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const body = [`From: ${name}`, `Email: ${email}`, phone ? `Phone: ${phone}` : "", "", message]
      .filter(Boolean)
      .join("\n");
    const href = `mailto:${CONTACT_EMAIL_PUBLIC}?subject=${encodeURIComponent(`Website enquiry - ${name}`)}&body=${encodeURIComponent(body)}`;
    window.location.href = href;
    setStatus("Your email app should open. If it does not, copy your message and email us directly.");
  }

  return (
    <form className="mt-6 flex max-w-md flex-col gap-4" onSubmit={handleSubmit}>
      <div>
        <label
          htmlFor="contact-name"
          className="block font-[family-name:var(--font-montserrat)] text-xs font-semibold uppercase tracking-wide text-[var(--text-secondary)]"
        >
          Name
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className="mt-1 w-full rounded-md border border-[var(--brand-charcoal)]/35 bg-[var(--white)] px-3 py-2 font-[family-name:var(--font-lato)] text-[var(--charcoal)] focus:border-[var(--brand-gold)] focus:outline-none"
        />
      </div>
      <div>
        <label
          htmlFor="contact-email"
          className="block font-[family-name:var(--font-montserrat)] text-xs font-semibold uppercase tracking-wide text-[var(--text-secondary)]"
        >
          Email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="mt-1 w-full rounded-md border border-[var(--brand-charcoal)]/35 bg-[var(--white)] px-3 py-2 font-[family-name:var(--font-lato)] text-[var(--charcoal)] focus:border-[var(--brand-gold)] focus:outline-none"
        />
      </div>
      <div>
        <label
          htmlFor="contact-phone"
          className="block font-[family-name:var(--font-montserrat)] text-xs font-semibold uppercase tracking-wide text-[var(--text-secondary)]"
        >
          Phone
        </label>
        <input
          id="contact-phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          className="mt-1 w-full rounded-md border border-[var(--brand-charcoal)]/35 bg-[var(--white)] px-3 py-2 font-[family-name:var(--font-lato)] text-[var(--charcoal)] focus:border-[var(--brand-gold)] focus:outline-none"
        />
      </div>
      <div>
        <label
          htmlFor="contact-message"
          className="block font-[family-name:var(--font-montserrat)] text-xs font-semibold uppercase tracking-wide text-[var(--text-secondary)]"
        >
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          required
          className="mt-1 w-full rounded-md border border-[var(--brand-charcoal)]/35 bg-[var(--white)] px-3 py-2 font-[family-name:var(--font-lato)] text-[var(--charcoal)] focus:border-[var(--brand-gold)] focus:outline-none"
        />
      </div>
      <button
        type="submit"
        className="rounded-md bg-[var(--brand-gold)] px-6 py-3 font-[family-name:var(--font-montserrat)] text-sm font-semibold uppercase tracking-wide text-[var(--brand-plum)] transition-transform hover:scale-[1.02]"
      >
        Submit
      </button>
      {status ? <p className="font-[family-name:var(--font-lato)] text-xs text-[var(--text-secondary)]">{status}</p> : null}
    </form>
  );
}
