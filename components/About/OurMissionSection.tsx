import { Card, CardBody, CardHeader } from '@nextui-org/react'
import React from 'react'
import OurMission from "@/constants/OurMission"

const OurMissionSection = () => {
  return (
    <div className="grid md:grid-cols-3 mt-12 text-white gap-4">
      {OurMission.map(({ content, title }, index) => (
        <Card key={index}>
          <CardHeader className="justify-center">
            <h4 className="text-xl text-primary font-bold">{title}</h4>
          </CardHeader>
          <CardBody className="pt-0">
            <p className='text-neutral-600'>{content}</p>
          </CardBody>
        </Card>
      ))}
    </div>
  )
}

export default OurMissionSection
