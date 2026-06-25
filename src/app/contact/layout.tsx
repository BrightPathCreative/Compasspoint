import Script from "next/script";
import {
  GHL_FORM_PRECONNECT_ORIGINS,
  GHL_FORM_SCRIPT_URL,
  GHL_FORM_WIDGET_URL,
} from "@/lib/ghl-form";

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {GHL_FORM_PRECONNECT_ORIGINS.map((origin) => (
        <link key={origin} rel="preconnect" href={origin} />
      ))}
      <link rel="dns-prefetch" href="https://backend.leadconnectorhq.com" />
      <link rel="preload" href={GHL_FORM_SCRIPT_URL} as="script" />
      <link rel="preload" href={GHL_FORM_WIDGET_URL} as="document" />
      <Script src={GHL_FORM_SCRIPT_URL} strategy="afterInteractive" />
      {children}
    </>
  );
}
