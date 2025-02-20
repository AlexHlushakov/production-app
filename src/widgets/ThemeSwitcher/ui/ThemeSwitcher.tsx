import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from 'app/providers/ThemeProvider';
import LightIcon from 'shared/assets/LightThemeIcon.png';
import DarkIcon from 'shared/assets/DarkThemeIcon.png';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button themeBtn={ThemeButton.CLEAR} onClick={toggleTheme}>
            <img src={theme === Theme.DARK ? LightIcon : DarkIcon} alt="" />
        </Button>
    );
};
