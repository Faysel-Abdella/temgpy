import Expertise from "@/components/sections/main/services";
import CoreServices from "@/components/sections/services/core-services";
import SpecializedExpertise from "@/components/sections/services/expertise";
import HowWeWork from "@/components/sections/services/how-we-work";
import ServicesHero from "@/components/sections/services/services-hero";
import React from "react";

const ServicesPage = () => {
  return (
    <div>
      <ServicesHero />
      <CoreServices />
      <SpecializedExpertise />
      <HowWeWork />
    </div>
  );
};

export default ServicesPage;
