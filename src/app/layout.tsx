import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Loader } from "@/components/layout/Loader";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import { JsonLd } from "@/components/layout/JsonLd";
import { siteConfig } from "@/lib/seo";

const display = Cormorant_Garamond({
  variable: "--font-display-family",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const sans = Outfit({
  variable: "--font-sans-family",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const mono = Geist_Mono({
  variable: "--font-mono-family",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Sovtels — Hotel & Motel Management",
    template: "%s · Sovtels",
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  openGraph: {
    title: "Sovtels — Run Better, Spend Less.",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: "Sovtels",
    locale: "en_US",
    type: "website",
    images: [{ url: "/images/logo.png", width: 1200, height: 1200, alt: "Sovtels" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sovtels — Hotel & Motel Management",
    description: siteConfig.description,
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
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
        className={`${display.variable} ${sans.variable} ${mono.variable} bg-paper font-sans text-charcoal antialiased`}
      >
        <JsonLd />
        <SmoothScroll>
          <Loader />
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
