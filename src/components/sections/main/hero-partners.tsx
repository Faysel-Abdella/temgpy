import React from "react";
import Image from "next/image";
import { Separator } from "../../ui/separator";
import { InfiniteMovingPartners } from "@/components/infinite-scrolling-partners";

export default function HeroPartners() {
  return (
    <section
      data-aos="fade-up"
      data-aos-duration="900"
      className="flex flex-col  items-center   justify-center w-screen h-fit  relative "
    >
      <div className="w-full max-w-[320px] md:max-w-[477px] flex-col justify-start items-center gap-5 inline-flex relative">
        <p className="self-stretch text-center text-description md:text-xl  ">
          Trusted by Engineers from{" "}
          <span className="font-semibold text-foreground">Bloomberg</span> &{" "}
          <span className="font-semibold text-foreground">Uber</span>{" "}
        </p>
      </div>
      <InfiniteMovingPartners />
    </section>
  );
}
