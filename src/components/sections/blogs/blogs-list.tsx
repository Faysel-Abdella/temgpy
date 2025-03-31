"use client";

import { useState, useMemo, useEffect } from "react";
import { Separator } from "@/components/ui/separator";
import { blogs } from "./blogs-data";
import { BlogFilters } from "./blog-filters";
import { BlogSearch } from "./blog-search";
import { FeaturedBlog } from "./featured-blog";
import { LatestThreeBlogs } from "./latest-three-blogs";
import { OlderBlogs } from "./older-blogs";

export default function BlogsList() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [isMobile, setIsMobile] = useState(false);
  const [isSearchActive, setIsSearchActive] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    setIsSearchActive(searchQuery.trim() !== "" || activeFilter !== "all");
  }, [searchQuery, activeFilter]);

  const filteredBlogs = useMemo(() => {
    let filtered = [...blogs];
    if (activeFilter !== "all") {
      filtered = filtered.filter((blog) => blog.type === activeFilter);
    }
    if (searchQuery.trim() !== "") {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (blog) =>
          blog.title.toLowerCase().includes(query) ||
          blog.description?.toLowerCase().includes(query) ||
          blog.techIndustry?.toLowerCase().includes(query)
      );
    }
    return filtered;
  }, [activeFilter, searchQuery]);

  const latestBlog = blogs[0];
  const latestThreeBlogs = blogs.slice(1, 4);
  const olderBlogs = isSearchActive ? filteredBlogs : blogs.slice(4);

  return (
    <div className="flex w-screen bg-white items-center justify-center py-10 md:py-16 px-4 lg:px-0 flex-col gap-10">
      <div className="flex items-center justify-center w-full">
        <div className="flex justify-between w-full mx-auto max-w-[1212px] items-center h-full">
          <BlogFilters
            activeFilter={activeFilter}
            setActiveFilter={setActiveFilter}
            isMobile={isMobile}
          />
          <BlogSearch
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            isMobile={isMobile}
          />
        </div>
      </div>
      <Separator className="max-w-[1212px]" />

      {!isSearchActive && (
        <div className="flex w-full z-20 bg-white items-center justify-center mx-auto pb-8">
          <div className="flex flex-col items-start justify-center lg:flex-row space-y-10 space-x-0 lg:space-x-16 max-w-[1212px] w-full">
            <FeaturedBlog blog={latestBlog} />
            <LatestThreeBlogs blogs={latestThreeBlogs} />
          </div>
        </div>
      )}

      {isSearchActive && (
        <div className="w-full max-w-[1212px]">
          <h2 className="text-2xl font-medium font-gilroy mb-0">
            {filteredBlogs.length === 0
              ? "No results found"
              : `Search Results (${filteredBlogs.length})`}
          </h2>
        </div>
      )}

      <OlderBlogs
        blogs={olderBlogs}
        isSearchActive={isSearchActive}
      />
    </div>
  );
}
