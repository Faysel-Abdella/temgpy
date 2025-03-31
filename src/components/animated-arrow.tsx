import React from "react";
import ArrowShape from "./arrow-shape";

interface AnimatedArrowProps {
  title: string;
  className?: string;
}

export default function AnimatedArrow({
  title,
  className = "",
}: AnimatedArrowProps) {
  return (
    <div className={`flex absolute -left-40 -top-12 gap-2 ${className}`}>
      <div className=" arrow-effect-button uppercase h-fit inline-flex  px-4 py-1 drop-shadow-xl items-center gap-2 text-primary">
        {title}
      </div>
      <ArrowShape />
    </div>
  );
}
