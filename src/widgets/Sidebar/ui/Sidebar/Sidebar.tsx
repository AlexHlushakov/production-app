import { classNames } from 'shared/lib/classNames/classNames';
import React, { memo, useMemo, useState } from 'react';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LanguageSwitcher } from 'widgets/LanguageSwitcher';
import { SidebarItemsList } from 'widgets/Sidebar/model/items';
import { SidebarItem } from 'widgets/Sidebar/ui/SidebarItem/SidebarItem';
import cls from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar = memo(({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed((prev) => !prev);
    };

    const itemsList = useMemo(() => SidebarItemsList.map((item) => (
        <SidebarItem
            item={item}
            collapsed={collapsed}
            key={item.path}
        />
    )), [collapsed]);

    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [
                className,
            ])}
        >
            <Button
                data-testid="sidebar-toggle"
                onClick={onToggle}
                className={cls.collapseBtn}
                themeBtn={ButtonTheme.BACKGROUND_INVERTED}
                square
                size={ButtonSize.L}
            >
                {collapsed ? '>' : '<'}
            </Button>
            <div className={cls.items}>
                {itemsList}
            </div>
            {/* <div className={classNames( */}
            {/*    cls.items, */}
            {/*    { [cls.collapsed]: collapsed }, */}
            {/*    [className], */}
            {/* )} */}
            {/* > */}
            {/*    <AppLink */}
            {/*        theme={AppLinkTheme.PRIMARY_INVERTED} */}
            {/*        to={RoutePath.main} */}
            {/*        className={cls.item} */}
            {/*    > */}
            {/*        <MainIcon className={cls.linkIcon} /> */}
            {/*        <span className={cls.link}>{t('Link Main')}</span> */}
            {/*    </AppLink> */}
            {/*    <AppLink */}
            {/*        theme={AppLinkTheme.PRIMARY_INVERTED} */}
            {/*        to={RoutePath.about} */}
            {/*        className={cls.item} */}
            {/*    > */}
            {/*        <AboutIcon className={cls.linkIcon} /> */}
            {/*        <span className={cls.link}>{t('Link About')}</span> */}
            {/*    </AppLink> */}
            {/* </div>div */}
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LanguageSwitcher sidebarCollapsed={collapsed} className={cls.lang} />
            </div>
        </div>
    );
});
