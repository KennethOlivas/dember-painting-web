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
        name: 'About',
        path: '/#about',
    },
    {
        name: 'Services',
        path: '/#services',
    },
    {
        name: 'Gallery',
        path: '/gallery',
    },
    {
        name: "Reviews",
        path: '/#reviews',
    },
    {
        name: "FAQ's",
        path: '/#faq',
    },

];
