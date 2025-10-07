import { GoogleTagManager } from "@next/third-parties/google";

import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import Navbar from "@/components/common/navbar";
import Footer from "@/components/common/footer";
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import { Toaster } from "sonner";

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
    default:
      "Best Software Development & Outsourcing Company | Venas Technologies",
    template: "%s | Venas Technologies",
  },
  description:
    "Venas Technologies is a leading software company offering scalable custom software, AI, cloud, and outsourcing solutions to drive business growth globally",
  keywords: [
    "custom software development",
    "AI solutions",
    "cloud technology",
    "digital transformation",
    "software outsourcing",
    "tech talent solutions",
    "digital platforms",
    "AI automation",
    "enterprise software solutions",
    "scalable software solutions",
  ],
  robots: "index, follow",
  openGraph: {
    title:
      "Best Software Development & Outsourcing Company | Venas Technologies",
    description:
      "Venas Technologies is a leading software company offering scalable custom software, AI, cloud, and outsourcing solutions to drive business growth globally",
    url: "https://venastechnology.com",
    type: "website",
    images: [
      {
        url: "https://venastechnology.com/media-preview.png",
        width: 1200,
        height: 630,
        alt: "Venas Technologies Homepage Preview",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Best Software Development & Outsourcing Company | Venas Technologies",
    description:
      "Venas Technologies is a leading software company offering scalable custom software, AI, cloud, and outsourcing solutions to drive business growth globally",
    images: ["https://venastechnology.com/media-preview.png"],
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

      {/* Tidio chatbot integration */}
      <script
        src="//code.tidio.co/kyscoags40euuepmjavawnse7la5cewi.js"
        async
      ></script>

      <body className="flex flex-col overflow-x-hidden max-w-screen">
        {/* Favicon */}
        <link rel="icon" href="/tab-icon.svg" type="image/svg+xml" />

        <Navbar />
        {children}
        <Footer />
        <Toaster richColors position="top-center" />
        <PrismicPreview repositoryName={repositoryName} />
      </body>
    </html>
  );
}
