"use client";
import SectionShow from "@/components/section-show";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";
import { cn } from "@/lib/utils";
import { ArrowUpRight, ChevronsDown, ChevronsUp } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import ServiceCard from "./service-card";

const SpecializedExpertise = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const filteredServices = isExpanded ? services : services.slice(0, 6);
  return (
    <section className=" px-2.5 ">
      <div className=" py-20  bg-muted rounded-4xl">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="mx-auto  max-w-3xl text-center">
            <SectionShow title="Specialized Expertise" className="bg-white" />
            <h2
              data-aos="fade-up"
              data-aos-duration="600"
              className="mt-8 text-3xl font-extrabold font-gilroy text-foreground md:text-4xl lg:text-5xl"
            >
              Specializing in Industry - Proven Digital Solutions
            </h2>
            <p
              data-aos="fade-up"
              data-aos-duration="700"
              className="mt-6 text-base text-center text-description md:text-lg"
            >
              We bring deep experience in building platforms across key
              industries. Our proven track record ensures solutions that are
              scalable, reliable, and designed to accelerate your growth.
            </p>
          </div>

          <div
            className={cn(
              "grid mt-16 md:grid-cols-2 lg:grid-cols-3 w-full gap-8  md:gap-10 lg:gap-12 transition-all "
            )}
          >
            {filteredServices.map((item) => (
              <ServiceCard key={item.id} service={item} />
            ))}
          </div>
          <div className="w-full items-center justify-center  mt-20  flex">
            <Button
              onClick={() => setIsExpanded((prev) => !prev)}
              className="!h-12 !px-8 rounded-full"
            >
              {isExpanded ? (
                <>
                  See Less Services <ChevronsUp />
                </>
              ) : (
                <>
                  See More Services <ChevronsDown />
                </>
              )}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecializedExpertise;
