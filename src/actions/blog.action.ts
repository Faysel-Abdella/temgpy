"use server";

import { createClient } from "@/prismicio";
import { filter } from "@prismicio/client";
import { BlogDocument, FeaturedBlogDocument } from "../../prismicio-types";
import * as prismic from "@prismicio/client";

export async function getBlogList(): Promise<{
  featuredBlog?: FeaturedBlogDocument;
  allBlogs?: BlogDocument[];
  errors?: string;
}> {
  try {
    const client = createClient();

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

    return { featuredBlog, allBlogs };
  } catch (erorr) {
    console.log(erorr);
    return { errors: "Failed to fetch blogs" };
  }
}

async function fetchBlogsWithFilters(
  client: prismic.Client,
  additionalFilters: string[]
): Promise<BlogDocument[]> {
  return client.getAllByType<BlogDocument>("blog", {
    orderings: {
      field: "my.blog.publication_date",
      direction: "desc",
    },
    filters: additionalFilters,
    pageSize: 100,
  });
}

export async function filterBlogs({
  searchQuery,
  filter, // Tag name
}: {
  searchQuery?: string;
  filter?: string;
}): Promise<{ blogs?: BlogDocument[]; error?: string }> {
  try {
    const client = createClient();
    let blogs: BlogDocument[] = [];

    const tagFilter = filter
      ? prismic.filter.at("my.blog.tags.tag_name", filter)
      : null;
    const baseFilters: string[] = tagFilter ? [tagFilter] : [];

    if (searchQuery) {
      const titleFilter = prismic.filter.fulltext("my.blog.title", searchQuery);
      const titleBlogs = await fetchBlogsWithFilters(client, [
        ...baseFilters,
        titleFilter,
      ]);

      // Query B: Search by Description (AND with Tag Filter)
      const descriptionFilter = prismic.filter.fulltext(
        "my.blog.short_description",
        searchQuery
      );
      const descriptionBlogs = await fetchBlogsWithFilters(client, [
        ...baseFilters,
        descriptionFilter,
      ]);

      // Combine the results and remove duplicates using the guaranteed document ID
      const allFoundBlogs = [...titleBlogs, ...descriptionBlogs];

      // Use a Set to track the unique 'id' strings
      const uniqueIds = new Set<string>();

      // Filter out duplicates. The document type now guarantees 'blog.id' is a string.
      blogs = allFoundBlogs.filter((blog) => {
        if (uniqueIds.has(blog.id)) {
          return false; // Duplicate
        }
        uniqueIds.add(blog.id);
        return true; // Unique
      });
    } else {
      // 3. Handle Filter ONLY (No Search Query)
      // If there is no searchQuery, simply apply the tag filter (if present).
      blogs = await fetchBlogsWithFilters(client, baseFilters);
    }

    return { blogs };
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return { error: "Failed to fetch blogs" };
  }
}
