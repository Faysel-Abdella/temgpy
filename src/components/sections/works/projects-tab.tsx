"use client";

import { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { projects } from "./projects-data";
import { Separator } from "@/components/ui/separator";

export default function ProjectsList() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [activeSort, setActiveSort] = useState("newest");
  const [isMobile, setIsMobile] = useState(false);

  // Check screen size on mount and resize
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint is typically 768px
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  const filteredProjects = useMemo(() => {
    let filtered = [...projects];
    console.log("ok");

    if (activeFilter !== "all") {
      filtered = filtered.filter((project) => project.type === activeFilter);
    }
    if (activeSort === "newest") {
    } else if (activeSort === "oldest") {
      filtered = [...filtered].reverse();
    } else if (activeSort === "popular") {
      filtered = filtered.filter((project) => project.sortType === "popular");
    }
    console.log("Projects length final ", filtered.length);
    return filtered;
  }, [activeFilter, activeSort]);

  return (
    <div className="flex w-screen bg-white items-center justify-center p-4 lg:p-0 flex-col gap-10">
      <div className="flex items-center justify-center w-full">
        <div className="flex justify-between  w-full mx-auto max-w-[1070px] items-center h-full">
          {isMobile ? (
            <DropdownMenu>
              <DropdownMenuTrigger className="py-2 px-5 bg-muted gap-1.5 flex justify-center items-center rounded-full border hover:cursor-pointer">
                {activeFilter === "all"
                  ? "All"
                  : activeFilter === "web-service"
                  ? "Web-Service"
                  : "Mobile App"}
                <ChevronDown />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuItem onClick={() => setActiveFilter("all")}>
                  All
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={() => setActiveFilter("web-service")}>
                  Web-Service
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setActiveFilter("mobile-app")}>
                  Mobile App
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Tabs
              defaultValue="web-service"
              value={activeFilter}
              onValueChange={setActiveFilter}
              className="w-full md:w-auto h-full items-center flex">
              <TabsList className="p-1 gap-1 h-full">
                <TabsTrigger
                  value="all"
                  className="rounded-full px-5 hover:bg-muted cursor-pointer transition-all duration-300 py-2 data-[state=active]:bg-muted data-[state=active]:border font-medium text-md font-instrument">
                  All
                </TabsTrigger>
                <TabsTrigger
                  value="web-service"
                  className="rounded-full px-5 hover:bg-muted cursor-pointer transition-all duration-300 py-2 data-[state=active]:bg-muted data-[state=active]:border font-medium text-md font-instrument">
                  Web-Service
                </TabsTrigger>
                <TabsTrigger
                  value="mobile-app"
                  className="rounded-full px-5 hover:bg-muted cursor-pointer transition-all duration-300 py-2 data-[state=active]:bg-muted data-[state=active]:border font-medium text-md font-instrument">
                  Mobile App
                </TabsTrigger>
              </TabsList>
            </Tabs>
          )}

          <DropdownMenu>
            <DropdownMenuTrigger className="py-2 px-5 bg-muted gap-2 flex justify-center items-center rounded-full border hover:cursor-pointer">
              <span className="opacity-70 hidden md:block">Sort By</span>
              <span className="opacity-70 hidden md:block">|</span>

              {activeSort.charAt(0).toUpperCase() + activeSort.slice(1)}
              <ChevronDown className="md:hidden" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setActiveSort("newest")}>
                Newest
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setActiveSort("oldest")}>
                Oldest
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setActiveSort("popular")}>
                Popular
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <Separator className="max-w-[1070px]" />
      <div className="z-10 mx-auto px-4 lg:px-0 bg-white flex flex-col items-center justify-center w-full gap-10 rounded-b-[56px] pb-40">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter + activeSort}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.3, staggerChildren: 0.7 }}
            className="flex flex-wrap gap-8 max-w-[1070px] justify-start items-start w-full">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="group relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}>
                <div className="flex flex-col gap-3">
                  <Image
                    src={project.imageUrl}
                    className="w-[335px] h-[335px]"
                    width={335}
                    height={334}
                    alt="selected work"
                  />
                  <div className="flex justify-between gap-3 max-w-[335px]">
                    <p className="font-clash text-lg font-medium">
                      {project.title}
                    </p>
                    <Link
                      href={`/projects/${project.slug}`}
                      className="rounded-full bg-orange h-fit p-2 text-white">
                      <ArrowUpRight />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
