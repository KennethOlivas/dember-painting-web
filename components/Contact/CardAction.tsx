import { Card, CardBody, CardHeader } from "@nextui-org/react";
import React, { FC, HTMLAttributeAnchorTarget, ReactNode } from "react";
import Link from "next/link";

type CardActionProps = {
  title: string;
  description: string;
  href: string;
  target?: HTMLAttributeAnchorTarget;
  icon: ReactNode;
};

const CardAction: FC<CardActionProps> = ({
  href,
  icon,
  title,
  target,
  description,
}) => {
  return (
    <Card
      as={Link}
      target={target}
      href={href}
      className="col-span-1 max-w-full p-4"
      isHoverable
      isPressable>
      <CardHeader className="flex gap-3">
        <div className="text-primary  text-[32px]">{icon}</div>
        <h5 className="text-lg font-semibold lg:text-black">{title}</h5>
      </CardHeader>
      <div className="text-left">
        <CardBody>
          <span className="text-primary">{description}</span>
        </CardBody>
      </div>
    </Card>
  );
};

export default CardAction;
