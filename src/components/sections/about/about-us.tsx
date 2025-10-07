"use client";

import SectionShow from "@/components/section-show";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, CircleCheck } from "lucide-react";
import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function AboutUs() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  const handleNavClick = (href: string) => {
    document.querySelector(href)?.scrollIntoView({
      behavior: "smooth",
    });
  };
  const router = useRouter();
  return (
    <section className="w-screen flex items-center justify-center mx-auto bg-background2 py-24">
      <div className="flex flex-col md:flex-row px-4 justify-center mx-auto lg:w-[1212px] gap-16">
        <div className="flex flex-col w-full lg:w-1/2 gap-5 md:gap-8">
          <SectionShow
            title="Contact Now"
            className="bg-[#F4F6FF]/10 text-white outline-[#565656]"
          />
          <div className="max-w-[613px] justify-start text-white text-3xl md:text-4xl lg:text-5xl font-extrabold font-gilroy leading-12 md:leading-[57.60px]">
            Let’s Shape the Future Together with tailored solutions
          </div>

          <Link
            href="/contact-us"
            data-aos="flip-up"
            data-aos-duration="400"
            className="w-fit text-base bg-[#373737] font-medium font-gilroy gap-1 md:gap-2.5 leading-normal pl-[1px] pr-1 shadow-sm drop-shadow-lg min-h-13 rounded-full flex items-center"
          >
            <span className="bg-primary text-white rounded-full h-12 ml-0.5 flex items-center justify-center px-6 py-3 md:py-3.5">
              Contact Now
            </span>
            <span className="flex rounded-full bg-white size-8 items-center justify-center">
              <ArrowUpRight className="size-4 text-black" />
            </span>
          </Link>
        </div>
        <div className="flex flex-col w-full h-full relative lg:w-1/2 gap-5">
          <Image
            src={"/images/3dCard.svg"}
            width={531}
            data-aos="fade-down"
            data-aos-duration="700"
            data-aos-offset="250"
            height={282}
            alt="about us image"
            className="z-10"
          />
          <Image
            src={"/images/3dCard.png"}
            width={531}
            height={282}
            data-aos="fade-down"
            data-aos-duration="300"
            alt="about us image"
            className="absolute mt-14 z-0"
          />
        </div>
      </div>
    </section>
  );
}
