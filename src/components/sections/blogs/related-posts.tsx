import { calculateReadingTimeFromSlices, formatBlogDate } from "@/lib/utils";
import { createClient } from "@/prismicio";
import { asDate, filter } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import Link from "next/link";
import { BlogDocument } from "../../../../prismicio-types";

interface RelatedPostsProps {
  blog: BlogDocument;
}
export default async function RelatedPosts({ blog }: RelatedPostsProps) {
  const client = createClient();

  const tags = blog.data.tags.map((tag) => tag.tag_name as string);

  const relatedBlogs = await client.getAllByType("blog", {
    orderings: {
      field: "my.blog.publication_date",
      direction: "desc",
    },
    filters: [
      filter.any("my.blog.tags.tag_name", tags),
      filter.not("document.id", blog.id),
    ],
    pageSize: 3,
  });

  return (
    <div className="flex flex-col gap-0 w-full max-w-[1212px] mt-10 md:mt-16 px-4 lg:px-0">
      <p className="font-bold font-gilroy text-2xl lg:text-3xl">
        Related posts
      </p>
      <div className="flex flex-wrap  justify-start items-start md:space-x-6 space-y-8 w-full mt-5 mb-20">
        {relatedBlogs.map((blog) => (
          <Link
            href={`/blogs/${blog.uid}`}
            key={blog.id}
            className="flex w-full max-w-[388px] flex-col gap-3"
          >
            <div className="relative w-full max-w-[364px] sm:max-w-[388px] h-[244px] sm:h-[260px] rounded-lg overflow-hidden">
              <PrismicNextImage
                field={blog.data.featured_image}
                width={335}
                height={335}
                alt=""
                className="object-cover w-full h-full cursor-pointer"
              />
            </div>
            <div className="flex flex-col py-2.5 h-full justify-between">
              <div className="flex flex-col gap-2">
                {blog.data.tags.length > 0 && (
                  <p className="text-sm font-normal font-inter text-description/80 uppercase">
                    {blog.data.tags[0]?.tag_name}
                  </p>
                )}
                <p className="text-lg hover:opacity-80 md:text-xl font-semibold line-clamp-3 font-gilroy leading-[27px]">
                  {blog.data.title}
                </p>
                <div className="text-md hover:opacity-80 font-inter text-description mt-2 font-normal">
                  <PrismicRichText field={blog.data.short_description} />
                </div>
              </div>
              <div className="flex items-center gap-2 opacity-60 mt-3">
                {blog.data.publication_date && (
                  <span className="text-sm font-inter font-medium tracking-wide">
                    {formatBlogDate(asDate(blog.data.publication_date))}
                  </span>
                )}
                <span className="size-[5px] bg-black rounded-full items-center justify-center" />
                <span className="text-sm font-inter font-medium tracking-wide">
                  {calculateReadingTimeFromSlices(blog.data!.slices)} min read
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
