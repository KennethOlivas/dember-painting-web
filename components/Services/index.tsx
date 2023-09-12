"use client";
import { Card, Divider } from "@nextui-org/react";
import React from "react";
import ServicesSection from "./ServicesSection";
import { motion } from "framer-motion";
import useInViewControl from "@/hooks/useInViewControl";


const Services = () => {
  const { controls, ref } = useInViewControl()
  return (
    <motion.main
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        hidden: { y: 50, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1
        }
      }}
      id="services"
      className="relative grid sm:grid-cols-1 lg:grid-cols-12">
      <Card
        isBlurred
        className="hidden lg:inline md:col-span-3 max-h-60 w-[600px] mx-auto text-center mb-10 pt-4 lg:mb-14 md:bg-primary px-4 relative left-60 rounded-md">
        <p className="mt-1 text-yellow-500 dark:text-gray-400">
          All services
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
              We offer a wide range of painting services
            </p>
            <Divider className="my-8" />
          </div>
          <ServicesSection />
        </div>
      </Card>
    </motion.main>
  );
};

export default Services;
