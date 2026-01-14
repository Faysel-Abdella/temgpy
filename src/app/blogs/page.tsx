import React from "react";
import Home from "@/components/sections/blogs/home";
import BlogsList from "@/components/sections/blogs/blogs-list";
import ShapeFuture from "@/components/sections/blogs/shape-future";
import Subscribe from "@/components/sections/blogs/subscribe";
import { createClient } from "@/prismicio";
import Canonical from "@/seo/Canonical";

interface BlogsPageProps {
  searchParams: Promise<{ searchQuery: string; filter: string }>;
}
export default async function BlogsPage({ searchParams }: BlogsPageProps) {
  const { searchQuery, filter } = await searchParams;
  return (
    <div className="">
      <Canonical uid="blogs" /> {/* dynamic canonical */}
      <Home />
      <BlogsList searchQuery={searchQuery} filter={filter} />
      <ShapeFuture />
      <Subscribe />
    </div>
  );
}
