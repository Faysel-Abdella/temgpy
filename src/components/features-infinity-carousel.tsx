"use client";

import type React from "react";

import { InfiniteMovingCards } from "./features-infinity-moving-cards";
import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { Icons } from "@/components/ui/icons";
import { cn } from "@/lib/utils";

export default function FeaturesInfinityCarousel({
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
      <Image
        src="/shapes/shadow1.svg"
        width={1920}
        height={1080}
        className="absolute"
        alt="hero"
      />

      <div className="w-full relative max-w-[1079px]  flex flex-col items-center justify-center  md:px-4 gap-5   ">
        {/* <Icons.BgShadow className="absolute w-full h-5 z-0 top-0" /> */}
        <InfiniteMovingCards
          RightEdgeColor="from-violet-50"
          LeftEdgeColor="from-violet-50"
        />
      </div>
    </section>
  );
}
