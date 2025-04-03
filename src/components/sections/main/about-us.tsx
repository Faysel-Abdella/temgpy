"use client";

import SectionShow from "@/components/section-show";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { ArrowUpRight, CircleCheck, Play, PlayCircle, X } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import VideoBanner from "./video-banner";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
export default function AboutUs() {
  const router = useRouter();
  return (
    <section className="w-screen flex items-center justify-center mx-auto bg-background2  py-16 md:py-24 lg:py-32">
      <div className="flex flex-col lg:flex-row  justify-center lg:items-center mx-auto  lg:w-[1242px] gap-8 md:gap-10 lg:gap-16">
        {/* <VideoBanner
          bannerUrl="/images/about-video-banner.png"
          videoUrl="https://www.youtube.com/embed/kcfs1-ryKWE?autoplay=1"
        /> */}
        <div
          className={cn(
            "flex group relative flex-col px-4 lg:px-0 w-full h-full lg:w-1/2 gap-5"
          )}>
          {/* Image with overlay */}
          <Image
            data-aos="zoom-in"
            data-aos-duration="1000"
            src={"/images/about1.svg"}
            width={1000}
            height={1000}
            alt="About Us Video"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col w-full lg:w-1/2 gap-3 md:gap-5 px-4 lg:px-0">
          <SectionShow
            title="About Us"
            className="bg-[#F4F6FF]/10 text-white outline-[#565656]"
          />
          <p
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="200"
            className=" justify-start mt-3 text-background2-foreground text-3xl lg:text-4xl font-extrabold font-gilroy  leading-[38px] md:leading-[48px]">
            The Right Technology Partner for Your Business
          </p>
          <p
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="300"
            className="lg:w-[550px] justify-start text-background2-description text-md md:text-lg pr-5 font-normal font-inter leading-relaxed">
            From software development to IT consultation, we deliver solutions
            that drive results.consultation, we deliver high quality.
          </p>
          <div className="pl-1 text-md md:text-lg mt-3 md:mt-5 inline-flex flex-col justify-start items-start gap-3 md:gap-4">
            <div
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="400"
              className="inline-flex justify-start items-end gap-5">
              <CircleCheck
                className="size-7"
                fill="#428DFF"
              />
              <div className="justify-start">
                <span className="text-background2-foreground  font-bold font-inter leading-relaxed">
                  99.9%{" "}
                </span>
                <span className="text-background2-foreground  font-normal font-inter leading-relaxed">
                  Job Success Rate
                </span>
              </div>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="500"
              className="self-stretch inline-flex justify-start items-end gap-5">
              <CircleCheck
                className="size-7"
                fill="#428DFF"
              />
              <p className="justify-start text-background2-foreground  font-medium font-inter leading-relaxed">
                Experienced Team Members
              </p>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="600"
              className="inline-flex justify-start items-end gap-5">
              <CircleCheck
                className="size-7"
                fill="#428DFF"
              />
              <p className="justify-start text-background2-foreground  font-normal font-inter leading-relaxed">
                High Quality Services
              </p>
            </div>
          </div>
          <Button
            onClick={() => router.push("/about-us")}
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="700"
            className="w-fit text-base mt-7 hover:cursor-pointer bg-[#373737] font-medium font-clash gap-2 leading-normal pl-0.5  pr-1 shadow-sm drop-shadow-lg  min-h-13 rounded-full  flex">
            <span className="bg-primary rounded-full h-11 ml-0.5 flex items-center justify-center px-6 py-3.5">
              Learn More
            </span>
            <span className="flex rounded-full bg-background2-foreground size-10  items-center justify-center">
              <ArrowUpRight className="size-4 text-black" />
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
}
