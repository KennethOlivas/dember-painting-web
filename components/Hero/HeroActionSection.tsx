"use client";
import { Button } from "@nextui-org/react";
import React, { FC } from "react";
import Play from "../Icons/Play";
import Gallery from "../Icons/Gallery";

const HeroActionSection: FC = () => {
  return (
    <div className="flex flex-wrap items-center space-x-4">
      <Button
        startContent={<Play />}
        variant="shadow"
        color="primary"
        size="lg"
      >
        Watch Video
      </Button>
      <Button
        variant="shadow"
        color="secondary"
        size="lg"
        href="/#"
        className=""
        startContent={<Gallery />}
      >
        Se our work
      </Button>
    </div>
  );
};

export default HeroActionSection;
