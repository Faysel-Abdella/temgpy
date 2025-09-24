import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "About GrowzTech | Leading Tech Company in Ethiopia & AI Solutions",
  description:
    "Discover GrowzTech, a trusted AI solutions company and one of the top tech companies in Ethiopia, delivering custom software and cloud solutions globally.",
  keywords: [
    "about Growztech",
    "digital transformation",
    "Ethiopia tech company",
    "AI solutions",
    "custom software",
    "cloud IT",
  ],
  robots: "index, follow",
  openGraph: {
    title: "About GrowzTech | Leading Tech Company in Ethiopia & AI Solutions",
    description:
      "Discover GrowzTech, a trusted AI solutions company and one of the top tech companies in Ethiopia, delivering custom software and cloud solutions globally.",
    url: "https://growztech.com/about",
    type: "website",
    images: [
      {
        url: "https://growztech.com/media-preview.png",
        width: 1200,
        height: 630,
        alt: "Growztech About Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About GrowzTech | Leading Tech Company in Ethiopia & AI Solutions",
    description:
      "Discover GrowzTech, a trusted AI solutions company and one of the top tech companies in Ethiopia, delivering custom software and cloud solutions globally.",
    images: ["https://growztech.com/media-preview.png"],
  },
};

export default function AboutLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return <>{children}</>;
}
