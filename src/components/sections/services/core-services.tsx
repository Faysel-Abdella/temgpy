import SectionShow from "@/components/section-show";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/ui/icons";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const coreServicesData: {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
}[] = [
  {
    id: 1,
    icon: <Icons.Code />,
    title: "Custom Software Development",
    description:
      "We architect tailored web & mobile applications that are perfectly designed for your business needs and long-term vision.",
  },
  {
    id: 2,
    icon: <Icons.Console />,
    title: "Admin Dashboard Development",
    description:
      "Gain full control with custom dashboards & admin tools that simplify operations, centralize analytics, & accelerate smart decision-making.",
  },
  {
    id: 3,
    icon: <Icons.Ai />,
    title: "AI & Automation Solutions",
    description:
      "Automate workflows, leverage smart data, & integrate AI-driven insights to achieve peak efficiency & unlock new opportunities.",
  },
  {
    id: 4,
    icon: <Icons.CloudConnection />,
    title: "Cloud & DevOps Services",
    description:
      "Build your future on secure, efficient, & scalable cloud infrastructure, powered by advanced automation & deployment pipelines.",
  },
  {
    id: 5,
    icon: <Icons.Peoples2 />,
    title: "Talent Outsourcing",
    description:
      "Access experienced developers & specialists to fill skill gaps, boost team capacity, and accelerate project delivery.",
  },
];

export default function CoreServices() {
  return (
    <main className="w-screen h-fit flex items-center justify-center py-20 max-md:py-2 ">
      <div className="w-full p-4  lg:max-w-[1232px] items-start h-fit flex flex-col  ">
        <div className="flex flex-col w-full items-center gap-8 md:gap-12 lg:gap-16">
          <SectionShow title="Our Core Services" />
          <p
            data-aos="fade-up"
            data-aos-duration="700"
            className="w-full text-center  text-3xl  justify-start  md:text-4xl font-extrabold font-gilroy leading-[40px]"
          >
            We deliver impactful, strategy-driven solutions that redefine how
            businesses work
          </p>
        </div>
        <div data-aos="flip-right" data-aos-duration="700" className="w-full">
          <Separator className="w-full hidden md:block my-12" />
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="700"
          className="flex flex-col gap-12 w-full justify-between h-full items-start max-md:pt-12  px-4 "
        >
          <div className="grid md:grid-cols-2 lg:grid-cols-3 w-full gap-8  md:gap-10 lg:gap-12 ">
            {coreServicesData.map((service) => (
              <div
                key={service.id}
                className="flex max-md:items-center flex-col gap-4"
              >
                {service.icon}
                <div className=" mt-5 justify-start max-md:text-center  text-xl font-semibold font-gilroy ">
                  {service.title}
                </div>
                <div className="max-md:max-w-xs max-md:mx-auto justify-start max-md:text-center text-description text-base font-medium font-inter leading-normal">
                  {service.description}
                </div>
              </div>
            ))}
            <div className="flex flex-col gap-4 justify-around items-center p-7 bg-muted rounded-3xl">
              <p className="text-xl font-semibold">Let&apos;s Work Together!</p>
              <p className="text-center text-description ">
                We focus on a clear plan to support our clients in achieving.
              </p>
              <Button className="rounded-full !h-12" asChild>
                <Link href={"/contact-us"}>Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
