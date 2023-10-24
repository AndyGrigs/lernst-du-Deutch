import React from "react";
import cls from "./Icon.module.scss";
import { classNames } from "@/shared/lib/classNames";

interface IconProps {
  className?: string;
  theme?: string;
}

export const Icon: React.FC<IconProps> = ({ className, theme }) => {
  return (
    <div>

      <svg
        className={classNames(cls.Icon, {}, [className, cls[theme]])}
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>contrast</title>
        <path d="M0 16q0 3.264 1.28 6.24t3.392 5.088 5.12 3.424 6.208 1.248q3.264 0 6.24-1.248t5.088-3.424 3.392-5.088 1.28-6.24-1.28-6.208-3.392-5.12-5.088-3.392-6.24-1.28q-3.264 0-6.208 1.28t-5.12 3.392-3.392 5.12-1.28 6.208zM4 16q0-3.264 1.6-6.016t4.384-4.352 6.016-1.632 6.016 1.632 4.384 4.352 1.6 6.016-1.6 6.048-4.384 4.352-6.016 1.6-6.016-1.6-4.384-4.352-1.6-6.048zM16 26.016q2.72 0 5.024-1.344t3.648-3.648 1.344-5.024-1.344-4.992-3.648-3.648-5.024-1.344v20z"></path>
      </svg>
    </div>
  );
};
