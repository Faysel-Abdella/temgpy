import React from "react";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Minus, Plus } from "lucide-react";
import { FaqItem } from "./faq-accordion";
import { cn } from "@/lib/utils";

interface FaqAccordionItemProps {
  faqItem: FaqItem;
}
const FaqAccordionItem = ({ faqItem }: FaqAccordionItemProps) => {
  return (
    <AccordionItem
      value={faqItem.value}
      key={faqItem.value}
      className="w-full border rounded-3xl overflow-hidden  transition-all group data-[state=open]:bg-primary data-[state=open]:border-primary  border-border-secondary bg-[#29314D] group-data-[state=open]:text-white"
    >
      <AccordionTrigger className="flex text-white w-full items-center justify-between p-4 hover:no-underline cursor-pointer group-data-[state=open]:text-white">
        <div className="flex  gap-4 ">
          <div className="relative flex-shrink-0 aspect-square size-8 flex items-center justify-center  outline outline-border-secondary rounded-full group-data-[state=open]:outline-white">
            <Plus className="h-5 w-5  transition-all duration-200 group-data-[state=open]:rotate-45 group-data-[state=open]:opacity-0" />
            <Minus className="absolute inset-1.5 h-5 w-5 text-white transition-all duration-200 opacity-0 -rotate-45 group-data-[state=open]:opacity-100 group-data-[state=open]:rotate-0" />
          </div>
          <div className="font-outfit flex items-start gap-4 ">
            <p
              className={cn(
                "mt-1 text-xl hover:underline group-data-[state=open]:font-medium"
              )}
            >
              {faqItem.question}
            </p>
          </div>
        </div>
        <p>01</p>
      </AccordionTrigger>

      <AccordionContent className="flex flex-col  px-16  text-start text-white">
        {faqItem.answer}
      </AccordionContent>
    </AccordionItem>
  );
};

export default FaqAccordionItem;
