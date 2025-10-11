import { ImageFieldImage } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import React from "react";

interface TechStackBadgeProps {
  title: string;
  logo: ImageFieldImage;
}
const TechStackBadge = ({ title, logo }: TechStackBadgeProps) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="500"
      className="px-4 py-1.5 border bg-background3 rounded-full inline-flex justify-center items-center gap-2.5"
    >
      <div className="flex size-7 ">
        <PrismicNextImage field={logo} />
      </div>
      <p className="relative justify-start text-lg font-normal font-instrument">
        {title}
      </p>
    </div>
  );
};

export default TechStackBadge;
