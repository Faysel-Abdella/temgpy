import SectionShow from "@/components/section-show";
import BlogSocials from "@/components/sections/blogs/blogs-socials";
import ContactUsForm from "@/components/sections/contact-us/ContactUsForm";
import { Button } from "@/components/ui/button";
import { Phone, Send } from "lucide-react";
import React from "react";

const ContactUsPage = () => {
  return (
    <section className=" pt-28 md:pt-32 lg:pt-40   min-h-dvh bg-gradient-to-b from-background3 via-white to-white">
      <div className="max-w-7xl container  mx-auto gap-16 lg:flex-row  flex flex-col ">
        <div className="lg:w-1/2 h-full px-4">
          <div className="flex flex-col max-lg:items-center">
            <SectionShow title="Contact us" className="bg-white" />
            <p className="font-outfit xl:6xl mt-5 text-4xl font-medium lg:text-5xl max-lg:text-center">
              Let&apos;s Transform Your Vision into Reality
            </p>
            <p className="mt-6 lg:mt-8 text-description text-center lg:text-justify max-lg:max-w-xl">
              The right team changes everything. We believe technology moves us,
              processes guide us, but people define us. Contact us to explore
              solutions designed to deliver great service and turn big goals
              into tangible outcomes
            </p>
          </div>

          <div className="flex flex-col gap-6 mt-15 max-lg:items-center">
            <div className="flex flex-col gap-2 max-lg:items-center">
              <p className="font-gilroy text-lg font-medium">Email Support</p>
              <div className="flex items-center gap-1">
                <Send size={16} />
                <p className="underline ">info@venas.tech</p>
              </div>
            </div>
            <div className="flex flex-col gap-4 sm:gap-2 max-lg:items-center">
              <p className="font-gilroy text-lg font-medium">Phone Address</p>
              <div className="flex max-sm:flex-col items-center gap-2 sm:gap-12">
                <div className="flex items-center gap-1">
                  <Phone size={16} />
                  <p className=" ">+251947344248</p>
                </div>
                <div className="flex items-center gap-1">
                  <Phone size={16} />
                  <p className=" ">+251954624638</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center lg:justify-start  mt-15">
            <BlogSocials />
          </div>
        </div>
        <div className="lg:w-1/2 lg:px-4">
          <ContactUsForm />
        </div>
      </div>
      <div className="w-full px-2.5">
        <div className="bg-muted mt-24 flex items-center flex-col justify-center w-full py-24 px-4 rounded-t-4xl">
          <h2
            data-aos="fade-up"
            data-aos-duration="600"
            className="mt-6  text-2xl  font-extrabold text-center font-gilroy text-foreground md:text-4xl lg:text-5xl"
          >
            Need Expert Advice?
          </h2>
          <p
            data-aos="fade-up"
            data-aos-duration="700"
            className="mt-4 text-base text-description md:text-lg max-w-md text-center "
          >
            From custom software development to IT consultation, we provide
            solutions that drive real business results.
          </p>
          <Button className="rounded-full mt-8 text-base py-6 px-8" size={"lg"}>
            Book A Free Call
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactUsPage;
