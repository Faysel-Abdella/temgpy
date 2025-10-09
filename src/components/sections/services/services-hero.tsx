"use client";

import Image from "next/image";
import { Button } from "../../ui/button";
import { cn } from "@/lib/utils";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import FeaturesCarousel from "../../common/features";
import HeroSectionShow from "../main/hero-section-show";

export default function ServicesHero() {
  useEffect(() => {
    AOS.init({
      once: false,
      startEvent: "DOMContentLoaded", // Start animation when DOM is loaded
      duration: 700, // Default duration for all animations
      delay: 0, // Remove default delay
      offset: 0, // Trigger animations immediately when elements enter viewport
    });
  }, []);

  return (
    <main
      className="w-screen relative  bg-gradient-to-b from-background3 via-background3 to-white "
      id="home"
    >
      <div className="absolute w-screen h-80 md:h-dvh top-0 left-0">
        <div className="relative w-full h-full">
          <Image
            src="/spotlight.webp"
            alt="Background Image"
            fill
            priority
            className="object-fill"
          />
        </div>
      </div>
      <div
        className="pointer-events-none absolute inset-0 flex items-center justify-center 
  bg-gradient-to-b from-transparent via-transparent to-white 
  [mask-image:linear-gradient(to bottom, black 80%, transparent 100%)] 
  dark:bg-black"
      ></div>
      <div className="w-full  lg:max-w-6xl mx-auto flex-col   pt-28 pb-10 px-6   lg:px-14    h-fit flex items-center justify-center ">
        <HeroSectionShow title="Quality. Speed. Trust." />

        <p
          data-aos="fade-up"
          data-aos-duration="600"
          className="font-clashgrotesk mt-8  flex flex-wrap font-semibold text-3xl md:text-5xl  lg:text-6xl xl:text-7xl text-center"
        >
          Transformation thats Bespoke, Brilliant, and Beyond{" "}
        </p>
        <div
          data-aos="fade-up"
          data-aos-duration="700"
          className=" w-full flex flex-col gap-4 items-center justify-center mt-6"
        >
          <p className="text-sm sm:text-base text-center  lg:max-w-[823px] text-description md:text-lg font-normal font-inter leading-normal md:leading-relaxed lg:w-[85%]">
            At Venas Technology, we don&apos;t just build software - we craft
            solutions that tell your brand&apos;s story & bring your digital
            vision to business. Whatever your goals our expert crew delivers
            scalable & reliable solutions
          </p>
        </div>
      </div>
      <div data-aos="fade-up" data-aos-duration="800">
        <FeaturesCarousel
          LeftEdgeColor="from-white"
          RightEdgeColor="from-white"
          className="min-h-40 py-0 md:py-10 "
        />
      </div>
    </main>
  );
}
