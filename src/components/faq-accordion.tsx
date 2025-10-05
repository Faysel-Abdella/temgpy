import { Mail, Phone } from "lucide-react";
import React from "react";
import FaqAccordionItem from "./faq-accordion-item";
import { Accordion } from "./ui/accordion";
import { faqContent } from "@/data/faq";

const FaqAccordion = () => {
  return (
    <Accordion
      type="single"
      collapsible
      defaultValue="01"
      className="w-full space-y-3"
    >
      {faqContent.slice(0, 3).map((faq, index) => {
        return (
          <div
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-delay={`${index * 100}`}
            key={faq.value}
          >
            <FaqAccordionItem faqItem={faq} />
          </div>
        );
      })}
    </Accordion>
  );
};

export default FaqAccordion;
