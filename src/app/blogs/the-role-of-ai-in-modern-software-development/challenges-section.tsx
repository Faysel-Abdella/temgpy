import React from "react";

export default function ChallengesSection() {
  return (
    <section
      id="challenges"
      className="flex flex-col font-inter text-md md:text-lg leading-relaxed font-normal gap-4 md:gap-5">
      <p className="text-2xl md:text-3xl font-gilroy font-extrabold">
        Challenges and Future of AI in Development
      </p>
      <p className="text-description">
        Despite its advantages, integrating AI into software development comes
        with challenges.
      </p>
      <p className="text-description">
        Data privacy remains a major concern. AI relies on vast datasets,
        raising ethical questions about how this information is collected and
        used. There is also the risk of AI bias, where flawed training data can
        lead to unfair or inaccurate outcomes.
      </p>
      <p className="text-description">
        Technical complexity is another barrier. AI tools require specialized
        knowledge, making implementation challenging for teams without the right
        expertise.
      </p>
      <p className="text-description">
        Looking ahead, AI will play an even greater role. Expect more autonomous
        coding, advanced predictive analytics, and closer collaboration between
        humans and AI systems. Businesses that embrace these innovations will
        stay ahead in the competitive tech landscape.
      </p>
      <p className="text-description">
        AI is transforming the software development lifecycle—from ideation to
        deployment. Businesses that leverage AI can develop smarter, faster, and
        more reliable software while staying competitive in an ever-evolving
        digital world.
      </p>
      <p className="text-description">
        By understanding AI’s role and embracing its potential, modern
        development teams can unlock new levels of efficiency and innovation.
      </p>
      <div className="flex md:-ml-4 mt-4 flex-wrap gap-2">
        {[
          "Artificial-Intelligence",
          "Software-Development",
          "Machine Learning",
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
