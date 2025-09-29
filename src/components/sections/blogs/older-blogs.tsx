"use client";

import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Blog } from "./blogs-data";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { BlogDocument } from "../../../../prismicio-types";
import { PrismicRichText } from "@prismicio/react";
import { calculateReadingTimeFromSlices, formatBlogDate } from "@/lib/utils";
import { asDate } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";

interface OlderBlogsProps {
  blogs: BlogDocument[];
  isSearchActive: boolean;
}

export function OlderBlogs({ blogs, isSearchActive }: OlderBlogsProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="flex flex-wrap max-w-[1212px] justify-start items-start md:space-x-6 space-y-8 w-full mt-5 mb-20"
      >
        {blogs.length > 0
          ? blogs.map((blog, index) => (
              <motion.div
                key={blog.data.title! + index}
                className="group relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Link
                  href={`/blogs/${blog.uid}`}
                  className="flex w-full max-w-[388px] flex-col gap-3"
                >
                  <PrismicNextImage
                    field={blog.data.featured_image}
                    className="object-cover l hover:cursor-pointer relative w-full max-w-[364px] sm:max-w-[388px] h-[244px] sm:h-[260px] rounded-lg overflow-hidden"
                  />

                  <div className="flex flex-col py-2.5 h-full justify-between">
                    <div className="flex flex-col gap-2">
                      <p className="text-sm font-normal font-inter text-description/80 uppercase">
                        {blog.data.tags.length > 0
                          ? blog.data.tags[0]?.tag_name
                          : "General"}
                      </p>
                      <p className="text-lg hover:opacity-80 md:text-xl font-semibold line-clamp-3 font-gilroy leading-[27px]">
                        {blog.data.title}
                      </p>
                      <div className="text-md hover:opacity-80 font-inter text-description mt-2 font-normal">
                        <PrismicRichText field={blog.data.short_description} />
                      </div>
                    </div>
                    <div className="flex items-center gap-2 opacity-60 mt-3">
                      <span className="text-sm font-inter font-medium tracking-wide">
                        {blog.data.publication_date && (
                          <span className="text-xs sm:text-sm font-inter font-medium tracking-wide">
                            {formatBlogDate(asDate(blog.data.publication_date))}
                          </span>
                        )}
                      </span>
                      <span className="size-[5px] bg-black rounded-full items-center justify-center" />
                      <span className="text-sm font-inter font-medium tracking-wide">
                        {calculateReadingTimeFromSlices(blog.data!.slices)} min
                        read
                      </span>
                    </div>
                  </div>
                </Link>
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
