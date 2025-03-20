import React from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './MainPage.module.scss';

interface MainPageProps {
    className?: string
}

const MainPage = ({ className }: MainPageProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.mainPage, {}, [])}>
            {t('Main Page')}
        </div>
    );
};

export default MainPage;
