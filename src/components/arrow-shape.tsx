"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function ArrowShape() {
  const [startAnimation, setStartAnimation] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true }); // Only trigger once

  useEffect(() => {
    if (inView) {
      const timer = setTimeout(() => {
        setStartAnimation(true);
      }, 100); // Adjust the delay time as needed (1000ms = 1 second)

      return () => clearTimeout(timer); // Cleanup the timer
    }
  }, [inView]);

  const pathVariants = {
    hidden: {
      pathLength: 0,
      opacity: 0,
    },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { duration: 1.5, ease: "easeInOut" },
        opacity: { duration: 0.7 },
      },
    },
  };

  return (
    <div
      ref={ref}
      className="h-[54px] w-[106px] flex items-center justify-center">
      <motion.svg
        width="100"
        height="100"
        viewBox="80 0 400 250"
        initial="hidden"
        animate={startAnimation ? "visible" : "hidden"} // Control animation state
        className="w-full h-full">
        {/* Main curved path */}
        <motion.path
          d="M10 40 C 100 40, 260 50, 310 222"
          fill="none"
          stroke="#C5C9CF"
          strokeWidth="6"
          strokeLinecap="round"
          variants={pathVariants}
        />

        {/* Arrowhead at the end of the curve */}
        <motion.path
          d="M210 170 L310 220 L350 120"
          fill="none"
          stroke="#C5C9CF"
          strokeWidth="8"
          strokeLinecap="round"
          variants={pathVariants}
        />
      </motion.svg>
    </div>
  );
}
