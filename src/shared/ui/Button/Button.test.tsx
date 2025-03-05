import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { render, screen } from '@testing-library/react';

describe('ButtonTests', () => {
    test('render button', () => {
        render(<Button>TEST</Button>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });
    test('clear class', () => {
        render(<Button themeBtn={ButtonTheme.CLEAR}>TEST</Button>);
        expect(screen.getByText('TEST')).toHaveClass('clear');
    });
});
