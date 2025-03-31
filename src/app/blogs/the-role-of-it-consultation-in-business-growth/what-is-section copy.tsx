import Image from "next/image";
import React from "react";

export default function WhatIsItSection() {
  return (
    <section
      id="what-is-it"
      className="flex flex-col font-inter text-md md:text-lg leading-relaxed font-normal gap-4 md:gap-5">
      <p className="text-2xl md:text-3xl font-gilroy font-extrabold">
        What is IT Consultation?
      </p>
      <p className="text-description">
        IT consultation is the process by which businesses seek expert advice
        and guidance on how to leverage technology for optimal performance.
        Consultants analyze a company’s current technological landscape, assess
        business needs, and propose tailored strategies or solutions to improve
        efficiency, security, and scalability.
      </p>
      <p className="text-description">
        IT consultants often specialize in a variety of areas, including:
      </p>
      <div className="flex flex-col gap-2.5 md:gap-3">
        <ul className="flex list-disc pl-8 font-normal text-description flex-col  gap-2.5 md:gap-3">
          <li>
            <span className="text-black font-semibold">Infrastructure:</span>{" "}
            Optimizing networks, servers, and hardware setups.
          </li>
          <li>
            <span className="text-black font-semibold">
              Software Solutions:
            </span>{" "}
            Implementing or recommending software tools that improve operations.
          </li>
          <li>
            <span className="text-black font-semibold">Cloud Computing:</span>{" "}
            Advising on cloud migration and management.
          </li>
          <li>
            <span className="text-black font-semibold">Cybersecurity:</span>{" "}
            Enhancing data security and mitigating potential risks.
          </li>
          <li>
            <span className="text-black font-semibold">
              Digital Transformation:
            </span>{" "}
            Helping businesses transition to modern, tech-driven business
            models.
          </li>
        </ul>
        <p className="text-description">
          Through their expertise, IT consultants help organizations make
          informed decisions about their technology investments, improving
          overall performance.
        </p>
      </div>
    </section>
  );
}
