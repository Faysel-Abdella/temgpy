import React from "react";
import Home from "@/components/sections/blogs/home";
import BlogsList from "@/components/sections/blogs/blogs-list";
import ShapeFuture from "@/components/sections/blogs/shape-future";
import Subscribe from "@/components/sections/blogs/subscribe";
import { createClient } from "@/prismicio";

export default async function BlogsPage() {
  return (
    <div className="">
      <Home />
      <BlogsList />
      <ShapeFuture />
      <Subscribe />
    </div>
  );
}
