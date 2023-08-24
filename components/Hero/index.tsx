import React from "react";
import HeroHeader from "./HeroHeader";
import HeroActionSection from "./HeroActionSection";
import HeroImage from "./HeroImage";

const index = () => {
  return (
    <main className="flex h-screen justify-center mx-auto md:px-4 lg:px-8 px-2">
      <div className="absolute inset-0 -z-[1] bg-primary w-full md:w-[70%] h-full -mb-4 rounded-b-md lg:-mb-6 lg:mr-6 lg:-ml-6 "></div>
      <section className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 xl:gap-20 md:items-center justify-items-center content-center md:px-48">
        <div className="col-span-8">
          <HeroHeader
            description="Looking to breathe new life into your home? Our team of painting experts is here to turn your vision into reality. With years of experience in interior and exterior painting, we offer creative, high-quality solutions that will transform every corner of your house. From vibrant colors to elegant tones, we're ready to bring your ideas to life. Let your walls speak for you! Discover why we're the trusted choice for residential painting. Get a free consultation and find out how we can turn your house into a masterpiece in colors."
            title="Transform Your Home into a Masterpiece of"
          />
          <HeroActionSection />
        </div>
        <HeroImage />
      </section>
    </main>
  );
};

export default index;
