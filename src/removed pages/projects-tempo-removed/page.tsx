import React from "react";
// import MergedBody from "./works-wrapper";
import Home from "@/components/sections/works/home";
import ProjectsList from "@/components/sections/works/projects-tab";
import ShapeFuture from "@/components/sections/works/shape-future";

export default function page() {
  return (
    <main className="relative">
      <Home />
      <ProjectsList />
      <ShapeFuture />
    </main>
  );
}
