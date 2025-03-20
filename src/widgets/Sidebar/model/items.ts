import React from 'react';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import AboutIcon from 'shared/assets/about.svg';
import MainIcon from 'shared/assets/home.svg';
import ProfileIcon from 'shared/assets/profile.svg';

export interface SidebarItemType {
    path: string;
    text: string;
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
}

export const SidebarItemsList: SidebarItemType[] = [
    {
        path: RoutePath.main,
        Icon: MainIcon,
        text: 'Link Main',
    },
    {
        path: RoutePath.about,
        Icon: AboutIcon,
        text: 'Link About',
    },
    {
        path: RoutePath.profile,
        Icon: ProfileIcon,
        text: 'Link Profile',
    },
];
