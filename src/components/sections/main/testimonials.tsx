"use client";

import React from "react";

import { InfiniteMovingCards } from "../../ui/testimonials-infinite-moving-cards";
import SectionShow from "@/components/section-show";
import CarouselWithPagination from "@/components/testimonials-carousel";
// import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export default function Testimonials() {
  return (
    <section className="flex w-screen  px-1.5 md:px-2.5">
      <div className="flex flex-col bg-muted gap-10 items-center  rounded-t-[32px] px-2 lg:px-0  justify-center w-full  h-fit py-28 relative">
        <div className="w-full md:w-[601px] flex-col justify-start items-center gap-5 inline-flex relative">
          <SectionShow
            title="Testimonials"
            className="bg-white"
          />
          <p className="self-stretch text-center text-foreground text-3xl md:text-5xl font-extrabold font-gilroy leading-[45px] md:leading-[60px]">
            Hear What Our Clients Say About Our Services
          </p>
        </div>
        <div className="flex justify-center items-center">
          <CarouselWithPagination testimonials={testimonials} />
        </div>
      </div>
    </section>
  );
}

export type Testimonial = {
  quote: string;
  name: string;
  title: string;
  image: string;
  platform: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "Your custom software revolutionized our operations, streamlining workflows and boosting productivity significantly!",
    name: "Anika P.",
    title: "CEO @Zeron PLC",
    image: "/partners/avatar3.png",
    platform: "/partners/upwork.svg",
  },
  {
    quote:
      "Thanks to your custom software, our workflow is now seamless, operations are faster, and productivity has skyrocketed!",
    name: "Jemal Khan",
    title: "COO @Ewnet PLC",
    image: "/partners/avatar3.png",
    platform: "/partners/linkedin.svg",
  },
  {
    quote:
      "Your custom software revolutionized our operations, streamlining workflows and boosting productivity significantly! significantly significantly!",
    name: "Yusra Abdullah",
    title: "CEO @Zeron PLC",
    image: "/partners/avatar3.png",
    platform: "/partners/upwork.svg",
  },
  {
    quote:
      "Thanks to your custom software, our workflow is now seamless, operations are faster, and productivity has skyrocketed!",
    name: "Moh. Khan",
    title: "COO @Ewnet PLC",
    image: "/partners/avatar3.png",
    platform: "/partners/linkedin.svg",
  },
  {
    quote:
      "Thanks to your custom software, our workflow is now seamless, operations are faster, and productivity has skyrocketed!",
    name: "Jemal Khan",
    title: "COO @Ewnet PLC",
    image: "/partners/avatar3.png",
    platform: "/partners/linkedin.svg",
  },
  {
    quote:
      "Your custom software revolutionized our operations, streamlining workflows and boosting productivity significantly! significantly significantly!",
    name: "Yusra Abdullah",
    title: "CEO @Zeron PLC",
    image: "/partners/avatar3.png",
    platform: "/partners/upwork.svg",
  },
  {
    quote:
      "Thanks to your custom software, our workflow is now seamless, operations are faster, and productivity has skyrocketed!",
    name: "Moh. Khan",
    title: "COO @Ewnet PLC",
    image: "/partners/avatar3.png",
    platform: "/partners/linkedin.svg",
  },
];
