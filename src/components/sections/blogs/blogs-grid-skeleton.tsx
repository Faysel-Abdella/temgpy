import { Skeleton } from "@/components/ui/skeleton";

const BlogCardSkeleton = () => (
  <div className="flex w-full max-w-[388px] flex-col gap-3">
    {/* Image Skeleton (h-[244px] sm:h-[260px]) */}
    <Skeleton className="relative w-full max-w-[364px] sm:max-w-[388px] h-[244px] sm:h-[260px] rounded-lg" />

    <div className="flex flex-col py-2.5 h-full justify-between">
      <div className="flex flex-col gap-2">
        {/* Tag Skeleton */}
        <Skeleton className="h-4 w-20 text-sm uppercase" />

        {/* Title Skeleton (2 lines) */}
        <Skeleton className="h-6 w-full text-lg font-semibold" />
        <Skeleton className="h-6 w-11/12 text-lg font-semibold" />

        {/* Description Skeleton (2 lines) */}
        <Skeleton className="h-5 w-full mt-2" />
        <Skeleton className="h-5 w-10/12" />
      </div>

      {/* Meta Data Skeleton */}
      <div className="flex items-center gap-2 mt-3">
        <Skeleton className="h-4 w-16" />
        <div className="size-[5px] bg-gray-300 rounded-full" />
        <Skeleton className="h-4 w-20" />
      </div>
    </div>
  </div>
);

export function BlogsGridSkeleton() {
  const count = 3;
  return (
    <div className="grid  max-w-[1212px]   justify-start items-start  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:space-x-6 space-y-8 w-full mt-5 mb-20">
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className="w-full  ">
          <BlogCardSkeleton />
        </div>
      ))}
    </div>
  );
}
