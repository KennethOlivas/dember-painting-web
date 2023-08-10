"use client";
import { Button } from "@nextui-org/react";
import React, { FC } from "react";

const HeroActionSection: FC = () => {
  return (
    <section className="mt-7 grid gap-3 w-full sm:inline-flex">
      <Button
        className="w-full sm:w-auto font-semibold"
        color="warning"
        variant="solid"
        size="lg">
        Watch video
      </Button>
      <Button
        className="w-full sm:w-auto font-semibold text-white"
        color="warning"
        variant="bordered"
        size="lg">
        Contact team specialist
      </Button>
    </section>
  );
};

export default HeroActionSection;
