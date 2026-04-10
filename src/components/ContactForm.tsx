"use client";

import { useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error" | "config">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    const form = e.currentTarget;
    const fd = new FormData(form);
    const payload = {
      name: String(fd.get("name") ?? ""),
      email: String(fd.get("email") ?? ""),
      phone: String(fd.get("phone") ?? ""),
      message: String(fd.get("message") ?? ""),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = (await res.json()) as { ok?: boolean; error?: string };
      if (res.status === 503 || data.error === "missing_config") {
        setStatus("config");
        return;
      }
      if (!res.ok || !data.ok) {
        setStatus("error");
        return;
      }
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="space-y-6" onSubmit={onSubmit} noValidate>
      <div>
        <label htmlFor="contact-name" className="block font-[family-name:var(--font-montserrat)] text-xs font-semibold uppercase tracking-[0.08em] text-[var(--text-secondary)]">
          Name
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className="mt-2 w-full rounded-sm border border-white/15 bg-[var(--bg-secondary)] px-4 py-3 font-[family-name:var(--font-lato)] text-[var(--text-primary)] placeholder:text-[var(--text-tertiary)] focus:border-[var(--metallic-gold)] focus:outline-none"
          placeholder="Your name"
        />
      </div>
      <div>
        <label htmlFor="contact-email" className="block font-[family-name:var(--font-montserrat)] text-xs font-semibold uppercase tracking-[0.08em] text-[var(--text-secondary)]">
          Email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="mt-2 w-full rounded-sm border border-white/15 bg-[var(--bg-secondary)] px-4 py-3 font-[family-name:var(--font-lato)] text-[var(--text-primary)] placeholder:text-[var(--text-tertiary)] focus:border-[var(--metallic-gold)] focus:outline-none"
          placeholder="you@company.com.au"
        />
      </div>
      <div>
        <label htmlFor="contact-phone" className="block font-[family-name:var(--font-montserrat)] text-xs font-semibold uppercase tracking-[0.08em] text-[var(--text-secondary)]">
          Phone <span className="font-normal lowercase text-[var(--text-tertiary)]">(optional)</span>
        </label>
        <input
          id="contact-phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          className="mt-2 w-full rounded-sm border border-white/15 bg-[var(--bg-secondary)] px-4 py-3 font-[family-name:var(--font-lato)] text-[var(--text-primary)] placeholder:text-[var(--text-tertiary)] focus:border-[var(--metallic-gold)] focus:outline-none"
          placeholder="+61 …"
        />
      </div>
      <div>
        <label htmlFor="contact-message" className="block font-[family-name:var(--font-montserrat)] text-xs font-semibold uppercase tracking-[0.08em] text-[var(--text-secondary)]">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          className="mt-2 w-full resize-y rounded-sm border border-white/15 bg-[var(--bg-secondary)] px-4 py-3 font-[family-name:var(--font-lato)] text-[var(--text-primary)] placeholder:text-[var(--text-tertiary)] focus:border-[var(--metallic-gold)] focus:outline-none"
          placeholder="How can we help?"
        />
      </div>

      {status === "success" ? (
        <p className="font-[family-name:var(--font-lato)] text-sm text-[var(--metallic-gold)]" role="status">
          Thank you - your message has been sent.
        </p>
      ) : null}
      {status === "error" ? (
        <p className="font-[family-name:var(--font-lato)] text-sm text-red-300" role="alert">
          Something went wrong. Please try again or book a call below.
        </p>
      ) : null}
      {status === "config" ? (
        <p className="font-[family-name:var(--font-lato)] text-sm text-[var(--text-secondary)]" role="status">
          Email delivery isn&apos;t configured yet. Please book a discovery call - that&apos;s the fastest way to
          reach us.
        </p>
      ) : null}

      <button type="submit" disabled={status === "submitting"} className="btn-primary w-full sm:w-auto">
        {status === "submitting" ? "Sending…" : "Send message"}
      </button>
    </form>
  );
}
