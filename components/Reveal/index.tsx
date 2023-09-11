import React, { FC } from "react";
import { motion } from "framer-motion";
import useInViewControl from "@/hooks/useInViewControl";


const BoxVariants = {
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  hidden: { opacity: 0, y: 100 }
};

type RevealProps = {
  children: React.ReactNode;
  variant?: "left" | "right";
};

const Reveal: FC<RevealProps> = ({ children }) => {
  const { controls, ref } = useInViewControl()

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={BoxVariants}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
