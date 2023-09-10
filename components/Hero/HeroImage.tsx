"use client";
import Image from "next/image";
import React, { FC } from "react";
import { motion } from "framer-motion";


type HeroImageProps = {
  src: string;
  alt: string;
  delay: number;
};

const HeroImage: FC<HeroImageProps> = ({ alt, delay, src }) => {
  return (
    <motion.div
      animate={["initial"]}
      variants={{
        initial: {
          y: [-10, 10],
          rotate: 0,
          transition: {
            delay,
            duration: 4,
            repeat: Infinity,
            // repeatDelay: 0.2,
            repeatType: "reverse"
          }
        }
      }}
      className="py-3 sm:py-4">
      <Image
        priority={true}
        height={100}
        width={300}
        layout="responsive"
        src={src}
        alt={alt}
        className="w-full rounded-md shadow-2xl hover:scale-105 duration-200 ease-in"
      />
    </motion.div>
  );
};

export default HeroImage;
