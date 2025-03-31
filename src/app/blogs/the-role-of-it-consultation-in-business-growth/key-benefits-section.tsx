import Image from "next/image";
import React from "react";

export default function KeyBenefitsSection() {
  return (
    <section
      id="key-benefits"
      className="flex flex-col font-inter text-md md:text-lg leading-relaxed font-normal gap-4 md:gap-5">
      <p className="text-2xl md:text-3xl font-gilroy font-extrabold">
        Key Benefits of IT Consultation for Businesses
      </p>
      <p className="text-description">
        IT consultation brings several advantages that can significantly impact
        a business’s growth trajectory:
      </p>
      <div className="flex flex-col gap-2.5 md:gap-3">
        <ol className="flex ml-2 font-normal text-description flex-col  gap-2.5 md:gap-3">
          <li>
            <span className="text-black font-semibold">
              1, Expertise and Knowledge:
            </span>{" "}
            IT consultants bring specialized skills and a wealth of experience
            that may not be available in-house, providing businesses with
            high-level technical guidance.
          </li>
          <li>
            <span className="text-black font-semibold">
              2, Improved Efficiency:
            </span>{" "}
            By analyzing business processes and recommending optimized
            solutions, IT consultants enhance workflow efficiency and overall
            productivity.
          </li>
          <li>
            <span className="text-black font-semibold">3, Cost Savings:</span>{" "}
            By selecting the right tools and technologies, IT consultants help
            businesses avoid costly mistakes and improve their ROI.
          </li>
          <li>
            <span className="text-black font-semibold">
              4, Risk Mitigation:
            </span>{" "}
            IT consultants assess potential security risks and implement
            solutions to protect business data and ensure regulatory compliance.
          </li>
          <li>
            <span className="text-black font-semibold">5, Innovation:</span> IT
            consultants bring fresh perspectives and innovative ideas,
            encouraging businesses to adopt emerging technologies that drive
            growth and competitiveness.
          </li>
        </ol>
      </div>
    </section>
  );
}
