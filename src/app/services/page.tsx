import ContactFooter from "@/components/common/contact-footer";
import AboutUs from "@/components/sections/about/about-us";
import Expertise from "@/components/sections/main/services";
import CoreServices from "@/components/sections/services/core-services";
import EngagementModels from "@/components/sections/services/engagement-models";
import SpecializedExpertise from "@/components/sections/services/expertise";
import HowWeWork from "@/components/sections/services/how-we-work";
import ServicesHero from "@/components/sections/services/services-hero";
import WhyChooseUs from "@/components/sections/services/why-choose-us";
import React from "react";
import Canonical from "@/seo/Canonical";


const ServicesPage = () => {
  return (
    <div>
      <Canonical uid="services" /> {/* dynamic canonical */}
      <ServicesHero />
      <CoreServices />
      <SpecializedExpertise />
      <HowWeWork />
      <WhyChooseUs />
      <EngagementModels />
      <ContactFooter />
    </div>
  );
};

export default ServicesPage;
