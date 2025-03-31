import React from "react";

export default function IntroductionSection() {
  return (
    <section
      id="introduction"
      className="flex flex-col font-inter text-md md:text-lg leading-relaxed font-normal gap-4 md:gap-5">
      <p className="text-description">
        In today&apos;s tech-driven world, businesses must carefully decide
        whether to develop a mobile app or a web app to engage with their users.
        Each option comes with its own set of benefits and challenges, and the
        choice largely depends on business goals, budget, and user needs.
      </p>
      {/* <p className="text-description"></p> */}

      <p className="text-description">
        A mobile app is typically installed on a user&apos;s device, offering
        faster performance, better security, and deeper access to device
        features. However, it comes with higher development and maintenance
        costs. In contrast, a web app is accessed via a browser, making it
        easier to update, maintain, and distribute but often lacks the same
        level of performance and offline capability as a mobile app.
      </p>

      <p className="text-description">
        Understanding these differences is crucial when making a strategic
        decision. In this article, we&apos;ll explore the features, advantages,
        and trade-offs of mobile and web apps to help you determine the best fit
        for your business.
      </p>
    </section>
  );
}
