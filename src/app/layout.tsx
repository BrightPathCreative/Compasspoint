import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { Cinzel, Cormorant_Garamond, Lato, Montserrat } from "next/font/google";
import "lenis/dist/lenis.css";
import "./globals.css";
import { LenisProvider } from "@/components/global/LenisProvider";
import { JsonLd } from "@/components/seo/JsonLd";
import { organizationJsonLd } from "@/lib/seo-schemas";
import { SITE_URL } from "@/lib/site";

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["400", "700"],
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

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "CompassPoint Advisory — Strategic Business Consulting for Australian SMEs",
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
        <JsonLd data={organizationJsonLd()} />
        <LenisProvider>{children}</LenisProvider>
        <Analytics />
      </body>
    </html>
  );
}
