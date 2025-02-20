import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, FC } from 'react';
import cls from './Button.module.scss';

export enum ThemeButton {
  CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  themeBtn?: ThemeButton;
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className, themeBtn, children, ...otherProps
    } = props;

    return (
        <button
            type="button"
            className={classNames(cls.button, {}, [className, cls[themeBtn]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
