import Image from "next/image";
import React from "react";

export default function HowAiSection() {
  return (
    <section
      id="how-ai"
      className="flex flex-col font-inter text-md md:text-lg leading-relaxed font-normal gap-4 md:gap-5">
      <p className="text-2xl md:text-3xl font-gilroy font-extrabold">
        How AI is Changing Software Development
      </p>
      <p className="text-description">
        AI is revolutionizing traditional software development processes by
        automating tasks and improving decision-making. Here’s how:
      </p>
      <div className="flex flex-col gap-2.5 md:gap-3">
        <ul className="flex list-disc pl-8 font-normal text-description flex-col  gap-2.5 md:gap-3">
          <li>
            <span className="text-black font-semibold">
              Code Generation & Auto-Completion:
            </span>{" "}
            AI-powered tools like GitHub Copilot and Tabnine assist developers
            by suggesting code snippets and reducing manual coding time.
          </li>
          <li>
            <span className="text-black font-semibold">
              Bug Detection & Error Resolution:
            </span>{" "}
            AI can identify patterns in code to detect bugs and vulnerabilities
            faster than human review alone.
          </li>
          <li>
            <span className="text-black font-semibold">Automated Testing:</span>{" "}
            AI-driven testing tools simulate user behaviors, execute test cases,
            and identify errors automatically, improving software quality.
          </li>
          <li>
            <span className="text-black font-semibold">
              Intelligent Project Management:
            </span>{" "}
            AI helps estimate project timelines, track progress, and manage
            resources efficiently, optimizing workflows.
          </li>
          <li>
            <span className="text-black font-semibold">
              Personalized User Experiences:
            </span>{" "}
            AI analyzes user data to deliver personalized content and adaptive
            user interfaces, enhancing customer satisfaction.
          </li>
        </ul>
        <p className="text-description">
          <span className="text-black font-semibold">Example:</span> Imagine a
          development team working on a healthcare app. AI can assist by
          identifying potential compliance issues, automating test cases, and
          optimizing patient data security—all while reducing manual effort.
        </p>
      </div>
      <Image
        className="w-full mt-2"
        src={"/blogs/ai-2.png"}
        width={1000}
        height={1000}
        alt="Team Meeting"
      />
    </section>
  );
}
