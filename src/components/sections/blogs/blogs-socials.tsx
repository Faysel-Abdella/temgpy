"use client";

import type React from "react";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Facebook, Twitter, Instagram, Linkedin, Github } from "lucide-react";
import { Icons } from "@/components/ui/icons";

interface SocialLink {
  name: string;
  icon: React.ReactNode;
  url: string;
  width?: number;
}

export default function BlogSocials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [linkWidths, setLinkWidths] = useState<number[]>([]);
  const nameRefs = useRef<(HTMLSpanElement | null)[]>([]);

  const socialLinks: SocialLink[] = [
    {
      name: "Instagram",
      icon: <Icons.Instagram />,

      url: "https://instagram.com",
    },
    {
      name: "LinkedIn",
      icon: <Icons.LinkedIn />,
      url: "https://linkedin.com",
    },
    {
      name: "Facebook",
      icon: <Icons.Facebook />,
      url: "https://facebook.com",
    },
    {
      name: "Upwork",
      icon: <Icons.UpworkColord />,
      url: "https://upwork.com",
    },
    {
      name: "Twitter",
      icon: <Icons.XColord />,
      url: "https://x.com",
    },
  ];

  // Measure text widths on mount
  useEffect(() => {
    const widths = nameRefs.current.map((ref) => {
      return ref ? ref.getBoundingClientRect().width + 40 : 120; // 50px for padding and icon
    });
    setLinkWidths(widths);
  }, []);

  return (
    <div className="flex items-center justify-center">
      <div className="flex items-center flex-wrap justify-center gap-4">
        {socialLinks.map((link, index) => {
          const isActive = activeIndex === index;
          const expandedWidth = linkWidths[index] || 120; // Fallback width

          return (
            <motion.a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-13 items-center justify-center border-2  rounded-full bg-white shadow-sm px-1  outline-neutral-300/25"
              onHoverStart={() => setActiveIndex(index)}
              animate={{
                width: isActive ? expandedWidth : 52,
              }}
              transition={{
                duration: 0.5,
                ease: [0.25, 0.1, 0.25, 1], // Custom cubic bezier for smooth motion
              }}>
              <div className="flex h-7 w-7 ml-1 flex-shrink-0 items-center justify-center text-white">
                {link.icon}
              </div>

              <div
                className="overflow-hidden"
                style={{
                  width: isActive ? "auto" : 0,
                  opacity: isActive ? 1 : 0,
                  transition: "opacity 0.2s ease-in-out",
                }}>
                <span
                  ref={(el) => {
                    nameRefs.current[index] = el;
                  }}
                  className="whitespace-nowrap pr-4 ml-1 text-sm md:text-md font-inter font-medium text-black/80">
                  {link.name}
                </span>
              </div>
            </motion.a>
          );
        })}
      </div>

      {/* Hidden elements to measure text widths */}
      <div className="absolute -left-[9999px] -top-[9999px]">
        {socialLinks.map((link, index) => (
          <span
            key={`measure-${link.name}`}
            ref={(el) => {
              if (!nameRefs.current[index]) {
                nameRefs.current[index] = el;
              }
            }}
            className="whitespace-nowrap pr-4 text-sm font-medium">
            {link.name}
          </span>
        ))}
      </div>
    </div>
  );
}
