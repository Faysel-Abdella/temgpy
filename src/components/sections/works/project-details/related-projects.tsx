import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Project } from "../projects-data";

export default function RelatedProjects({ projects }: { projects: Project[] }) {
  return (
    <div className="flex items-center justify-center w-screen h-fit py-10 md:py-24 px-4 lg:px-0 bg-background">
      <div className="flex flex-col gap-7 md:gap-10">
        <h1
          data-aos="fade-right"
          data-aos-duration="500"
          className="text-2xl lg:text-3xl font-extrabold justify-start  font-gilroy">
          Related Projects
        </h1>
        <div className="flex flex-wrap gap-8 max-w-[1232px] justify-start items-start w-full">
          {projects.map((project, index) => (
            <div
              key={project.id}
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay={index * 150}
              className="group relative">
              <div className="flex flex-col gap-3">
                <Image
                  src={project.imageUrl}
                  className="w-[388px] h-[380px]"
                  width={335}
                  height={334}
                  alt="selected work"
                />
                <div className="flex justify-between gap-3 max-w-[388px]">
                  <p className="font-clash text-lg font-medium">
                    {project.title}
                  </p>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="rounded-full bg-orange h-fit p-2 text-white">
                    <ArrowUpRight />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
