import AboutUs from "@/components/sections/main/about-us";
import FAQ from "@/components/sections/main/faq";
import Hero from "@/components/sections/main/hero";
import Expertise from "@/components/sections/main/services";
import WhyUsCarousel from "@/components/sections/main/why-us-carousel";

export default function page() {
  return (
    <main>
      <Hero />
      {/* <FeaturesCarousel
        RightEdgeColor="from-white"
        LeftEdgeColor="from-white"
        className=""
      /> */}
      <Expertise />
      <WhyUsCarousel />

      {/* <WhyChooseUs /> */}
      {/* Temporary hide the projects (portfolio) page */}
      {/* <SelectedWorks /> */}
      {/* <Testimonials /> */}
      {/* Hide partners section since it's already mentioned in the above the fold section */}
      {/* <Partners /> */}
      <AboutUs />
      <FAQ />
    </main>
  );
}
