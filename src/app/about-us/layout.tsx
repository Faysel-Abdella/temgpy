import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title:
    "About Venas Technologies | Leading Tech Company in Ethiopia & AI Solutions",
  description:
    "Discover Venas Technologies, a trusted AI solutions company and one of the top tech companies in Ethiopia, delivering custom software and cloud solutions globally.",
  keywords: [
    "about Venas Technologies",
    "digital transformation",
    "Ethiopia tech company",
    "AI solutions",
    "custom software",
    "cloud IT",
  ],
  robots: "index, follow",
  openGraph: {
    title:
      "About Venas Technologies | Leading Tech Company in Ethiopia & AI Solutions",
    description:
      "Discover Venas Technologies, a trusted AI solutions company and one of the top tech companies in Ethiopia, delivering custom software and cloud solutions globally.",
    url: "https://venastechnology.com/about",
    type: "website",
    images: [
      {
        url: "https://venastechnology.com/media-preview.png",
        width: 1200,
        height: 630,
        alt: "Venas Technologies About Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "About Venas Technologies | Leading Tech Company in Ethiopia & AI Solutions",
    description:
      "Discover Venas Technologies, a trusted AI solutions company and one of the top tech companies in Ethiopia, delivering custom software and cloud solutions globally.",
    images: ["https://venastechnology.com/media-preview.png"],
  },
};

export default function AboutLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return <>{children}</>;
}
