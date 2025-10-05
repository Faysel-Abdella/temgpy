import FaqAccordionItem from "@/components/faq-accordion-item";
import SectionShow from "@/components/section-show";
import { Accordion } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { faqContent } from "@/data/faq";
import React from "react";

const FAQPage = () => {
  return (
    <section className="  pt-28 md:pt-32 lg:pt-40 bg-gradient-to-b from-background3 to-white min-h-dvh overflow-hidden">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mx-auto  max-w-3xl text-center">
          <SectionShow title="FAQs" className="bg-white" />
          <h2
            data-aos="fade-up"
            data-aos-duration="600"
            className="mt-6 text-3xl font-extrabold font-gilroy text-foreground md:text-4xl lg:text-5xl"
          >
            Frequently Asked Questions
          </h2>
          <p
            data-aos="fade-up"
            data-aos-duration="700"
            className="mt-4 text-base text-description md:text-lg"
          >
            Find answers to the most common questions about our services.
          </p>
        </div>
        <div className="max-w-4xl mt-16 mx-auto">
          <Accordion
            type="single"
            collapsible
            defaultValue="01"
            className="w-full flex flex-col gap-6"
          >
            {faqContent.map((faq, index) => {
              return (
                <div
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay={`${index * 100}`}
                  key={faq.value}
                >
                  <FaqAccordionItem faqItem={faq} variant="secondary" />
                </div>
              );
            })}
          </Accordion>
        </div>
      </div>
      <div className="bg-muted mt-24 flex items-center flex-col justify-center w-full py-24 px-4">
        <h2
          data-aos="fade-up"
          data-aos-duration="600"
          className="mt-6  text-2xl  font-extrabold text-center font-gilroy text-foreground md:text-4xl lg:text-5xl"
        >
          Have any Other Questions?
        </h2>
        <p
          data-aos="fade-up"
          data-aos-duration="700"
          className="mt-4 text-base text-description md:text-lg max-w-md text-center "
        >
          Don&apos;t Hesitate to contact us with your enquiry or statement.
        </p>
        <Button className="rounded-full mt-8 text-base py-6 px-8" size={"lg"}>
          Book A Free Call
        </Button>
      </div>
    </section>
  );
};

export default FAQPage;
