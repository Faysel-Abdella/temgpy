import Image from "next/image";
import React from "react";

export default function CtaSmallArrow({
  className,
  title,
}: {
  className: string;
  title: string;
}) {
  return (
    <div className={`flex absolute  z-10 ${className}`}>
      <div className="flex border bg-white/10 text-white px-2.5 py-1.5 text-sm font-medium rounded-xl border-white/70">
        {title}
      </div>
      <Image
        src={"/icons/cursor-small.svg"}
        width={18}
        className="absolute top-0 right-0 -mt-3 -mr-4"
        height={18}
        alt="icon"
      />
    </div>
  );
}
