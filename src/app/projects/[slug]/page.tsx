import type { Metadata } from "next";
import Home from "@/components/sections/works/project-details/home";
import ProjectOverview from "@/components/sections/works/project-details/overview";
import RelatedProjects from "@/components/sections/works/project-details/related-projects";
import {
  getManyProjects,
  getOneProject,
  Project,
} from "@/components/sections/works/projects-data";
import { Separator } from "@/components/ui/separator";
import TechStacks from "@/components/sections/works/project-details/tech-stacks";

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
      title: "Project Not Found | Venas Technologies",
      description: "This project could not be found on Venas Technologies.",
    };
  }

  return {
    title: `${project.title} | Venas Technologies`,
    description:
      project.description ||
      "Explore this Venas Technologies project showcasing custom software, AI, or cloud solutions for digital transformation.",
    keywords: [
      project.title,
      "Venas Technologies project",
      "digital transformation",
      "custom software",
      "AI solutions",
      "cloud technology",
    ],
    openGraph: {
      title: project.title,
      description:
        project.description ||
        "Check out this Venas Technologies project delivering innovative tech solutions.",
      url: `https://venastechnology.com/projects/${slug}`,
      type: "article",
      images: [
        {
          url: "https://venastechnology.com/media-preview.png",
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
        "Check out this Venas Technologies project delivering innovative tech solutions.",
      images: ["https://venastechnology.com/media-preview.png"],
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  // console.log("slug , ", slug);
  const project: Project | undefined = getOneProject(slug);
  // console.log("projects , ", project);

  if (!project) {
    return <div>Project not found</div>;
  }

  const projects = getManyProjects();
  // console.log("projects , ", projects);

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
