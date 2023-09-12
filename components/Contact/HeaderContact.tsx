import { FC } from "react";

type Props = {
  description: string;
};

const HeaderContact: FC<Props> = ({ description }) => {
  return (
    <div className="mb-2 xl:mb-[150px]">
      <span className="text-secondary mb-5 text-2xl font-semibold">
        CONTACT US
      </span>
      <h2 className="text-4xl text-gray-200 font-semibold tracking-wider">{description}</h2>
    </div>
  );
};

export default HeaderContact;
