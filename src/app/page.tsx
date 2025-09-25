import Expertise from "@/components/sections/main/services";
import FeaturesCarousel from "@/components/sections/main/features";
import Hero from "@/components/sections/main/hero";
import React from "react";
import SelectedWorks from "@/components/sections/main/selected-works";
import Testimonials from "@/components/sections/main/testimonials";
import Partners from "@/components/sections/main/partners";
import AboutUs from "@/components/sections/main/about-us";
import ContactUs from "@/components/sections/main/contact-us";
import WhyChooseUs from "@/components/sections/main/why-choose-us";
import FAQ from "@/components/sections/main/faq";

export default function page() {
  return (
    <main className="max-w-screen overflow-x-hidden">
      <Hero />
      <FeaturesCarousel
        RightEdgeColor="from-white"
        LeftEdgeColor="from-white"
        className=""
      />
      <Expertise />
      <WhyChooseUs />
      <SelectedWorks />
      {/*       <Testimonials /> */}
      <Partners />
      <FAQ />
      <AboutUs />
      <ContactUs />
    </main>
  );
}
