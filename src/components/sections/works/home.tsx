"use client";

import SectionShow from "@/components/section-show";
import React, { useEffect } from "react";
import FeaturesInfinityCarousel from "@/components/features-infinity-carousel";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    import("aos").then((AOS) => {
      Aos.init();
    });
  }, []);
  return (
    <section className="pt-48  bg-gradient-to-b flex flex-col from-indigo-50 to-white">
      <div className="w-full h-fit  flex flex-col items-center justify-center relative">
        <div className="flex z-10 px-4 flex-col items-center justify-between gap-4">
          <SectionShow
            title="Portfolio Projects"
            className="bg-white"
          />
          <p
            data-aos="fade-up"
            data-aos-duration="500"
            className="text-center font-gilroy mt-2 text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[57px] lg:leading-[90px]">
            Projects We Worked.
          </p>
          <p
            data-aos="fade-up"
            data-aos-duration="700"
            className="text-description font-sans text-md lg:text-lg md:w-[483px] text-center font-normal">
            Explore our successful projects that showcase excellence in
            software, AI, cloud, and IT solutions.
          </p>
        </div>
        <FeaturesInfinityCarousel className="-mt-12" />
      </div>
    </section>
  );
}
