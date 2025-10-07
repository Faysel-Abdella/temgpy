import SectionShow from "@/components/section-show";
import React from "react";

export default function OurStory() {
  return (
    <section className="flex w-screen p-3">
      <div className="flex flex-col gap-10 items-center bg-muted  rounded-[32px]  justify-center w-full  h-fit py-16 md:py-24 relative">
        <div className="w-full flex-col p-4 lg:p-0 justify-start items-center gap-6 md:gap-8 inline-flex relative">
          <SectionShow title="Our Story" className="bg-white" />

          <p className="self-stretch text-center text-foreground text-3xl md:text-4xl lg:text-5xl font-extrabold font-gilroy leading-[60px]">
            From Vision to Reality
          </p>
          <p className="max-w-[1066px] text-center justify-start text-lg md:text-xl lg:text-2xl font-medium font-inter leading-normal">
            Our journey began with a passion for digital excellence, and today,
            we proudly empower companies worldwide. As a tech company serving
            clients in Europe, the USA, and beyond, we turn ideas into
            meaningful digital change and real business value through our
            talented and skilled team of professionals.
          </p>
        </div>
      </div>
    </section>
  );
}
