"use client";
import { useEffect, useRef, useState } from "react";
import IntroductionSection from "./introduction-section";
import HowAiSection from "./how-ai-section";
import KeyAiSection from "./key-ai-section";
import BenefitsAiSection from "./benefits-ai-section";
import ChallengesSection from "./challenges-section";
// import SoftwareDevelopmentSection from "./software-dev-section";
// import KeyBenefitsSection from "./key-benefits-section";
// import KeySkillsSection from "./key-skills-section";
// import HowToStartSection from "./how-to-start-section";

export default function ReadingBlog() {
  const [activeSection, setActiveSection] = useState("");
  const tocRefs = useRef<{ [key: string]: HTMLLIElement | null }>({});
  const tocContainerRef = useRef<HTMLDivElement | null>(null);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const sections = [
    { id: "introduction", title: "Introduction" },
    {
      id: "how-ai",
      title: "How AI is Changing Software Development",
    },
    {
      id: "key-tech",
      title: "Key AI Technologies in Modern Development",
    },
    {
      id: "benefits",
      title: "Benefits of AI in Software Development",
    },
    {
      id: "challenges",
      title: "Challenges and Future of AI in Development",
    },
  ];

  // Handle scroll to detect the active section
  useEffect(() => {
    const handleScroll = () => {
      let currentSection = "";
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = section.id;
          }
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    // Initial check for active section
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  // Disable auto-scrolling of TOC items to fix the scrolling issue
  // This was causing the page to jump back to the top

  // Handle smooth scrolling when clicking a link
  const handleLinkClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative mx-auto w-full px-4 max-w-[1080px] flex gap-14 ">
      {/* Main Content Area */}
      <div className="flex flex-col  max-w-[777px] mx-auto gap-6 md:gap-8">
        <IntroductionSection />
        <HowAiSection />
        <KeyAiSection />
        <BenefitsAiSection />
        <ChallengesSection />
      </div>

      {/* Table of Contents Sidebar */}
      <div className="hidden lg:block w-72 min-h-screen h-auto ">
        <div
          ref={tocContainerRef}
          className="sticky top-20 flex flex-col gap-6 h-auto max-h-[calc(100vh-2rem)] overflow-y-auto">
          <h3 className="text-xl font-inter font-bold">Table of Contents</h3>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-secondary"></div>

            <ul className="space-y-4 relative ml-5">
              {sections.map((section) => (
                <li
                  key={section.id}
                  ref={(el) => {
                    tocRefs.current[section.id] = el;
                  }}
                  className="relative">
                  <button
                    onClick={() => handleLinkClick(section.id)}
                    className={`block text-left font-inter text-md text-description relative transition-all duration-300 ease-in-out ${
                      activeSection === section.id
                        ? "text-black font-bold"
                        : "text-description hover:cursor-pointer hover:text-black"
                    }`}>
                    {/* Blue indicator for active section */}
                    {activeSection === section.id && (
                      <div className="absolute left-0 top-0 bottom-0 rounded-lg -ml-5 w-[3px]  bg-primary transition-all duration-300 ease-in-out"></div>
                    )}
                    {section.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
