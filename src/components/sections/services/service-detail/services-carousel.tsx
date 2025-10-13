"use client";

import React, { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Service } from "@/types/shared.types";
import ServiceCard from "../service-card";
import { cn } from "@/lib/utils";

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

  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [totalSlides, setTotalSlides] = useState(1); // default to 1 to avoid invalid length

  // --- Setup and resizing ---
  useEffect(() => {
    const el = scrollRef.current;
    if (!el || filteredServices.length === 0) return;

    const updateSlides = () => {
      const cardWidth = el.firstElementChild?.clientWidth || 0;
      const gap = 24;

      if (cardWidth <= 0) {
        setTotalSlides(1);
        return;
      }

      const visibleCount = Math.max(
        1,
        Math.floor(el.clientWidth / (cardWidth + gap))
      );
      const total = Math.max(
        1,
        Math.ceil(filteredServices.length / visibleCount)
      );

      setTotalSlides(total);
    };

    updateSlides();
    window.addEventListener("resize", updateSlides);
    return () => window.removeEventListener("resize", updateSlides);
  }, [filteredServices.length]);

  // --- Scroll to slide ---
  const scrollToIndex = (index: number) => {
    const el = scrollRef.current;
    if (!el) return;

    const cardWidth = el.firstElementChild?.clientWidth || 0;
    const scrollPosition = index * (cardWidth + 24);
    el.scrollTo({ left: scrollPosition, behavior: "smooth" });
  };

  const scrollNext = () => {
    setCurrentIndex((prev) => {
      const next = Math.min(prev + 1, totalSlides - 1);
      scrollToIndex(next);
      return next;
    });
  };

  const scrollPrev = () => {
    setCurrentIndex((prev) => {
      const prevIndex = Math.max(prev - 1, 0);
      scrollToIndex(prevIndex);
      return prevIndex;
    });
  };

  // --- Track scroll for dot sync ---
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleScroll = () => {
      const cardWidth = el.firstElementChild?.clientWidth || 0;
      if (cardWidth <= 0) return;
      const index = Math.round(el.scrollLeft / (cardWidth + 24));
      setCurrentIndex(index);
    };

    el.addEventListener("scroll", handleScroll);
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative w-full">
      {/* Arrows */}
      <button
        onClick={scrollPrev}
        className="absolute -left-2.5 sm:-left-10 top-1/3 -translate-y-1/2 z-10 p-2 bg-background3 border backdrop-blur-md rounded-full shadow transition-all hover:bg-muted"
      >
        <ChevronLeft className="size-5" />
      </button>

      <div
        ref={scrollRef}
        className="flex gap-10  overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 scrollbar-hide"
      >
        {filteredServices.map((service) => (
          <div
            key={service.id}
            className="snap-start shrink-0 w-full sm:w-[46%] lg:w-[30%]"
          >
            <ServiceCard service={service} />
          </div>
        ))}
      </div>

      <button
        onClick={scrollNext}
        className="absolute -right-2.5 sm:-right-9 md:-right-7 xl:-right-4 top-1/3 -translate-y-1/2 z-10 p-2 bg-background3 border backdrop-blur-md rounded-full shadow transition-all hover:bg-muted"
      >
        <ChevronRight className="size-5" />
      </button>

      {/* Dots */}
      {totalSlides > 1 && (
        <div className="flex justify-center mt-4 space-x-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToIndex(index)}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-500",
                currentIndex === index
                  ? "bg-primary w-6"
                  : "bg-gray-400/70 hover:bg-gray-500"
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ServicesCarousel;
