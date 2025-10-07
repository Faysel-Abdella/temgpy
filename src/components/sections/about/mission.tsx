import SectionShow from "@/components/section-show";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import React from "react";

export default function Mission() {
  return (
    <main className="w-screen h-fit flex items-center justify-center py-12 md:py-16 ">
      <div className="w-full lg:max-w-[1232px] p-4  flex flex-col gap-8">
        <SectionShow title="Our Mission" className="bg-white" />

        <div className="flex  w-full  items-stretch max-md:flex-col ">
          <h2 className="w-full justify-start mt-3 pr-4  xl:pr-12 text-4xl md:w-1/2 font-extrabold font-gilroy leading-[48px]">
            Your Business Goals Always Come First
          </h2>
          <div className="w-full md:w-1/2 items-end  pl-12   flex">
            <p className="text-description text-lg font-medium h-min leading-relaxed ">
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
