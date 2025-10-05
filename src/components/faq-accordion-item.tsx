import React from "react";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Minus, Plus } from "lucide-react";
import { cn } from "@/lib/utils";
import { FaqItem } from "@/types/shared.types";

interface FaqAccordionItemProps {
  faqItem: FaqItem;
  variant?: "primary" | "secondary";
}
const FaqAccordionItem = ({
  faqItem,
  variant = "primary",
}: FaqAccordionItemProps) => {
  const isSecondary = variant == "secondary";
  return (
    <AccordionItem
      value={faqItem.value}
      key={faqItem.value}
      className={cn(
        "w-full border rounded-3xl overflow-hidden  transition-all group data-[state=open]:bg-primary data-[state=open]:border-primary  border-border-secondary bg-[#29314D] group-data-[state=open]:text-white",
        isSecondary && "bg-white border-border"
      )}
    >
      <AccordionTrigger className="flex text-white w-full font-gilroy items-center justify-between p-4 hover:no-underline cursor-pointer group-data-[state=open]:text-white">
        <div className="flex  gap-4 ">
          <div
            className={cn(
              "relative flex-shrink-0 aspect-square size-8 flex items-center justify-center  outline outline-border-secondary rounded-full group-data-[state=open]:outline-white",

              isSecondary && "outline-border"
            )}
          >
            <Plus
              className={cn(
                "h-5 w-5  transition-all duration-200 group-data-[state=open]:rotate-45 group-data-[state=open]:opacity-0",
                isSecondary && "text-foreground"
              )}
            />
            <Minus className="absolute inset-1.5 h-5 w-5 text-white transition-all duration-200 opacity-0 -rotate-45 group-data-[state=open]:opacity-100 group-data-[state=open]:rotate-0" />
          </div>
          <p
            className={cn(
              "mt-1 text-xl hover:underline font-outfit group-data-[state=open]:font-medium  ",
              isSecondary &&
                "text-foreground group-data-[state=open]:text-white"
            )}
          >
            {faqItem.question}
          </p>
        </div>
        <p
          className={cn(
            "font-semibold  text-white   text-lg  tracking-wider",
            isSecondary && "text-foreground group-data-[state=open]:text-white"
          )}
        >
          {faqItem.value}
        </p>
      </AccordionTrigger>

      <AccordionContent className="flex flex-col  pl-16  pr-8 text-start text-white text-base font-light">
        {faqItem.answer}
      </AccordionContent>
    </AccordionItem>
  );
};

export default FaqAccordionItem;
