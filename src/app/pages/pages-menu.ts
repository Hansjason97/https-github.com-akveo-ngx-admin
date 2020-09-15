import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'home-outline',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'Users',
    icon: 'people-outline',
    children: [
      {
        title: 'List',
        icon: 'more-vertical-outline',
        link: '/pages/users/list',
      },
      {
        title: 'Details',
        icon: 'clipboard-outline',
        link: '/pages/users/detail',
      },
      {
        title: 'Add',
        icon: 'person-add-outline',
        link: '/pages/users/add',
      },
      {
        title: 'Edit',
        icon: 'person-done-outline',
        link: '/pages/users/edit',
      },
    ],
  },
  {
    title: 'Auth',
    icon: 'lock-outline',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],
  },
];
