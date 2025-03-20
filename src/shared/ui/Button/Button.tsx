import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, FC } from 'react';
import cls from './Button.module.scss';

export enum ButtonTheme {
    // eslint-disable-next-line no-unused-vars
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clearInverted',
    OUTLINE = 'outline',
    OUTLINE_INVERTED = 'outlineInverted',
    BACKGROUND = 'background',
    BACKGROUND_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
    S = 'size_s',
    M = 'size_m',
    L = 'size_l',
    XL = 'size_xl'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  themeBtn?: ButtonTheme;
  square? : boolean;
  size?: ButtonSize;
  disabled?: boolean;
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        themeBtn,
        children,
        square,
        size,
        disabled,
        ...otherProps
    } = props;

    const mods = {
        [cls.square]: square,
    };

    return (
        <button
            type="button"
            className={classNames(cls.button, mods, [className, cls[themeBtn], cls[size]])}
            disabled={disabled}
            {...otherProps}
        >
            {children}
        </button>
    );
};
