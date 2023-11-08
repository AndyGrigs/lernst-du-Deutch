import { useCallback, useState } from "react";
import cls from "./Navbar.module.scss";
import { classNames } from "@/shared/lib/classNames";
import { AppLink, AppLinkTheme } from "@/shared/ui/AppLink/AppLink";
import { ThemeSwitcher } from "@/shared/ui/ThemeSwitcher";
import { Button, ButtonTheme } from "@/shared/ui/Button/Button";
import { Modal } from "@/shared/ui/Modal/ui/Modal";
import LogInIcon from "@/assets/log-in-03-svgrepo-com.svg?react";
import { Theme, useTheme } from "@/app/Theme/ui";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const [isAuthModal, setIsAuthModal] = useState(false);
  const [theme] = useTheme();
  const isLightTheme = theme != Theme.DARK;
  const onToggleModal = useCallback(() => {
    setIsAuthModal((prev) => !prev);
  }, []);

  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <AppLink theme={AppLinkTheme.PRIMARY} to="/about">
        About
      </AppLink>
      <AppLink theme={AppLinkTheme.PRIMARY} to="/">
        Home
      </AppLink>
      <Button
        theme={ButtonTheme.CLEAR_INVERTED}
        className={cls.links}
        onClick={onToggleModal}
      >
        <LogInIcon
          className={classNames(cls.login_icon, { isLightTheme }, [
            className,
            cls[theme],
          ])}
        />
      </Button>
      <Modal isOpen={isAuthModal} onClose={onToggleModal}>
        'Lorem ipsum dolor sit amet, uid commodi conseq
      </Modal>
      <ThemeSwitcher />
    </div>
  );
};
