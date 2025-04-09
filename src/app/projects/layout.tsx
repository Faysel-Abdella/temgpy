import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Growztech Projects | Showcasing Innovative Tech Solutions",
  description:
    "Discover Growztech’s Projects: Explore our portfolio of cutting-edge software development, AI innovations, and cloud-based solutions from an Ethiopia-based tech leader.",
  keywords: [
    "Growztech projects",
    "tech portfolio",
    "software development",
    "AI innovations",
    "cloud solutions",
    "Ethiopia technology",
  ],
  robots: "index, follow",
  openGraph: {
    title: "Growztech Projects | Pioneering Tech Excellence",
    description:
      "Dive into Growztech’s project showcase: From software development to AI and cloud solutions, see how we’re shaping the future from Ethiopia.",
    url: "https://growztech.com/projects",
    type: "website",
    images: [
      {
        url: "https://growztech.com/media-preview.png",
        width: 1200,
        height: 630,
        alt: "Growztech Projects Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Growztech Projects | Pioneering Tech Excellence",
    description:
      "Dive into Growztech’s project showcase: From software development to AI and cloud solutions, see how we’re shaping the future from Ethiopia.",
    images: ["https://growztech.com/media-preview.png"],
  },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <main className="bg-muted">{children}</main>
    </>
  );
}
