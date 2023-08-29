import { FC } from "react";

type Props = {
  description: string;
};

const HeaderContact: FC<Props> = ({ description }) => {
  return (
    <div className="mb-2 xl:mb-[150px]">
      <span className="font-headingFont text-secondary mb-5 text-base font-semibold">
        CONTACT US
      </span>
      <h2 className="text-4xl text-white font-semibold">{description}</h2>
    </div>
  );
};

export default HeaderContact;
