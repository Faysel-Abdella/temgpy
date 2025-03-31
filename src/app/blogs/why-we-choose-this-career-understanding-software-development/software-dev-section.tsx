import React from "react";

export default function SoftwareDevelopmentSection() {
  return (
    <section
      id="what-is-software-development"
      className="flex flex-col mt-2 font-inter text-md md:text-lg leading-relaxed font-normal gap-4 md:gap-5">
      <p className="text-2xl md:text-3xl font-gilroy font-extrabold">
        What is Software Development?
      </p>
      <p className="text-description">
        Mobile apps are software applications designed specifically for
        smartphones and tablets. They are built for specific platforms, such as
        iOS or Android, and are distributed through official stores like the
        Apple App Store or Google Play Store.
      </p>
      <p className="text-description">
        Software development is the process of designing, coding, testing, and
        maintaining software applications. These applications could range from
        web and mobile apps to desktop software or complex enterprise systems.
        Developers use a variety of programming languages like Python,
        JavaScript, and Java, along with frameworks and tools, to build
        solutions that meet specific user needs.
      </p>
      <p className="text-description">
        The beauty of software development lies in its versatility—it enables
        developers to create a broad range of applications, each with a unique
        purpose. Whether you&apos;re creating a website, building a mobile app,
        or working on cutting-edge AI solutions, software development gives you
        the freedom to innovate and solve real-world problems
      </p>
    </section>
  );
}
