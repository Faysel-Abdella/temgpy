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

interface Service {
  icon: React.ReactNode;
  name: string;
}

const services: Service[] = [
  { icon: <Bot className="h-5 w-5" />, name: "AI & Automation" },
  { icon: <CodeXml className="h-5 w-5" />, name: "Custom Web Development" },
  { icon: <AppWindow className="h-5 w-5" />, name: "Software Solutions" },
  { icon: <Boxes className="h-5 w-5" />, name: "Talent Outsourcing" },
  { icon: <Tangent className="h-5 w-5" />, name: "UI/UX Design" },
  { icon: <Smartphone className="h-5 w-5" />, name: "Mobile App Development" },
  { icon: <CloudLightning className="h-5 w-5" />, name: "Cloud Solutions" },
];
export function BlogsInfiniteMovingCards() {
  const [dupe, setDupe] = useState(1);

  useEffect(() => {
    // Ensure we have enough items to create a seamless loop
    const itemWidth = 200; // Approximate width of each item
    const containerWidth = window.innerWidth;
    const itemsNeeded = Math.ceil(containerWidth / itemWidth) * 2;
    setDupe(Math.max(2, itemsNeeded));
  }, []);

  return (
    <div className="relative  overflow-hidden  w-full  ">
      <div className="flex  relative">
        <div className="absolute w-24 md:w-32 h-20 -top-5 bg-gradient-to-l from-background2 to-muted/0 right-0 z-30" />
        <div className="absolute w-24 md:w-32  h-32 -top-5 bg-gradient-to-r from-background2 to-muted/0 left-0 z-30" />
        <div
          className="flex animate-infinite-scroll gap-2 "
          style={{
            animationDuration: `${dupe * 12}s`,
          }}>
          {Array(dupe)
            .fill(services)
            .flat()
            .map((service, index) => (
              <div
                key={index}
                className="pl-1 pr-5 py-1 bg-muted/10 rounded-3xl text-white outline outline-1 outline-offset-[-1px] outline-gray-700 inline-flex justify-start items-center gap-2">
                <div className="p-2 bg-muted/20 text-white rounded-full flex  items-center gap-2.5 overflow-hidden">
                  {service.icon}
                </div>
                <div className="justify-start  text-sm font-medium font-inter whitespace-nowrap leading-tight">
                  {service.name}
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
