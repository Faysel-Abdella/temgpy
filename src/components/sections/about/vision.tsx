import SectionShow from "@/components/section-show";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import React from "react";

export default function Vision() {
  return (
    <main className="w-screen h-fit flex items-center justify-center py-20 ">
      <div className="w-full p-4 md:p-0 lg:max-w-[1232px] items-start h-fit flex flex-col lg:flex-row gap-7 md:gap-10 lg:gap-16">
        <div className="flex flex-col w-full lg:w-[43%] gap-8 md:gap-12 lg:gap-16">
          <SectionShow title="Our Vision" />
          <p className="w-full lg:hidden text-3xl  justify-start  md:text-4xl font-extrabold font-gilroy leading-[40px]">
            We believe in transforming ideas into powerful digital experience
          </p>
          <Image
            src={"/images/vision.png"}
            width={456}
            height={320}
            alt="about us image"
            className=" rounded-2xl w-full mt-2 lg:mt-0"
          />
        </div>
        <div className="flex flex-col gap-12 w-full justify-between h-full items-start lg:w-[57%] ">
          <p className="w-full hidden lg:block justify-start  text-4xl font-extrabold font-gilroy leading-[48px]">
            We believe in transforming ideas into powerful digital experience
          </p>
          <Separator className="w-full hidden md:block" />
          <div className="flex flex-col md:flex-row gap-12 mt-10">
            <div className="flex md:w-[43%] flex-col gap-4">
              <Icons.Chart className="" />
              <div className=" mt-5 justify-start  text-xl font-semibold font-gilroy ">
                Empowering Digital Growth
              </div>
              <div className="md:w-80 justify-start text-description text-base font-medium font-inter leading-normal">
                We aim to enable Businesses to thrive online by delivering
                tailored software solutions that lead to measurable results
              </div>
            </div>

            <div className="flex md:w-[57%] flex-col gap-4">
              <Icons.ConvertShape className="" />
              <div className=" justify-start mt-5 text-xl font-semibold font-gilroy ">
                Driving Innovation
              </div>
              <div className=" justify-start text-description text-base font-medium font-inter leading-normal">
                We Integrate latest technologies and innovative strategies to
                ensure our clients stays ahead of competition in digital world.
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
