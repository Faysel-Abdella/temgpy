"use client";

import React from "react";

import { InfiniteMovingCards } from "../../ui/testimonials-infinite-moving-cards";
import SectionShow from "@/components/section-show";
import CarouselWithPagination from "@/components/testimonials-carousel";
// import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export default function Testimonials() {
  return (
    <section className="flex w-screen  px-1.5 md:px-2.5">
      <div className="flex flex-col bg-muted gap-10 items-center  rounded-t-[32px] px-2 lg:px-0  justify-center w-full  h-fit py-16 relative">
        <div className="w-full md:w-[601px] flex-col justify-start items-center gap-5 inline-flex relative">
          <SectionShow title="Testimonials" className="bg-white" />
          <p className="self-stretch text-center text-foreground text-3xl md:text-5xl md:text-nowrap font-bold font-gilroy leading-[45px] md:leading-[60px]">
            Don&apos;t just take our word for it
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
      "What sets them apart, is their communication. They’re responsive, transparent, and incredibly easy to work with. Whether it’s walking through a technical decision or flagging a smarter way to achieve the same goal, they make collaboration feel seamless.",
    name: "Abel Mucyo",
    title: "National Outreach Manager @Upwardly Global",
    image: "/partners/avatar3.png",
    platform: "/partners/upwork.svg",
  },
  {
    quote:
      "Venas Technologies delivers exceptional software solutions with technical excellence, creativity, and seamless communication. Fast, reliable, and consistently high-quality",
    name: "Kim Namjung",
    title: "Founder @NexaCode",
    image: "/partners/avatar3.png",
    platform: "/partners/linkedin.svg",
  },
  {
    quote:
      "With expertise, attention to detail, and seamless collaboration, Venas Technologies makes building software simple and stress-free.",
    name: "Priscilla Lacle",
    title: "Co-Founder @FushionAI",
    image: "/partners/avatar3.png",
    platform: "/partners/upwork.svg",
  },
];
