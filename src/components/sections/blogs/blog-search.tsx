"use client";

import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import useIsMobile from "@/hooks/useIsMobile";
import { useDebounce } from "@/hooks/useDebounce";
import { useRouter, useSearchParams } from "next/navigation";

interface BlogSearchProps {
  searchQuery?: string;
}

export function BlogSearch({ searchQuery }: BlogSearchProps) {
  const [search, setSearch] = useState(searchQuery || "");
  const searchParams = useSearchParams();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const router = useRouter();
  const isMobile = useIsMobile(1000);
  const debouncedValue = useDebounce(search);
  const firstRender = useRef(true);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }
    if (isSearchOpen) {
      setTimeout(() => {
        const searchInput = document.getElementById("search-input");
        if (searchInput) searchInput.focus();
      }, 100);
    } else {
      setSearch("");
    }
  }, [isSearchOpen, setSearch]);

  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

  useEffect(() => {
    if (debouncedValue.trim() !== searchQuery) {
      const params = new URLSearchParams(searchParams.toString());
      if (debouncedValue.trim() === "") {
        params.delete("searchQuery");
      } else {
        params.set("searchQuery", debouncedValue.trim());
      }

      const queryString = params.toString() ? `?${params.toString()}` : "";

      router.push(`/blogs${queryString}`, { scroll: false });
    }
  }, [debouncedValue, searchQuery, router, searchParams]);

  if (isMobile) {
    return (
      <div className="relative flex items-center">
        <AnimatePresence>
          {isSearchOpen && (
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 150, opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="absolute right-0"
            >
              <Input
                id="search-input"
                type="text"
                placeholder="Search blogs..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="h-9 w-28 placeholder:opacity-50 rounded-full bg-muted"
              />
            </motion.div>
          )}
        </AnimatePresence>
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleSearch}
          className="rounded-full bg-muted border p-2 ml-2 z-10"
        >
          {isSearchOpen ? (
            <X className="h-4 w-4" />
          ) : (
            <Search className="h-4 w-4" />
          )}
        </Button>
      </div>
    );
  }

  return (
    <div className="relative flex items-center">
      <Input
        type="text"
        placeholder="Search blogs..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="h-12 w-[340px] border-black/15 placeholder:text-black/45 rounded-full bg-muted  pl-9"
      />
      <Search className="absolute right-5 h-5 w-5  text-muted-foreground/50" />
      {search && (
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setSearch("")}
          className="absolute right-2 h-5 w-5 rounded-full p-0"
        >
          <X className="h-3 w-3" />
        </Button>
      )}
    </div>
  );
}
