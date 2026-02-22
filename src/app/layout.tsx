import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tischlerei KOUT GesmbH | Ihr Wiener Tischler seit 1964",
  description:
    "Tischlerei KOUT GesmbH in Wien - Ihr zertifizierter Fachbetrieb für Tischlerarbeiten, Sicherheits- und Feuerschutztüren, Sanierung und Barrierefreiheit. Seit 1964 in Wien.",
  keywords:
    "Tischlerei, Wien, KOUT, Sicherheitstüren, Feuerschutztüren, Sanierung, Barrierefreiheit, Tischler, Holz, Handwerk",
  icons: {
    icon: "/images/favicon.png",
    apple: "/images/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
