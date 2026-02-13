import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/providers";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

const SITE_URL = "https://www.brisbathco.com.au";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Bathroom Renovations Brisbane | Brisbathco",
    template: "%s | Brisbathco",
  },
  description:
    "Brisbane's trusted bathroom renovation specialists. Premium craftsmanship, transparent pricing & QBCC licensed. Free quotes — call 0412 346 019.",
  keywords: [
    "bathroom renovations Brisbane",
    "bathroom remodel Brisbane",
    "ensuite renovation Brisbane",
    "bathroom renovation specialists",
    "QBCC licensed renovator",
    "Brisbane bathroom company",
  ],
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  themeColor: "#FF3B0A",
  authors: [{ name: "Brisbathco" }],
  creator: "Brisbathco",
  publisher: "Brisbathco",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: SITE_URL,
    siteName: "Brisbathco",
    title: "Bathroom Renovations Brisbane | Brisbathco",
    description:
      "Brisbane's trusted bathroom renovation specialists. Premium craftsmanship, transparent pricing & QBCC licensed.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Brisbathco — Bathroom Renovations Brisbane",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bathroom Renovations Brisbane | Brisbathco",
    description:
      "Brisbane's trusted bathroom renovation specialists. Premium craftsmanship, transparent pricing & QBCC licensed.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: SITE_URL,
  },
  other: {
    "geo.region": "AU-QLD",
    "geo.placename": "Brisbane",
    "geo.position": "-27.4698;153.0251",
    ICBM: "-27.4698, 153.0251",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU" suppressHydrationWarning>
      <head>
        <link rel="dns-prefetch" href="https://maps.googleapis.com" />
        <link rel="dns-prefetch" href="https://www.google.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={cn(inter.variable, playfair.variable, "font-sans antialiased")}>
        <Providers>
          {children}
          <Toaster />
          <Sonner />
        </Providers>
      </body>
    </html>
  );
}
