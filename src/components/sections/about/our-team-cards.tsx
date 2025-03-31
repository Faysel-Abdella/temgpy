"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";
import { Icons } from "@/components/ui/icons";
import { TeamMember } from "./our-team";

export function TeamMemberCard({ member }: { member: TeamMember }) {
  const [isHovered, setIsHovered] = useState(false);

  const socialIcons = [
    {
      icon: <Facebook />,
      isLucidIcon: true,
      link: member.socials.facebook,
      side: "left",
    },
    {
      icon: <Instagram />,
      isLucidIcon: true,
      link: member.socials.instagram,
      side: "left",
    },
    {
      icon: <Linkedin />,
      isLucidIcon: true,
      link: member.socials.linkedin,
      side: "right",
    },
    {
      icon: <Icons.XTwitter className="size-5" />,
      isLucidIcon: false,
      link: member.socials.facebook,
      side: "right",
    },
  ];

  const leftIcons = socialIcons.filter((icon) => icon.side === "left");
  const rightIcons = socialIcons.filter((icon) => icon.side === "right");

  return (
    <motion.div
      className="relative overflow-hidden rounded-3xl shadow-lg w-[380px] h-[430px]"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}>
      <motion.div
        className="absolute inset-0 w-full h-full origin-top"
        animate={{ scale: isHovered ? 1.17 : 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}>
        <Image
          src={member.image || "/placeholder.svg"}
          alt={member.name}
          width={380}
          height={430}
          className="object-cover md:w-[380px] h-[430px]"
        />
      </motion.div>

      <AnimatePresence>
        {!isHovered && (
          <motion.div
            className="absolute bottom-0 left-0 right-0 p-4 text-center text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.3 }}>
            <h3 className="text-xl font-bold">{member.name}</h3>
            <p className="text-sm">{member.title}</p>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isHovered && (
          <motion.div
            className="absolute bottom-0 left-0 right-0 p-4 flex justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}>
            <div className="flex items-center gap-3">
              {leftIcons.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black/25 backdrop-blur-sm border text-white p-3 border-black/30 rounded-full hover:bg-primary transition-colors"
                  initial={{ opacity: 0, x: -150 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -150 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}>
                  {social.isLucidIcon
                    ? social.icon
                    : typeof social.icon === "function"
                    ? React.createElement(social.icon, { className: "size-6" })
                    : social.icon}
                  {/* <social.icon className="size-6" /> */}
                </motion.a>
              ))}
              {rightIcons.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black/25 backdrop-blur-sm border text-white p-3 border-black/30 rounded-full hover:bg-primary transition-colors"
                  initial={{ opacity: 0, x: 150 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 150 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}>
                  {social.isLucidIcon
                    ? social.icon
                    : typeof social.icon === "function"
                    ? React.createElement(social.icon, { className: "size-6" })
                    : social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
