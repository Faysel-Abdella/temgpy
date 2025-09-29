import { getBlogList } from "@/actions/blog.action";
import { BlogsGrid } from "./blogs-grid";
import { FeaturedBlog } from "./featured-blog";
import { LatestThreeBlogs } from "./latest-three-blogs";

const MainBlogsGrid = async () => {
  const blogs = await getBlogList();

  const latestThreeBlogs = blogs.allBlogs ? blogs.allBlogs.slice(0, 3) : [];
  const olderBlogs = blogs.allBlogs ? blogs.allBlogs.slice(3) : [];

  return (
    <div>
      <div className="flex w-full z-20 bg-white items-center justify-center mx-auto pb-8">
        <div className="flex flex-col items-start justify-center lg:flex-row space-y-10 space-x-0 lg:space-x-16 max-w-[1212px] w-full">
          {blogs.featuredBlog && (
            <FeaturedBlog featuredBlog={blogs.featuredBlog} />
          )}
          <LatestThreeBlogs blogs={latestThreeBlogs} />
        </div>
      </div>

      <BlogsGrid blogs={olderBlogs} isSearchActive={false} />
    </div>
  );
};

export default MainBlogsGrid;
