import { Card, CardBody, CardHeader } from '@nextui-org/react'
import React, { useEffect } from 'react'
import OurMission from "@/constants/OurMission"
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

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
};

const OurMissionSection = () => {
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
      className="grid md:grid-cols-3 mt-12 text-white gap-4">
      {OurMission.map(({ content, title }, index) => (
        <motion.div key={index} variants={item}>
          <Card className="h-full">
            <CardHeader className="justify-center">
              <h4 className="text-xl text-primary font-bold">{title}</h4>
            </CardHeader>
            <CardBody className="pt-0">
              <p className='text-neutral-600'>{content}</p>
            </CardBody>
          </Card>
        </motion.div>
      ))}
    </motion.section>
  )
}

export default OurMissionSection
