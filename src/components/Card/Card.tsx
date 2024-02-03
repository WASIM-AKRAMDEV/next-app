import React, { FC, ReactNode } from "react";
import Image from "next/image";

interface CardProp {
  children: ReactNode;
  className?: string;
}

const Card: FC<CardProp> = ({ children, className }) => {
  return (
    <div
      className={`border border-[#eeeeee] rounded-xl text-black p-6 ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
