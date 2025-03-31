import Image from "next/image";
import React from "react";

export default function WhyUiUxSection() {
  return (
    <section
      id="why-ui-ux"
      className="flex flex-col font-inter text-md md:text-lg leading-relaxed font-normal gap-4 md:gap-5">
      <p className="text-2xl md:text-3xl font-gilroy font-extrabold">
        Why UI/UX is Crucial for Digital Success
      </p>
      <p className="text-description">
        A well-crafted UI/UX design isn’t just about making things look good—it
        directly impacts business outcomes. Here’s how:
      </p>
      <div className="flex flex-col gap-2.5 md:gap-3">
        <ul className="flex list-disc pl-8 font-normal text-description flex-col  gap-2.5 md:gap-3">
          <li>
            <span className="text-black font-semibold">
              {" "}
              Increased User Engagement:
            </span>{" "}
            Intuitive design reduces friction and encourages users to interact
            more with your product.
          </li>
          <li>
            <span className="text-black font-semibold">
              {" "}
              Higher Conversion Rates:
            </span>
            A user-friendly interface and clear user journey guide visitors
            toward desired actions—whether it’s making a purchase or filling out
            a form.
          </li>
          <li>
            <span className="text-black font-semibold">
              Brand Loyalty & Trust:
            </span>
            Smooth and reliable digital experiences build user trust and
            encourage long-term relationships with your brand.
          </li>
          <li>
            <span className="text-black font-semibold">
              Reduced Support Costs:
            </span>
            Clear navigation and intuitive design reduce user errors, minimizing
            the need for customer support.
          </li>
        </ul>
      </div>
      <p className="text-description">
        <span className="text-black font-semibold">Example:</span> Think of
        popular platforms like Airbnb or Spotify—their success isn’t just due to
        their services but also their flawless UI/UX, which keeps users coming
        back.
      </p>
      <Image
        className="w-full mt-2"
        src={"/blogs/why-ui-ux.png"}
        width={1000}
        height={1000}
        alt="UI/UX"
      />
    </section>
  );
}
