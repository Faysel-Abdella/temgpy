import React from "react";

import Image from "next/image";
import FallingTechIcons from "../../fallig-tech-icons";
import SectionShow from "@/components/section-show";

export default function WhyChooseUs() {
  return (
    <section className="flex flex-col bg-muted gap-16 items-center justify-center w-screen h-fit py-24 relative">
      <div className="w-full max-w-[1212px] flex flex-col gap-6 px-5 md:px-6 lg:px-0">
        <SectionShow
          title="Why Choose Us?"
          className="bg-background"
        />
        <div className="flex flex-col md:flex-row justify-between items-start gap-6">
          <p
            data-aos="fade-up"
            data-aos-duration="600"
            className="w-full md:max-w-[650px] text-foreground text-3xl sm:text-4xl md:text-5xl font-extrabold font-gilroy leading-tight">
            The Right Technology Partner for Your Business
          </p>
          <div
            data-aos="fade-left"
            data-aos-duration="600"
            className="w-full md:w-[437px] text-description text-base md:text-lg font-normal font-inter leading-relaxed">
            From software development to IT consultation, we deliver solutions
            that drive results. 
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-4 md:gap-6  w-fit px-4 md:px-0">
        {/* First Col */}
        <div className="flex flex-col bg-background rounded-2xl  md:rounded-3xl w-full md:w-[388px] drop-shadow-md border">
          <div className="flex h-fit flex-col px-6 pb-6 pt-7 shadow-lg shadow-black/[7%] z-10     gap-8 rounded-2xl  md:rounded-3xl border">
            <div className="flex  size-fit rounded-[12px] p-3 items-center justify-center">
              <Image
                src="/icons/microscope.svg"
                width={59}
                height={59}
                alt="arrow right"
              />
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-foreground text-2xl font-semibold font-gilroy">
                Innovative Approach
              </p>
              <p className="text-lg font-normal font-inter text-description">
                We leverage the latest tech trends to keep you ahead.
              </p>
            </div>
          </div>
          <FallingTechIcons />
        </div>

        {/* Second Col */}
        <div className="flex flex-col gap-4 md:gap-6 w-full  md:w-[388px]">
          <div className="flex flex-col px-6 pb-6 pt-7 bg-background  w-full  drop-shadow-md  gap-8 rounded-2xl  md:rounded-3xl border">
            <div className="flex  size-fit rounded-[12px] p-3 items-center justify-center">
              <Image
                src="/icons/gold-medal.svg"
                width={59}
                height={59}
                alt="arrow right"
              />
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-foreground text-2xl font-semibold font-inter">
                Experienced Team
              </p>
              <p className="text-md md:text-lg font-normal font-inter text-gilroy">
                Certified professionals with years of industry expertise.
              </p>
            </div>
          </div>
          <div className="flex flex-col px-6 pb-6 pt-7 bg-background  w-full drop-shadow-md  gap-8 rounded-2xl  md:rounded-3xl border">
            <div className="flex  size-fit rounded-[12px] p-3 items-center justify-center">
              <Image
                src="/icons/rocket.svg"
                width={59}
                height={59}
                alt="arrow right"
              />
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-foreground text-2xl font-semibold font-gilroy">
                Scalable Solutions
              </p>
              <p className="text-md md:text-lg font-normal font-inter text-description">
                Future-proof technologies that grows with your business.
              </p>
            </div>
          </div>
        </div>

        {/* Third Col */}
        <div className="flex flex-col  pt-7 bg-background w-full  md:w-[388px] drop-shadow-md  gap-10 rounded-2xl  md:rounded-3xl border">
          <div className="flex mx-6   size-fit rounded-[12px] p-3 items-center justify-center">
            <Image
              src="/icons/hand-shake.svg"
              width={59}
              height={59}
              alt="arrow right"
            />
          </div>
          <div className="flex flex-col gap-6 justify-between pb-6 h-full">
            <p className="text-foreground  px-6 text-2xl font-semibold font-gilroy">
              Client-Centric Solutions with High Security
            </p>
            <Image
              src={"/icons/bento-security.png"}
              alt="shape"
              width={1000}
              height={100}
              className="w-full"
            />
            <p className="text-md md:text-lg font-normal font-inter text-description px-6  ">
              AWe ensure high-security, scalable solutions tailored to your
              success and business expansion.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
