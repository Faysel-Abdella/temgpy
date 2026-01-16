import FaqAccordion from "@/components/faq-accordion";
import SectionShow from "@/components/section-show";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const FAQ = () => {
  return (
    <section className=" px-4 py-16 md:py-28 bg-background2 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <SectionShow
            title="FAQ"
            className="bg-[#F4F6FF]/10 text-white outline-[#565656]"
          />
          <h1
            data-aos="fade-up"
            data-aos-duration="600"
            className="mt-4 text-3xl font-extrabold font-gilroy text-background2-foreground md:text-4xl lg:text-5xl"
          >
            Frequently Asked Questions
          </h1>
          <p
            data-aos="fade-up"
            data-aos-duration="700"
            className="mt-4 text-base text-background2-description md:text-lg"
          >
            Find answers to the most common questions about our services.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <FaqAccordion />
        </div>
        <div className="flex justify-center items-center flex-col">
          <Button
            data-aos="fade-up"
            data-aos-duration="500"
            data-aos-delay="700"
            className=" rounded-full mt-6  md:mt-8 lg:mt-12 py-4 px-7"
            size={"lg"}
          >
            <Link href={"/faq"}>Read More Questions</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
