// import { Theme } from 'app/providers/ThemeProvider/lib/ThemeContext';
// import { Story } from '@storybook/react';
//
// export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => (
//     <div className={`app ${theme}`}>
//         <StoryComponent theme={theme} />
//     </div>
// );

import { Story } from '@storybook/react';
import { Theme, ThemeProvider } from 'app/providers/ThemeProvider';

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => (
    <ThemeProvider initialTheme={theme}>
        <div className={`app ${theme}`}>
            <StoryComponent />
        </div>
    </ThemeProvider>
);
