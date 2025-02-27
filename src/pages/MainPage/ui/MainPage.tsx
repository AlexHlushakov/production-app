import React from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
// import { BugButton } from 'app/providers/ErrorBoundary';
import cls from './MainPage.module.scss';

interface MainPageProps {
    className?: string
}

const MainPage = ({ className }: MainPageProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.mainPage, {}, [])}>
            {/* <BugButton /> */}
            {t('Main Page')}
        </div>
    );
};

export default MainPage;
