"use client";
import { FC } from "react";
import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";

type MaskTextProps = {
  phrases: string[];
  className?: string;
};

const MaskText: FC<MaskTextProps> = ({ phrases, className }) => {
  const animation: Variants = {
    initial: { y: "100%" },
    enter: (i: number) => ({
      y: "0",
      transition: {
        duration: 0.75,
        ease: [0.33, 1, 0.68, 1],
        delay: 0.075 * i,
      },
    }),
  };

  const { ref, inView } = useInView({
    threshold: 0.75,
    triggerOnce: true,
  });

  return (
    <div ref={ref}>
      {phrases.map((phrase, index) => {
        return (
          <div key={index} className={`overflow-hidden ${className}`}>
            <motion.p
              custom={index}
              variants={animation}
              initial="initial"
              animate={inView ? "enter" : ""}>
              {phrase}
            </motion.p>
          </div>
        );
      })}
    </div>
  );
};

export default MaskText;
