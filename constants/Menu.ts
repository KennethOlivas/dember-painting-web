export type MenuItem = {
    name: string;
    path: string;
    icon?: string;
    children?: MenuItem[];
};

export const Menu: MenuItem[] = [
    {
        name: 'Home',
        path: '/',
    },
    {
        name: 'Services',
        path: '/#services',
    },
    {
        name: 'About',
        path: '/#about',
    },
    {
        name: 'Gallery',
        path: '/gallery',
    },
];
