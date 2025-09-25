import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GrowzTech Projects | Leading Software Development Company Portfolio",
  description:
    "See how GrowzTech stands among leading software development companies with custom projects in AI, cloud, and scalable digital solutions",
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
    title:
      "GrowzTech Projects | Leading Software Development Company Portfolio",
    description:
      "See how GrowzTech stands among leading software development companies with custom projects in AI, cloud, and scalable digital solutions",
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
    title:
      "GrowzTech Projects | Leading Software Development Company Portfolio",
    description:
      "See how GrowzTech stands among leading software development companies with custom projects in AI, cloud, and scalable digital solutions",
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
