import { Separator } from "@/components/ui/separator";
import { createClient } from "@/prismicio";
import { BlogFilters } from "./blog-filters";
import { BlogSearch } from "./blog-search";
import { FeaturedBlog } from "./featured-blog";
import { LatestThreeBlogs } from "./latest-three-blogs";
import { filter } from "@prismicio/client";
import { OlderBlogs } from "./older-blogs";

interface BlogsList {
  searchQuery?: string;
}
export default async function BlogsList({ searchQuery }: BlogsList) {
  const client = createClient();

  const isSearchActive = searchQuery != "";
  const featuredBlog = await client.getSingle("featured_blog");

  const featuredBlogId =
    featuredBlog.data.blog && featuredBlog.data.blog.link_type == "Document"
      ? featuredBlog.data.blog.id
      : null;

  const filters = featuredBlogId
    ? [filter.not("document.id", featuredBlogId)]
    : [];
  const allBlogs = await client.getAllByType("blog", {
    orderings: {
      field: "my.blog.publication_date",
      direction: "desc",
    },
    filters,
    pageSize: 100,
  });

  const latestThreeBlogs = allBlogs.slice(0, 3);
  const olderBlogs = allBlogs.slice(3);

  return (
    <div className="flex w-screen bg-white items-center justify-center py-10 md:py-16 px-4 lg:px-0 flex-col gap-10">
      <div className="flex items-center justify-center w-full">
        <div className="flex justify-between w-full mx-auto max-w-[1212px] items-center h-full">
          <BlogFilters />
          <BlogSearch />
        </div>
      </div>
      <Separator className="max-w-[1212px]" />

      <div className="flex w-full z-20 bg-white items-center justify-center mx-auto pb-8">
        <div className="flex flex-col items-start justify-center lg:flex-row space-y-10 space-x-0 lg:space-x-16 max-w-[1212px] w-full">
          <FeaturedBlog featuredBlog={featuredBlog} />
          <LatestThreeBlogs blogs={latestThreeBlogs} />
        </div>
      </div>

      {/* {isSearchActive && (
        <div className="w-full max-w-[1212px]">
          <h2 className="text-2xl font-medium font-gilroy mb-0">
            {filteredBlogs.length === 0
              ? "No results found"
              : `Search Results (${filteredBlogs.length})`}
          </h2>
        </div>
      )} */}

      <OlderBlogs blogs={olderBlogs} isSearchActive={false} />
    </div>
  );
}
