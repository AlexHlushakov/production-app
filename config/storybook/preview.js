import { addDecorator } from '@storybook/react';
import i18n from 'shared/config/i18n/i18n';
import {
    I18nextStoryDecorator,
} from '../../src/shared/config/storybook/decorators/TranslationDecorator';
import { StyleDecorator } from '../../src/shared/config/storybook/decorators/StyleDecorator';
import { ThemeDecorator } from '../../src/shared/config/storybook/decorators/ThemeDecorator';
import { RouterDecorator } from '../../src/shared/config/storybook/decorators/RouterDecorator';
import { Theme } from '../../src/app/providers/ThemeProvider/lib/ThemeContext';

export const parameters = {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
};

// Create a global variable called locale in storybook
// and add a dropdown in the toolbar to change your locale
export const globalTypes = {
    locale: {
        name: 'Locale',
        description: 'Internationalization locale',
        toolbar: {
            icon: 'globe',
            items: [
                { value: 'en', right: '🇺🇸', title: 'English' },
                { value: 'ru', right: '🇷🇺', title: 'Russian' },
            ],
            title: true,
        },
    },
};

// When The language changes, set the document direction
i18n.on('languageChanged', (locale) => {
    const direction = i18n.dir(locale);
    document.dir = direction;
});

// export const decorators = [
//     StyleDecorator,
//     RouterDecorator,
//     I18nextStoryDecorator,
//     ThemeDecorator(Theme.LIGHT),
// ];
addDecorator(StyleDecorator);
addDecorator(I18nextStoryDecorator);
addDecorator(ThemeDecorator(Theme.LIGHT));
addDecorator(RouterDecorator);
