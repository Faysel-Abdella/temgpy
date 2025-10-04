import { GoogleTagManager } from "@next/third-parties/google";

import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import Navbar from "@/components/common/navbar";
import Footer from "@/components/common/footer";
import { Toaster } from "@/components/ui/toaster";
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";

const gilroy = localFont({
  src: "/fonts/Gilroy.ttf",
  variable: "--font-gilroy",
  display: "swap",
});
const clashgrotesk = localFont({
  src: "/fonts/ClashGrotesk.ttf",
  variable: "--font-clashgrotesk",
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
    default: "Best Software Company in Ethiopia | GrowzTech",
    template: "%s | Growztech",
  },
  description:
    "GrowzTech is a top software company in Ethiopia offering scalable custom software, AI, and cloud solutions to drive business growth globally",
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
    title: "Best Software Company in Ethiopia | GrowzTech",
    description:
      "GrowzTech is a top software company in Ethiopia offering scalable custom software, AI, and cloud solutions to drive business growth globally",
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
    title: "Best Software Company in Ethiopia | GrowzTech",
    description:
      "GrowzTech is a top software company in Ethiopia offering scalable custom software, AI, and cloud solutions to drive business growth globally",
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
      className={`${inter.variable} ${gilroy.variable} ${clashgrotesk.variable} scroll-smooth`}
    >
      {/* Inject GTM scripts automatically  */}
      <GoogleTagManager gtmId="G-JNNFWWMV78" />

      <body className="flex flex-col overflow-x-hidden max-w-screen">
        {/* Favicon */}
        <link rel="icon" href="/tab-icon.svg" type="image/svg+xml" />

        <Navbar />
        {children}
        <Footer />
        <Toaster />
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  );
}
