import { Separator } from "@/components/ui/separator";
import { Suspense } from "react";
import { BlogSearch } from "./blog-search";
import FilteredBlogsGrid from "./filtered-blogs-grid";
import FilteredBlogsGridSkeleton from "./filtered-blogs-grid-skeleton";
import { MainBlogsGridSkeleton } from "./main-blog-grid-skeleton";
import MainBlogsGrid from "./main-blogs-grid";

interface BlogsList {
  searchQuery?: string;
  filter?: string;
}
export default async function BlogsList({ searchQuery, filter }: BlogsList) {
  const filterSuspenseKey = JSON.stringify({ searchQuery, filter });
  return (
    <div className="flex w-screen bg-white items-center justify-center py-10 md:py-16 px-4 md:px-8  flex-col gap-10">
      <div className="flex items-center justify-center w-full">
        <div className="flex justify-end w-full mx-auto max-w-[1212px] items-center h-full">
          {/* <BlogFilters /> */}
          <BlogSearch searchQuery={searchQuery} />
        </div>
      </div>
      <Separator className="max-w-[1212px]" />
      {searchQuery || filter ? (
        <Suspense
          key={filterSuspenseKey}
          fallback={<FilteredBlogsGridSkeleton />}
        >
          <FilteredBlogsGrid searchQuery={searchQuery} filter={filter} />
        </Suspense>
      ) : (
        <Suspense fallback={<MainBlogsGridSkeleton />}>
          <MainBlogsGrid />
        </Suspense>
      )}
    </div>
  );
}
