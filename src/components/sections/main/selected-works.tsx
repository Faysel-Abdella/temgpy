import React from "react";

import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon, ArrowUpRight } from "lucide-react";
import { Button } from "../../ui/button";
import SectionShow from "@/components/section-show";
import { getThreeProjects } from "../works/projects-data";

export default function SelectedWorks() {
  const projects = getThreeProjects();
  return (
    <section className="flex flex-col gap-12 items-center justify-center w-screen px-4 lg:px-0 h-fit py-12 md:py-28 relative">
      <div className="w-full max-w-[1212px] flex flex-col gap-6">
        <SectionShow title="Our Portfolio" />
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6">
          <p
            data-aos="fade-up"
            data-aos-duration="600"
            className="text-foreground text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold font-gilroy leading-tight md:leading-[57.60px] max-w-full md:max-w-[810px]">
            Explore how we’ve helped businesses achieve digital success.
          </p>

          <Link
            href={"/projects"}
            data-aos="flip-up"
            data-aos-duration="600"
            className="hidden md:flex bg-primary group text-primary-foreground w-fit pl-4 pr-2 gap-2 h-12 hover:cursor-pointer text-base font-medium font-clash leading-normal border-0 rounded-full justify-center items-center transition-all duration-300 ease-in-out">
            <span className="ml-2">View More!</span>
            <span className="bg-white text-background2 size-8 flex items-center justify-center rounded-full">
              <ArrowUpRight className="size-4" />
            </span>
          </Link>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-8 w-full max-w-[1212px]">
        {projects.map((project, index) => (
          <div
            key={project.title}
            data-aos="flip-right"
            data-aos-duration="600"
            data-aos-delay={index * 200}
            className="flex flex-col gap-3  w-[380px]">
            <Image
              src={project.imageUrl}
              className="w-full  h-auto aspect-square object-cover"
              width={380}
              height={380}
              alt="selected work"
            />
            <div className="flex justify-between items-center">
              <p className="line-clamp-1 font-clash text-lg font-medium">
                {project.title}
              </p>
              <Link
                href={`projects/${project.slug}`}
                className="rounded-full bg-orange p-2 text-white flex-shrink-0">
                <ArrowUpRight />
              </Link>
            </div>
          </div>
        ))}
      </div>
      <Link
        href={"/projects"}
        className="flex md:hidden bg-primary group text-primary-foreground w-fit pl-4 pr-2 gap-2 h-12 hover:cursor-pointer text-base font-medium font-clash leading-normal border-0 rounded-full justify-center items-center transition-all duration-300 ease-in-out mx-auto">
        <span className="ml-2">View More!</span>
        <span className="bg-white text-background2 size-8 flex items-center justify-center rounded-full">
          <ArrowUpRight className="size-4" />
        </span>
      </Link>
    </section>
  );
}
