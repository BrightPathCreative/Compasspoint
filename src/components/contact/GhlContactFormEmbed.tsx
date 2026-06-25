"use client";

import { useState } from "react";
import {
  GHL_FORM_HEIGHT_PX,
  GHL_FORM_ID,
  GHL_FORM_IFRAME_ID,
  GHL_FORM_WIDGET_URL,
} from "@/lib/ghl-form";

/** GoHighLevel inline form; redirect after submit is configured in GHL (e.g. /thank-you). */
export function GhlContactFormEmbed() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className="relative w-full overflow-hidden rounded-lg"
      style={{ height: GHL_FORM_HEIGHT_PX }}
      aria-busy={!loaded}
    >
      <div
        className={`absolute inset-0 rounded-lg bg-[color-mix(in_srgb,var(--bg-secondary)_88%,#ffffff)] transition-opacity duration-300 ${
          loaded ? "pointer-events-none opacity-0" : "opacity-100"
        }`}
        aria-hidden={loaded}
      >
        <div className="absolute inset-x-8 top-10 h-3 animate-pulse rounded-full bg-[var(--royal-plum)]/10" />
        <div className="absolute inset-x-8 top-20 h-10 animate-pulse rounded-md bg-[var(--royal-plum)]/8" />
        <div className="absolute inset-x-8 top-36 h-10 animate-pulse rounded-md bg-[var(--royal-plum)]/8" />
        <div className="absolute inset-x-8 top-52 h-10 animate-pulse rounded-md bg-[var(--royal-plum)]/8" />
        <div className="absolute inset-x-8 top-72 h-24 animate-pulse rounded-md bg-[var(--royal-plum)]/6" />
        <div className="absolute inset-x-8 bottom-8 h-10 animate-pulse rounded-md bg-[var(--metallic-gold)]/20" />
      </div>

      <iframe
        src={GHL_FORM_WIDGET_URL}
        className={`block h-full w-full max-w-full border-0 transition-opacity duration-300 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
        style={{ borderRadius: 8, width: "100%", height: "100%" }}
        id={GHL_FORM_IFRAME_ID}
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Compasspoint Advisory Enquiry Form"
        data-height={String(GHL_FORM_HEIGHT_PX)}
        data-layout-iframe-id={GHL_FORM_IFRAME_ID}
        data-form-id={GHL_FORM_ID}
        title="Compasspoint Advisory Enquiry Form"
        // @ts-expect-error React 19 supports fetchPriority on iframes; types may lag.
        fetchPriority="high"
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
}
