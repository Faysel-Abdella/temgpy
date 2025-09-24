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
      className="w-full border rounded-4xl overflow-hidden  transition-all group"
    >
      <div
        className={cn(
          "mx-auto h-full w-full rounded-4xl p-0 duration-300 ease-in-out group-data-[state=open]:from-primary/40 group-data-[state=open]:via-primary/5 group-data-[state=open]:to-background group-data-[state=open]:bg-gradient-to-r group-data-[state=open]:p-2"
        )}
      >
        <div
          className={cn(
            "bg-background border-background flex h-full flex-col rounded-3xl border p-4 group-data-[state=open]:border-border group-data-[state=open]:p-2"
          )}
        >
          <AccordionTrigger className="flex w-full items-center justify-between p-0 px-3 hover:no-underline cursor-pointer">
            <div className="font-outfit flex items-start gap-4">
              <p
                className={cn(
                  "mt-1 text-xl hover:underline group-data-[state=open]:font-medium"
                )}
              >
                {faqItem.question}
              </p>
            </div>
            <div className="relative flex-shrink-0">
              <Plus className="h-5 w-5 text-blue-600 transition-all duration-200 group-data-[state=open]:rotate-45 group-data-[state=open]:opacity-0" />
              <Minus className="absolute inset-0 h-5 w-5 text-blue-600 transition-all duration-200 opacity-0 -rotate-45 group-data-[state=open]:opacity-100 group-data-[state=open]:rotate-0" />
            </div>
          </AccordionTrigger>

          <AccordionContent className="flex flex-col  px-3 pt-4 text-start">
            {faqItem.answer}
          </AccordionContent>
        </div>
      </div>
    </AccordionItem>
  );
};

export default FaqAccordionItem;
