"use client";

import { Button } from "@nextui-org/react";
import React, { ReactEventHandler } from "react";
interface CustomButtonProps {
  title?: string;
  clickHandler?: ReactEventHandler;
  color?: string;
}
const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  clickHandler,
  color,
}) => {
  const value = "700";
  const colorStyle = `bg-${color}-${value}`;
  return (
    <div className={color ? `${colorStyle}` : `bg-slate-800`}>
      <button className={`${colorStyle}`}>{title}</button>
    </div>
  );
};

export default CustomButton;
