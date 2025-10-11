"use client";
import Slideshow from "@/components/common/slideshow";
import { cn } from "@/lib/utils";
import Aos from "aos";
import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";

interface ServiceHeroDetailProps {
  images: string[];
  title: string;
}

const ServiceHeroDetail = ({ images, title }: ServiceHeroDetailProps) => {
  useEffect(() => {
    import("aos").then((AOS) => {
      Aos.init();
    });
  }, []);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  // Define goToNextSlide with useCallback to avoid recreation
  const goToNextSlide = useCallback(() => {
    if (transitioning) return;

    setTransitioning(true);
    setPrevIndex(currentIndex);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);

    setTimeout(() => {
      setTransitioning(false);
    }, 1000); // 1 second transition duration
  }, [currentIndex, transitioning, images.length]);

  // Auto-rotate images - with empty dependency array to ensure it runs only once
  useEffect(() => {
    if (isPaused) return;

    console.log("Setting up auto-rotation");
    const interval = setInterval(() => {
      goToNextSlide();
    }, 3000); // Change image every 3 seconds

    return () => {
      console.log("Clearing interval");
      clearInterval(interval);
    };
  }, [goToNextSlide, isPaused]);

  // Handle dot click
  const handleDotClick = (index: number) => {
    if (transitioning || index === currentIndex) return;

    // Temporarily pause auto-rotation when manually changing

    setTransitioning(true);
    setPrevIndex(currentIndex);
    setCurrentIndex(index);

    setTimeout(() => {
      setTransitioning(false);
      // Resume auto-rotation after transition completes
    }, 1000);
  };
  return (
    <section className="flex bg-background2 relative text-background2-foreground flex-col py-28">
      <div className="absolute w-screen h-40 bg-background2 bottom-full" />
      <div className="absolute w-screen h-32 md:h-48 bg-background bottom-0" />
      <div className="w-full h-fit  flex flex-col items-center justify-center gap-8">
        <div className="flex px-4 flex-col items-center justify-center gap-6">
          <p
            data-aos="fade-up"
            data-aos-duration="500"
            className="text-center font-gilroy text-4xl lg:text-5xl font-extrabold leading-[42px] lg:leading-[70px]"
          >
            {title}
          </p>
        </div>

        <div className="relative  px-4 lg:px-0 w-full lg:max-w-[1112px] mx-auto">
          <div className="relative h-52 md:h-80 lg:h-[629px] w-full overflow-hidden rounded-xl md:rounded-3xl bg-[#111827]">
            <div
              className={cn(
                "absolute inset-0 transition-all duration-1000",
                transitioning
                  ? "opacity-0 scale-110 blur-sm rotate-3"
                  : "opacity-0"
              )}
            >
              <Image
                src={images[prevIndex] || "/placeholder.svg"}
                alt={`Previous carousel image`}
                fill
                className="object-cover"
              />
            </div>

            {images.map((src, index) => (
              <div
                key={index}
                className={cn(
                  "absolute inset-0 transition-all duration-2000",
                  currentIndex === index
                    ? "opacity-100 scale-100 blur-0 rotate-0 z-10"
                    : "opacity-0 scale-80 blur-md rotate-0 z-0"
                )}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-background2 to-background2 mix-blend-overlay z-20 transition-opacity duration-2000" />
                <Image
                  src={src || "/placeholder.svg"}
                  alt={`Carousel image ${index + 1}`}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
              </div>
            ))}

            <div
              className={cn(
                "absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-30 transition-opacity duration-1000",
                transitioning ? "opacity-70" : "opacity-30"
              )}
            />

            <div
              className={cn(
                "absolute inset-0 bg-radial-gradient z-20 transition-opacity duration-700",
                transitioning ? "opacity-60" : "opacity-0"
              )}
            />
          </div>

          <div className="flex justify-center mt-8 space-x-1.5">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={cn(
                  "w-2 h-2 duration-1000 hover:cursor-pointer rounded-full transition-colors",
                  currentIndex === index
                    ? "bg-primary w-6"
                    : "bg-gray-400/70 hover:bg-gray-500"
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHeroDetail;
