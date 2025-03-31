import Image from "next/image";
import React from "react";

export default function ChoosingItSection() {
  return (
    <section
      id="choose"
      className="flex flex-col font-inter text-md md:text-lg leading-relaxed font-normal gap-4 md:gap-5">
      <p className="text-2xl md:text-3xl font-gilroy font-extrabold">
        Choosing the Right IT Consultant
      </p>
      <p className="text-description">
        Choosing the right IT consultant is crucial to achieving long-term
        success. Here are some factors to consider when selecting an IT
        consultant for your business:
      </p>

      <div className="flex flex-col gap-2.5 md:gap-3">
        <ul className="flex list-disc pl-8 font-normal text-description flex-col  gap-2.5 md:gap-3">
          <li>
            <span className="text-black font-semibold">Experience:</span> Look
            for consultants with relevant industry experience and a proven track
            record of helping businesses similar to yours.
          </li>
          <li>
            <span className="text-black font-semibold">Expertise:</span>
            Ensure the consultant specializes in the areas of technology you
            need—whether it’s cloud computing, cybersecurity, or business
            software solutions.
          </li>
          <li>
            <span className="text-black font-semibold">
              Understanding of Business Needs:
            </span>{" "}
            IT The consultant should have a deep understanding of your business
            goals and offer solutions that align with your growth strategy.
          </li>

          <li>
            <span className="text-black font-semibold">
              Communication Skills:
            </span>{" "}
            IT consultants must be able to explain complex concepts in simple
            terms and work collaboratively with your team.
          </li>
          <li>
            <span className="text-black font-semibold">
              References and Reputation:
            </span>{" "}
            Check reviews, ask for case studies, and speak with past clients to
            assess the consultant’s reputation and the impact of their work.
          </li>
        </ul>
        <p className="text-description">
          IT consultation is a powerful tool for businesses that want to thrive
          in the digital age. By partnering with the right IT expert, businesses
          can optimize their technology infrastructure, improve efficiency, and
          drive growth. Whether it’s improving internal processes, adopting new
          technologies, or managing IT risks, the value of IT consultation is
          undeniable.
        </p>
        <p className="text-description">
          Investing in IT consultation can give businesses a competitive edge
          and help them navigate the complexities of the modern tech landscape
          with confidence.
        </p>
      </div>
      <div className="flex md:-ml-4 mt-4 flex-wrap gap-2">
        {[
          "IT Consulting",
          "Business Growth",
          "Tech Consulting",
          "Business Strategy",
        ].map((item) => (
          <div
            key={item}
            className="px-5 py-2 bg-muted rounded-full inline-flex justify-start items-center gap-2">
            <div className="text-center justify-start  text-base font-medium font-inter capitalize leading-normal">
              {item}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
