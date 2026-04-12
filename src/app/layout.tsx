import type { Metadata, Viewport } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Cinzel, Cormorant_Garamond, Lato, Montserrat } from "next/font/google";
import "lenis/dist/lenis.css";
import "./globals.css";
import { GrainOverlay } from "@/components/GrainOverlay";
import { BackToTopButton } from "@/components/BackToTopButton";
import { LenisProvider } from "@/components/global/LenisProvider";
import { ScrollToTop } from "@/components/ScrollToTop";
import { JsonLd } from "@/components/seo/JsonLd";
import { organizationJsonLd } from "@/lib/seo-schemas";
import { SITE_URL } from "@/lib/site";

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#3e0f34",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "CompassPoint Advisory - Strategic Business Consulting for Australian SMEs",
    template: "%s | CompassPoint Advisory",
  },
  description:
    "Strategic consulting for Australian SMEs and startups. Growth strategy, operations, AI transformation, and executive coaching. Melbourne-based, nationally active.",
  openGraph: {
    type: "website",
    locale: "en_AU",
    siteName: "CompassPoint Advisory",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-AU"
      className={`${lato.variable} ${cormorant.variable} ${cinzel.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[var(--bg-primary)]">
        <GrainOverlay />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[10000] focus:rounded-sm focus:bg-[var(--metallic-gold)] focus:px-4 focus:py-2 focus:font-[family-name:var(--font-montserrat)] focus:text-sm focus:font-semibold focus:text-[var(--royal-plum)] focus:outline-none focus:ring-2 focus:ring-[var(--metallic-gold)] focus:ring-offset-2 focus:ring-offset-[var(--bg-primary)]"
        >
          Skip to content
        </a>
        <JsonLd data={organizationJsonLd()} />
        <LenisProvider>
          <ScrollToTop />
          <BackToTopButton />
          {children}
        </LenisProvider>
        <Analytics />
      </body>
    </html>
  );
}
