import SectionShow from "@/components/section-show";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  CircleMinus,
  CirclePlus,
  Mail,
  Minus,
  Phone,
  Plus,
} from "lucide-react";
import React from "react";

type FaqItem = {
  value: string;
  question: string;
  answer: React.ReactNode;
};

export const faqContent: FaqItem[] = [
  {
    value: "item-1",
    question: "Who is Growztech?",
    answer: (
      <p className="leading-relaxed">
        Growztech is a trusted software company in Ethiopia specializing in
        custom software development, AI solutions, and cloud services. We
        partner with businesses worldwide to design and implement digital
        solutions that drive growth, efficiency, and innovation.
      </p>
    ),
  },
  {
    value: "item-2",
    question: "What services does Growztech offer?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        <p>We provide a full range of IT and software services, including:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="font-semibold text-foreground">
              Custom Software Development
            </strong>{" "}
            - tailored applications that solve unique business needs.
          </li>
          <li>
            <strong className="font-semibold text-foreground">
              AI Solutions
            </strong>{" "}
            - intelligent systems that improve automation, decision-making, and
            customer experience.
          </li>
          <li>
            <strong className="font-semibold text-foreground">
              Cloud Solutions
            </strong>{" "}
            - secure, scalable cloud computing services for businesses of all
            sizes.
          </li>
          <li>
            <strong className="font-semibold text-foreground">
              Mobile & Web App Development
            </strong>{" "}
            - user-friendly applications that enhance engagement.
          </li>
          <li>
            <strong className="font-semibold text-foreground">
              IT Consulting
            </strong>{" "}
            - expert guidance to align technology with business goals.
          </li>
        </ul>
      </div>
    ),
  },
  {
    value: "item-3",
    question: "Where does Growztech provide services?",
    answer: (
      <p className="leading-relaxed">
        While we are proudly based in Ethiopia, Growztech offers software and IT
        solutions worldwide. We collaborate with startups, enterprises, and
        global organizations to deliver scalable digital transformation
        solutions.
      </p>
    ),
  },
  {
    value: "item-4",
    question: "Why choose Growztech for custom software development?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        <p>Businesses choose Growztech because we:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Build custom software tailored to your industry needs.</li>
          <li>Use the latest technologies in AI, cloud, and automation.</li>
          <li>Deliver solutions that scale with your business growth.</li>
          <li>Provide ongoing support and innovation for long-term success.</li>
        </ul>
      </div>
    ),
  },
  {
    value: "item-5",
    question: "What industries does Growztech serve?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        <p>We design solutions for a wide range of industries, including:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Financial Services & Fintech</li>
          <li>Healthcare & Medical Technology</li>
          <li>Transportation & Logistics</li>
          <li>Media & Entertainment</li>
          <li>E-commerce & Retail</li>
          <li>Education & Training</li>
          <li>And many more...</li>
        </ul>
      </div>
    ),
  },
  {
    value: "item-6",
    question: "Does Growztech provide AI solutions?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        <p>Yes. We specialize in AI solutions such as:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Predictive analytics for smarter decision-making.</li>
          <li>Chatbots and virtual assistants for customer support.</li>
          <li>Automation tools that reduce operational costs.</li>
        </ul>
      </div>
    ),
  },
  {
    value: "item-7",
    question: "Is Growztech only serving clients in Ethiopia?",
    answer: (
      <p className="leading-relaxed">
        No. While we are a leading software company in Ethiopia, our expertise
        and services extend to clients across Africa, the Middle East, Europe,
        and North America. We proudly support global businesses with
        high-quality digital transformation solutions.
      </p>
    ),
  },
  {
    value: "item-8",
    question: "How can I contact Growztech?",
    answer: (
      <div className="space-y-3 leading-relaxed">
        <p>You can reach us via:</p>
        <a
          href="mailto:info@growztech.com"
          className="flex items-center gap-3 transition-colors hover:text-blue-500"
        >
          <Mail className="h-5 w-5 flex-shrink-0" />
          <div className="flex flex-col">
            <span className="font-semibold text-foreground">Email:</span>
            <span>info@growztech.com</span>
          </div>
        </a>
        <a
          href="tel:+251947344248"
          className="flex items-center gap-3 transition-colors hover:text-blue-500"
        >
          <Phone className="h-5 w-5 flex-shrink-0" />
          <div className="flex flex-col">
            <span className="font-semibold text-foreground">Phone:</span>
            <span>+251 947 344 248 | +251 954 624 638</span>
          </div>
        </a>
      </div>
    ),
  },
  {
    value: "item-9",
    question:
      "How long does it take to develop custom software with Growztech?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        <p>Project timelines vary depending on complexity. Generally:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="font-semibold text-foreground">
              Small projects:
            </strong>{" "}
            a few weeks.
          </li>
          <li>
            <strong className="font-semibold text-foreground">
              Large enterprise solutions:
            </strong>{" "}
            several months.
          </li>
        </ul>
        <p>
          We follow agile development methods to ensure fast delivery, clear
          timelines, and regular updates throughout the process.
        </p>
      </div>
    ),
  },
  {
    value: "item-10",
    question: "What custom software development services does Growztech offer?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        <p>
          Growztech provides end-to-end custom software development services
          including:
        </p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Web and mobile app development</li>
          <li>AI automation solutions</li>
          <li>Cloud solutions and cloud migration</li>
          <li>Enterprise software development</li>
        </ul>
        <p>
          We build scalable, secure, and innovative software tailored to your
          business needs.
        </p>
      </div>
    ),
  },
];

