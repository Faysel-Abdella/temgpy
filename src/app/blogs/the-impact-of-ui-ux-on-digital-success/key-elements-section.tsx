import Image from "next/image";
import React from "react";

export default function KeyElementsSection() {
  return (
    <section
      id="key-elements"
      className="flex flex-col font-inter text-md md:text-lg leading-relaxed font-normal gap-4 md:gap-5">
      <p className="text-2xl md:text-3xl font-gilroy font-extrabold">
        Key Elements of Effective UI/UX Design
      </p>
      <p className="text-description">
        To deliver exceptional digital experiences, prioritize these core UI/UX
        elements:
      </p>
      <div className="flex flex-col gap-2.5 md:gap-3">
        <ol className="flex ml-2 font-normal text-description flex-col  gap-2.5 md:gap-3">
          <li>
            <span className="text-black font-semibold">
              1, User-Centered Design:
            </span>{" "}
            Focus on user needs and behaviors by conducting user research and
            usability testing.
          </li>
          <li>
            <span className="text-black font-semibold">2, Consistency:</span>
            Ensure a cohesive design across all touchpoints—consistent fonts,
            colors, and interactions make navigation intuitive.
          </li>
          <li>
            <span className="text-black font-semibold">3, Accessibility:</span>
            Design for all users, including those with disabilities, by
            following WCAG (Web Content Accessibility Guidelines).
          </li>
          <li>
            <span className="text-black font-semibold">4, Performance:</span>
            Optimize loading speeds and responsiveness to ensure smooth
            interactions on all devices.
          </li>
          <li>
            <span className="text-black font-semibold">
              5, Feedback & Interaction:
            </span>{" "}
            Provide users with feedback (e.g., loading animations or error
            messages) to guide their experience and reduce confusion.
          </li>
        </ol>
      </div>
    </section>
  );
}
