import React from "react";
import HeroHeader from "./HeroHeader";
import HeroActionSection from "./HeroActionSection";
import HeroImage from "./HeroImage";

const index = () => {
  return (
    <main className="flex h-screen justify-center mx-auto px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 -z-[1] bg-primary w-full md:w-[60%] h-full -mb-4  lg:-mb-6 lg:mr-6 lg:-ml-6 "></div>
      <section className="grid md:grid-cols-12 gap-4 md:gap-8 xl:gap-20 md:items-center justify-items-center content-center">
        <div className="col-span-8">
          <HeroHeader
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus."
            title="Title"
          />
          <HeroActionSection />
        </div>
        <HeroImage />
      </section>
    </main>
  );
};

export default index;
