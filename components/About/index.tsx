"use client";
import React from "react";
import { Card, CardBody, CardHeader, Image as NetxuiImage } from "@nextui-org/react";
import Image from "next/image";
import Reveal from "../Reveal";
import OurMissionSection from "./OurMissionSection";

const index = () => {
  return (
    <main className="relative grid sm:grid-cols-1 lg:grid-cols-12 w-full gap-2 lg:gap-6 bg-primary xl:bg-transparent">
      <section className="lg:col-span-7 lg:mt-32 py-0 lg:py-14 relative">
        <Reveal>
          <div className="flex justify-center flex-col px-2 md:px-12 xl:pl-40 pt-4 lg:pt-16">
            <span className="uppercase text-secondary font-bold tracking-wider textle">
              About us
            </span>
            <h2 className="text-white text-2xl lg:text-6xl font-bold tracking-wide">
              Professional Painters With Experience In Quality
            </h2>
            <p className="text-white mt-8 text-base lg:text-lg">
              We are a locally owned and operated business. We have been keeping the Treasure Coast of Florida colorful and beautify for 20 years.
              We offer residential and commercial services. Our goal is to deliver high quality painting and consistence. Our prices are competitive and fit for any budget.
              Our promise to you is delivering honesty and integrity, always with a smile. Give us a call for your next project and see how Dember Painting can help you!
            </p>
            <OurMissionSection />
          </div>
        </Reveal>
        <div className="hidden lg:inline  absolute inset-0 -z-[1] bg-primary w-[1400px] md:w-[700px] lg:w-[1200px] h-full mt-4 rounded-r-md" />
      </section>
      <section className="lg:inline lg:col-span-5 justify-center lg:mt-32 mx-auto text-center px-4 py-2 sm:px-6 lg:px-8 lg:py-14 relative lg:right-24">
        <NetxuiImage
          as={Image}
          width={400}
          height={300}
          isBlurred
          className="w-full rounded-md 2xl:mt-24  lg:mt-24 mt-0"
          src="https://images.unsplash.com/photo-1665686377065-08ba896d16fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&h=800&q=80"
          alt="Image Description"
        />
        <div className="hidden lg:inline absolute inset-0 top-[15%] -z-[2] h-3/4 bg-secondary w-[600px] mt-4 rounded-r-md" />
      </section>
    </main>
  );
};

export default index;
