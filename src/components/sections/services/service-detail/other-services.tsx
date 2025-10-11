import React from "react";
import ServicesCarousel from "./services-carousel";
import { services } from "@/data/services";

const OtherServices = () => {
  return (
    <div className="py-16 flex flex-col gap-10 ">
      <p className="font-gilroy text-3xl font-semibold">
        Other Areas Expertise
      </p>
      <ServicesCarousel services={services} />
    </div>
  );
};

export default OtherServices;
