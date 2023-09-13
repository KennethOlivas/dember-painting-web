"use client";
import HeaderContact from "./HeaderContact";
import useContact from "@/hooks/useContact";
import CardAction from "./CardAction";
import ContactForm from "./ContactForm";

const Contact = () => {
  const { ContactInfo } = useContact();
  return (
    <section id="contact" className="relative pt-2 xl:py-[120px]">
      <div className="absolute left-0 top-0 z-[-1] h-full w-full bg-primary md:h-[45%] xl:h-1/2" />
      <div className="flex flex-wrap items-center lg:px-0 2xl:px-[8%] md:px-12 sm:px-12 px-0">
        <div className="w-full px-4 lg:w-7/12 xl:w-8/12 flex flex-col space-y-2 lg:space-y-4">
          <HeaderContact description="Let's talk about. Love to hear from you!" />
          <section className="mb-12 pb-4 grid grid-cols-1 xl:grid-cols-3 gap-4">
            {ContactInfo.map((item) => {
              return (
                <CardAction
                  tooltip={item.tooltip}
                  key={item.id}
                  title={item.title}
                  description={item.description}
                  icon={item.icon}
                  href={item.link}
                  target={item.target}
                />
              );
            })}
          </section>
        </div>
        <ContactForm />
      </div>
    </section>
  );
};

export default Contact;
