import SectionShow from "@/components/section-show";
import { Icons } from "@/components/ui/icons";
import React from "react";

const coreValuesData = [
  {
    title: "Dedicated Developer",
    description:
      "Add an expert to your team you manage the work, we ensure quality & fit.",
    icon: <Icons.User className="size-10 shrink-0" />,
  },
  {
    title: "Team Augmentation",
    description:
      "Scale fast with skilled engineers who fill gaps and speed up delivery.",
    icon: <Icons.Peoples2 className="size-10 shrink-0" />,
  },
  {
    title: "Managed Project Team",
    description:
      "Hand off your project - we handle everything from start to finish.",
    icon: <Icons.Ranking className="size-10 shrink-0" />,
  },
];
const EngagementModels = () => {
  return (
    <section className="flex  px-2.5">
      <div className=" flex flex-col gap-12 px-4  bg-muted   items-center justify-center w-full  h-fit pt-14 md:pt-18 pb-16  relative">
        <div className="max-w-[1212px] flex-col max-md:items-center gap-6 flex ">
          <SectionShow
            title="Our Engagement Models"
            className="bg-white w-fit"
          />
          <div className="flex flex-col lg:flex-row gap-5 justify-between max-md:items-center lg:items-center">
            <p className=" md:max-w-[610px] text-foreground max-md:text-center text-3xl md:text-4xl lg:text-5xl font-extrabold font-gilroy leading-10 md:leading-[60px]">
              Our Flexible Models: Built for Your Success
            </p>
            <div className="max-w-[503px] justify-start text-description  max-md:text-center font-inter leading-relaxed">
              Our three models are built around your needs. Choose the
              integration and management level that fits your team, gaining
              instant access to talent for success.
            </div>
          </div>
        </div>
        <div className=" w-full max-w-[1212px] grid md:grid-cols-3 flex-wrap gap-4 md:gap-5 mx-auto">
          {coreValuesData.map((item) => (
            <div
              key={item.title}
              className="w-full   p-7 rounded-[32px] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.05)]  outline-1 flex bg-white flex-col gap-12 justify-between outline-offset-[-0.50px] outline-neutral-200"
            >
              {item.icon}
              <div className="flex flex-col gap-3 md:gap-4">
                <p className="  justify-start  text-xl font-semibold font-gilroy ">
                  {item.title}
                </p>
                <p className=" justify-start text-description text-base font-inter leading-normal">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EngagementModels;
