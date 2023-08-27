import React, { FC } from "react";

interface Props {
  title: string;
  description: string;
}

const HeroHeader: FC<Props> = ({ description, title }) => {
  return (
    <>
      <h1 className="block text-3xl font-bold text-white sm:text-4xl lg:text-6xl lg:leading-tigh line-clamp-2">
        {title} <span className="text-secondary">Color</span>
      </h1>
      <p className="pt-4 text-lg text-gray-100">{description}</p>
    </>
  );
};

export default HeroHeader;
