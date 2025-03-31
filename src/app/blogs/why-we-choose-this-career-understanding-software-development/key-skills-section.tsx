import Image from "next/image";
import React from "react";

export default function KeySkillsSection() {
  return (
    <section
      id="key-skills"
      className="flex flex-col font-inter text-md md:text-lg leading-relaxed font-normal gap-4 md:gap-5">
      <p className="text-2xl md:text-3xl font-gilroy font-extrabold">
        Key Skills Required for Software Developers
      </p>
      <p className="text-description">
        To thrive in this career, developers need to have a mix of technical and
        soft skills. Some of the core skills include:
      </p>
      <div className="flex flex-col gap-2.5 md:gap-3">
        <ul className="flex list-disc pl-8 font-normal text-description flex-col  gap-2.5 md:gap-3">
          <li>
            <span className="text-black font-semibold">
              Programming Languages:
            </span>{" "}
            Proficiency in languages like Python, JavaScript, Java, and others
            depending on the domain.
          </li>
          <li>
            <span className="text-black font-semibold">
              Problem-Solving Ability:
            </span>
            Software development is all about solving complex problems through
            logic and creativity.
          </li>
          <li>
            <span className="text-black font-semibold">Communication:</span>
            Developers must be able to effectively communicate technical
            concepts to non-technical stakeholders, working in teams and
            collaborating across functions.
          </li>
          <li>
            <span className="text-black font-semibold">Adaptability:</span>
            The technology landscape evolves rapidly, so being adaptable and
            willing to continuously learn is crucial.
          </li>
        </ul>
      </div>
    </section>
  );
}
