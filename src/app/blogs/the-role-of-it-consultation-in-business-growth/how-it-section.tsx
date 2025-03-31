import Image from "next/image";
import React from "react";

export default function HowItSection() {
  return (
    <section
      id="how-it"
      className="flex flex-col font-inter text-md md:text-lg leading-relaxed font-normal gap-4 md:gap-5">
      <p className="text-2xl md:text-3xl font-gilroy font-extrabold">
        How IT Consultation Drives Business Growth
      </p>
      <p className="text-description">
        The right IT consultation can be a game-changer for businesses looking
        to scale and innovate. Here’s how:
      </p>

      <div className="flex flex-col gap-2.5 md:gap-3">
        <ul className="flex list-disc pl-8 font-normal text-description flex-col  gap-2.5 md:gap-3">
          <li>
            <span className="text-black font-semibold">
              Optimizing Business Processes:
            </span>{" "}
            IT consultants identify inefficiencies in current processes and
            implement solutions to streamline operations, saving time and
            resources.
          </li>
          <li>
            <span className="text-black font-semibold">Cost Reduction:</span> By
            recommending more efficient technologies, IT consultants help
            businesses reduce unnecessary expenses and optimize spending on
            technology.
          </li>
          <li>
            <span className="text-black font-semibold">Scalability:</span> IT
            consultants ensure that your technology infrastructure can grow with
            your business, enabling you to handle increasing workloads or expand
            into new markets.
          </li>

          <li>
            <span className="text-black font-semibold">
              Improved Decision Making:
            </span>{" "}
            With expert insights, businesses can make data-driven decisions that
            align with their goals and drive growth.
          </li>
          <li>
            <span className="text-black font-semibold">
              Competitive Advantage:
            </span>{" "}
            By adopting cutting-edge technologies, businesses can stay ahead of
            the competition and offer superior products or services.
          </li>
        </ul>
        <p className="text-description">
          <span className="text-black font-semibold">Example:</span> Imagine a
          retail company looking to expand its online presence. An IT consultant
          might recommend a cloud-based inventory management system, improving
          stock management, reducing operational costs, and enabling the
          business to scale efficiently.
        </p>
      </div>
      <Image
        className="w-full mt-2"
        src={"/blogs/it-team.png"}
        width={1000}
        height={1000}
        alt="Team Meeting"
      />
    </section>
  );
}
