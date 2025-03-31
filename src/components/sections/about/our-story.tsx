import SectionShow from "@/components/section-show";
import React from "react";

export default function OurStory() {
  return (
    <section className="flex w-screen p-3">
      <div className="flex flex-col gap-10 items-center bg-muted  rounded-[32px]  justify-center w-full  h-fit py-16 md:py-24 relative">
        <div className="w-full flex-col p-4 lg:p-0 justify-start items-center gap-6 md:gap-8 inline-flex relative">
          <SectionShow
            title="Our Story"
            className="bg-white"
          />

          <p className="self-stretch text-center text-foreground text-3xl md:text-4xl lg:text-5xl font-extrabold font-gilroy leading-[60px]">
            From Vision to Reality
          </p>
          <p className="max-w-[1066px] text-center justify-start text-lg md:text-xl lg:text-2xl font-medium font-inter leading-normal">
            We are a company based in Ethiopia, dedicated to transforming
            businesses through innovative and scalable technology solutions. Our
            journey began with a passion for digital excellence, and today, we
            empower companies worldwide by streamlining operations, enhancing
            security, and driving digital transformation.
          </p>
        </div>
      </div>
    </section>
  );
}
