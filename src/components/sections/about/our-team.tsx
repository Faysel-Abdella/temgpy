import React from "react";
import { TeamMemberCard } from "./our-team-cards";
import SectionShow from "@/components/section-show";

export type TeamMember = {
  id: number;
  name: string;
  title: string;
  image: string;
  socials: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
    twitter?: string;
  };
};

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Faysel Abdellah",
    title: "COO",
    image: "/partners/team1.png",
    socials: {
      facebook: "https://facebook.com",
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
  },
  {
    id: 2,
    name: "Sarah Johnson",
    title: "CTO",
    image: "/partners/team1.png",
    socials: {
      facebook: "https://facebook.com",
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
  },
  {
    id: 3,
    name: "Michael Chen",
    title: "CEO",
    image: "/partners/team1.png",
    socials: {
      facebook: "https://facebook.com",
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    },
  },
];

export default function TeamSection() {
  return (
    <section className="w-screen h-fit flex items-center justify-center py-14 pb-24 ">
      <div className="w-full  lg:max-w-[1232px] h-fit flex items-center justify-center px-4 lg:px-0 flex-col gap-14 md:gap-16">
        <div className="md:w-[591px] flex-col justify-start z-30 items-center gap-8 inline-flex relative">
          <SectionShow title="Our Team" />
          <div className="lg:w-[810px] text-center justify-start px-2 md:px-0 text-3xl md:text-4xl lg:text-5xl font-extrabold font-gilroy leading-10 md:leading-[57.60px]">
            Meet the Experts Behind Our Success stories
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-5 md:gap-10">
          {teamMembers.map((member) => (
            <TeamMemberCard
              key={member.id}
              member={member}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
