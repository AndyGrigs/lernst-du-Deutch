import React from "react";
import cl from "./Navbar.module.scss";
import { classNames } from "@/shared/lib/classNames";
import { AppLink, AppLinkTheme } from "@/shared/ui/AppLink/AppLink";
import { ThemeSwitcher } from "@/shared/ui/ThemeSwitcher";



interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(cl.Navbar, {}, [className])}>
      <AppLink theme={AppLinkTheme.PRIMARY} to="/about">
        About
      </AppLink>
      <AppLink theme={AppLinkTheme.PRIMARY} to="/">
        Home
      </AppLink>
      <ThemeSwitcher />
    </div>
  );
};
