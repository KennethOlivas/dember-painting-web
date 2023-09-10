import { Card, CardBody, CardHeader } from '@nextui-org/react'
import OurMission from "@/constants/OurMission"
import { motion } from 'framer-motion'
import { container, item } from '@/utils/ItemsAnimated';
import useInViewControl from '@/hooks/useInViewControl';

const OurMissionSection = () => {
  const { controls, ref} = useInViewControl()
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
