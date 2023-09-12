
import { Image as NetxuiImage } from "@nextui-org/react";
import Image from "next/image";
import { motion } from 'framer-motion'
import useInViewControl from "@/hooks/useInViewControl";
import { container, item } from "@/utils/ItemsAnimated";

const ImagesWorkSection = () => {
  const { controls, ref } = useInViewControl()
  return (
    <motion.div
      ref={ref}
      animate={controls}
      variants={container}
      initial="hidden"
      className="flex items-center justify-center -mx-4 lg:pl-8">
      <div className="flex flex-col items-end px-3">
        <motion.div variants={item}>
          <NetxuiImage
            as={Image}
            width={200}
            height={100}
            className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
            src="/images/work1.webp"
            alt="work1"
          />
        </motion.div>
        <motion.div variants={item}>
          <NetxuiImage
            as={Image}
            width={150}
            height={50}
            className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
            src="/images/work2.webp"
            alt="work2"
          />
        </motion.div>
      </div>
      <div className="px-3">
        <motion.div variants={item}>
          <NetxuiImage
            as={Image}
            width={400}
            height={200}
            className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
            src="/images/work3.webp"
            alt="work3"
          />
        </motion.div>
      </div>
    </motion.div>
  )
}

export default ImagesWorkSection
