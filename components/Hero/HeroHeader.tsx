import React, { FC } from "react";
import HeroActionSection from "./HeroActionSection";

interface Props {
  title: string;
  description: string;
}

const HeroHeader: FC = () => {
  return (
    <div className="flex flex-col justify-center  h-full">
       <h1 className="mb-4 text-4xl font-bold leading-snug text-dark sm:text-[42px] lg:text-[40px] xl:text-[42px]">
        Transform Your Home into a Masterpiece of <span className="font-extrabold text-6xl tracking-wider text-transparent  bg-clip-text bg-gradient-to-r from-primary to-secondary">Color</span>
      </h1>
      <p className="mb-8 max-w-[480px] text-xl text-inherit/30">
        Revitalize your home with our <span className="underline decoration-primary/70">painting</span> experts. Breathe new life into your spaces with us! Free consultation available.
      </p>
      <HeroActionSection />
    </div>

  );
};

export default HeroHeader;
