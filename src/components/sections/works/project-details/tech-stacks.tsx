import React from "react";
import { Project } from "../projects-data";
import { Icons } from "@/components/ui/icons";

export default function TechStacks({ project }: { project: Project }) {
  return (
    <div className="flex items-center justify-center w-screen h-fit py-14 px-4 lg:px-0 bg-background">
      <div className="w-[770px] inline-flex flex-col justify-start items-center gap-4">
        <h1
          data-aos="fade-up"
          data-aos-duration="500"
          className="text-2xl lg:text-3xl font-extrabold font-gilroy">
          Tech Stack
        </h1>
        <div className="flex flex-wrap gap-3 items-center justify-center">
          {project.techStacks.map((item, index) => (
            <div
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay={index * 150}
              key={item.title}
              className="px-4 py-1.5 border bg-secondary/55 rounded-full inline-flex justify-center items-center gap-2.5">
              <div className="flex size-7">
                {React.createElement(Icons[item.icon as keyof typeof Icons], {
                  className: "size-[27px]",
                })}
              </div>
              <p className="relative justify-start text-lg font-normal font-instrument">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
