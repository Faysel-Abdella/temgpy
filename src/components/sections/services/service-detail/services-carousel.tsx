"use client";

import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Service } from "@/types/shared.types";
import ServiceCard from "../service-card";

interface ServicesCarouselProps {
  services: Service[];
  currentServiceId: string;
}

const ServicesCarousel = ({
  currentServiceId,
  services,
}: ServicesCarouselProps) => {
  const filteredServices = services.filter(
    (service) => service.id != currentServiceId
  );
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollNext = () => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.firstElementChild?.clientWidth || 0;
    el.scrollBy({ left: cardWidth + 24, behavior: "smooth" });
  };

  const scrollPrev = () => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.firstElementChild?.clientWidth || 0;
    el.scrollBy({ left: -(cardWidth + 24), behavior: "smooth" });
  };

  return (
    <div className="relative w-full">
      {/* Buttons */}
      <button
        onClick={scrollPrev}
        className="absolute -left-5 top-1/2 -translate-y-1/2 z-10 p-2 bg-background3  border backdrop-blur-md rounded-full shadow transition-all hover:bg-muted"
      >
        <ChevronLeft className="size-5" />
      </button>

      <div
        ref={scrollRef}
        className="
          flex gap-10 overflow-x-auto scroll-smooth
          snap-x snap-mandatory pb-4 scrollbar-hide
        "
      >
        {filteredServices.map((service) => (
          <div
            key={service.id}
            className="snap-start shrink-0 w-full sm:w-[45%]  lg:w-[30%]"
          >
            <ServiceCard service={service} />
          </div>
        ))}
      </div>

      <button
        onClick={scrollNext}
        className="absolute right-2.5 top-1/2 -translate-y-1/2 z-10 p-2 bg-background3 border  backdrop-blur-md rounded-full shadow transition-all hover:bg-muted"
      >
        <ChevronRight className="size-5" />
      </button>
    </div>
  );
};

export default ServicesCarousel;
