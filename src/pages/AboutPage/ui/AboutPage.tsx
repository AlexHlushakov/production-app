import React from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AboutPage.module.scss';

interface AboutPageProps {
    className?: string
}

const AboutPage = ({ className }: AboutPageProps) => {
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.aboutPage, {}, [])}>
            {t('About Page')}
        </div>
    );
};

export default AboutPage;
