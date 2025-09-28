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
import { useState } from "react";

export function BlogFilters() {
  const [activeFilter, setActiveFilter] = useState("");
  const isMobile = useIsMobile();
  const filterOptions = [
    { value: "all", label: "All" },
    { value: "web-development", label: "Web-development" },
    { value: "mobile-app", label: "Mobile App" },
    { value: "machine-learning", label: "Machine Learning" },
  ];

  if (isMobile) {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger className=" hover:curd py-2 px-5 bg-muted gap-1.5 flex justify-center items-center rounded-full border hover:cursor-pointer">
          {filterOptions.find((opt) => opt.value === activeFilter)?.label}
          <ChevronDown />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start">
          {filterOptions.map((option) => (
            <DropdownMenuItem
              key={option.value}
              onClick={() => setActiveFilter(option.value)}
            >
              {option.label}
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
            key={option.value}
            value={option.value}
            className="rounded-full font-inter px-5 hover:bg-muted cursor-pointer transition-all duration-300 py-2 data-[state=active]:bg-muted data-[state=active]:border font-medium text-md"
          >
            {option.label}
          </TabsTrigger>
        ))}
      </TabsList>
    </Tabs>
  );
}
