"use client";

import type React from "react";

import { InfiniteMovingCards } from "../../features-infinity-moving-cards";
import Image from "next/image";
import { ArrowDown } from "lucide-react";
import { Icons } from "@/components/ui/icons";
import { cn } from "@/lib/utils";
import MainFeatures from "@/components/mai-features";

export default function FeaturesCarousel({
  className,
  RightEdgeColor,
  LeftEdgeColor,
}: {
  className: string;
  RightEdgeColor: string;
  LeftEdgeColor: string;
}) {
  return (
    <section
      className={cn(
        "w-screen py-28 md:py-32 flex items-center justify-center min-h-60",
        className
      )}>
      <div className="w-full relative max-w-[1079px]  flex flex-col items-center justify-center  md:px-4 gap-5   ">
        <p className="text-xl font-extrabold  text-center font-gilroy">
          Our Top Features
        </p>
        {/* <Icons.BgShadow className="absolute w-full h-5 z-0 top-0" /> */}
        {/* <InfiniteMovingCards /> */}
        <MainFeatures
          RightEdgeColor={RightEdgeColor}
          LeftEdgeColor={LeftEdgeColor}
        />
      </div>
    </section>
  );
}
