import type { Metadata } from "next";
import React from "react";
import BlogHome from "./home";
import { Separator } from "@/components/ui/separator";
import ReadingBlog from "./reading-blog";
import WriterAndShare from "./writer-and-share";
import RelatedPosts from "@/components/sections/blogs/related-posts";
import Subscribe from "@/components/sections/blogs/subscribe";
import { getOneBlog } from "@/components/sections/blogs/blogs-data";

export async function generateMetadata(): Promise<Metadata> {
  const slug = "mobile-vs-web-apps-which-one-does-your-business-need"; // Static slug for this route
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
      url: "https://growztech.com/blogs/mobile-vs-web-apps-which-one-does-your-business-need",
      type: "article",
      images: [
        {
          url:
            blog?.image ||
            "https://growztech.com/images/ai-transforms-preview.jpg",
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
      images: [
        blog?.image || "https://growztech.com/images/ai-transforms-preview.jpg",
      ],
    },
  };
}

export default async function Page() {
  const slug = "mobile-vs-web-apps-which-one-does-your-business-need"; // Static slug

  return (
    <div className="flex flex-col gap-6 bg-background">
      <BlogHome />
      <WriterAndShare slug={slug} />
      <Separator className="mx-auto w-full px-4 max-w-[1055px]" />
      <ReadingBlog />
      <div className="flex mx-auto">
        <RelatedPosts slug={slug} />
      </div>
      <Subscribe />
    </div>
  );
}
