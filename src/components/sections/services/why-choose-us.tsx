import React from "react";

import Image from "next/image";
import FallingTechIcons from "../../fallig-tech-icons";
import SectionShow from "@/components/section-show";
import { Icon } from "lucide-react";
import { Icons } from "@/components/ui/icons";

export default function WhyChooseUs() {
  return (
    <section className=" px-2.5 ">
      <div className=" py-20  bg-muted rounded-t-4xl">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="mx-auto  max-w-3xl text-center">
            <SectionShow title="Why Choose Us?" className="bg-white" />
            <h2
              data-aos="fade-up"
              data-aos-duration="600"
              className="mt-8 text-3xl font-extrabold font-gilroy text-foreground md:text-4xl lg:text-5xl"
            >
              We Transform Your Ideas into Digital Reality!
            </h2>
          </div>

          <div className="grid mt-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center gap-4 md:gap-6  w-fit px-4 md:px-0">
            {/* First Col */}
            <div className="flex flex-col  bg-background rounded-2xl row-span-2  md:rounded-3xl w-full  drop-shadow-md border">
              <div className="flex h-fit flex-col px-6 pb-6 pt-7 shadow-lg shadow-black/[7%] z-10     gap-8 rounded-2xl  md:rounded-3xl border">
                <Icons.Bulb className="size-12" />

                <div className="flex flex-col gap-3">
                  <p className="text-foreground text-2xl font-semibold font-gilroy">
                    Innovative Approach
                  </p>
                  <p className="text-lg font-normal font-inter text-description">
                    We leverage the latest technology trends to keep your
                    business ahead of the competition.
                  </p>
                </div>
              </div>
              <FallingTechIcons />
            </div>

            {/* Second Col */}
            <div className="flex flex-col px-6 pb-6 pt-7 bg-background  w-full  drop-shadow-md  gap-8 rounded-2xl  md:rounded-3xl border">
              <Icons.MedalStar className="size-12" />
              <div className="flex flex-col gap-3">
                <p className="text-foreground text-2xl font-semibold font-inter">
                  Dedicated Team of Experts
                </p>
                <p className="text-md md:text-lg font-normal font-inter text-gilroy">
                  Certified professionals with years of industry expertise.
                </p>
              </div>
            </div>

            {/* Third Col */}
            <div className="flex flex-col row-span-2  pt-7 bg-background w-full   drop-shadow-md  gap-10 rounded-2xl  md:rounded-3xl border">
              <div className="flex mx-6   size-fit rounded-[12px]  items-center justify-center">
                <Icons.Security className="size-12" />
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
                  We ensure high-security, scalable solutions tailored to your
                  success and business expansion.
                </p>
              </div>
            </div>
            <div className="flex flex-col px-6 pb-6 pt-7 bg-background  w-full drop-shadow-md  gap-8 rounded-2xl  md:rounded-3xl border">
              <Icons.Scale className="size-12" />
              <div className="flex flex-col gap-3">
                <p className="text-foreground text-2xl font-semibold font-gilroy">
                  Scalable Solutions
                </p>
                <p className="text-md md:text-lg font-normal font-inter text-description">
                  Flexible, future-ready technologies that grow with your
                  business.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
