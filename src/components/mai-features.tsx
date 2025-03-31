import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { InfiniteMovingCards } from "./features-infinity-moving-cards";

export default function MainFeatures({
  className,
  LeftEdgeColor,
  RightEdgeColor,
}: {
  className?: string;
  LeftEdgeColor: string;
  RightEdgeColor: string;
}) {
  return (
    <section
      className={cn(
        "w-screen  flex flex-col items-center justify-center min-h-24",
        className
      )}>
      <Image
        src="/shapes/shadow1.svg"
        width={1920}
        height={1080}
        className="absolute z-0"
        alt="hero"
      />
      <div className="w-full relative max-w-[1079px] z-0 flex flex-col items-center justify-center  md:px-4 gap-5   ">
        {/* <Icons.BgShadow className="absolute w-full h-5 z-0 top-0" /> */}
        <InfiniteMovingCards
          RightEdgeColor={RightEdgeColor}
          LeftEdgeColor={LeftEdgeColor}
        />
      </div>
    </section>
  );
}
