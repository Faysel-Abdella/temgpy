import TechStackBadge from "@/components/common/tect-stack-badge";
import OtherServices from "@/components/sections/services/service-detail/other-services";
import ServiceHeroDetail from "@/components/sections/services/service-detail/service-detail-hero";
import { Separator } from "@/components/ui/separator";
import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { SliceZone } from "@prismicio/react";
import { notFound } from "next/navigation";
import React from "react";

interface ServiceDetailPageProps {
  params: Promise<{ uid: string }>;
}
const ServiceDetailPage = async ({ params }: ServiceDetailPageProps) => {
  const uid = "service-01";
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
        <ServiceHeroDetail
          images={bannerImages}
          title="Restaurant Ordering & Management Systems"
        />
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
                  console.log(techStack.tech_stack.data);
                }
                if (techStack.tech_stack.link_type == "Document") {
                  const logo = techStack.tech_stack.data?.logo;
                  const title = techStack.tech_stack.data?.title;
                  // console.log(logo, title);
                  return (
                    logo &&
                    title && <TechStackBadge logo={logo} title={title} />
                  );
                }
              })}
            </div>
          </div>
        </div>
        <div className="flex bg-white">
          <Separator className="mx-auto max-w-6xl " />
        </div>
        <div className="max-w-6xl mx-auto px-4">
          <OtherServices />
        </div>
      </div>
    );
};

export default ServiceDetailPage;
