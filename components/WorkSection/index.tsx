"use client";
import { Button, Card, Link } from "@nextui-org/react";
import ImagesWorkSection from "./ImagesWorkSection";
import Reveal from "../Reveal";

const WorkSection = () => {
  return (
    <section className="w-full bg-primary rounded-lg md:py-24 md:mt-24 -mt-8">
      <Card className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 shadow-2xl shadow-[#12c46b]/50">
        <div className="grid gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="flex flex-col justify-center md:pr-8 xl:pr-0 lg:max-w-lg">
              <div className="flex items-center justify-start w-16 h-16 mb-4 rounded-full bg-teal-accent-400">
                <svg
                  className="text-teal-900 w-10 h-10"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>
              </div>
              <div className="max-w-xl mb-6">
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                  View our work gallery
                </h2>
                <p className="text-base text-gray-700 md:text-lg">
                  Transform your surroundings with our expert painting services. Whether it&apos;s the interiors that need a fresh, inviting look or the exteriors requiring a vibrant, durable finish, we&apos;ve got you covered. Discover how our skilled painters can breathe life and color into your spaces.
                </p>
              </div>
              <div>
                <Button
                  as={Link}
                  color="primary"
                  href="gallery"
                  variant="shadow"
                  endContent={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                      />
                    </svg>
                  }>
                  Go to Gallery
                </Button>
              </div>
            </div>
          </Reveal>
          <ImagesWorkSection />
        </div>
      </Card>
    </section>
  );
};

export default WorkSection;
