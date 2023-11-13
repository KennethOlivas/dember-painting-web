"use client"
import React from "react";
import HeroImage from "./HeroImage";
import HeroHeader from "./HeroHeader";

const index = () => {
  return (
    <div className="flex justify-center items-center relative px-2 md:px-0 min-h-screen">
      <div className="container">
        <div className="flex flex-wrap md:-mx-4">
          <div className=" px-4 lg:w-7/12">
            <HeroHeader />
          </div>
          <div className="w-full px-4 lg:w-5/12">
            <div className="flex items-center -mx-3 sm:-mx-4">
              <div className="w-full px-3 sm:px-4 xl:w-1/2">
                <HeroImage
                  delay={0.3}
                  alt="hero image 1"
                  src="/images/hero1.webp"
                />
                <HeroImage
                  delay={0.5}
                  alt="hero image 2"
                  src="/images/hero2.webp"
                />
              </div>
              <div className="w-full px-3 sm:px-4 xl:w-1/2">
                <HeroImage
                  delay={1}
                  alt="hero image 3"
                  src="/images/hero3.webp"
                />
                <HeroImage
                  delay={1.3}
                  alt="hero image 4"
                  src="/images/hero4.webp"
                />
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>

  );
};



export default index;
