import Image from "next/image";
import React from "react";

export default function BenefitsAiSection() {
  return (
    <section
      id="benefits"
      className="flex flex-col font-inter text-md md:text-lg leading-relaxed font-normal gap-4 md:gap-5">
      <p className="text-2xl md:text-3xl font-gilroy font-extrabold">
        Benefits of AI in Software Development
      </p>
      <p className="text-description">
        AI delivers numerous advantages for both development teams and
        end-users. Here are some key benefits:
      </p>
      <div className="flex flex-col gap-2.5 md:gap-3">
        <ul className="flex list-disc pl-8 font-normal text-description flex-col  gap-2.5 md:gap-3">
          <li>
            <span className="text-black font-semibold">
              Faster Development Cycles:
            </span>{" "}
            Automated code generation and error detection speed up development
            timelines and allow quicker product releases.
          </li>
          <li>
            <span className="text-black font-semibold">
              Improved Software Quality:
            </span>{" "}
            AI-powered testing reduces human error, enhances accuracy, and
            ensures higher software reliability.
          </li>
          <li>
            <span className="text-black font-semibold">Cost Efficiency:</span>{" "}
            Automating repetitive tasks and optimizing resources reduces
            development costs and human workload.
          </li>
          <li>
            <span className="text-black font-semibold">
              Enhanced User Experiences:
            </span>{" "}
            AI helps deliver personalized, adaptive, and intelligent user
            experiences across applications.
          </li>
          <li>
            <span className="text-black font-semibold">
              Predictive Maintenance:
            </span>{" "}
            AI can monitor systems in real-time, predict potential failures, and
            prompt preemptive fixes.
          </li>
        </ul>
        <p className="text-description">
          <span className="text-black font-semibold">Example:</span> Example:
          Companies like Google and Microsoft use AI to analyze user data and
          deliver smart suggestions—from search predictions to personalized
          content recommendations.
        </p>
      </div>
    </section>
  );
}
