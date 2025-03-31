import Image from "next/image";
import React from "react";

export default function HowToSection() {
  return (
    <section
      id="how-to-prioritize"
      className="flex flex-col font-inter text-md md:text-lg leading-relaxed font-normal gap-4 md:gap-5">
      <p className="text-2xl md:text-3xl font-gilroy font-extrabold">
        How to Prioritize UI/UX for Your Business
      </p>
      <p className="text-description">
        If you want to leverage UI/UX for digital success, here are practical
        steps to get started:
      </p>
      <div className="flex flex-col gap-2.5 md:gap-3">
        <ul className="flex list-disc pl-8 font-normal text-description flex-col  gap-2.5 md:gap-3">
          <li>
            <span className="text-black font-semibold">
              Invest in User Research:
            </span>{" "}
            Understand your audience’s needs through surveys, interviews, and
            usability testing.
          </li>
          <li>
            <span className="text-black font-semibold">
              Collaborate Across Teams:
            </span>
            Ensure designers, developers, and business stakeholders work
            together for a seamless user journey.
          </li>
          <li>
            <span className="text-black font-semibold">
              Continuously Improve:
            </span>
            Gather user feedback and track metrics (like bounce rates and
            session durations) to identify areas for improvement.
          </li>
          <li>
            <span className="text-black font-semibold">
              Adopt a Design System:
            </span>
            Use a design system to maintain consistency and speed up development
            processes.
          </li>
        </ul>
      </div>
      <p className="text-description">
        UI/UX is more than a design trend—it’s a business necessity. Companies
        that prioritize user experience drive higher engagement, loyalty, and
        revenue. Whether you’re building a new product or improving an existing
        one, focusing on thoughtful, user-centered design is a strategic
        investment in your digital success.
      </p>
      <div className="flex md:-ml-4 mt-4 flex-wrap gap-2">
        {["UIUX Design", "User-Experience", "WebDesign", "User-Interface"].map(
          (item) => (
            <div
              key={item}
              className="px-5 py-2 bg-muted rounded-full inline-flex justify-start items-center gap-2">
              <div className="text-center justify-start  text-base font-medium font-inter capitalize leading-normal">
                {item}
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
}
