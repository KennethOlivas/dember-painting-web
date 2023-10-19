import { Divider } from '@nextui-org/react'
import React from 'react'
import TensionalSection from './TensionalSection'

const Testimonial = () => {
  return (
    <div className="min-w-screen min-h-screen flex items-center justify-center">
      <div className="w-full px-5 py-16 md:py-24 text-gray-800">
        <div className="w-full container mx-auto">
          <div className="text-center max-w-xl mx-auto">
            <h1 className="text-6xl md:text-7xl font-bold mb-5 ">What people <br />are saying.</h1>
            <h3 className="text-xl mb-5 font-light">Gets from google reviews</h3>
            <Divider />
          </div>
          <TensionalSection />
        </div>
      </div>
    </div >
  )
}

export default Testimonial
