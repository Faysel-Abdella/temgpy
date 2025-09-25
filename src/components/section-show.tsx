import { cn } from "@/lib/utils";
import React from "react";

interface SectionShowProps {
  title: string;
  className?: string;
}

export default function SectionShow({
  title,
  className = "",
}: SectionShowProps) {
  return (
    <div
      data-aos="flip-left"
      data-aos-duration="600"
      className={cn(
        "pl-1 pr-4 py-1 w-fit bg-violet-50 text-neutral-800  rounded-3xl outline outline-1 outline-offset-[-1px] outline-zinc-200 inline-flex justify-start items-center gap-1",
        className
      )}
    >
      <div className="p-1 rounded-3xl flex justify-start items-center gap-2.5 overflow-hidden">
        <div className="p-1.5 bg-primary/10 rounded-3xl flex justify-start items-center gap-2.5">
          <div className="w-2 h-2 bg-primary rounded-full" />
        </div>
      </div>
      <div className="justify-start  text-sm md:text-md font-inter leading-tight">
        {title}
      </div>
    </div>
  );
}

export function SectionShowWithOutIcon({
  title,
  className = "",
}: SectionShowProps) {
  return (
    <div
      data-aos="flip-left"
      data-aos-duration="600"
      className={cn(
        "pl-1 pr-4 py-1 w-fit bg-violet-50 text-neutral-800  rounded-3xl outline outline-1 outline-offset-[-1px] outline-zinc-200 inline-flex justify-start items-center gap-1",
        className
      )}
    >
      <div className="justify-start  text-sm md:text-md font-inter leading-tight">
        {title}
      </div>
    </div>
  );
}
