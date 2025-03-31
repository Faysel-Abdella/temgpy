"use client";

import Aos from "aos";
import React, { useEffect } from "react";
import { Project } from "../projects-data";
import Image from "next/image";

export default function ProjectOverview({ project }: { project: Project }) {
  useEffect(() => {
    import("aos").then((AOS) => {
      Aos.init();
    });
  }, []);
  return (
    <div className="flex items-center justify-center w-screen h-fit py-6 md:py-16 px-4 lgLpx-0 bg-background">
      <div className="flex w-full max-w-[1112px] flex-col md:flex-row gap-7 md:gap-12 lg:gap-16 items-center justify-center">
        <div className="flex  flex-col gap-3 md:gap-5 w-full md:w-1/2 mx-auto">
          <h1
            data-aos="fade-right"
            data-aos-duration="500"
            className="text-2xl lg:text-3xl font-extrabold font-gilroy">
            Project Overview
          </h1>
          <p
            data-aos="fade-right"
            data-aos-duration="1200"
            className="text-description font-inter text-md lg:text-lg font-normal">
            {project.overview}
          </p>
        </div>
        <div className="flex flex-col gap-5 w-full md:w-1/2">
          <Image
            data-aos="fade-left"
            data-aos-duration="1200"
            className="w-full max-w-[524px]"
            src={project.overviewImage}
            width={1920}
            height={1080}
            alt={project.title}
          />
        </div>
      </div>
    </div>
  );
}
