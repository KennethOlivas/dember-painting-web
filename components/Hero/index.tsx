"use client"
import React from "react";
import HeroImage from "./HeroImage";
import HeroHeader from "./HeroHeader";

const index = () => {
  return (
    <div className="flex justify-center items-center relative px-2 md:px-0 min-h-screen">
      <div className="container max-h-screen">
        <div className="flex flex-wrap md:-mx-4">
          <div className="w-full px-4 lg:w-7/12">
            <HeroHeader />
          </div>
          <div className="w-full px-4 lg:w-5/12">
            <div className="flex items-center -mx-3 sm:-mx-4">
              <div className="w-full px-3 sm:px-4 xl:w-1/2">
                <HeroImage
                  delay={0.3}
                  alt="hero image 1"
                  src="https://images.unsplash.com/photo-1693382464267-b00646bfa1eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80"
                />
                <HeroImage
                  delay={0.5}
                  alt="hero image 1"
                  src="https://images.unsplash.com/photo-1678875202921-1b4a5b3fcddb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80"
                />
              </div>
              <div className="w-full px-3 sm:px-4 xl:w-1/2">
                <HeroImage
                  delay={1}
                  alt="hero image 1"
                  src="https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80"
                />
                <HeroImage
                  delay={1.3}
                  alt="hero image 1"
                  src="https://images.unsplash.com/photo-1692055651074-879fd6ab7909?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1965&q=80"
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
