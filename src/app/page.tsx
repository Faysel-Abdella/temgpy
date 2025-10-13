import AboutUs from "@/components/sections/main/about-us";
import ExpertiseServices from "@/components/sections/main/expertise-services";
import FAQ from "@/components/sections/main/faq";
import Hero from "@/components/sections/main/hero";
import Services from "@/components/sections/main/services";
import Testimonials from "@/components/sections/main/testimonials";
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
      <Services />
      <WhyUsCarousel />
      <ExpertiseServices />
      {/* <WhyChooseUs /> */}
      {/* Temporary hide the projects (portfolio) page */}
      {/* <SelectedWorks /> */}
      <Testimonials />
      {/* <Partners /> */}
      <AboutUs />
      <FAQ />
    </main>
  );
}
