"use client";
import { cn } from "@/lib/utils";
import React, { useEffect, useState, useRef } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
// import { Testimonial } from "../sections/main/testimonials";
import Image from "next/image";
import { Testimonial } from "../sections/main/testimonials";

interface InfiniteMovingCardsProps {
  testimonials: Testimonial[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}

export const InfiniteMovingCards = ({
  testimonials,
  direction = "left",
  speed = "normal",
  pauseOnHover = true,
  className,
}: InfiniteMovingCardsProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    addAnimation();
  }, []);

  function addAnimation() {
    // console.log("Adding animation...");
    if (containerRef.current && scrollerRef.current) {
      // console.log("Refs exist:", containerRef.current, scrollerRef.current);
      const scrollerContent = Array.from(scrollerRef.current.children);
      // console.log("Current children:", scrollerContent.length);
      scrollerContent.forEach((item) => {
        const duplicatedItem = (item as HTMLElement).cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });
      getDirection();
      getSpeed();
      setStart(true);
      // console.log(
      //   "Animation started, start:",
      //   start,
      //   "pauseOnHover:",
      //   pauseOnHover
      // );
    } else {
      console.error("Refs are null, animation not applied");
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      // console.log("Setting direction:", direction);
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      );
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      const duration =
        speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s";
      // console.log("Setting speed:", duration);
      containerRef.current.style.setProperty("--animation-duration", duration);
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 min-w-screen  overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
      onMouseEnter={() => {
        if (pauseOnHover) setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}>
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full items-center shrink-0 gap-8 py-4 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
        style={{
          animationPlayState: isHovered && pauseOnHover ? "paused" : "running",
        }}>
        {testimonials.map((testimonial, idx) => (
          <div
            key={idx}
            className={cn(
              "relative max-w-[453px] p-5 transition-all mx-auto bg-background drop-shadow-md duration-300 ease-in-out  rounded-[24px] flex flex-col justify-between items-start gap-16 h-fit"
            )}>
            <div className={cn("pr-2")}>
              <p className="text-sm text-[#30323A] md:text-xl leading-relaxed font-inter italic font-medium">
                ❝{testimonial.quote}❝
              </p>
            </div>
            <div className="flex justify-between items-end gap-5 w-full">
              <div className="flex gap-4 items-center">
                <Avatar className="size-9 md:size-12 object-cover rounded-md z-20 aspect-square">
                  <AvatarImage
                    src={testimonial.image}
                    alt={testimonial.name}
                  />
                  <AvatarFallback>
                    {testimonial.name[0]}
                    {testimonial.name[1]}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-lg md:text-2xl font-gilroy font-medium">
                    {testimonial.name}
                  </h3>
                  <p className="text-md text-[#30323A] font-inter font-normal opacity-95">
                    {testimonial.title}
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-5 h-full ">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="font-instrument text-sm font-normal">
                      Via
                    </span>
                    <Image
                      className="w-fit h-[24px]"
                      alt="platform logo"
                      src={testimonial.platform}
                      width={20}
                      height={24}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};
