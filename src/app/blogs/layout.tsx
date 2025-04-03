import type { Metadata } from "next";
import Navbar from "@/components/common/navbar";
import React from "react";

// Blog-section-wide metadata
export const metadata: Metadata = {
  title: "Growztech Blog | Insights on Digital Transformation",
  description:
    "Explore the Growztech Blog for insights, tips, and updates on custom software, AI solutions, cloud technology, and digital transformation from an Ethiopia-based innovator.",
  keywords: [
    "Growztech blog",
    "digital transformation",
    "custom software",
    "AI solutions",
    "cloud technology",
    "Ethiopia tech",
  ],
  robots: "index, follow",
  openGraph: {
    title: "Growztech Blog | Innovating the Digital Future",
    description:
      "Stay ahead with Growztech’s blog: Expert insights on software, AI, and cloud solutions from Ethiopia to the world.",
    url: "https://growztech.com/blogs",
    type: "website",
    images: [
      {
        url: "/social-media-preview.svg",
        width: 1200,
        height: 630,
        alt: "Growztech Blog Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Growztech Blog | Innovating the Digital Future",
    description:
      "Stay ahead with Growztech’s blog: Expert insights on software, AI, and cloud solutions from Ethiopia to the world.",
    images: ["/social-media-preview.svg"],
  },
};

export default function BlogsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <Navbar />
      <main className="bg-muted">{children}</main>
    </>
  );
}
