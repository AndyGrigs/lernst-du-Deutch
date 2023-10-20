import { classNames } from "@/shared/lib/classNames";
import cls from "./ThemeSwitcher.module.scss";
import { Theme } from "@/app/Theme/ui";
import { useTheme } from "@/app/Theme/ui";
import { Button, ThemeButton } from "../../Button/Button";
import Moon from "@/assets/mode-dark-svgrepo-com.svg";
import { Icon } from "../../Icon";

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
        {theme === Theme.DARK ? (
          <Icon src={Moon} alt="dark mode" />
        ) : (
          <Icon src={Moon} alt="dark mode" />
        )}
      </Button>
    </>
  );
};
