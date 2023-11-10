import React, { FC } from "react";
import cls from "./Input.module.scss";
import { classNames } from "@/shared/lib/classNames";

export enum InputTheme {
    CLEAR = "clear",
    OUTLINE = "outline",
    BACKGROUND = "background",
}

export enum InputSize {
    M = "size_m",
    L = "size_l",
    XL = "size_xl",
}

interface CustomInputProps {
    className?: string;
    theme?: InputTheme;
    size?: string | number;
    placeholder?: string; // Add the placeholder attribute
}

type InputProps = CustomInputProps & React.InputHTMLAttributes<HTMLInputElement>;

export const Input: FC<InputProps> = (props) => {
    const {
        className,
        theme,
        size = InputSize.M as string,
        ...otherProps
    } = props;
    return (
        <input
            className={classNames(cls.Input, {}, [className, cls[theme]])}
            {...otherProps}
        />
    );
};