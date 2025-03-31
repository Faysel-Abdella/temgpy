import Image from "next/image";
import React from "react";

export default function HowToStartSection() {
  return (
    <section
      id="how-to-start"
      className="flex flex-col font-inter text-md md:text-lg leading-relaxed font-normal gap-4 md:gap-5">
      <p className="text-2xl md:text-3xl font-gilroy font-extrabold">
        How to Start Your Journey in Software Development
      </p>
      <p className="text-description">
        If you’re interested in software development, the good news is you don’t
        need a formal degree in computer science to get started. Many developers
        begin their careers through self-learning or bootcamps. Here are some
        steps to kickstart your journey:
      </p>
      <div className="flex flex-col gap-2.5 md:gap-3">
        <ul className="flex list-disc pl-8 font-normal text-description flex-col  gap-2.5 md:gap-3">
          <li>
            <span className="text-black font-semibold">
              Learn Programming Basics:
            </span>{" "}
            Start with simple programming languages like Python or JavaScript.
            Online courses, tutorials, and resources are widely available.
          </li>
          <li>
            <span className="text-black font-semibold">Build Projects:</span>
            Start building small projects to gain hands-on experience. Projects
            help you apply what you learn and build a portfolio that
            demonstrates your skills.
          </li>
          <li>
            <span className="text-black font-semibold">
              Join Developer Communities:
            </span>
            Participate in online forums, open-source projects, or local meetups
            to connect with other developers and learn from their experiences.
          </li>
          <li>
            <span className="text-black font-semibold">Stay Updated:</span>
            Software development is a constantly changing field. Follow industry
            trends, read technical blogs, and keep up with the latest tools and
            frameworks.
          </li>
        </ul>
      </div>
      <p className="text-description">
        Software development is more than just writing code—it&apos;s about
        creating solutions that shape the future. Whether you’re motivated by
        the challenge, the high earning potential, or the opportunity to
        continuously grow, a career in software development can offer you
        fulfillment and success. By understanding the core aspects of this
        career and developing the right skills, you can set yourself on the path
        to becoming part of the dynamic world of software development.
      </p>
      <div className="flex md:-ml-4 mt-4 flex-wrap gap-2">
        {[
          "Software engineering",
          "CareerInTech",
          "Programming",
          "Technology",
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
