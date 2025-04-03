import type { Metadata } from "next";
import Navbar from "@/components/common/navbar";
import React from "react";

// Projects-section-wide metadata
export const metadata: Metadata = {
  title: "Growztech Projects | Showcasing Digital Innovation",
  description:
    "Discover Growztech’s projects: Custom software, AI, and cloud solutions driving digital transformation for businesses worldwide, from our Ethiopia-based team.",
  keywords: [
    "Growztech projects",
    "digital transformation",
    "custom software",
    "AI solutions",
    "cloud technology",
    "Ethiopia tech",
  ],
  robots: "index, follow",
  openGraph: {
    title: "Growztech Projects | Innovating for the Future",
    description:
      "Explore Growztech’s portfolio: Cutting-edge software, AI, and cloud projects from Ethiopia to the world.",
    url: "https://growztech.com/projects",
    type: "website",
    images: [
      {
        url: "/social-media-preview.svg",
        width: 1200,
        height: 630,
        alt: "Growztech Projects Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Growztech Projects | Innovating for the Future",
    description:
      "Explore Growztech’s portfolio: Cutting-edge software, AI, and cloud projects from Ethiopia to the world.",
    images: ["/social-media-preview.svg"],
  },
};

export default function ProjectsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <>{children}</>;
}
