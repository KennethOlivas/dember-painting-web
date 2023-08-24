"use client";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { Image as NetxuiImage } from "@nextui-org/react";
import Image from "next/image";

const index = () => {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
    <div className="mx-auto max-w-screen-2xl">
      <section className="grid grid-cols-9 h-screen place-items-center gap-x-8">
        <div className="col-span-3 relative">
          <NetxuiImage
            as={Image}
            width={700}
            height={800}
            isBlurred
            className="w-full h-full rounded-md mt-14"
            src="https://images.unsplash.com/photo-1665686377065-08ba896d16fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&h=800&q=80"
            alt="Image Description"
          />
          <div className="absolute inset-0 -z-[1] bg-secondary w-full h-full rounded-md mt-4 -mb-4 mr-4 -ml-4 lg:mt-6 lg:-mb-6 lg:mr-6 lg:-ml-6 "></div>
        </div>
        <div className="col-span-6 justify-self-start">
          <span className="text-xl text-secondary font-semibold ml-2">FAQ</span>
          <h1 className="text-6xl font-bold text-black ml-2 pr-48 ">
            Find frequently asked questions here
          </h1>
          <Accordion variant="splitted" className="mt-8 mr-0">
            <AccordionItem
              key="1"
              aria-label="Question1"
              title="Question 1"
              className="font-semibold text-2xl">
              <span className="text-base font-normal leading-none">
                {defaultContent}
              </span>
            </AccordionItem>
            <AccordionItem
              key="2"
              aria-label="Question2"
              title="Question 2"
              className="font-semibold text-2xl">
              <span className="text-base font-normal leading-none">
                {defaultContent}
              </span>
            </AccordionItem>
            <AccordionItem
              key="3"
              aria-label="Question3"
              title="Question 3"
              className="font-semibold text-2xl">
              <span className="text-base font-normal leading-none">
                {defaultContent}
              </span>
            </AccordionItem>
            <AccordionItem
              key="4"
              aria-label="Question4"
              title="Question 4"
              className="font-semibold text-2xl">
              <span className="text-base font-normal leading-none">
                {defaultContent}
              </span>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </div>
  );
};

export default index;
