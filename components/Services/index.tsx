"use client";
import { Card, Divider } from "@nextui-org/react";
import React from "react";
import ServicesSection from "./ServicesSection";

const index = () => {
  return (

    <main
      id="services"
      className="relative grid sm:grid-cols-1 lg:grid-cols-12 mr-0 pt-24">
      <Card
        isBlurred
        className="hidden lg:inline md:col-span-3 max-h-60 w-full mx-auto text-center mb-10 pt-4 lg:mb-14 md:bg-primary px-4 relative left-60 rounded-md">
        <p className="mt-1 text-yellow-500 dark:text-gray-400">
          Short description
        </p>
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight text-white pb-4">
          Our Top class services
        </h2>
      </Card>
      <Card className="sm:col-span-8 lg:mt-32 md:max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto relative lg:right-24">
        <div>
          <div className="text-center inline lg:hidden">
            <h2 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">
              Our services
            </h2>
            <p className="max-w-lg mx-auto my-4 text-gray-500">
              short description
            </p>
            <Divider className="my-8" />
          </div>
          <ServicesSection />
        </div>
      </Card>
    </main>
  );
};

export default index;
