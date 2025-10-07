import SectionShow from "@/components/section-show";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import React from "react";

export default function Vision() {
  return (
    <main className="w-screen h-fit flex items-center justify-center py-20 max-md:py-2 ">
      <div className="w-full p-4  lg:max-w-[1232px] items-start h-fit flex flex-col  ">
        <div className="flex flex-col w-full items-center gap-8 md:gap-12 lg:gap-16">
          <SectionShow title="Our Vision" />
          <p className="w-full text-center  text-3xl  justify-start  md:text-4xl font-extrabold font-gilroy leading-[40px]">
            To be global leaders in delivering innovative technology solutions
            that help businesses grow.{" "}
          </p>
        </div>
        <Separator className="w-full hidden md:block my-12" />
        <div className="flex flex-col gap-12 w-full justify-between h-full items-start max-md:pt-12  ">
          <div className="grid md:grid-cols-3 w-full gap-8  md:gap-10 lg:gap-12 ">
            <div className="flex max-md:items-center flex-col gap-4">
              <Icons.MedalStar className="" />
              <div className=" mt-5 justify-start  text-xl font-semibold font-gilroy ">
                Global Excellence{" "}
              </div>
              <div className="max-md:max-w-xs max-md:mx-auto justify-start max-md:text-center text-description text-base font-medium font-inter leading-normal">
                Our aim is to be a worldwide technology leader, ensuring you get
                software built on the highest global standards.
              </div>
            </div>

            <div className="flex max-md:items-center  flex-col gap-4">
              <Icons.Bulb className="" />
              <div className=" justify-start mt-5 text-xl font-semibold font-gilroy ">
                Innovation-focused{" "}
              </div>
              <div className="max-md:max-w-xs max-md:mx-auto justify-start max-md:text-center text-description text-base font-medium font-inter leading-normal">
                We pioneer new solutions and apply forward-thinking technology
                to solve your toughest business challenges.
              </div>
            </div>
            <div className="flex  max-md:items-center flex-col gap-4">
              <Icons.Chart className="" />
              <div className=" justify-start mt-5 text-xl font-semibold font-gilroy ">
                Helping businesses grow{" "}
              </div>
              <div className="max-md:max-w-xs max-md:mx-auto justify-start max-md:text-center text-description text-base font-medium font-inter leading-normal">
                We focus on a clear plan to support our clients in achieving
                meaningful, long-term growth and success.
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