const FAQ = () => {
  const midIndex = Math.ceil(faqContent.length / 2);
  const firstHalf = faqContent.slice(0, midIndex);
  const secondHalf = faqContent.slice(midIndex);
  return (
    <section className="bg-muted px-4 py-16 md:py-28">
      <div className="container mx-auto max-w-7xl">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <SectionShow title="FAQ" className="bg-background" />
          <h2
            data-aos="fade-up"
            data-aos-duration="600"
            className="mt-4 text-3xl font-extrabold font-gilroy text-foreground md:text-4xl lg:text-5xl"
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

        <div className="grid grid-cols-1 gap-x-16 lg:grid-cols-2 gap-3">
          <Accordion type="single" collapsible className="w-full space-y-3">
            {firstHalf.map((faq) => (
              <AccordionItem
                key={faq.value}
                value={faq.value}
                className="group border bg-background/60 backdrop-blur-sm rounded-xl  hover:shadow-sm transition-all duration-200 overflow-hidden"
              >
                <AccordionTrigger className="flex w-full items-center justify-between px-6 py-6 text-left font-semibold text-foreground transition-all duration-200 hover:no-underline hover:bg-background/80 [&[data-state=open]]:bg-blue-50/50 [&[data-state=open]]:text-blue-600 [&[data-state=open]]:border-b ">
                  <span className="text-base leading-relaxed pr-4">
                    {faq.question}
                  </span>
                  <div className="relative flex-shrink-0">
                    <Plus className="h-5 w-5 text-blue-600 transition-all duration-200 group-data-[state=open]:rotate-45 group-data-[state=open]:opacity-0" />
                    <Minus className="absolute inset-0 h-5 w-5 text-blue-600 transition-all duration-200 opacity-0 -rotate-45 group-data-[state=open]:opacity-100 group-data-[state=open]:rotate-0" />
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 text-muted-foreground leading-relaxed text-base">
                  <div className="pt-2 border-t border-border/30">
                    {faq.answer}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <Accordion type="single" collapsible className="w-full space-y-3">
            {secondHalf.map((faq) => (
              <AccordionItem
                key={faq.value}
                value={faq.value}
                className="group border bg-background/60 backdrop-blur-sm rounded-xl  hover:shadow-sm transition-all duration-200 overflow-hidden"
              >
                <AccordionTrigger className="flex w-full items-center justify-between px-6 py-6 text-left font-semibold text-foreground transition-all duration-200 hover:no-underline hover:bg-background/80 [&[data-state=open]]:bg-blue-50/50 [&[data-state=open]]:text-blue-600 [&[data-state=open]]:border-b">
                  <span className="text-base leading-relaxed pr-4">
                    {faq.question}
                  </span>
                  <div className="relative flex-shrink-0">
                    <Plus className="h-5 w-5 text-blue-600 transition-all duration-200 group-data-[state=open]:rotate-45 group-data-[state=open]:opacity-0" />
                    <Minus className="absolute inset-0 h-5 w-5 text-blue-600 transition-all duration-200 opacity-0 -rotate-45 group-data-[state=open]:opacity-100 group-data-[state=open]:rotate-0" />
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6 text-muted-foreground leading-relaxed text-base">
                  <div className="pt-2 border-t border-border/30">
                    {faq.answer}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
