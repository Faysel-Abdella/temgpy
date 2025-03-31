import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "About Growztech | Driving Digital Excellence",
  description:
    "Learn about Growztech, an Ethiopia-based tech company delivering custom software, AI, and cloud solutions to empower businesses worldwide with scalable, secure technology.",
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
    title: "About Growztech | Innovating Digital Solutions",
    description:
      "Discover Growztech: From Ethiopia, we empower global businesses with cutting-edge software, AI, and cloud solutions.",
    url: "https://growztech.com/about",
    type: "website",
    images: [
      {
        url: "https://growztech.com/images/about-preview.jpg",
        width: 1200,
        height: 630,
        alt: "Growztech About Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Growztech | Innovating Digital Solutions",
    description:
      "Discover Growztech: From Ethiopia, we empower global businesses with cutting-edge software, AI, and cloud solutions.",
    images: ["https://growztech.com/images/about-preview.jpg"],
  },
};

export default function AboutLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return <>{children}</>;
}
