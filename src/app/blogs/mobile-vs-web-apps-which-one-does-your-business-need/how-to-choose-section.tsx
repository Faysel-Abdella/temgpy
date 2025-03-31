import React from "react";

export default function HowToChooseSection() {
  return (
    <section
      id="how-to-choose"
      className="flex flex-col font-inter text-md md:text-lg leading-relaxed font-normal gap-4 md:gap-5">
      <p className="text-2xl md:text-3xl font-gilroy font-extrabold">
        How to Choose the Right One for Your Business
      </p>
      <p className="text-description">
        Choosing between a mobile app and a web app depends on several factors.
        One of the most important considerations is the target audience. If
        users primarily rely on mobile devices and expect a seamless, native
        experience, then developing a mobile app would be the right choice.
        Mobile apps offer better integration with device features and can
        provide a more immersive user experience.
      </p>
      <p className="text-description">
        Another key factor is budget and resources. Mobile apps generally
        require higher development and maintenance costs since they need to be
        built separately for different platforms like iOS and Android. On the
        other hand, web apps are more cost-effective and easier to maintain
        since they can run on any device with a browser, making them a more
        budget-friendly option.
      </p>
      <p className="text-description">
        The required functionality also plays a role in this decision. If the
        app needs features like offline access, push notifications, or
        integration with device hardware (such as cameras or GPS), then a mobile
        app is often the best choice. These capabilities enhance user engagement
        and provide a more interactive experience.
      </p>
      <p className="text-description">
        Finally, time-to-market is a crucial consideration, especially for
        startups or businesses looking to launch quickly. Web apps generally
        have a faster development cycle, allowing companies to deploy their
        product sooner and iterate based on user feedback. This makes them an
        ideal choice for startups and Minimum Viable Products (MVPs).
      </p>
      <div className="flex md:-ml-4 mt-4 flex-wrap gap-2">
        {["Web-service", "Web Application", "Software", "Mobile App"].map(
          (item) => (
            <div
              key={item}
              className="px-5 py-2 bg-muted rounded-full inline-flex justify-start items-center gap-2">
              <div className="text-center justify-start  text-base font-medium font-inter capitalize leading-normal">
                {item}
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
}
