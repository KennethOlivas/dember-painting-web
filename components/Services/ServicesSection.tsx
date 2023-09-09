import Services from '@/constants/Services'
import React, { useEffect } from 'react'
import ServiceItem from './ServiceItem'
import { motion } from 'framer-motion'
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const container = {
  hidden: { y: -100, scale: 0.5 },
  visible: {
    y: 0,
    delay: 0.1,
    scale: 1,
    duration: 0.5,
    transition: {
      duration: 0.5,
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
}

const ServicesSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.section
      ref={ref}
      animate={controls}
      variants={container}
      initial="hidden"
      className="grid sm:grid-cols-2 lg:grid-cols-3  gap-y-24 gap-x-12">
      {Services.map(({ description, icon, id, title }) => (
        <ServiceItem
          icon={icon}
          key={id}
          title={title}
          description={description}
        />
      ))
      }
    </motion.section>
  )
}

export default ServicesSection
