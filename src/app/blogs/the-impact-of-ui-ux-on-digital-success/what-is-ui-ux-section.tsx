import Image from "next/image";
import React from "react";

export default function WhatIsUiUxSection() {
  return (
    <section
      id="what-is-ui-ux"
      className="flex flex-col font-inter text-md md:text-lg leading-relaxed font-normal gap-4 md:gap-5">
      <p className="text-2xl md:text-3xl font-gilroy font-extrabold">
        What is UI/UX Design?
      </p>
      <p className="text-description">
        <span className="text-black font-semibold">UI (User Interface)</span>{" "}
        refers to the visual elements that users interact with—buttons, menus,
        typography, and overall layout. It focuses on making the design visually
        appealing and easy to navigate.
      </p>

      <p className="text-description">
        <span className="text-black font-semibold">UX (User Experience)</span>{" "}
        involves the overall experience a user has while interacting with your
        digital product. It emphasizes functionality, ease of use, and how
        efficiently users can complete tasks.
      </p>

      <p className="text-description">
        Together, UI and UX define how a product looks, feels, and works—shaping
        how users perceive your brand and whether they choose to engage with
        your business.
      </p>
    </section>
  );
}
