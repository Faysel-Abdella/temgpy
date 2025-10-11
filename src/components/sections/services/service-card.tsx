import { Service } from "@/types/shared.types";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import React from "react";

interface ServiceCardProps {
  service: Service;
}
const ServiceCard = ({ service }: ServiceCardProps) => {
  return (
    <div
      key={service.id}
      className="flex  flex-col "
      data-aos="fade-up"
      data-aos-duration="600"
    >
      <div className="relative  w-full h-60  ">
        <Image
          src={service.image}
          alt={service.title + " image"}
          fill
          className="object-cover rounded-t-3xl rounded-b-2xl"
        />
      </div>

      <div className="mt-5  flex items-center w-full justify-between   ">
        <p className="text-xl font-semibold font-gilroy">{service.title}</p>
        <ArrowUpRight className="size-5" />
      </div>
      <div className="mt-4   line-clamp-2 text-description text-base font-medium font-inter leading-normal">
        {service.description}
      </div>
    </div>
  );
};

export default ServiceCard;
