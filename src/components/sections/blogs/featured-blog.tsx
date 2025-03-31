"use client";

import Image from "next/image";
import { Blog } from "./blogs-data";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface FeaturedBlogProps {
  blog: Blog;
}

export function FeaturedBlog({ blog }: FeaturedBlogProps) {
  const router = useRouter();

  return (
    <div className="flex w-full lg:w-1/2 mb-8 lg:mb-0">
      <div className="flex flex-col h-full gap-4">
        <div className="relative w-full aspect-[16/11] rounded-lg overflow-hidden">
          <Image
            onClick={() => router.push(`/blogs/${blog.slug}`)}
            src={blog.image}
            alt="Featured article image"
            fill
            className="object-cover hover:cursor-pointer"
          />
        </div>
        <div className="flex flex-col flex-grow gap-3 font-instrument">
          <p className="text-sm font-normal font-inter text-description/80 uppercase">
            {blog.techIndustry}
          </p>
          <Link
            href={`/blogs/${blog.slug}`}
            className="text-2xl hover:opacity-80 md:text-3xl font-semibold font-gilroy">
            {blog.title}
          </Link>
          <Link
            href={`/blogs/${blog.slug}`}
            className="text-md hover:opacity-80 font-inter text-description mt-2 font-normal">
            {blog.description}
          </Link>
          <div className="flex items-center gap-2 opacity-60">
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
    </div>
  );
}
