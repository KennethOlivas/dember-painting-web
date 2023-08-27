"use client";
import { Image as NetxuiImage } from "@nextui-org/react";
import Image from "next/image";
import React from "react";

const HeroImage = () => {
  return (
    <div>
      <NetxuiImage
        isBlurred
        as={Image}
        width={500}
        height={700}
        className="h-[400px] w-[400px] md:h-auto md:w-auto"
        src="https://images.unsplash.com/photo-1665686377065-08ba896d16fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&h=800&q=80"
        alt="Hero Image"
      />
    </div>
  );
};

export default HeroImage;
