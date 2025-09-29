import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { BlogsGridSkeleton } from "./blogs-grid-skeleton";

export function FeaturedBlogSkeleton() {
  return (
    <div className="flex w-full lg:w-1/2 mb-8 lg:mb-0">
      <div className="flex flex-col h-full gap-4 w-full">
        {/* Featured Image Skeleton (Matches aspect-[16/11]) */}
        <Skeleton className="aspect-[16/11] rounded-lg w-full" />

        <div className="flex flex-col flex-grow gap-3">
          {/* Tag Skeleton */}
          <Skeleton className="h-4 w-24 text-sm uppercase" />

          {/* Title Skeleton (2-3 lines for large title) */}
          <Skeleton className="h-8 w-11/12 text-3xl font-semibold" />
          <Skeleton className="h-8 w-10/12 text-3xl font-semibold" />

          {/* Short Description Skeleton (2 lines) */}
          <Skeleton className="h-5 w-full mt-2" />
          <Skeleton className="h-5 w-11/12" />

          {/* Date/Reading Time Skeleton */}
          <div className="flex items-center gap-2 mt-2">
            <Skeleton className="h-4 w-20" />
            <div className="size-[5px] bg-gray-300 rounded-full" />
            <Skeleton className="h-4 w-16" />
          </div>
        </div>
      </div>
    </div>
  );
}

const LatestBlogItemSkeleton = () => (
  <div className="flex space-x-5 w-full">
    {/* Image Skeleton (w-36 h-24 sm:w-[223px] sm:h-[155px]) */}
    <Skeleton className="flex-shrink-0 w-36 h-24 sm:w-[223px] sm:h-[155px] rounded-lg" />

    <div className="flex flex-col sm:py-2.5 h-full justify-between w-full">
      <div className="flex flex-col gap-2">
        {/* Tag Skeleton */}
        <Skeleton className="h-4 w-16 text-xs uppercase" />

        {/* Title Skeleton (2 lines) */}
        <Skeleton className="h-6 w-full text-lg font-semibold" />
        <Skeleton className="h-6 w-10/12 text-lg font-semibold" />
      </div>

      {/* Meta Data Skeleton */}
      <div className="flex items-center gap-2 flex-wrap mt-2">
        <Skeleton className="h-4 w-16" />
        <div className="size-[5px] bg-gray-300 rounded-full" />
        <Skeleton className="h-4 w-20" />
      </div>
    </div>
  </div>
);

export function LatestThreeBlogsSkeleton() {
  return (
    <div className="flex w-full lg:w-1/2">
      <div className="flex flex-col space-y-6 md:space-y-8 w-full">
        <LatestBlogItemSkeleton />
        <LatestBlogItemSkeleton />
        <LatestBlogItemSkeleton />
      </div>
    </div>
  );
}

export function MainBlogsGridSkeleton() {
  return (
    <div className="w-full">
      <div className="flex w-full  z-20  items-center justify-center mx-auto pb-8">
        <div className="flex flex-col items-start justify-center lg:flex-row space-y-10 space-x-0 lg:space-x-16 max-w-[1212px] w-full">
          <FeaturedBlogSkeleton />

          <LatestThreeBlogsSkeleton />
        </div>
      </div>

      <div className="flex justify-center w-full ">
        <BlogsGridSkeleton />
      </div>
    </div>
  );
}
