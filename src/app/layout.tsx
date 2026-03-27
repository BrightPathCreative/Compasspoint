import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "lenis/dist/lenis.css";
import "./globals.css";
import { LenisProvider } from "@/components/global/LenisProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Compass Point Advisory | Amelia Ghofrany",
  description:
    "Strategic clarity and sustainable growth—enterprise-grade advisory and investment strategy for ambitious SMEs and founders.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU" className={`${inter.variable} ${playfair.variable} h-full antialiased`}>
      <body className="min-h-full bg-[#0A0A0A]">
        <LenisProvider>{children}</LenisProvider>
      </body>
    </html>
  );
}
