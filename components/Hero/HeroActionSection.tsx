"use client";
import { Button } from "@nextui-org/react";
import React, { FC } from "react";
import Play from "../Icons/Play";
import Gallery from "../Icons/Gallery";
import Link from "next/link";

const HeroActionSection: FC = () => {
  return (
    <div className="flex flex-nowrap items-center space-x-4">
      <Button
        startContent={<Play />}
        variant="shadow"
        color="primary"
        size="lg"
      >
        Watch Video
      </Button>
      <Button
        as={Link}
        variant="shadow"
        color="secondary"
        size="lg"
        href="/gallery"
        className=""
        startContent={<Gallery />}
      >
        See our work
      </Button>
    </div>
  );
};

export default HeroActionSection;
