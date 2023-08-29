import { Button, Card, Input, Textarea } from "@nextui-org/react";
import React from "react";

const ContactForm = () => {
  return (
    <Card className="w-full px-4 lg:w-5/12 xl:w-4/12">
      <div
        className="shadow-testimonial wow fadeInUp rounded-lg bg-white px-8 py-10 sm:px-10 sm:py-12 md:p-[60px] lg:p-10 lg:px-10 lg:py-12 2xl:p-[60px]"
        data-wow-delay=".2s">
        <h3 className="mb-8 text-2xl font-semibold md:text-[26px]">
          Send us a Message
        </h3>
        <form>
          <div className="mb-6">
            <Input
              type="text"
              label="Full name"
              variant="underlined"
              color="primary"
            />
          </div>
          <div className="mb-6">
            <Input
              type="enail"
              label="Email"
              variant="underlined"
              color="primary"
            />
          </div>
          <div className="mb-6">
            <Input
              type="text"
              label="Full name"
              variant="underlined"
              color="primary"
            />
          </div>
          <div className="mb-6">
            <Textarea
              variant="underlined"
              labelPlacement="outside"
              placeholder="Enter your message here"
              className="col-span-12 md:col-span-6 mb-6 md:mb-0"
            />
          </div>
          <div className="mb-0">
            <Button type="submit" variant="shadow" color="primary" size="lg">
              Send Message
            </Button>
          </div>
        </form>
      </div>
    </Card>
  );
};

export default ContactForm;
