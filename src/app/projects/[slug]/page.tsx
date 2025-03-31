import type { Metadata } from "next";
import Home from "@/components/sections/works/project-details/home";
import ProjectOverview from "@/components/sections/works/project-details/overview";
import RelatedProjects from "@/components/sections/works/project-details/related-projects";
import TechStacks from "@/components/sections/works/project-details/tech-stacks";
import {
  getManyProjects,
  getOneProject,
  Project,
} from "@/components/sections/works/projects-data";
import { Separator } from "@/components/ui/separator";

// Generate metadata for each project dynamically
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project: Project | undefined = getOneProject(slug);

  if (!project) {
    return {
      title: "Project Not Found | Growztech",
      description: "This project could not be found on Growztech.",
    };
  }

  return {
    title: `${project.title} | Growztech`,
    description:
      project.description ||
      "Explore this Growztech project showcasing custom software, AI, or cloud solutions for digital transformation.",
    keywords: [
      project.title,
      "Growztech project",
      "digital transformation",
      "custom software",
      "AI solutions",
      "cloud technology",
    ],
    openGraph: {
      title: project.title,
      description:
        project.description ||
        "Check out this Growztech project delivering innovative tech solutions.",
      url: `https://growztech.com/projects/${slug}`,
      type: "article",
      images: [
        {
          url:
            project.overviewImage ||
            "https://growztech.com/images/projects-preview.jpg",
          width: 1200,
          height: 630,
          alt: `${project.title} Preview`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description:
        project.description ||
        "Check out this Growztech project delivering innovative tech solutions.",
      images: [
        project.overviewImage ||
          "https://growztech.com/images/projects-preview.jpg",
      ],
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project: Project | undefined = getOneProject(slug);
  if (!project) {
    return <div>Project not found</div>;
  }
  const projects = getManyProjects();
  return (
    <div className="pt-32">
      <Home project={project} />
      <ProjectOverview project={project} />
      <div className="flex bg-white">
        <Separator className="mx-auto max-w-[1112px]" />
      </div>
      <TechStacks project={project} />
      <div className="flex bg-white">
        <Separator className="mx-auto max-w-[1112px]" />
      </div>
      <RelatedProjects projects={projects} />
    </div>
  );
}
