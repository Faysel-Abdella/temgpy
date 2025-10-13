"use client";
import SectionShow from "@/components/section-show";
import { Icons } from "@/components/ui/icons";
import useIsMobile from "@/hooks/useIsMobile";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface ContentItem {
  id: number;
  isVideo: boolean;
  src?: string;
  icon?: React.ReactNode;
  title?: string;
  description?: string;
}

const WhyUsContent: ContentItem[] = [
  {
    id: 1,
    isVideo: false,
    icon: <Icons.Console />,
    title: "Smooth Communication",
    description:
      "Stay informed at every stage of your project, with clear updates and fast responses whenever you need them.",
  },
  {
    id: 2,
    isVideo: true,
    src: "/whyus/uiux.webm",
  },
  {
    id: 3,
    isVideo: false,
    icon: <Icons.Console />,
    title: "Speed / On-Time Delivery",
    description:
      "Deadlines matter. We plan carefully and use agile methods to deliver results when promised.",
  },
  {
    id: 4,
    isVideo: true,
    src: "/whyus/uiux.webm",
  },
  {
    id: 5,
    isVideo: false,
    icon: <Icons.Console />,
    title: "Consistent Quality",
    description:
      "We combine strong design principles and clean code to ensure reliability and scalability.",
  },
  {
    id: 6,
    isVideo: true,
    src: "/whyus/uiux.webm",
  },
  {
    id: 7,
    isVideo: false,
    icon: <Icons.Console />,
    title: "Transparent Process",
    description:
      "You'll always know what's happening with your project and why.",
  },
  {
    id: 8,
    isVideo: true,
    src: "/whyus/uiux.webm",
  },
];

const WhyUsCarousel: React.FC = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({ target: targetRef });
  const isMobile = useIsMobile(1024);
  const [maxX, setMaxX] = useState(0);

  useEffect(() => {
    const el = containerRef.current;
    if (el) {
      const scrollWidth = el.scrollWidth - window.innerWidth;
      setMaxX(scrollWidth + 300);
    }
  }, []);

  const x = useTransform(scrollYProgress, [0, 1], [0, -maxX]);

  return (
    <section
      ref={targetRef}
      className="flex flex-col bg-muted gap-16   w-screen lg:h-[550vh] pt-24 pb-10 relative"
    >
      <div className="md:sticky top-0 flex flex-col   lg:h-screen w-screen  overflow-hidden md:px-12 lg:px-16">
        <div className="mx-auto  max-w-4xl text-center px-4">
          <SectionShow title="Why Choose Us?" className="bg-white" />
          <h1
            data-aos="fade-up"
            data-aos-duration="600"
            className="mt-8 text-3xl font-extrabold font-gilroy text-foreground md:text-4xl lg:text-5xl"
          >
            We Transform Your Ideas into Digital Reality!
          </h1>
          <p
            data-aos="fade-up"
            data-aos-duration="700"
            className="mt-6 text-base text-description md:text-lg"
          >
            We bring deep experience in building platforms across key
            industries. Our proven track record ensures solutions that are
            scalable, reliable, and designed to accelerate your growth.
          </p>
        </div>
        <motion.div
          ref={containerRef}
          style={{ x: isMobile ? undefined : x }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-none lg:flex   gap-[8vw]    mt-10 md:mt-6 lg:mt-10 lg:pl-14 max-md:px-4 "
        >
          {WhyUsContent.map((content) =>
            content.isVideo && content.src ? (
              <video
                key={content.id}
                className="rounded-2xl w-full lg:w-xl shrink-0 my-auto"
                autoPlay
                muted
                loop
              >
                <source src={content.src} />
              </video>
            ) : (
              <div
                key={content.id}
                className="flex shrink-0 flex-col gap-4 max-md:max-w-sm lg:w-80 justify-center"
              >
                {content.icon}
                <div className="mt-5 text-xl font-semibold font-gilroy">
                  {content.title}
                </div>
                <div className="text-description text-base font-medium font-inter leading-normal">
                  {content.description}
                </div>
              </div>
            )
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyUsCarousel;
