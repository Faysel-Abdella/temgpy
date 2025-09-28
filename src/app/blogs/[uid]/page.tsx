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
      <ReadingBlog slices={blog.data.slices} tocSections={tocSections} />
      <div className="flex mx-auto">
        <RelatedPosts blog={blog} />
      </div>
      <Subscribe />
    </div>
  );
};

export default BlogPostPage;
