import { createClient } from "@/prismicio";
import React from "react";
import BlogHome from "./_components/home";
import WriterAndShare from "./_components/writer-and-share";
import { Separator } from "@/components/ui/separator";
import { asText } from "@prismicio/client";
import { RichTextContentSliceDefaultPrimary } from "../../../../prismicio-types";
import ReadingBlog from "./_components/reading-blog";
import Subscribe from "@/components/sections/blogs/subscribe";
import RelatedPosts from "@/components/sections/blogs/related-posts";
import { getHeadingId } from "@/lib/utils";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ uid: string }>;
}): Promise<Metadata> {
  const { uid } = await params;

  const client = createClient();
  const blog = await client.getByUID("blog", uid).catch(() => notFound());

  const keywords = blog.data.keywords
    ? blog?.data.keywords.map((keyword) => keyword.keyword as string)
    : [];

  const title = `${blog.data.meta_title || blog?.data.title} | Venas Technologies`,
    description =
      blog.data.meta_description ||
      "Explore this Venas Technologies blog post.";

  return {
    title,
    description,
    keywords: [
      blog?.data.title || "Default Blog Title",
      "Venas Technologies blog",
      "digital transformation",
      "AI solutions",
      ...keywords,
    ],
    openGraph: {
      title,
      description,
      url: `https://venastechnology.com/blogs/${blog.uid}`,
      type: "article",
      images: [
        {
          url:
            blog.data.featured_image.url ||
            "https://venastechnology.com/media-preview.png",
          width: blog.data.featured_image.dimensions
            ? blog?.data.featured_image.dimensions.width
            : 1200,
          height: blog.data.featured_image.dimensions
            ? blog?.data.featured_image.dimensions.height
            : 630,
          alt: `${blog?.data.meta_title || blog?.data.title} Preview`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [
        blog.data.featured_image.url ||
          "https://venastechnology.com/media-preview.png",
      ],
    },
  };
}

export async function generateStaticParams() {
  const client = createClient();
  const pages = await client.getAllByType("blog");

  return pages.map((page) => {
    return { uid: page.uid };
  });
}

interface BlogPostPageProps {
  params: Promise<{ uid: string }>;
}
const BlogPostPage = async ({ params }: BlogPostPageProps) => {
  const { uid } = await params;
  const client = createClient();
  const blog = await client.getByUID("blog", uid);

  const tocSections = blog.data.slices
    .filter((slice) => slice.slice_type === "rich_text_content")
    .flatMap((slice) =>
      (slice.primary as RichTextContentSliceDefaultPrimary).content.filter(
        (block) => ["heading2", "heading3"].includes(block.type)
      )
    )
    .map((heading) => {
      const text = asText([heading]);
      const id = getHeadingId(text);

      return { id, title: text, type: heading.type };
    });

  return (
    <div className="flex flex-col gap-6 bg-background">
      <BlogHome blog={blog} />
      <WriterAndShare blog={blog} />
      <Separator className="mx-auto w-full px-4 max-w-[1055px]" />
      <ReadingBlog
        blog={blog}
        slices={blog.data.slices}
        tocSections={tocSections}
      />
      <div className="flex mx-auto">
        <RelatedPosts blog={blog} />
      </div>
      <Subscribe />
    </div>
  );
};

export default BlogPostPage;
