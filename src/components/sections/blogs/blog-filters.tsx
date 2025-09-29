"use client";

import { ChevronDown } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import useIsMobile from "@/hooks/useIsMobile";
import { useEffect, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export function BlogFilters() {
  const searchParams = useSearchParams();
  const currentFilter = searchParams.get("filter");
  const [activeFilter, setActiveFilter] = useState(currentFilter || "All");
  const isMobile = useIsMobile();
  const router = useRouter();
  const firstRender = useRef(true);

  const filterOptions = [
    "All",
    "Web Development",
    "Mobile App",
    "Machine Learning",
  ];
  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    if (activeFilter === currentFilter) {
      return;
    }

    const params = new URLSearchParams(searchParams.toString());
    if (activeFilter === "All") {
      params.delete("filter");
    } else {
      params.set("filter", activeFilter);
    }
    const queryString = params.toString() ? `?${params.toString()}` : "";
    router.push(`/blogs${queryString}`, { scroll: false });
  }, [activeFilter, router, searchParams, currentFilter]);

  if (isMobile) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger className=" hover:curd py-2 px-5 bg-muted gap-1.5 flex justify-center items-center rounded-full border hover:cursor-pointer">
          {filterOptions.find((opt) => opt === activeFilter)}
          <ChevronDown />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start">
          {filterOptions.map((option) => (
            <DropdownMenuItem
              key={option}
              onClick={() => setActiveFilter(option)}
            >
              {option}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    );
  }

  return (
    <Tabs
      value={activeFilter}
      onValueChange={setActiveFilter}
      className="w-full md:w-auto h-full items-center flex"
    >
      <TabsList className="p-1 gap-1 h-full">
        {filterOptions.map((option) => (
          <TabsTrigger
            key={option}
            value={option}
            className="rounded-full font-inter px-5 hover:bg-muted cursor-pointer transition-all duration-300 py-2 data-[state=active]:bg-muted data-[state=active]:border font-medium text-md"
          >
            {option}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
}
