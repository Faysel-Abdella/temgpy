"use client";

import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface SlideshowProps {
  images: string[];
  interval?: number; // default 3000ms
  transitionDuration?: number; // default 1000ms
  className?: string;
}

export default function Slideshow({
  images,
  interval = 3000,
  transitionDuration = 1000,
  className,
}: SlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const goToNextSlide = useCallback(() => {
    if (transitioning) return;
    setTransitioning(true);
    setPrevIndex(currentIndex);
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setTimeout(() => setTransitioning(false), transitionDuration);
  }, [currentIndex, images.length, transitionDuration, transitioning]);

  useEffect(() => {
    if (isPaused) return;
    const id = setInterval(goToNextSlide, interval);
    return () => clearInterval(id);
  }, [goToNextSlide, interval, isPaused]);

  const handleDotClick = (index: number) => {
    if (transitioning || index === currentIndex) return;
    setTransitioning(true);
    setPrevIndex(currentIndex);
    setCurrentIndex(index);
    setTimeout(() => setTransitioning(false), transitionDuration);
  };

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-xl md:rounded-3xl bg-[#111827]",
        className
      )}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Previous image */}
      <div
        className={cn(
          "absolute inset-0 transition-all",
          `duration-[${transitionDuration}ms]`,
          transitioning ? "opacity-0 scale-110 blur-sm rotate-3" : "opacity-0"
        )}
      >
        <Image
          src={images[prevIndex] || "/placeholder.svg"}
          alt={`Previous slide`}
          fill
          className="object-cover"
        />
      </div>

      {/* Current images */}
      {images.map((src, index) => (
        <div
          key={index}
          className={cn(
            "absolute inset-0 transition-all duration-1000",
            currentIndex === index
              ? "opacity-100 scale-100 blur-0 rotate-0 z-10"
              : "opacity-0 scale-80 blur-md rotate-0 z-0"
          )}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background2 to-background2 mix-blend-overlay z-20" />
          <Image
            src={src || "/placeholder.svg"}
            alt={`Slide ${index + 1}`}
            fill
            className="object-cover"
            priority={index === 0}
          />
        </div>
      ))}

      {/* Overlays */}
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-30 transition-opacity",
          transitioning ? "opacity-70" : "opacity-30"
        )}
      />
      <div
        className={cn(
          "absolute inset-0 bg-radial-gradient z-20 transition-opacity",
          transitioning ? "opacity-60" : "opacity-0"
        )}
      />

      {/* Dots */}
      <div className="flex justify-center mt-8 space-x-1.5 relative z-40">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={cn(
              "w-2 h-2 rounded-full transition-all",
              currentIndex === index
                ? "bg-primary w-6"
                : "bg-gray-400/70 hover:bg-gray-500"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
