import Services from '@/constants/Services'
import ServiceItem from './ServiceItem'
import { motion } from 'framer-motion'
import { container } from '@/utils/ItemsAnimated';
import useInViewControl from '@/hooks/useInViewControl';

const ServicesSection = () => {
  const { controls, ref } = useInViewControl()
  return (
    <motion.section
      ref={ref}
      animate={controls}
      variants={container}
      initial="hidden"
      className="grid sm:grid-cols-2 lg:grid-cols-3 gap-y-24 gap-x-12">
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
