"use client";

import Image from "next/image";
import { ArrowRightIcon, ArrowUpRight } from "lucide-react";
import { Button } from "../../ui/button";
// import RandomSquareGrid from "../../hero-squares-shape";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import { Icons } from "@/components/ui/icons";

export default function Hero() {
  useEffect(() => {
    AOS.init({
      once: false,
      startEvent: "DOMContentLoaded", // Start animation when DOM is loaded
      duration: 700, // Default duration for all animations
      delay: 0, // Remove default delay
      offset: 0, // Trigger animations immediately when elements enter viewport
    });
  }, []);

  const handleNavClick = (href: string) => {
    document.querySelector(href)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <main
      id="home"
      className="w-screen h-fit flex items-center justify-center pt-36 md:pt-60 bg-gradient-to-b from-indigo-50 to-white"
    >
      <div className="w-full p-4 lg:max-w-[1275px] lg:items-center h-fit flex flex-col lg:flex-row gap-16 md:gap-20 lg:gap-6">
        <div className="relative flex flex-col w-full lg:w-[55%] space-y-5 md:space-y-8">
          <div
            data-aos="fade-up"
            data-aos-duration="150"
            className="h-[41px] w-full sm:w-fit pl-1 md:pl-2.5 pr-1 py-1 bg-background rounded-[100px] border border-[#E7E9EF] justify-center items-center gap-1.5 inline-flex overflow-hidden"
          >
            <div className="justify-start items-center gap-1 sm:gap-2 flex">
              <div className="justify-start items-start flex relative mr-8 md:mr-10">
                <Image
                  data-aos="fade-up"
                  data-aos-duration="150"
                  alt="pro-pic"
                  width={100}
                  height={100}
                  className="size-7 md:size-[34px] rounded-[100px] border-2 border-white"
                  src="/icons/profile1.svg"
                />
                <Image
                  data-aos="fade-up"
                  data-aos-duration="300"
                  alt="pro-pic"
                  width={100}
                  height={100}
                  className="size-7 md:size-[34px] left-[13px] sm:left-[17px] z-10 absolute rounded-[100px] border-[0.5px] border-white bg-white"
                  src="/icons/profile2.svg"
                />
                <Image
                  data-aos="fade-up"
                  data-aos-duration="450"
                  alt="pro-pic"
                  width={100}
                  height={100}
                  className="size-7 md:size-[34px] left-[23px] md:left-[35px] z-10 absolute rounded-[100px] border-[0.5px] border-white bg-white"
                  src="/icons/profile3.svg"
                />
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration="400"
                className="text-center text-foreground  text-nowrap text-sm md:text-base font-normal font-inter leading-normal"
              >
                100+ Satisfied Customers
              </div>
              <div
                data-aos="fade-up"
                data-aos-duration="500"
                className="px-3 text-white py-1 md:py-1.5 bg-primary rounded-[114.29px] border border-primary justify-center items-center gap-1.5 flex overflow-hidden"
              >
                <button className="text-sm font-medium text-nowrap font-inter leading-tight">
                  <Link href="#contact-us">Get Yours</Link>
                </button>
              </div>
            </div>
          </div>
          <p
            data-aos="fade-up"
            data-aos-duration="700"
            className="font-gilroy flex flex-wrap font-extrabold text-4xl md:text-5xl lg:text-6xl mt-2 leading-10 md:leading-[67.20px]"
          >
            <span className="block md:hidden">
              Build, Scale and Innovate with Cutting Edge Tech Solutions
            </span>
            <span className="hidden md:inline">
              Build, Scale & Innovate with Cutting Edge Tech Solutions
            </span>
          </p>
          <p
            data-aos="fade-up"
            data-aos-duration="600"
            className="text-base md:text-lg font-normal font-inter leading-normal md:leading-relaxed lg:w-[85%]"
          >
            We build cutting-edge websites, powerful software, and connect you
            with top tech talent to drive your business forward.
          </p>
          <div className="z-30 mt-4 justify-start items-center gap-2 md:gap-5 inline-flex">
            <Link
              href="#contact-us"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#contact-us");
              }}
              data-aos="flip-up"
              data-aos-duration="400"
              className="w-fit text-base bg-white font-medium font-gilroy gap-1 md:gap-2.5 leading-normal pl-[1px] pr-1 shadow-sm drop-shadow-lg min-h-13 rounded-full flex items-center"
            >
              <span className="bg-primary text-white rounded-full h-12 ml-0.5 flex items-center justify-center px-6 py-3 md:py-3.5">
                Contact Us
              </span>
              <span className="flex rounded-full bg-black size-8 items-center justify-center">
                <ArrowUpRight className="size-4 text-white" />
              </span>
            </Link>
            <Link
              href={"/about-us"}
              data-aos="fade-up"
              data-aos-duration="550"
              className="px-2.5 py-3.5 inline-flex justify-center items-center gap-2.5"
            >
              <span className="justify-start text-sm md:text-md lg:text-lg">
                <span className="font-bold md:font-medium font-inter underline leading-relaxed">
                  Discover More
                </span>
                <span className="font-medium font-inter leading-relaxed">
                  {" "}
                  {">"}
                </span>
              </span>
            </Link>
          </div>
        </div>

        <div className="flex relative lg:justify-end items-end w-full lg:w-[45%]">
          <div className="relative w-full max-w-[488px]">
            {" "}
            {/* Added container */}
            <Image
              src={"/images/hero1.png"}
              data-aos="fade-up"
              data-aos-duration="500"
              width={307}
              height={461}
              className="w-[63%] max-w-[307px] h-auto" // Changed to percentage-based width
              alt="hero image"
            />
            <div
              data-aos="fade-up"
              data-aos-duration="800"
              className="absolute top-[5%] left-[75%] md:left-[68%] pl-1 pr-5 md:pr-6 py-1 bg-white rounded-full shadow-sm inline-flex justify-center items-center gap-3 overflow-hidden transform -translate-x-1/2"
            >
              <span className="p-2 md:p-2.5 bg-primary rounded-full outline outline-1 outline-offset-[-1px] flex justify-center items-center gap-2">
                <Icons.Peoples />
              </span>
              <span className="justify-start text-nowrap  text-sm md:text-md lg:text-lg font-bold font-inter leading-relaxed">
                Professional Teams
              </span>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="900"
              className="absolute z-50 left-[2%] bottom-[5%] text-sm md:text-md lg:text-lg font-inter leading-relaxed pl-1 pr-5 md:pr-6 py-1 bg-white rounded-full shadow-sm inline-flex justify-center items-center gap-3 overflow-hidden"
            >
              <span className="p-2 md:p-2.5 bg-orange-600 rounded-full outline outline-1 outline-offset-[-1px] flex justify-center items-center gap-2">
                <Icons.projects />
              </span>
              <div className="">
                <span className="font-extrabold">850</span>
                <span className="font-bold">+ Projects completed</span>
              </div>
            </div>
            <Image
              src={"/images/hero2.png"}
              data-aos="fade-up"
              data-aos-duration="200"
              width={181}
              height={251}
              className="absolute bottom-0 right-0 w-[37%] max-w-[181px] h-auto" // Positioned relative to container
              alt="hero image"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
