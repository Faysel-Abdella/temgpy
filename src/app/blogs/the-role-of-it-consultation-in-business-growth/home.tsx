import SectionShow, { SectionShowWithOutIcon } from "@/components/section-show";
import Image from "next/image";
import React from "react";

export default function BlogHome() {
  return (
    <div>
      <div className="relative bg-background2 w-full">
        <div className="pt-40  w-full mx-auto px-4 max-w-[1120px] md:pt-48  flex flex-col gap-4 bg-background2">
          <div className="flex  gap-2.5  md:gap-3">
            <SectionShow
              title="Blogs"
              className="bg-muted/15 border-2 border-[#565656] outline-0 text-white pr-4"
            />
            <SectionShowWithOutIcon
              title="IT Consultation"
              className="bg-muted/15 border-2 border-[#565656] outline-0 text-white px-4"
            />
          </div>

          <p className="mt-4 text-background2-foreground md:mt-6 font-gilroy font-extrabold text-4xl md:text-5xl lg:text-6xl">
            The Role of IT Consultation in Business Growth
          </p>
          <p className="text-md md:text-lg text-background2-description font-inter">
            IT consultation is a crucial investment for businesses looking to
            optimize their technology, drive growth.
          </p>
          <Image
            className="w-full z-20 h-full max-w-[1115px] max-h-[590px]"
            src="/blogs/it-consult.png"
            alt="Software Carer, Which One Does Your Business Need?"
            width={1115}
            height={1080}
          />
        </div>
        <div className="absolute bottom-0 w-full z-0 h-14 md:h-20 lg:h-28 bg-background" />
      </div>
    </div>
  );
}
