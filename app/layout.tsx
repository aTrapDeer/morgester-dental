import type { Metadata } from "next";
import { Manrope, Newsreader } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Morgester Dental | Top Rated Dentistry in St. Louis",
  description:
    "Morgester Dental provides modern, family-friendly dental care in Chesterfield, Missouri.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${newsreader.variable}`}
      data-scroll-behavior="smooth"
    >
      <body className="min-h-screen bg-brand-canvas font-sans text-brand-ink antialiased">
        {children}
      </body>
    </html>
  );
}
