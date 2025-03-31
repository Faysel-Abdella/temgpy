"use client";

import React from "react";
import { blogs } from "./blogs-data";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function RelatedPosts({ slug }: { slug: string }) {
  const router = useRouter();
  const filteredBlogs = blogs.filter((blog) => blog.slug !== slug);
  const relatedBlogs = filteredBlogs.slice(0, 3);
  return (
    <div className="flex flex-col gap-0 w-full max-w-[1212px] mt-10 md:mt-16 px-4 lg:px-0">
      <p className="font-bold font-gilroy text-2xl lg:text-3xl">
        Related posts
      </p>
      <div className="flex flex-wrap  justify-start items-start md:space-x-6 space-y-8 w-full mt-5 mb-20">
        {relatedBlogs.map((blog, index) => (
          <div
            key={index}
            className="flex w-full max-w-[388px] flex-col gap-3">
            <div className="relative w-full max-w-[364px] sm:max-w-[388px] h-[244px] sm:h-[260px] rounded-lg overflow-hidden">
              <Image
                src={blog.image || "/placeholder.svg"}
                width={335}
                height={335}
                onClick={() => router.push(`/blogs/${blog.slug}`)}
                alt={blog.title}
                className="object-cover w-full h-full cursor-pointer"
              />
            </div>
            <div className="flex flex-col py-2.5 h-full justify-between">
              <div className="flex flex-col gap-2">
                <p className="text-sm font-normal font-inter text-description/80 uppercase">
                  {blog.techIndustry}
                </p>
                <Link
                  href={`/blogs/${blog.slug}`}
                  className="text-lg hover:opacity-80 md:text-xl font-semibold line-clamp-3 font-gilroy leading-[27px]">
                  {blog.title}
                </Link>
                <Link
                  href={`/blogs/${blog.slug}`}
                  className="text-md hover:opacity-80 font-inter text-description mt-2 font-normal">
                  {blog.description}
                </Link>
              </div>
              <div className="flex items-center gap-2 opacity-60 mt-3">
                <span className="text-sm font-inter font-medium tracking-wide">
                  {blog.publishedAt}
                </span>
                <span className="size-[5px] bg-black rounded-full items-center justify-center" />
                <span className="text-sm font-inter font-medium tracking-wide">
                  {blog.readingTime}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
