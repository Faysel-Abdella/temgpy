import React from "react";

export default function WebApplicationsSection() {
  return (
    <section
      id="web-applications"
      className="flex flex-col mt-2 font-inter text-md md:text-lg leading-relaxed font-normal gap-4 md:gap-5">
      <p className="text-2xl md:text-3xl font-gilroy font-extrabold">
        Web Applications
      </p>
      <p className="text-description">
        Web apps are browser-based applications that users can access without
        downloading or installing software. They are designed to run on any
        device with an internet connection, making them a flexible and
        cost-effective solution.
      </p>
      <div className="flex flex-col gap-2.5 md:gap-3">
        <p className="text-description">
          Web apps are usually built using HTML, CSS, and JavaScript and can be:
        </p>

        <ul className="flex list-disc pl-8 font-normal text-description flex-col  gap-2.5 md:gap-3">
          <li className="lg:pr-10">
            <span className="text-black font-semibold">
              Traditional Web Apps:
            </span>{" "}
            Accessed through a URL, functioning like a standard website.
          </li>
          <li>
            <span className="text-black font-semibold">
              Progressive Web Apps (PWAs):
            </span>{" "}
            A hybrid between a website and a mobile app, offering features like
            offline access, push notifications, and better performance.
          </li>
        </ul>
      </div>
      <div className="flex flex-col gap-2.5 md:gap-3">
        <p className="text-xl font-semibold  md:text-2xl">
          Advantages of Web Apps
        </p>
        <ul className="flex list-disc pl-8 font-normal text-description flex-col  gap-2">
          <li>
            Can be accessed on any device with a browser, providing
            cross-platform compatibility.
          </li>
          <li>No need for installation, reducing user friction.</li>
          <li>
            Lower development and maintenance costs with a single codebase.
          </li>
          <li>Instant updates without requiring user intervention.</li>
        </ul>
      </div>
      <div className="flex flex-col gap-2.5 md:gap-3">
        <p className="text-xl font-semibold  md:text-2xl">
          Disadvantages of Web Apps
        </p>
        <ul className="flex list-disc pl-8 font-normal text-description flex-col  gap-2">
          <li>Limited access to device features compared to mobile apps.</li>
          <li>Performance depends on the browser and internet connection.</li>
          <li>
            More vulnerable to security risks as they run in web environments.
          </li>
        </ul>
      </div>
      <p className="text-description">
        Web apps are great for businesses that prioritize accessibility,
        cost-effectiveness, and easy maintenance over deep device integration.
      </p>
    </section>
  );
}
