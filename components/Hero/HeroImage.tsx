"use client";
import { Image as NetxuiImage } from "@nextui-org/react";
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
      <NetxuiImage
        as={Image}
        isBlurred
        isZoomed
        shadow="lg"
        height={200}
        width={300}
        src={src}
        alt={alt}
        className="w-full rounded-2xl"
      />
    </motion.div>
  );
};

export default HeroImage;
