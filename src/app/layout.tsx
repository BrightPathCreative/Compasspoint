import type { Metadata } from "next";
import { Cinzel, Cormorant_Garamond, Lato, Montserrat } from "next/font/google";
import "lenis/dist/lenis.css";
import "./globals.css";
import { LenisProvider } from "@/components/global/LenisProvider";

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
  title: "Compass Point Advisory | Amelia Ghofrany",
  description:
    "Guiding businesses toward clarity, growth, and transformation—strategic advisory and investment strategy for ambitious SMEs and founders.",
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
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
