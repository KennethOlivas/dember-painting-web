"use client"
import { Card, CardHeader, Avatar, CardBody, CardFooter } from '@nextui-org/react'
import React, { FC } from 'react'
import Star from '../Icons/Star'
import { motion } from "framer-motion";
import { item } from "@/utils/ItemsAnimated";
import { ReviewsType } from '@/constants/Reviews';

const TensionalItem: FC<ReviewsType> = ({ author, content, src, stars }) => {
  return (
    <motion.div variants={item} className="md:col-span-6 xl:col-span-4 col-span-12">
      <Card className="h-full">
        <CardHeader className="flex-col space-y-4 justify-center items-center">
          <Avatar radius="full" size="lg" src={src} />
          <h4 className="text-xl text-center font-semibold leading-none text-default-600">{author}</h4>
        </CardHeader>
        <CardBody className="px-3 py-0 text-sm text-default-400 text-center justify-center">
          <p>
            {content}
          </p>
        </CardBody>
        <CardFooter className="gap-1 justify-center">
          {Array.from({ length: stars }).map((_, i) => (
            <Star key={i} />
          ))}
        </CardFooter>
      </Card>
    </motion.div>
  )
}

export default TensionalItem
