import { classNames } from "@/shared/lib/classNames";
import cls from "./ThemeSwitcher.module.scss";
import { Theme } from "@/app/Theme/ui";
import { useTheme } from "@/app/Theme/ui";
import { Button, ThemeButton } from "../../Button/Button";
import { Icon } from "../../Icon";

export interface ThemeSwitcherProps {
  className?: string;
}


export interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const [theme, toggleTheme] = useTheme();
  const isLightTheme = theme !== Theme.DARK;

  return (
    <>
      <Button
        theme={ThemeButton.CLEAR}
        className={classNames(cls.ThemeSwitcher, {}, [className])}
        onClick={toggleTheme}
      >
        <Icon theme={isLightTheme ? Theme.LIGHT : Theme.DARK} />
      </Button>
    </>
  );
};

