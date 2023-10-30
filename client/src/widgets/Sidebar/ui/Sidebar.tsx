
import React, { useState } from "react";
import cls from "./Sidebar.module.scss"
import { classNames } from "@/shared/lib/classNames"
import ArrowRight from "@/assets/arrow-small-right-svgrepo-com.svg?react"
import ArrowLeft from "@/assets/arrow-small-left-svgrepo-com.svg?react"
import { useTheme } from "@/app/Theme/ui";
import styled from 'styled-components';

const StyledArrowLeft = styled(ArrowLeft)`
  /* Your CSS styles here */
  fiil: red;
`;

const StyledArrowRight = styled(ArrowRight)`
  /* Your CSS styles here */
`;

export interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false)
    const [theme] = useTheme();

    const toogle = () => {
        setCollapsed(prev => !prev)
    }


    return (
        <div className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>
            <StyledArrowLeft />
            <ArrowRight />
        </div>
    )
};