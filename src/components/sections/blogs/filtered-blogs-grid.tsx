import { filterBlogs } from "@/actions/blog.action";
import { BlogsGrid } from "./blogs-grid";

interface FilteredBlogsGrid {
  searchQuery?: string;
  filter?: string;
}
const FilteredBlogsGrid = async ({
  searchQuery,
  filter,
}: FilteredBlogsGrid) => {
  const filteredBlogs = await filterBlogs({ searchQuery, filter });

  if (filteredBlogs.blogs)
    return (
      <div className="w-full max-w-[1212px] mx-auto">
        <h2 className="text-2xl font-medium font-gilroy mb-0">
          {filteredBlogs.blogs.length === 0
            ? "No results found"
            : `Search Results (${filteredBlogs.blogs.length})`}
        </h2>

        <BlogsGrid blogs={filteredBlogs.blogs} isSearchActive={true} />
      </div>
    );
};

export default FilteredBlogsGrid;
