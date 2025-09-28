"use client";

import { formatBlogDate } from "@/lib/utils";
import { asDate } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import Link from "next/link";
import { FeaturedBlogDocument } from "../../../../prismicio-types";

interface FeaturedBlogProps {
  featuredBlog: FeaturedBlogDocument;
}

export function FeaturedBlog({ featuredBlog }: FeaturedBlogProps) {
  const featuredBlogData =
    featuredBlog.data.blog && featuredBlog.data.blog.link_type == "Document"
      ? featuredBlog.data.blog
      : null;

  if (featuredBlogData)
    return (
      <div className="flex w-full lg:w-1/2 mb-8 lg:mb-0">
        <Link
          href={`/blogs/${featuredBlogData.uid}`}
          className="flex flex-col h-full gap-4"
        >
          <PrismicNextImage
            field={featuredBlogData.data!.featured_image}
            alt=""
            className="object-cover hover:cursor-pointer aspect-[16/11] rounded-lg w-full"
          />

          <div className="flex flex-col flex-grow gap-3 font-instrument">
            {featuredBlogData.data!.tags.length > 0 && (
              <p className="text-sm font-normal font-inter text-description/80 uppercase">
                {featuredBlogData.data!.tags[0]?.tag_name}
              </p>
            )}
            <p className="text-2xl hover:opacity-80 md:text-3xl font-semibold font-gilroy">
              {featuredBlogData.data!.title}
            </p>
            <div className="text-md hover:opacity-80 font-inter text-description mt-2 font-normal">
              <PrismicRichText
                field={featuredBlogData.data!.short_description}
              />
            </div>
            <div className="flex items-center gap-2 opacity-60">
              {featuredBlogData.data!.publication_date && (
                <span className="text-sm font-inter font-medium tracking-wide">
                  {formatBlogDate(
                    asDate(featuredBlogData.data!.publication_date)
                  )}
                </span>
              )}
              {/* <span className="size-[5px] bg-black rounded-full items-center justify-center" /> */}
              {/* <span className="text-sm font-inter font-medium tracking-wide">
              {calculateReadingTimeFromSlices(featuredBlogData.data!.slices)}
            </span> */}
            </div>
          </div>
        </Link>
      </div>
    );
}
