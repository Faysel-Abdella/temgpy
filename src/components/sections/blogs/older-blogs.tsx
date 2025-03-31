"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Blog } from "./blogs-data";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface OlderBlogsProps {
  blogs: Blog[];
  isSearchActive: boolean;
}

export function OlderBlogs({ blogs, isSearchActive }: OlderBlogsProps) {
  const router = useRouter();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="flex flex-wrap max-w-[1212px] justify-start items-start md:space-x-6 space-y-8 w-full mt-5 mb-20">
        {blogs.length > 0
          ? blogs.map((blog, index) => (
              <motion.div
                key={blog.title + index}
                className="group relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}>
                <div className="flex w-full max-w-[388px] flex-col gap-3">
                  <div className="relative w-full max-w-[364px] sm:max-w-[388px] h-[244px] sm:h-[260px] rounded-lg overflow-hidden">
                    <Image
                      src={blog.image || "/placeholder.svg"}
                      width={335}
                      onClick={() => router.push(`/blogs/${blog.slug}`)}
                      height={335}
                      alt={blog.title}
                      className="object-cover w-full h-full hover:cursor-pointer"
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
              </motion.div>
            ))
          : isSearchActive && (
              <div className="w-full py-5 md:py-7 text-center">
                <p className="text-muted-foreground">
                  No blogs match your search criteria. Try adjusting your
                  filters or search terms.
                </p>
              </div>
            )}
      </motion.div>
    </AnimatePresence>
  );
}
