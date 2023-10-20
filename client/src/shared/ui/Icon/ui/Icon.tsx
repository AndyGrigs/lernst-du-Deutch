import React from "react";
import cls from "./Icon.module.scss";

interface IconProps {
  src: string;
  alt: string;
  className?: string;
}

export const Icon: React.FC<IconProps> = ({ src, alt }) => {
  return <img src={src} alt={alt} className={cls.Icon} />;
};
