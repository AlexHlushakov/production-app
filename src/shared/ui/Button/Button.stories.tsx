import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';

export default {
    title: 'shared/Button',
    component: Button,
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Clear = Template.bind({});
Clear.args = {
    children: 'Text',
    themeBtn: ButtonTheme.CLEAR,
};

export const ClearDark = Template.bind({});
ClearDark.args = {
    children: 'Text',
    themeBtn: ButtonTheme.CLEAR,
};
ClearDark.decorators = [ThemeDecorator(Theme.DARK)];

export const ClearL = Template.bind({});
ClearL.args = {
    children: 'Text',
    themeBtn: ButtonTheme.CLEAR,
    size: ButtonSize.L,
};

export const ClearDarkL = Template.bind({});
ClearDarkL.args = {
    children: 'Text',
    themeBtn: ButtonTheme.CLEAR,
    size: ButtonSize.L,
};
ClearDarkL.decorators = [ThemeDecorator(Theme.DARK)];

export const ClearXL = Template.bind({});
ClearXL.args = {
    children: 'Text',
    themeBtn: ButtonTheme.CLEAR,
    size: ButtonSize.XL,
};

export const ClearDarkXL = Template.bind({});
ClearDarkXL.args = {
    children: 'Text',
    themeBtn: ButtonTheme.CLEAR,
    size: ButtonSize.XL,
};
ClearDarkXL.decorators = [ThemeDecorator(Theme.DARK)];

export const Outline = Template.bind({});
Outline.args = {
    children: 'Text',
    themeBtn: ButtonTheme.OUTLINE,
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
    children: 'Text',
    themeBtn: ButtonTheme.OUTLINE,
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OutlineL = Template.bind({});
OutlineL.args = {
    children: 'Text',
    themeBtn: ButtonTheme.OUTLINE,
    size: ButtonSize.L,
};

export const OutlineDarkL = Template.bind({});
OutlineDarkL.args = {
    children: 'Text',
    themeBtn: ButtonTheme.OUTLINE,
    size: ButtonSize.L,
};
OutlineDarkL.decorators = [ThemeDecorator(Theme.DARK)];

export const OutlineXL = Template.bind({});
OutlineXL.args = {
    children: 'Text',
    themeBtn: ButtonTheme.OUTLINE,
    size: ButtonSize.XL,
};

export const OutlineDarkXL = Template.bind({});
OutlineDarkXL.args = {
    children: 'Text',
    themeBtn: ButtonTheme.OUTLINE,
    size: ButtonSize.XL,
};
OutlineDarkXL.decorators = [ThemeDecorator(Theme.DARK)];

export const Background = Template.bind({});
Background.args = {
    children: 'Text',
    themeBtn: ButtonTheme.BACKGROUND,
};

export const BackgroundInverted = Template.bind({});
BackgroundInverted.args = {
    children: 'Text',
    themeBtn: ButtonTheme.BACKGROUND_INVERTED,
};

export const BackgroundDark = Template.bind({});
BackgroundDark.args = {
    children: 'Text',
    themeBtn: ButtonTheme.BACKGROUND,
};
BackgroundDark.decorators = [ThemeDecorator(Theme.DARK)];

export const BackgroundInvertedDark = Template.bind({});
BackgroundInvertedDark.args = {
    children: 'Text',
    themeBtn: ButtonTheme.BACKGROUND_INVERTED,
};
BackgroundInvertedDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Square = Template.bind({});
Square.args = {
    children: '>',
    themeBtn: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.M,
};

export const SquareSizeL = Template.bind({});
SquareSizeL.args = {
    children: '>',
    themeBtn: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.L,
};

export const SquareSizeXL = Template.bind({});
SquareSizeXL.args = {
    children: '>',
    themeBtn: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.XL,
};
