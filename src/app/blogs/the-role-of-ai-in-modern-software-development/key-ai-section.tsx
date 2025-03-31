import Image from "next/image";
import React from "react";

export default function KeyAiSection() {
  return (
    <section
      id="key-tech"
      className="flex flex-col font-inter text-md md:text-lg leading-relaxed font-normal gap-4 md:gap-5">
      <p className="text-2xl md:text-3xl font-gilroy font-extrabold">
        Key AI Technologies in Modern Development
      </p>
      <p className="text-description">
        Several advanced AI technologies are shaping how modern software is
        designed, built, and maintained:
      </p>
      <div className="flex flex-col gap-2.5 md:gap-3">
        <ol className="flex ml-2 font-normal text-description flex-col  gap-2.5 md:gap-3">
          <li>
            <span className="text-black font-semibold">
              1, Machine Learning (ML):
            </span>{" "}
            Algorithms that analyze data, identify patterns, and make
            predictions—used in recommendation engines and fraud detection.
          </li>
          <li>
            <span className="text-black font-semibold">
              2, Natural Language Processing (NLP):
            </span>
            AI’s ability to understand and process human language, powering
            tools like intelligent code assistants and chatbots.
          </li>
          <li>
            <span className="text-black font-semibold">
              3, Computer Vision:
            </span>
            AI that interprets and processes visual information—helpful in
            developing applications like image recognition and augmented
            reality.
          </li>
          <li>
            <span className="text-black font-semibold">4, Generative AI:</span>
            AI models that create content, such as code, text, and images,
            boosting productivity in coding and design tasks.
          </li>
          <li>
            <span className="text-black font-semibold">
              5, AI-Driven Analytics:
            </span>{" "}
            Analyzing large datasets to provide insights, optimize performance,
            and guide decision-making.
          </li>
        </ol>
      </div>
      <p className="text-description">
        These technologies are not just enhancing productivity but also enabling
        developers to solve complex problems more efficiently.
      </p>
    </section>
  );
}
