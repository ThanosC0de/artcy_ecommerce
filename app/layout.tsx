import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const trebuchet = localFont({
  src: "../fonts/trebuc.ttf",
  variable: "--font-trebuchet",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s - Artcy Ecommerce Store",
    default: "Artcy Ecommerce Store",
  },
  description: "Artcy Ecommerce Store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${trebuchet.variable} antialiased`}>{children}</body>
    </html>
  );
}
