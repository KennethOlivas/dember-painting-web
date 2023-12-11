"use client";
import { Button, useDisclosure } from "@nextui-org/react";
import React, { FC } from "react";
import Play from "../Icons/Play";
import Gallery from "../Icons/Gallery";
import Link from "next/link";
import Video from "../Video";

const HeroActionSection: FC = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>

      <div className="flex flex-nowrap items-center space-x-4">
        <Button
          startContent={<Play />}
          variant="shadow"
          color="primary"
          size="lg"
          onClick={onOpen}
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
      <Video isOpen={isOpen} onOpenChange={onOpenChange} />
    </>
  );
};

export default HeroActionSection;
