import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dochess World Limited",
  description:
    "Welcome to DOCHESS WORLD LIMITED (where luxury meets timeless fragrance) We specialize in; .Premium male, female, unisex and kids DOCHESS perfumes, designed to reflect elegance, confidence, and sophistication. Luxury home, office, and car diffusers. Scented Scented Candles. 100% raw oil perfumes available in sizes from 3ml-5kg for personal, retail, and wholesale needs. Crafted with premium-quality ingredients, every DOCHESS fragrance delivers long-lasting freshness, rich aroma projection, and an unforgettable luxury experience.DOCHESS WORLD Limited; Defining Luxury Through Fragrance.",
  icons: {
    icon: "/DochessWorldLogo.jpeg",
    shortcut: "/DochessWorldLogo.jpeg",
    apple: "/DochessWorldLogo.jpeg",
  },
  openGraph: {
    title: "Dochess World Limited",
    description:
      "Welcome to DOCHESS WORLD LIMITED (where luxury meets timeless fragrance) We specialize in; .Premium male, female, unisex and kids DOCHESS perfumes, designed to reflect elegance, confidence, and sophistication.",
    images: ["/DochessWorldLogo.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
