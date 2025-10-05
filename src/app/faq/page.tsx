import FaqAccordionItem from "@/components/faq-accordion-item";
import SectionShow from "@/components/section-show";
import { Accordion } from "@/components/ui/accordion";
import { faqContent } from "@/data/faq";
import React from "react";

const FAQPage = () => {
  return (
    <section className=" px-4 py-28 md:py-32 lg:py-40 bg-gradient-to-b from-background3 to-white min-h-dvh overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="mx-auto  max-w-3xl text-center">
          <SectionShow title="FAQs" />
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
    </section>
  );
};

export default FAQPage;
