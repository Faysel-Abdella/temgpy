"use client";

import React, { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Service } from "@/types/shared.types";
import ServiceCard from "../service-card";
import { cn } from "@/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface ServicesCarouselProps {
  services: Service[];
  currentServiceId: string;
}

const ServicesCarousel = ({
  currentServiceId,
  services,
}: ServicesCarouselProps) => {
  const filteredServices = services.filter(
    (service) => service.id !== currentServiceId
  );

  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full  lg:max-w-4xl xl:max-w-7xl"
    >
      <CarouselContent>
        {filteredServices.map((service) => (
          <CarouselItem key={service.id} className="md:basis-1/2 lg:basis-1/3">
            <ServiceCard service={service} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="-left-0 sm:-left-6 md:-left-9 lg:-left-10 xl:-left-12" />
      <CarouselNext className="-right-0 sm:-right-6 md:-right-9 lg:-right-10 xl:-right-12" />
      <CarouselDots className="-bottom-10" />
    </Carousel>
  );
};

export default ServicesCarousel;
