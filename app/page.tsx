import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Faq from "@/components/Faq";
import About from "@/components/About";
import WorkSection from "@/components/WorkSection";
import Contact from "@/components/Contact";
import EmailTemplate from "@/components/email/EmailTemplate";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <WorkSection />
      <Faq />
      <Contact />
    </>
  );
}
