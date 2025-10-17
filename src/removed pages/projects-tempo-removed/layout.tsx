import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Venas Technologies Projects | Leading Software Development Company Portfolio",
  description:
    "See how Venas Technologies stands among leading software development companies with custom projects in AI, cloud, and scalable digital solutions",
  keywords: [
    "Venas Technologies projects",
    "tech portfolio",
    "software development",
    "AI innovations",
    "cloud solutions",
    "Ethiopia technology",
  ],
  robots: "index, follow",
  openGraph: {
    title:
      "Venas Technologies Projects | Leading Software Development Company Portfolio",
    description:
      "See how Venas Technologies stands among leading software development companies with custom projects in AI, cloud, and scalable digital solutions",
    url: "https://venastechnology.com/projects",
    type: "website",
    images: [
      {
        url: "https://venastechnology.com/media-preview.png",
        width: 1200,
        height: 630,
        alt: "Venas Technologies Projects Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Venas Technologies Projects | Leading Software Development Company Portfolio",
    description:
      "See how Venas Technologies stands among leading software development companies with custom projects in AI, cloud, and scalable digital solutions",
    images: ["https://venastechnology.com/media-preview.png"],
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
