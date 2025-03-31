"use client";

import SectionShow from "@/components/section-show";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import BlogsInfinityCarousel from "./blogs-infinity-carousel";

export default function Home() {
  useEffect(() => {
    import("aos").then((AOS) => {
      Aos.init();
    });
  }, []);
  return (
    <section className="pt-40 md:pt-48  flex flex-col bg-background lg:px-2.5  w-full relative">
      <div className="flex bg-background2 md:rounded-b-3xl ">
        <div className="w-full h-fit flex flex-col items-center justify-center relative bg-background2 rounded-b-3xl">
          <div className="absolute  w-full h-48 bottom-full bg-background2  " />
          <div className="flex z-10 px-4 flex-col items-center justify-between gap-4 bg-background2 -mt-2 py-2">
            <SectionShow
              title="Blog article"
              className="bg-muted/15 outline-muted/20 text-white"
            />
            <p
              data-aos="fade-up"
              data-aos-duration="500"
              className="text-center font-gilroy text-background2-foreground mt-2 text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[57px] lg:leading-[90px]">
              Blogs and Publications
            </p>
            <p
              data-aos="fade-up"
              data-aos-duration="700"
              className="text-background2-description font-inter text-md lg:text-lg md:w-[483px] text-center font-normal">
              Stay ahead with expert articles, industry trends, and the latest
              tech solutions.
            </p>
          </div>
          <BlogsInfinityCarousel className="-mt-7 md:py-1" />
        </div>
      </div>
    </section>
  );
}
