import SectionShow from "@/components/section-show";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import React from "react";

export default function Mission() {
  return (
    <main className="w-screen h-fit flex items-center justify-center py-12 md:py-16 ">
      <div className="w-full lg:max-w-[1232px] p-4 max-md:items-center  flex flex-col gap-4 md:gap-8">
        <SectionShow title="Our Mission" className="bg-white" />

        <div className="flex  w-full  items-stretch max-md:flex-col max-md:gap-4 ">
          <h2 className="w-full justify-start mt-3 md:pr-4 max-md:text-center  xl:pr-12 text-4xl md:w-1/2 font-extrabold font-gilroy leading-[48px]">
            Your Business Goals Always Come First
          </h2>
          <div className="w-full md:w-1/2 items-end  md:pl-12   flex">
            <p className="text-description text-lg font-medium h-min leading-relaxed max-md:text-center ">
              Our mission is to deliver cutting-edge software, AI, cloud, and IT
              solutions that enhance efficiency, optimize operations, and drive
              sustainable growth for Businesses.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
