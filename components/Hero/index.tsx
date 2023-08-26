import React from "react";
import HeroHeader from "./HeroHeader";
import HeroActionSection from "./HeroActionSection";
import HeroImage from "./HeroImage";

const index = () => {
  return (
    <div className="container py-4 md:py-16 mx-auto">
      <div className="absolute inset-0 -z-[1] bg-primary w-full lg:w-[70%] h-full -mb-4 rounded-b-md lg:-mb-6 lg:mr-6 lg:-ml-6 "></div>
      <div className="items-center lg:flex">
        <div className="w-full lg:w-1/2">
          <div className="lg:max-w-lg">
            <HeroHeader
              description="Looking to breathe new life into your home? Our team of painting experts is here to turn your vision into reality. With years of experience in interior and exterior painting, we offer creative, high-quality solutions that will transform every corner of your house. From vibrant colors to elegant tones, we're ready to bring your ideas to life. Let your walls speak for you! Discover why we're the trusted choice for residential painting. Get a free consultation and find out how we can turn your house into a masterpiece in colors."
              title="Transform Your Home into a Masterpiece of"
            />
            <HeroActionSection />
          </div>
        </div>

        <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
          <HeroImage />
        </div>
      </div>
    </div>
  );
};

export default index;
