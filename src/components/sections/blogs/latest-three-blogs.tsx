"use client";

import Image from "next/image";
import { Blog } from "./blogs-data";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface LatestThreeBlogsProps {
  blogs: Blog[];
}

export function LatestThreeBlogs({ blogs }: LatestThreeBlogsProps) {
  const router = useRouter();
  return (
    <div className="flex w-full lg:w-1/2 font-inter">
      <div className="flex flex-col space-y-6 md:space-y-8 w-full">
        {blogs.map((blog) => (
          <div
            key={blog.title}
            className="flex space-x-5">
            <div className="flex-shrink-0 w-36 h-24 sm:w-[223px] sm:h-[155px] rounded-lg overflow-hidden">
              <Image
                onClick={() => router.push(`/blogs/${blog.slug}`)}
                src={blog.image}
                alt="AI article image"
                width={140}
                height={140}
                className="object-cover w-full h-full hover:cursor-pointer"
              />
            </div>
            <div className="flex flex-col sm:py-2.5 h-full justify-between">
              <div className="flex flex-col gap-2">
                <p className="text-xs md:text-sm font-normal font-inter text-description/80 uppercase">
                  {blog.techIndustry}
                </p>
                <Link
                  href={`/blogs/${blog.slug}`}
                  className="text-lg hover:opacity-80 md:text-2xl font-semibold line-clamp-2 md:line-clamp-3 font-gilroy leading-[22px] md:leading-[27px]">
                  {blog.title}
                </Link>
              </div>
              <div className="flex items-center gap-2 opacity-60 flex-wrap">
                <span className="text-xs sm:text-sm font-inter font-medium tracking-wide">
                  {blog.publishedAt}
                </span>
                <span className="size-[5px] bg-black rounded-full items-center justify-center" />
                <span className="text-xs sm:text-sm font-inter font-medium tracking-wide">
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
