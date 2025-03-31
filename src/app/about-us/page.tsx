import AboutUs from "@/components/sections/about/about-us";
import CoreValues from "@/components/sections/about/core-values";
import Home from "@/components/sections/about/home";
import Mission from "@/components/sections/about/mission";
import OurStory from "@/components/sections/about/our-story";
import TeamSection from "@/components/sections/about/our-team";
import OurTeam from "@/components/sections/about/our-team";
import Vision from "@/components/sections/about/vision";
import FeaturesCarousel from "@/components/sections/main/features";
import Partners from "@/components/sections/main/partners";

import React from "react";

export default function page() {
  return (
    <main className="relative">
      <Home />
      <FeaturesCarousel
        LeftEdgeColor="from-white"
        RightEdgeColor="from-white"
        className="py-20"
      />
      <OurStory />
      <Mission />
      <Vision />
      <TeamSection />
      <CoreValues />
      <div className=" hidden lg:flex">
        <Partners />
      </div>
      <AboutUs />
    </main>
  );
}
