import React from "react";
import { BlogsGridSkeleton } from "./blogs-grid-skeleton";
import { Skeleton } from "@/components/ui/skeleton";

const FilteredBlogsGridSkeleton = () => {
  return (
    <div className="w-full mx-auto max-w-[1212px]">
      <div className="w-full ]">
        <Skeleton className="h-10 w-52" />
      </div>

      <BlogsGridSkeleton />
    </div>
  );
};

export default FilteredBlogsGridSkeleton;
