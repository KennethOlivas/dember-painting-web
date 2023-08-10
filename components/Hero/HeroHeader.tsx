import React, { FC } from "react";

interface Props {
  title: string;
  description: string;
}

const HeroHeader: FC<Props> = ({ description, title }) => {
  return (
    <>
      <h1 className="block text-3xl font-bold text-white sm:text-4xl lg:text-6xl lg:leading-tigh">
        {title} <span className="text-yellow-500">Painting</span>
      </h1>
      <p className="mt-3 text-lg text-gray-800 dark:text-gray-400">
        {description}
      </p>
    </>
  );
};

export default HeroHeader;
