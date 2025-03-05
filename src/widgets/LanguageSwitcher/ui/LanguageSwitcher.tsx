import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';

interface LanguageSwitcherProps {
  className?: string;
  sidebarCollapsed?: boolean;
}

export const LanguageSwitcher = ({ className, sidebarCollapsed }: LanguageSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggleLanguage = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <Button
            className={classNames('', {}, [className])}
            onClick={toggleLanguage}
            themeBtn={ButtonTheme.OUTLINE_INVERTED}
            size={ButtonSize.S}
        >
            {sidebarCollapsed ? t('Language Short') : t('Language')}
        </Button>
    );
};
