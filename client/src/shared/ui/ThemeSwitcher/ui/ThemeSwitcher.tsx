import { classNames } from "@/shared/lib/classNames";
import cls from "./ThemeSwitcher.module.scss";
import { Theme } from "@/app/Theme/ui";
import { useTheme } from "@/app/Theme/ui";
import { Button, ThemeButton } from "../../Button/Button";
import LightIcon from "@/assets/icons/sun_.svg";
import DarkIcon from "@/assets/icons/moon_.svg";

export interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const [theme, toggleTheme] = useTheme();
  return (
    <>
      <Button
        theme={ThemeButton.CLEAR}
        className={classNames(cls.ThemeSwitcher, {}, [className])}
        onClick={toggleTheme}
      >
        {theme === Theme.DARK ? "L" : "D"}
      </Button>
    </>
  );
};
