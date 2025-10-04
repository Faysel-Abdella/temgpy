import React from "react";
import Image from "next/image";
import { Separator } from "../../ui/separator";
import { InfiniteMovingPartners } from "@/components/infinite-scrolling-partners";

export default function HeroPartners() {
  return (
    <section
      data-aos="fade-up"
      data-aos-duration="900"
      className="flex flex-col  items-center   justify-center w-screen h-fit  relative pb-8"
    >
      <div className="w-full mb-12 max-w-[320px] md:max-w-[477px] flex-col justify-start items-center gap-5 inline-flex relative">
        <p className="self-stretch text-center text-description md:text-xl  ">
          We don&apos;t have clients, We have{" "}
          <span className="font-semibold text-foreground">Partners!</span>
        </p>
      </div>
      <InfiniteMovingPartners />
    </section>
  );
}
