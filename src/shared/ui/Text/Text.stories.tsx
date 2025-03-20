import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/decorators/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
import { Text, TextTheme } from 'shared/ui/Text/Text';

export default {
    title: 'shared/Text',
    component: Text,
} as ComponentMeta<typeof Text>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    theme: TextTheme.PRIMARY,
    title: 'Text title here',
    text: 'Text of the article is placed here. '
        + 'this is an example text for reference. '
        + 'It show how the text will look like in Text component',
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
    theme: TextTheme.PRIMARY,
    title: 'Text title here',
    text: 'Text of the article is placed here. '
        + 'this is an example text for reference. '
        + 'It show how the text will look like in Text component',
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Error = Template.bind({});
Error.args = {
    theme: TextTheme.ERROR,
    title: 'An Error Occurred',
    text: 'Unexpected Error has occurred. Please, reload the page',
};

export const ErrorDark = Template.bind({});
ErrorDark.args = {
    theme: TextTheme.ERROR,
    title: 'An Error Occurred',
    text: 'Unexpected Error has occurred. Please, reload the page',
};
ErrorDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTitle = Template.bind({});
OnlyTitle.args = {
    theme: TextTheme.PRIMARY,
    title: 'Text title here',
};

export const OnlyTitleDark = Template.bind({});
OnlyTitleDark.args = {
    theme: TextTheme.PRIMARY,
    title: 'Text title here',
};
OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyText = Template.bind({});
OnlyText.args = {
    theme: TextTheme.PRIMARY,
    text: 'Text of the article is placed here. '
        + 'this is an example text for reference. '
        + 'It show how the text will look like in Text component',
};

export const OnlyTextDark = Template.bind({});
OnlyTextDark.args = {
    theme: TextTheme.PRIMARY,
    text: 'Text of the article is placed here. '
        + 'this is an example text for reference. '
        + 'It show how the text will look like in Text component',
};
OnlyTextDark.decorators = [ThemeDecorator(Theme.DARK)];
