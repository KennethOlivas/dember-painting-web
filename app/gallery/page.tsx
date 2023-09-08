"use client"
import { images } from '@/constants/Images';
import { Divider } from '@nextui-org/react';
import { NextPage } from 'next';
import { useState } from 'react'
import { Gallery } from 'react-grid-gallery';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const slides = images.map(({ original, width, height }) => ({
  src: original,
  width,
  height,
}));

const Page: NextPage = () => {
  const [index, setIndex] = useState(-1);

  const handleClick = (index: number) => setIndex(index);
  return (
    <div className='p-4'>
      <h1 className='text-4xl text-center py-2 text-inherit'>Gallery</h1>
      <Divider className='mb-2' />
      <Gallery
        rowHeight={400}
        defaultContainerWidth={1200}
        tagStyle={{
          padding: '5px 10px',
          background: 'rgba(0, 0, 0, 0.6)',
          borderRadius: '5px',
          textAlign: 'center',
          color: 'white',
        }}
        images={images}
        onClick={handleClick}
        enableImageSelection={false}
      />
      <Lightbox
        slides={slides}
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
      />
    </div>

  )
}

export default Page
