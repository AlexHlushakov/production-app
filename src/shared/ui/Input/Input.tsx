import { classNames } from 'shared/lib/classNames/classNames';
import React, {
    InputHTMLAttributes, memo, useEffect, useRef,
} from 'react';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

export enum InputTheme {
    // eslint-disable-next-line no-unused-vars
    CLEAR = 'clear',
    BORDERED = 'bordered',
    BORDERED_INVERTED = 'borderedInverted',
}

interface InputProps extends HTMLInputProps {
    className?: string;
    theme?: InputTheme
    value?: string;
    onChange?: (value: string) => void;
    autofocus?: boolean;
    disabled?: boolean;
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        value,
        theme = InputTheme.BORDERED,
        onChange,
        type = 'text',
        placeholder,
        autofocus,
        disabled,
        ...otherProps
    } = props;
    const ref = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (autofocus) {
            ref.current?.focus();
        }
    }, [autofocus]);

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    return (
        <div className={classNames(cls.InputWrapper, {}, [className, cls[theme]])}>
            {placeholder && (
                <div className={cls.placeholder}>
                    {`${placeholder}>`}
                </div>
            )}
            <input
                ref={ref}
                type={type}
                value={value}
                onChange={onChangeHandler}
                className={cls.input}
                disabled={disabled}
                {...otherProps}
            />
        </div>
    );
});
