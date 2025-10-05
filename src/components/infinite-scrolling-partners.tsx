"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Separator } from "./ui/separator";
import { Bot } from "lucide-react";

const services = [
  { icon: <Bot className="h-5 w-5" />, name: "AI & Automation" },
];

const partners = [
  {
    src: "/partners/taza.png",
    alt: "Taza",
    maxW: "max-w-[80px] sm:max-w-[120px] lg:max-w-[150px]",
  },
  {
    src: "/partners/sure-drive.svg",
    alt: "Sure Drive",
    maxW: "max-w-[120px] sm:max-w-[120px] lg:max-w-[196px]",
  },
  {
    src: "/partners/time.png",
    alt: "Time",
    maxW: "max-w-[80px] sm:max-w-[120px] lg:max-w-[150px]",
  },
  {
    src: "/partners/doxiverse.png",
    alt: "Doxiverse",
    maxW: "max-w-[80px] sm:max-w-[120px] lg:max-w-[150px]",
  },
  {
    src: "/partners/change-hub.png",
    alt: "Change Hub",
    maxW: "max-w-[120px] sm:max-w-[120px] lg:max-w-[196px]",
  },
  {
    src: "/partners/billion-views.svg",
    alt: "Billion Views",
    maxW: "max-w-[100px] sm:max-w-[120px] lg:max-w-[150px] ",
  },
];

export function InfiniteMovingPartners() {
  const [dupe, setDupe] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768; // Tailwind md breakpoint
      setIsMobile(mobile);

      if (!mobile) {
        setDupe(1);
        return;
      }

      const itemWidth = 200;
      const itemsNeeded = Math.ceil(window.innerWidth / itemWidth) * 2;
      setDupe(Math.max(2, itemsNeeded));
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative w-full  flex items-center justify-center overflow-hidden">
      <div className="relative w-fit">
        {isMobile && (
          <>
            <div className="absolute w-16 h-24 md:w-24 md:h-32 lg:w-36 lg:h-48 -top-3 bg-gradient-to-l from-muted to-transparent right-0 z-30" />
            <div className="absolute w-16 h-24 md:w-24 md:h-32 lg:w-36 lg:h-48 -top-3 bg-gradient-to-r from-muted to-transparent left-0 z-30" />
          </>
        )}

        <div className="w-screen mx-auto flex items-center justify-center gap-2 md:gap-3  lg:px-20 overflow-hidden relative">
          <div
            className={`flex items-center justify-center gap-8 ${
              isMobile ? "animate-infinite-scroll" : "flex-wrap"
            }`}
            style={{ animationDuration: `${dupe * 8}s` }}
          >
            {Array(dupe)
              .fill(partners)
              .flat()
              .map((partner, index) => (
                <div key={index} className="flex items-center gap-6 md:gap-8">
                  <Separator
                    orientation="vertical"
                    className="h-6 bg-[#b1b5bb]"
                  />
                  <Image
                    src={partner.src}
                    alt={partner.alt}
                    width={150}
                    height={80}
                    className={`${partner.maxW} h-9  w-auto object-contain`}
                    priority
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
