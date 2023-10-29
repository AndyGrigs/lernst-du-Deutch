
import React, { useState } from "react";
import cls from "./Sidebar.module.scss"
import { classNames } from "@/shared/lib/classNames"

export interface SidebarProps {
    className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false)

    const toogle = () => {
        setCollapsed(prev => !prev)
    }


    return (
        <div className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}>

        </div>
    )
};