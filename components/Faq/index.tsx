"use client";
import { FAQList } from "@/constants/FAQList";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { Image as NetxuiImage } from "@nextui-org/react";
import Image from "next/image";
import Reveal from "../Reveal";

const FAQ = () => {
  return (
    <div
      id="faq"
      className="mx-auto max-w-screen-2xl my-4 md:my-0">
      <section className="grid grid-cols-1 md:grid-cols-9 md:h-screen place-items-center gap-x-8">
        <div className="md:col-span-3 hidden md:inline relative">
          <NetxuiImage
            as={Image}
            width={500}
            height={700}
            isBlurred
            className="w-full h-full rounded-md mt-14"
            src="/images/faqImage.webp"
            alt="Image Description"
          />
          <div className="absolute inset-0 -z-[1] bg-secondary w-full h-full rounded-md mt-4 -mb-4 mr-4 -ml-4 lg:mt-6 lg:-mb-6 lg:mr-6 lg:-ml-6 "></div>
        </div>
        <div className="md:col-span-6 justify-self-start">
          <Reveal>
            <span className="text-xl text-secondary font-semibold ml-2">FAQ</span>
            <h1 className="text-4xl md:text-6xl font-bold text-black ml-2 lg:pr-48 pr-0 tracking-wider">
              Find frequently asked questions here
            </h1>
            <Accordion
              showDivider
              variant="splitted" className="mt-8 mr-0">
              {FAQList.map(({ answer, question }, index) => (<AccordionItem
                key={index}
                aria-label="Question1"
                title={question}
                className="font-semibold text-2xl">
                <span className="text-base font-normal leading-none">
                  {answer}
                </span>
              </AccordionItem>))}
            </Accordion>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
