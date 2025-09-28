"use client";

import { calculateReadingTimeFromSlices, formatBlogDate } from "@/lib/utils";
import { asDate } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import Link from "next/link";
import { BlogDocument } from "../../../../prismicio-types";

interface LatestThreeBlogsProps {
  blogs: BlogDocument[];
}

export function LatestThreeBlogs({ blogs }: LatestThreeBlogsProps) {
  console.log(blogs);
  return (
    <div className="flex w-full lg:w-1/2 font-inter">
      <div className="flex flex-col space-y-6 md:space-y-8 w-full">
        {blogs.map((blog) => (
          <Link
            href={`/blogs/${blog.uid}`}
            key={blog.data.title}
            className="flex space-x-5"
          >
            <PrismicNextImage
              field={blog.data.featured_image}
              alt=""
              className="object-cover  hover:cursor-pointer flex-shrink-0 w-36 h-24 sm:w-[223px] sm:h-[155px] rounded-lg overflow-hidden"
            />

            <div className="flex flex-col sm:py-2.5 h-full justify-between">
              <div className="flex flex-col gap-2">
                <p className="text-xs md:text-sm font-normal font-inter text-description/80 uppercase">
                  {blog.data.tags.length > 0
                    ? blog.data.tags[0]?.tag_name
                    : "General"}
                </p>
                <p className="text-lg hover:opacity-80 md:text-2xl font-semibold line-clamp-2 md:line-clamp-3 font-gilroy leading-[22px] md:leading-[27px]">
                  {blog.data.title}
                </p>
              </div>
              <div className="flex items-center gap-2 opacity-60 flex-wrap">
                {blog.data.publication_date && (
                  <span className="text-xs sm:text-sm font-inter font-medium tracking-wide">
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
