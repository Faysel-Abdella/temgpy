import { GoogleTagManager } from "@next/third-parties/google";

import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import Navbar from "@/components/common/navbar";
import Footer from "@/components/common/footer";
import { Toaster } from "@/components/ui/toaster";

const gilroy = localFont({
  src: "/fonts/Gilroy.ttf",
  variable: "--font-gilroy",
  display: "swap",
});

const inter = localFont({
  src: "/fonts/InterUpdated.otf",
  variable: "--font-inter",
  display: "swap",
});

// Site-wide metadata with image for social previews
export const metadata: Metadata = {
  title: {
    default: "GrowzTech | Scalable Digital Solutions for Businesses",
    template: "%s | Growztech",
  },
  description:
    "Transform your business with custom software, AI, and cloud solutions from Growztech, an Ethiopia-based tech innovator. Drive growth with secure, future-ready technology.",
  keywords: [
    "digital transformation",
    "custom software",
    "AI solutions",
    "cloud technology",
    "Ethiopia tech",
    "scalable IT",
  ],
  robots: "index, follow",
  openGraph: {
    title: "GrowzTech | Empowering Businesses with Cutting-Edge Tech",
    description:
      "From Ethiopia to the world: Growztech delivers scalable software, AI, and cloud solutions for digital success.",
    url: "https://growztech.com",
    type: "website",
    images: [
      {
        url: "https://growztech.com/media-preview.png",
        width: 1200,
        height: 630,
        alt: "Growztech Homepage Preview",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Growztech | Empowering Businesses with Cutting-Edge Tech",
    description:
      "From Ethiopia to the world: Growztech delivers scalable software, AI, and cloud solutions for digital success.",
    images: ["https://growztech.com/media-preview.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${gilroy.variable} scroll-smooth`}
    >
      {/* Inject GTM scripts automatically */}
      <GoogleTagManager gtmId="G-JNNFWWMV78" />

      <body className="flex flex-col overflow-x-hidden max-w-screen">
        {/* Favicon */}
        <link rel="icon" href="/tab-icon.svg" type="image/svg+xml" />

        <Navbar />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
