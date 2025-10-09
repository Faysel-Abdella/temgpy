import SectionShow from "@/components/section-show";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

const developmentSteps = [
  {
    step: 1,
    title: "Ideation",
    description:
      "We define goals, map requirements, and plan the technical roadmap.",
  },
  {
    step: 2,
    title: "Design",
    description: "Build and test the final interface before writing any code.",
  },
  {
    step: 3,
    title: "Develop",
    description:
      "Clean, scalable code delivered fast with continuous quality testing.",
  },
  {
    step: 4,
    title: "Maintenance",
    description:
      "Flawless launch, then monitor data and provide ongoing updates.",
  },
];
const HowWeWork = () => {
  return (
    <section className="flex w-screen px-1.5">
      <div className=" flex max-w-7xl flex-col gap-12 px-4 mx-auto    rounded-t-[32px]  justify-center w-full  h-fit pt-20 md:pt-28 pb-16  relative">
        <div className=" flex-col  gap-6 max-md:items-center  flex">
          <SectionShow title="How We Work" className="bg-background3" />
          <div className="flex flex-col  gap-5 justify-between ">
            <p
              data-aos="fade-up"
              data-aos-duration="700"
              className=" md:max-w-2xl text-foreground text-3xl md:text-4xl max-md:text-center lg:text-5xl font-extrabold font-gilroy leading-10 md:leading-[60px]"
            >
              Our proven process: Built fast, built right
            </p>
            <div
              data-aos="fade-up"
              data-aos-duration="700"
              className="max-w-4xl justify-start text-description max-md:text-center text-md md:text-lg font-normal font-inter leading-relaxed"
            >
              We transform industry knowledge into exceptional digital
              platforms. We don&apos;t just deliver solutions; we establish a
              foundation for innovation ensuring accelerated market leadership
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="700"
          className=" w-full  grid md:grid-cols-4 flex-wrap gap-0 mx-auto"
        >
          {developmentSteps.map((step) => (
            <div
              key={step.step}
              className="flex  flex-col max-md:items-center"
              //   data-aos="fade-up"
              //   data-aos-duration="600"
            >
              <div className="  w-full flex items-center max-md:justify-center   ">
                <div className="size-16  shrink-0 rounded-full border-6 text-2xl font-gilroy flex items-center justify-center font-semibold text-white border-background3  bg-primary">
                  {step.step}
                </div>
                <div
                  className={cn(
                    "h-px w-full border-y-2 border-dashed max-md:hidden",
                    step.step == 4 && "border-0"
                  )}
                ></div>
              </div>
              <div className="flex flex-col max-md:items-center md:pr-5 lg:pr-20 mt-4 md:mt-8 ">
                <p className=" flex items-center   text-xl font-semibold font-gilroy ">
                  {step.title}
                </p>
                <div className="mt-5 max-md:max-w-xs max-md:text-center  max-md:mx-auto text-description text-base  font-inter ">
                  {step.description}
                </div>
              </div>

              <div
                className={cn(
                  "h-20 w-px border-x-2 mt-2  border-dashed md:hidden",
                  step.step == 4 && "h-0"
                )}
              ></div>
            </div>
          ))}
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="700"
          className="flex max-md:justify-center w-full"
        >
          <Button className="!h-12 rounded-full px-8" asChild>
            <Link href={"/contact-us"}>Let&apos;s Work Together</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
