"use client";

import type React from "react";
import { useEffect, useState } from "react";
import {
  Bot,
  CodeXml,
  AppWindow,
  Tangent,
  Smartphone,
  CloudLightning,
  Boxes,
} from "lucide-react";
import Image from "next/image";
import { Separator } from "./ui/separator";

interface Service {
  icon: React.ReactNode;
  name: string;
}

const services: Service[] = [
  { icon: <Bot className="h-5 w-5" />, name: "AI & Automation" },
];

export function InfiniteMovingPartners() {
  const [dupe, setDupe] = useState(1);

  useEffect(() => {
    // Ensure we have enough items to create a seamless loop
    const itemWidth = 200; // Approximate width of each item
    const containerWidth = window.innerWidth;
    const itemsNeeded = Math.ceil(containerWidth / itemWidth) * 2;
    setDupe(Math.max(2, itemsNeeded));
  }, []);

  return (
    <div className="relative  overflow-hidden  w-full py-3  flex items-center justify-center">
      <div className="relative  w-fit ">
        <div className="absolute w-16 h-24 md:w-24 md:h-32 lg:w-36 lg:h-48 -top-3 bg-gradient-to-l from-muted  to-muted/0 right-0 z-30" />
        <div className="absolute w-16 h-24 md:w-24 md:h-32 lg:w-36 lg:h-48  -top-3 bg-gradient-to-r from-muted  to-muted/0 left-0 z-30" />
        <div className=" w-screen mx-auto flex items-center justify-between lg:p-4  gap-1 md:gap-2.5 py-4 px-6 lg:py-14 lg:px-20 relative overflow-hidden">
          <div
            className="flex animate-infinite-scroll gap-8"
            style={{
              animationDuration: `${dupe * 8}s`,
            }}>
            {Array(dupe)
              .fill(services)
              .flat()
              .map((service, index) => (
                <div
                  className="flex gap-7 items-center md:gap-12 h-full"
                  key={index}>
                  <Separator
                    orientation="vertical"
                    className="min-h-3 md:min-h-6  bg-[#b1b5bb]"
                  />
                  <Image
                    src="/partners/taza.png"
                    width={150}
                    height={150}
                    alt="partner"
                    className="max-w-[80px] sm:max-w-[120px] lg:max-w-[150px] w-auto"
                  />
                  <Separator
                    orientation="vertical"
                    className="min-h-3 md:min-h-6  bg-[#B6BAC0]"
                  />
                  <Image
                    src="/partners/sure-drive.svg"
                    width={150}
                    height={150}
                    alt="partner"
                    className="max-w-[120px] sm:max-w-[120px] lg:max-w-[196px] w-auto"
                  />
                  <Separator
                    orientation="vertical"
                    className="min-h-3 md:min-h-6  bg-[#B6BAC0]"
                  />
                  <Image
                    src="/partners/change-hub.png"
                    width={150}
                    height={150}
                    alt="partner"
                    className="max-w-[120px] sm:max-w-[120px] lg:max-w-[196px] w-auto"
                  />
                  <Separator
                    orientation="vertical"
                    className="min-h-3 md:min-h-6 bg-[#B6BAC0]"
                  />
                  <Image
                    src="/partners/bilion-views.png"
                    width={150}
                    height={150}
                    alt="partner"
                    className="max-w-[100px] sm:max-w-[120px] lg:max-w-[150px] pr-3 w-auto"
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
