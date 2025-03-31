import SectionShow from "@/components/section-show";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import React from "react";
import VideoBanner from "../main/video-banner";

export default function Home() {
  return (
    <main className="w-screen h-fit flex items-center pb-10 justify-center pt-40 md:pt-52 lg:pt-60 bg-gradient-to-b from-indigo-50 to-white">
      <div className="w-full p-4 lg:p-0 lg:max-w-[1232px]  h-fit flex flex-col lg:flex-row gap-10">
        <div className="flex flex-col w-full lg:w-[54%] gap-5">
          <SectionShow
            title="More About Us"
            className="bg-white"
          />
          <p className="w-full justify-start mt-3 text-4xl md:text-5xl lg:text-6xl font-extrabold font-gilroy leading-12 pr-5 md:leading-[67px]">
            Driving Digital Excellence with Future Ready Solutions
          </p>

          <div className="md:w-[552px] pr-6 justify-start mt-0 md:mt-10 lg:mt-16 text-description text-md md:text-lg font-normal font-inter leading-relaxed">
            We are a technology-driven company committed to building
            intelligent, scalable, and secure digital solutions. From custom
            software to AI-powered innovations, we help businesses thrive in the
            digital era with cutting-edge technology and expert guidance.
          </div>
        </div>
        <div className="flex flex-col w-full h-full lg:w-[46%] gap-5">
          <VideoBanner
            bannerUrl="/images/about-video-banner2.png"
            videoUrl="https://www.youtube.com/embed/kcfs1-ryKWE?autoplay=1"
            className="lg:w-full"
          />

          <div className="w-full p-7 flex justify-between items-center h-32 bg-muted rounded-t-2xl rounded-b-3xl shadow-md ">
            <div className="flex flex-col  items-center  gap-1.6">
              <p className="justify-start text-2xl md:text-4xl font-extrabold font-gilroy leading-[50px]">
                99.9%
              </p>
              <p className="w-fit justify-start opacity-70 text-sm md:text-base font-medium font-inter leading-normal">
                Positive Client Reviews.
              </p>
            </div>
            <Separator
              orientation="vertical"
              className="h-full min-h-5"
            />
            <div className="flex flex-col items-center gap-1.6">
              <p className="justify-start text-2xl md:text-4xl font-extrabold font-gilroy leading-[50px]">
                5+
              </p>
              <p className="w-fit justify-start opacity-70 text-sm md:text-base font-medium font-inter leading-normal">
                Years of Experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
