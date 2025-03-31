import SectionShow from "@/components/section-show";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import React from "react";

export default function Mission() {
  return (
    <main className="w-screen h-fit flex items-center justify-center py-12 md:py-16 ">
      <div className="w-full lg:max-w-[1232px] p-4 lg:p-0 items-end h-fit flex flex-col lg:flex-row gap-4 md:gap-12">
        <div className="flex flex-col w-full lg:w-[56%] gap-6 md:gap-8">
          <SectionShow
            title="Our Mission"
            className="bg-white"
          />
          <p className="w-full justify-start mt-3 md:pr-20 lg:pr-40  text-4xl font-extrabold font-gilroy leading-[48px]">
            Empowering Businesses Through Technology
          </p>
          <Image
            src={"/images/mission1.png"}
            width={652}
            height={376}
            alt="about us image"
            className=" bg-secondary mt-4 rounded-2xl w-full"
          />
        </div>
        <div className="flex flex-col w-full items-end h-full lg:w-[44%] gap-5">
          <Image
            src={"/images/mission2.png"}
            width={500}
            height={300}
            alt="about us image"
            className=" bg-secondary rounded-2xl w-full"
          />
          <div className="md:max-w-[471px] justify-start text-description mt-4 md:mt-0 text-lg font-medium font-inter leading-relaxed">
            Our mission is to deliver cutting-edge software, AI, cloud, and IT
            solutions that enhance efficiency, optimize operations, and drive
            sustainable growth for Businesses.
          </div>
        </div>
      </div>
    </main>
  );
}
