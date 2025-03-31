import SectionShow from "@/components/section-show";
import { Icons } from "@/components/ui/icons";
import React from "react";

const coreValuesData = [
  {
    title: "Innovation",
    description:
      "We push boundaries to create cutting-edge solutions that drive progress.",
    icon: <Icons.Chart className="size-10" />,
  },
  {
    title: "Integrity",
    description:
      "Transparency, honesty, and accountability guide our every action.",
    icon: <Icons.ConvertShape className="size-10" />,
  },
  {
    title: "Excellence",
    description:
      "We are committed to delivering high-quality, impactful results.",
    icon: <Icons.MedalStar className="size-10" />,
  },
];

export default function CoreValues() {
  return (
    <section className="flex w-screen px-1.5">
      <div className=" flex flex-col gap-12 px-4 items-center bg-muted  rounded-t-[32px]  justify-center w-full  h-fit py-20 md:py-28 pb-28 md:pb-36 relative">
        <div className="max-w-[1212px] flex-col  gap-6 inline-flex relative">
          <SectionShow
            title="Our Core Values"
            className="bg-white"
          />
          <div className="flex flex-col lg:flex-row gap-5 justify-between lg:items-center">
            <p className=" md:max-w-[610px] text-foreground text-3xl md:text-4xl lg:text-5xl font-extrabold font-gilroy leading-10 md:leading-[60px]">
              What Drives Us for Quality Delivery - Principles
            </p>
            <div className="max-w-[503px] justify-start text-description text-md md:text-lg font-normal font-inter leading-relaxed">
              We are guided by principles that shape our work, culture, &
              impact. Our commitment to excellence ensures we deliver
              high-quality solutions that empower businesses to grow.
            </div>
          </div>
        </div>
        <div className="flex w-full max-w-[1212px] flex-wrap gap-4 md:gap-5 mx-auto">
          {coreValuesData.map((item) => (
            <div
              key={item.title}
              className="w-full max-w-[390.3px] h-64 p-7 rounded-[32px] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.05)] outline outline-1 flex bg-white flex-col gap-4 justify-between outline-offset-[-0.50px] outline-neutral-200">
              {item.icon}
              <div className="flex flex-col gap-3 md:gap-4">
                <p className=" mt-5 justify-start  text-xl font-semibold font-gilroy ">
                  {item.title}
                </p>
                <p className="w-80 justify-start text-description text-base font-medium font-inter leading-normal">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
