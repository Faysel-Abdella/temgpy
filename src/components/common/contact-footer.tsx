import React from "react";
import SectionShow from "../section-show";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";

const ContactFooter = () => {
  return (
    <section className="w-screen flex items-center justify-center mx-auto bg-background2 py-24">
      <div className="flex flex-col md:flex-row px-4 justify-center mx-auto lg:w-[1212px] gap-16">
        <div className="flex flex-col w-full lg:w-1/2 gap-5 md:gap-8">
          <SectionShow
            title="Contact US"
            className="bg-[#F4F6FF]/10 text-white outline-[#565656]"
          />
          <div className="max-w-[613px] justify-start text-white text-3xl md:text-4xl lg:text-5xl font-extrabold font-gilroy leading-12 md:leading-[57.60px]">
            Partner with tech catalysts who transform ideas into impact
          </div>

          <Button
            data-aos="flip-up"
            data-aos-duration="400"
            className="!h-12 !px-8 rounded-full w-fit"
            asChild
          >
            <Link href="/contact-us">
              Let&apos;s Talk
              <ArrowUpRight className="size-4 " />
            </Link>
          </Button>
        </div>
        <div className="flex flex-col w-full h-full relative lg:w-1/2 gap-5">
          <Image
            src={"/images/3dCard.svg"}
            width={531}
            data-aos="fade-down"
            data-aos-duration="700"
            data-aos-offset="250"
            height={282}
            alt="about us image"
            className="z-10"
          />
          <Image
            src={"/images/3dCard.png"}
            width={531}
            height={282}
            data-aos="fade-down"
            data-aos-duration="300"
            alt="about us image"
            className="absolute mt-14 z-0"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactFooter;
