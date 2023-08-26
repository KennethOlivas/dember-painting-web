import { Link as NextUILink } from "@nextui-org/react";
import React, { FC } from "react";
import Link from "next/link";

type FooterListItemsProps = {
  title: string;
  items: {
    name: string;
    path: string;
  }[];
};

const FooterListItems: FC<FooterListItemsProps> = ({ items, title }) => {
  return (
    <div>
      <p className="font-medium tracking-wide text-white">{title}</p>
      <ul className="mt-2 space-y-2">
        {items.map((item, index) => (
          <li key={index}>
            <NextUILink
              as={Link}
              href={item.path}
              className="text-white transition-colors duration-300 hover:text-deep-purple-accent-200">
              {item.name}
            </NextUILink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterListItems;
