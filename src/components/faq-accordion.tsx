import { Mail, Phone } from "lucide-react";
import React from "react";
import FaqAccordionItem from "./faq-accordion-item";
import { Accordion } from "./ui/accordion";

export type FaqItem = {
  value: string;
  question: string;
  answer: React.ReactNode;
};

export const faqContent: FaqItem[] = [
  {
    value: "01",
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
    value: "02",
    question: "What services does Growztech offer?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        <p>We provide a full range of IT and software services, including:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="font-semibold ">
              Custom Software Development
            </strong>{" "}
            - tailored applications that solve unique business needs.
          </li>
          <li>
            <strong className="font-semibold ">AI Solutions</strong> -
            intelligent systems that improve automation, decision-making, and
            customer experience.
          </li>
          <li>
            <strong className="font-semibold ">Cloud Solutions</strong> -
            secure, scalable cloud computing services for businesses of all
            sizes.
          </li>
          <li>
            <strong className="font-semibold ">
              Mobile & Web App Development
            </strong>{" "}
            - user-friendly applications that enhance engagement.
          </li>
          <li>
            <strong className="font-semibold ">IT Consulting</strong> - expert
            guidance to align technology with business goals.
          </li>
        </ul>
      </div>
    ),
  },
  {
    value: "03",
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
    value: "04",
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
    value: "05",
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
    value: "06",
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
    value: "07",
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
    value: "08",
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
            <span className="font-semibold ">Email:</span>
            <span>info@growztech.com</span>
          </div>
        </a>
        <a
          href="tel:+251947344248"
          className="flex items-center gap-3 transition-colors hover:text-blue-500"
        >
          <Phone className="h-5 w-5 flex-shrink-0" />
          <div className="flex flex-col">
            <span className="font-semibold ">Phone:</span>
            <span>+251 947 344 248 | +251 954 624 638</span>
          </div>
        </a>
      </div>
    ),
  },
  {
    value: "09",
    question:
      "How long does it take to develop custom software with Growztech?",
    answer: (
      <div className="space-y-2 leading-relaxed">
        <p>Project timelines vary depending on complexity. Generally:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>
            <strong className="font-semibold ">Small projects:</strong> a few
            weeks.
          </li>
          <li>
            <strong className="font-semibold ">
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
    value: "10",
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
const FaqAccordion = () => {
  return (
    <Accordion type="single" collapsible className="w-full space-y-3">
      {faqContent.slice(0, 3).map((faq) => {
        return <FaqAccordionItem key={faq.value} faqItem={faq} />;
      })}
    </Accordion>
  );
};

export default FaqAccordion;
