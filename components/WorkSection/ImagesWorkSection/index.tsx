
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
            src="https://images.unsplash.com/photo-1691514565027-ba527be3ec61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1917&q=80"
            alt=""
          />
        </motion.div>
        <motion.div variants={item}>
          <NetxuiImage
            as={Image}
            width={150}
            height={50}
            className="object-cover w-20 h-20 rounded shadow-lg sm:h-32 xl:h-40 sm:w-32 xl:w-40"
            src="https://images.unsplash.com/photo-1686058857415-8e6550648870?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
            alt=""
          />
        </motion.div>
      </div>
      <div className="px-3">
        <motion.div variants={item}>
          <NetxuiImage
            as={Image}
            width={300}
            height={200}
            className="object-cover w-40 h-40 rounded shadow-lg sm:h-64 xl:h-80 sm:w-64 xl:w-80"
            src="https://images.unsplash.com/photo-1600494603989-9650cf6ddd3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
            alt=""
          />
        </motion.div>
      </div>
    </motion.div>
  )
}

export default ImagesWorkSection
