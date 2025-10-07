import type { Metadata } from "next";
import Navbar from "@/components/common/navbar";
import React from "react";

// Blog-section-wide metadata
export const metadata: Metadata = {
  title: "Venas Technologies Blog | Insights on Digital Transformation",
  description:
    "Explore the Venas Technologies Blog for insights, tips, and updates on custom software, AI solutions, cloud platforms, and digital transformation from a leading tech innovator.",
  keywords: [
    "Venas Technologies blog",
    "digital transformation",
    "custom software development",
    "AI solutions",
    "cloud solutions",
    "software outsourcing",
    "tech talent",
    "scalable software platforms",
  ],
  robots: "index, follow",
  openGraph: {
    title: "Venas Technologies Blog | Innovating the Digital Future",
    description:
      "Stay ahead with Venas Technologies’s blog: Expert insights on software, AI, and cloud solutions.",
    url: "https://venastechnology.com/blogs",
    type: "website",
    images: [
      {
        url: "https://venastechnology.com/media-preview.png",
        width: 1200,
        height: 630,
        alt: "Venas Technologies Blog Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Venas Technologies Blog | Innovating the Digital Future",
    description:
      "Stay ahead with Venas Technologies’s blog: Expert insights on software, AI, and cloud solutions.",
    images: ["https://venastechnology.com/media-preview.png"],
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
