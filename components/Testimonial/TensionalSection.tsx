"use client"
import React from 'react'
import TensionalItem from './TensionalItem'
import { Reviews } from '@/constants/Reviews'
import { motion } from 'framer-motion'
import { container } from '@/utils/ItemsAnimated'
import useInViewControl from '@/hooks/useInViewControl'

const TensionalSection = () => {
  const { controls, ref } = useInViewControl()
  return (
    <motion.section
      ref={ref}
      animate={controls}
      variants={container}
      initial="hidden"
      className="grid grid-cols-12 mt-4 gap-4 items-stretch">
      {Reviews.map(({ author, content, src, stars }) => (
        <TensionalItem
          key={author}
          author={author}
          content={content}
          src={src}
          stars={stars}
        />
      ))}
    </motion.section>
  )
}

export default TensionalSection
