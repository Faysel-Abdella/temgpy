import { getOneBlog } from "@/components/sections/blogs/blogs-data";
import Subscribe from "@/components/sections/blogs/subscribe";
import { Separator } from "@/components/ui/separator";
import type { Metadata } from "next";
import BlogHome from "./home";
import ReadingBlog from "./reading-blog";
import WriterAndShare from "./writer-and-share";

export async function generateMetadata(): Promise<Metadata> {
  const slug = "why-we-choose-this-career-understanding-software-development"; // Static slug for this route
  const blog = await getOneBlog(slug);

  return {
    title: `${blog?.title} | Growztech`,
    description: blog?.description || "Explore this Growztech blog post.",
    keywords: [
      blog?.title || "Default Blog Title",
      "Growztech blog",
      "digital transformation",
      "AI solutions",
    ],
    openGraph: {
      title: blog?.title,
      description: blog?.description || "Check out this Growztech blog post.",
      url: "https://growztech.com/blogs/why-we-choose-this-career-understanding-software-development",
      type: "article",
      images: [
        {
          url: "https://growztech.com/media-preview.png",
          width: 1200,
          height: 630,
          alt: `${blog?.title} Preview`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: blog?.title,
      description: blog?.description || "Check out this Growztech blog post.",
      images: ["https://growztech.com/media-preview.png"],
    },
  };
}

export default async function Page() {
  const slug = "why-we-choose-this-career-understanding-software-development"; // Static slug

  return (
    <div className="flex flex-col gap-6 bg-background">
      <BlogHome />
      <WriterAndShare slug={slug} />
      <Separator className="mx-auto w-full px-4 max-w-[1055px]" />
      <ReadingBlog />

      <Subscribe />
    </div>
  );
}
