"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { cn } from "@/lib/utils";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import type { Testimonial } from "./sections/main/testimonials";

export default function CarouselWithPagination({
  testimonials,
}: {
  testimonials: Testimonial[];
}) {
  const autoplayOptions = {
    delay: 6000,
    stopOnInteraction: false,
  };

  const autoplayPlugin = useRef(Autoplay(autoplayOptions));

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: false,
      align: "start",
      slidesToScroll: 1,
      containScroll: "trimSnaps",
      dragFree: false,
    }
    // [autoplayPlugin.current]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  useEffect(() => {
    if (!emblaApi) return;

    const updateSnaps = () => {
      setScrollSnaps(emblaApi.scrollSnapList());
      onSelect();
    };

    updateSnaps();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", updateSnaps);
    emblaApi.on("resize", updateSnaps);

    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", updateSnaps);
      emblaApi.off("resize", updateSnaps);
    };
  }, [emblaApi, onSelect]);

  return (
    <div className="w-full max-w-[1420px] mx-auto px-5 relative">
      {/* Gradient overlays */}
      {/* <div className="absolute w-44 h-full top-0 left-0 bg-gradient-to-r from-muted to-transparent z-10 pointer-events-none" /> */}
      <div className="absolute w-44 h-full top-0 right-0 bg-gradient-to-l from-muted to-transparent z-10 pointer-events-none" />

      {/* Carousel */}
      <div className="overflow-hidden relative z-0" ref={emblaRef}>
        <div className="flex gap-4  md:gap-0 py-3">
          {testimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="flex-shrink px-4 w-full md:w-[calc(50%-0.5rem)] lg:w-[calc(33.333%-0.75rem)]  md:max-w-[450px]"
              style={{ flex: "0 0 auto" }}
            >
              <div
                className={cn(
                  "p-5 bg-background drop-shadow-md border border-neutral-200 mx-auto max-w-screen rounded-[20px] md:rounded-[24px] flex flex-col justify-between items-start gap-8 h-fit min-h-60  md:min-h-[300px] w-full"
                )}
              >
                <div className="pr-2">
                  <p className="text-lg text-[#30323A] md:text-xl leading-relaxed font-medium italic">
                    ❝{testimonial.quote}❞
                  </p>
                </div>
                <div className="flex justify-between items-end gap-5 w-full">
                  <div className="flex gap-4 items-center">
                    {/* <Avatar className="size-9 md:size-12 object-cover rounded-md z-20 aspect-square">
                      <AvatarImage
                        src={testimonial.image}
                        alt={testimonial.name}
                      />
                      <AvatarFallback>
                        {testimonial.name
                          .split(" ")
                          .map((name) => name[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar> */}
                    <div>
                      <h3 className="text-lg md:text-xl font-medium">
                        {testimonial.name}
                      </h3>
                      <p className="text-sm text-[#30323A] font-normal opacity-95">
                        {testimonial.title}
                      </p>
                    </div>
                  </div>
                  {/* <div className="flex flex-col gap-5 h-full">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-1.5">
                        <span className="text-sm font-normal">Via</span>
                        <Image
                          className="w-fit h-[24px]"
                          alt="platform logo"
                          src={testimonial.platform || "/placeholder.svg"}
                          width={20}
                          height={24}
                        />
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination with arrows */}
      <div className="flex items-center justify-center mt-8 md:mt-12 relative z-20">
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={scrollPrev}
            disabled={!canScrollPrev}
            className={cn(
              "p-2 rounded-full hover:cursor-pointer border border-neutral-200 bg-background hover:bg-neutral-100 transition-colors",
              !canScrollPrev && "opacity-55"
            )}
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div className="flex items-center justify-center gap-2">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={cn(
                  "h-2 rounded-full hover:cursor-pointer bg-primary/30 transition-all duration-300",
                  selectedIndex === index
                    ? "w-8 bg-primary"
                    : "w-2 hover:bg-primary/40"
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={scrollNext}
            disabled={!canScrollNext}
            className={cn(
              "p-2 rounded-full border hover:cursor-pointer border-neutral-200 bg-background hover:bg-neutral-100 transition-colors",
              !canScrollNext && "opacity-55"
            )}
            aria-label="Next slide"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
