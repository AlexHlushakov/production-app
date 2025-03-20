import { Story, StoryContext } from '@storybook/react';
import { Suspense, useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../../../shared/config/i18n/i18n';

export const I18nextStoryDecorator = (Story: Story, context: StoryContext) => {
    // eslint-disable-next-line react/destructuring-assignment
    const { locale } = context.globals;

    // When the locale global changes
    // Set the new locale in i18n
    useEffect(() => {
        i18n.changeLanguage(locale);
    }, [locale]);

    return (
        // eslint-disable-next-line i18next/no-literal-string
        <Suspense fallback={<div>loading translations...</div>}>
            <I18nextProvider i18n={i18n}>
                <Story />
            </I18nextProvider>
        </Suspense>
    );
};
