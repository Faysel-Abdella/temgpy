import TechStackBadge from "@/components/common/tect-stack-badge";
import OtherServices from "@/components/sections/services/service-detail/other-services";
import ServiceHeroDetail from "@/components/sections/services/service-detail/service-detail-hero";
import { Separator } from "@/components/ui/separator";
import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { SliceZone } from "@prismicio/react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import React from "react";

interface ServiceDetailPageProps {
  params: Promise<{ uid: string }>;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ uid: string }>;
}): Promise<Metadata> {
  const { uid } = await params;

  const client = createClient();
  const service = await client.getByUID("service", uid).catch(() => {
    return notFound();
  });

  const keywords = service.data.keywords
    ? service?.data.keywords.map((keyword) => keyword.keyword as string)
    : [];

  const title = `${service.data.meta_title || service?.data.title} | Venas Technologies`,
    description =
      service.data.meta_description ||
      "Explore this Venas Technologies service.";

  const socialImage: string =
    service.data.social_image && service.data.social_image.url
      ? service.data.social_image.url
      : "https://venastechnology.com/media-preview.png";

  return {
    title,
    description,
    keywords: [
      service?.data.title || "Default Service Title",
      "Venas Technologies Service",
      "digital transformation",
      "AI solutions",
      ...keywords,
    ],
    openGraph: {
      title,
      description,
      url: `https://venastechnology.com/services/${service.uid}`,
      type: "article",
      images: [
        {
          url: socialImage,
          width: 1200,
          height: 630,
          alt: `${service?.data.meta_title || service?.data.title} Preview`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [socialImage],
    },
  };
}

export async function generateStaticParams() {
  const client = createClient();
  const pages = await client.getAllByType("service");

  return pages.map((page) => {
    return { uid: page.uid };
  });
}
const ServiceDetailPage = async ({ params }: ServiceDetailPageProps) => {
  const { uid } = await params;
  const client = createClient();
  const service = await client.getByUID("service", uid).catch((error) => {
    console.log(error);
    return notFound();
  });

  const bannerImages: string[] = service.data.banner_images
    .map((bannerImage) => bannerImage.banner_image.url)
    .filter((url): url is string => Boolean(url));

  if (service.data)
    return (
      <div>
        <ServiceHeroDetail images={bannerImages} title={service.data.title!} />
        <div className="max-w-6xl px-4  mx-auto">
          <SliceZone slices={service.data.slices} components={components} />
        </div>

        <div className="flex bg-white pt-12">
          <Separator className="mx-auto max-w-6xl max-h-px" />
        </div>

        <div className="flex items-center justify-center w-screen h-fit py-14 px-4 lg:px-0 bg-background ">
          <div className="max-w-6xl  inline-flex flex-col justify-start items-center gap-8">
            <h1
              data-aos="fade-up"
              data-aos-duration="500"
              className="text-2xl lg:text-3xl font-extrabold font-gilroy"
            >
              Tech Stack
            </h1>
            <div className="flex flex-wrap gap-3 items-center justify-center">
              {service.data.tech_stack.map((techStack) => {
                if (techStack.tech_stack.link_type == "Document") {
                }
                if (techStack.tech_stack.link_type == "Document") {
                  const logo = techStack.tech_stack.data?.logo;
                  const title = techStack.tech_stack.data?.title;
                  return (
                    logo &&
                    title && (
                      <TechStackBadge
                        key={techStack.tech_stack.uid}
                        logo={logo}
                        title={title}
                      />
                    )
                  );
                }
              })}
            </div>
          </div>
        </div>
        <div className="flex bg-white">
          <Separator className="mx-auto max-w-6xl " />
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-12">
          <OtherServices currentServiceId={uid} />
        </div>
      </div>
    );
};

export default ServiceDetailPage;
