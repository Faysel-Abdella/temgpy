import FaqAccordion from "@/components/faq-accordion";
import SectionShow from "@/components/section-show";

const FAQ = () => {
  return (
    <section className=" px-4 py-16 md:py-28 bg-background2">
      <div className="container mx-auto max-w-7xl">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <SectionShow
            title="FAQ"
            className="bg-[#F4F6FF]/10 text-white outline-[#565656]"
          />
          <h2
            data-aos="fade-up"
            data-aos-duration="600"
            className="mt-4 text-3xl font-extrabold font-gilroy text-background2-foreground md:text-4xl lg:text-5xl"
          >
            Frequently Asked Questions
          </h2>
          <p
            data-aos="fade-up"
            data-aos-duration="700"
            className="mt-4 text-base text-background2-description md:text-lg"
          >
            Find answers to the most common questions about our services.
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-duration="800"
          className="max-w-4xl mx-auto"
        >
          <FaqAccordion />
        </div>
      </div>
    </section>
  );
};

export default FAQ;
