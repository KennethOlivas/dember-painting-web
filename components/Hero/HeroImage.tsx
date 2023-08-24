"use client";
import { Image as NetxuiImage } from "@nextui-org/react";
import Image from "next/image";
import React from "react";

const HeroImage = () => {
  return (
    <div className="relative ml-4 col-span-4 hidden md:inline ">
      <NetxuiImage
        isBlurred
        as={Image}
        width={700}
        height={800}
        className="w-full h-full rounded-md"
        src="https://images.unsplash.com/photo-1665686377065-08ba896d16fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&h=800&q=80"
        alt="Image Description"
      />
      <div className="absolute inset-0 -z-[1] bg-gradient-to-tr from-primary via-white/0 to-secondary w-full h-full rounded-md mt-4 -mb-4 mr-4 -ml-4 lg:mt-6 lg:-mb-6 lg:mr-6 lg:-ml-6 "></div>
    </div>
  );
};

export default HeroImage;
