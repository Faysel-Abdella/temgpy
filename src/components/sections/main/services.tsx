"use client";

import Image from "next/image";
import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import { Icons } from "@/components/ui/icons";
import { User } from "lucide-react";
import SectionShow from "@/components/section-show";

export default function Expertise() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  return (
    <section
      id="services"
      className="flex flex-col gap-10 items-center justify-center w-screen h-fit md:py-7 mb-10 relative">
      <div className="w-full md:max-w-[591px] lg:max-w-[711px] inline-flex flex-col justify-center items-center gap-4 md:gap-6 px-4">
        <SectionShow title="Services" />
        <p
          data-aos="fade-up"
          data-aos-duration="600"
          className="text-center md:mt-4 text-3xl md:text-4xl lg:text-5xl font-extrabold font-gilroy md:leading-[57.60px]">
          Our Expertise, Your Growth
        </p>
        <p
          data-aos="fade-up"
          data-aos-duration="700"
          className="self-stretch md:px-10 text-center text-description text-base md:text-lg font-normal font-inter leading-relaxed">
          From software development to IT consultation, we deliver solutions
          that drive results.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center items-start w-full max-w-[1212px] px-4">
        {/* First Col */}
        <div className="flex flex-col gap-4 md:gap-6 w-full min-w-0">
          <div
            data-aos="fade-up"
            data-aos-duration="300"
            className="flex h-[47px] lg:h-[120px] w-full rounded-es-4xl rounded-ee-4xl bg-gradient-to-b from-white/0 via-[#232539]/0 to-background3"
          />
          <div
            data-aos="fade-up"
            data-aos-duration="600"
            className="flex w-full flex-col gap-4 md:gap-6 rounded-3xl md:rounded-4xl pt-6 border-[1px] border-[#E2E2E3] bg-background3">
            <div className="flex w-full px-6 gap-4 md:gap-6 items-center">
              <div className="flex bg-white size-fit p-3 rounded-[12px] items-center justify-center flex-shrink-0">
                <Icons.Peoples2 className="size-7" />
              </div>
              <p className="text-foreground text-2xl font-semibold font-gilroy flex-shrink">
                Talent Outsourcing
              </p>
            </div>
            <div className="flex px-8 py-6 bg-white rounded-3xl md:rounded-4xl">
              <p className="text-md md:text-lg font-normal font-inter text-description">
                Access top-tier IT professionals for your projects.
              </p>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="900"
            className="flex lg:hidden w-full flex-col gap-4 md:gap-6 rounded-3xl md:rounded-4xl pt-6 border-[1px] border-[#E2E2E3] bg-background3">
            <div className="flex w-full px-6 gap-4 md:gap-6 items-center">
              <div className="flex bg-white size-fit rounded-[12px] p-3 items-center justify-center flex-shrink-0">
                <Icons.Bulb className="size-7" />
              </div>
              <p className="text-foreground text-2xl font-semibold font-gilroy flex-shrink">
                IT Consultation
              </p>
            </div>
            <div className="flex px-8 py-6 bg-white rounded-3xl md:rounded-4xl">
              <p className="text-md md:text-lg font-normal font-inter text-description">
                Expert guidance to optimize your IT infrastructure.
              </p>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="900"
            className="hidden sm:flex h-[47px] lg:h-[120px] w-full drop-shadow-xl rounded-ss-4xl rounded-se-4xl bg-gradient-to-t from-white/0 via-[#232539]/0 to-background3"
          />
        </div>

        {/* Second Col */}
        <div className="flex flex-col gap-4 md:gap-6 w-full min-w-0">
          <div
            data-aos="fade-up"
            data-aos-duration="200"
            className="hidden sm:flex h-[47px] w-full rounded-es-4xl rounded-ee-4xl bg-gradient-to-b from-white/0 to-background3"
          />
          <div
            data-aos="fade-up"
            data-aos-duration="500"
            className="flex w-full flex-col gap-4 md:gap-6 rounded-3xl md:rounded-4xl pt-6 border-[1px] border-[#E2E2E3] bg-background3">
            <div className="flex w-full px-6 gap-4 md:gap-6 items-center">
              <div className="flex bg-white size-fit rounded-[12px] p-3 items-center justify-center flex-shrink-0">
                <Icons.Code className="size-7" />
              </div>
              <p className="text-foreground text-2xl font-semibold font-gilroy flex-shrink">
                Software Solutions
              </p>
            </div>
            <div className="flex px-8 py-6 bg-white rounded-3xl md:rounded-4xl">
              <p className="text-md md:text-lg font-normal font-inter text-description">
                Tailored tech solutions, including mobile apps & web
                development.
              </p>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="800"
            className="flex w-full flex-col gap-4 md:gap-6 rounded-3xl md:rounded-4xl pt-6 border-[1px] border-[#E2E2E3] bg-background3">
            <div className="flex w-full px-6 gap-4 md:gap-6 items-center">
              <div className="flex bg-white size-fit rounded-[12px] p-3 items-center justify-center flex-shrink-0">
                <Icons.CloudConnection className="size-7" />
              </div>
              <p className="text-foreground text-2xl font-semibold font-gilroy flex-shrink">
                AI & Cloud
              </p>
            </div>
            <div className="flex px-8 py-6 bg-white rounded-3xl md:rounded-4xl">
              <p className="text-md md:text-lg font-normal font-inter text-description">
                Advanced AI-driven automation and scalable cloud solutions.
              </p>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="flex h-[47px] w-full drop-shadow-xl rounded-ss-4xl rounded-se-4xl bg-gradient-to-t from-white/0 to-background3"
          />
        </div>

        {/* Third Col */}
        <div className="hidden lg:flex flex-col gap-4 md:gap-6 w-full min-w-0">
          <div
            data-aos="fade-up"
            data-aos-duration="300"
            className="hidden md:flex h-[47px] lg:h-[120px] w-full rounded-es-4xl rounded-ee-4xl bg-gradient-to-b from-white/0 via-[#232539]/0 to-background3"
          />
          <div
            data-aos="fade-up"
            data-aos-duration="600"
            className="flex w-full flex-col gap-4 md:gap-6 rounded-3xl md:rounded-4xl pt-6 border-[1px] border-[#E2E2E3] bg-background3">
            <div className="flex w-full px-6 gap-4 md:gap-6 items-center">
              <div className="flex bg-white size-fit rounded-[12px] p-3 items-center justify-center flex-shrink-0">
                <Icons.Bulb className="size-7" />
              </div>
              <p className="text-foreground text-2xl font-semibold font-gilroy flex-shrink">
                IT Consultation
              </p>
            </div>
            <div className="flex px-8 py-6 bg-white rounded-3xl md:rounded-4xl">
              <p className="text-md md:text-lg font-normal font-inter text-description">
                Expert guidance to optimize your IT infrastructure.
              </p>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="900"
            className="flex h-[47px] lg:h-[120px] w-full drop-shadow-xl rounded-ss-4xl rounded-se-4xl bg-gradient-to-t from-white/0 via-[#232539]/0 to-background3"
          />
        </div>
      </div>
    </section>
  );
}
