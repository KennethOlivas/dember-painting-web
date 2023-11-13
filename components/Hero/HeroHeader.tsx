import React, { FC } from "react";
import HeroActionSection from "./HeroActionSection";
import Reveal from "../Reveal";
import Image from "next/image";

const HeroHeader: FC = () => {
  return (
    <div className="flex flex-col justify-center h-full items-center lg:items-stretch">
      <div className="reletive lg:-mt-60 lg:hidden">
        <Reveal>
          <Image src="/images/Painting-Business-Flyer-Template.jpg" alt="logo" width={300} height={1200} className="mb-2" priority />
        </Reveal>
      </div>
      <Reveal>
        <h1 className="mb-4 text-4xl font-bold leading-snug text-dark sm:text-[42px] lg:text-[40px] xl:text-[42px]">
          Transform Your Home into a Masterpiece of <span className="text-6xl font-extrabold 
            bg-gradient-to-r bg-clip-text text-transparent tracking-wider
            from-primary via-secondary to-danger
            animate-text">Color</span>
        </h1>
      </Reveal>
      <Reveal>
        <p className="mb-8 ] text-xl text-inherit/30">
          Revitalize your home with our <span className="underline decoration-primary/70">painting</span> experts. Breathe new life into your spaces with us! Free consultation available.
        </p>
      </Reveal>
      <Reveal>
        <HeroActionSection />
      </Reveal>
    </div>
  );
};

export default HeroHeader;
