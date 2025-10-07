import SectionShow from "@/components/section-show";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import React from "react";
import VideoBanner from "../main/video-banner";

export default function Home() {
  return (
    <main className="w-screen h-fit flex items-center pb-10 justify-center pt-28 md:pt-32 lg:pt-42 bg-gradient-to-b from-indigo-50 to-white">
      <div className="w-full p-4  lg:max-w-7xl  h-fit flex flex-col max-lg:items-center ">
        <SectionShow title="More About Us" className="bg-white" />
        <div className=" flex  mt-6  items-stretch max-lg:gap-5 max-lg:flex-col">
          <div className="flex flex-col w-full lg:w-4/5   gap-6 ">
            <p className="w-full justify-start mt-3 max-lg:text-center text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold font-gilroy lg:pr-10 ">
              Expertise for Every Step of Your Digital Journey
            </p>

            <div className=" lg:pr-6 justify-start max-lg:text-center text-description  md:text-lg lg:max-w-2xl xl:max-w-4xl font-normal font-inter leading-relaxed">
              GrowzTech is a leading tech company serving clients worldwide. We
              offer custom software, AI Automations, Cloud solutions, IT
              Consultation, and Talent Outsourcing, delivering reliable support
              and measurable results to help businesses maximize their digital
              potential.
            </div>
          </div>
          <div className="w-px bg-border " />
          <div className="flex lg:flex-col w-full lg:w-1/4 py-2 lg:items-center justify-center items-stretch  gap-4  md:gap-14  ">
            <div className="flex flex-col items-center gap-2">
              <p className="justify-start text-2xl md:text-4xl lg:text-6xl font-extrabold font-gilroy leading-[50px]">
                5.5+
              </p>
              <p className="w-fit text-center justify-start opacity-70 text-sm md:text-base font-medium font-inter leading-normal ">
                Years of Experience.
              </p>
            </div>
            <div className="w-px bg-border " />
            <div className="flex flex-col  items-center  gap-2">
              <p className="justify-start text-2xl md:text-4xl lg:text-6xl font-extrabold font-gilroy leading-[50px]">
                99.9%
              </p>
              <p className="w-fit text-center justify-start opacity-70 text-sm md:text-base font-medium font-inter leading-normal">
                Positive Client Reviews.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
