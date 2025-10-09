import Expertise from "@/components/sections/main/services";
import CoreServices from "@/components/sections/services/core-services";
import SpecializedExpertise from "@/components/sections/services/expertise";
import ServicesHero from "@/components/sections/services/services-hero";
import React from "react";

const ServicesPage = () => {
  return (
    <div>
      <ServicesHero />
      <CoreServices />
      <SpecializedExpertise />
    </div>
  );
};

export default ServicesPage;
