import Image from "next/image";
import React from "react";

export default function KeyBenefitsSection() {
  return (
    <section
      id="key-benefits"
      className="flex flex-col font-inter text-md md:text-lg leading-relaxed font-normal gap-4 md:gap-5">
      <p className="text-2xl md:text-3xl font-gilroy font-extrabold">
        Key Benefits of a Career in Software Development
      </p>
      <p className="text-description">
        A career in software development offers numerous advantages, from
        professional growth to financial rewards. Here are a few reasons why
        this career is so appealing:
      </p>
      <div className="flex flex-col gap-2.5 md:gap-3">
        <ul className="flex list-disc pl-8 font-normal text-description flex-col  gap-2.5 md:gap-3">
          <li>
            <span className="text-black font-semibold">High Demand:</span>{" "}
            Software developers are in high demand globally, and the need for
            -skilled professionals continues to grow as technology becomes more
            integrated into every aspect of life.
          </li>
          <li>
            <span className="text-black font-semibold">Lucrative Salary:</span>
            Due to the demand for developers and the technical expertise
            required, the salary potential in software development is often
            above average, making it a financially rewarding career choice.
          </li>
          <li>
            <span className="text-black font-semibold">Endless Learning:</span>
            The technology landscape is constantly evolving. As a software
            developer, you&apos;ll never stop learning—whether it&apos;s picking
            up new programming languages, frameworks, or exploring emerging
            fields like AI and machine learning.
          </li>
          <li>
            <span className="text-black font-semibold">
              Creative Problem Solving:
            </span>
            Software development challenges you to think critically and solve
            problems creatively. You can design solutions that impact
            users&apos; lives positively and make the world more connected..
          </li>
        </ul>
      </div>

      <Image
        className="w-full mt-2"
        src={"/blogs/team-meeting.png"}
        width={1000}
        height={1000}
        alt="Team Meeting"
      />
    </section>
  );
}
