"use client";

import type React from "react";

import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { Icons } from "@/components/ui/icons";
import { cn } from "@/lib/utils";
import { BlogsInfiniteMovingCards } from "./blogs-infinity-moving-cards";

export default function BlogsInfinityCarousel({
  className,
}: {
  className: string;
}) {
  return (
    <section
      className={cn(
        "w-screen py-28 md:py-32 flex flex-col items-center justify-center min-h-60",
        className
      )}>
      <div className="w-full relative max-w-[1079px]  flex flex-col items-center justify-center  md:px-4 gap-5   ">
        {/* <Icons.BgShadow className="absolute w-full h-5 z-0 top-0" /> */}
        <BlogsInfiniteMovingCards />
      </div>
    </section>
  );
}
