"use client"
import Image from 'next/image'
import { usePathname } from 'next/navigation';
import React from 'react'

const Logo = () => {
  const pathname = usePathname();
  return (
    <>
      {pathname === "/" && (<li className="relative hidden lg:inline mt-72 right-8">
        <Image src="/images/Painting-Business-Flyer-Template.jpg" alt="logo" width={250} height={900} priority />
      </li>)}
    </>
  )
}

export default Logo
