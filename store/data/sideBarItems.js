export default [
  {
    name: 'Menu',
    isTitle: true,
  },
  {
    name: 'Dashboard',
    url: '/',
    icon: 'grid-fill',
    permission: 'dashboard',
  },
  {
    name: 'User Data',
    url: '/userdata',
    icon: 'people-fill',
    permission: 'dashboard',
  },
  {
    name: 'Posts',
    url: '/posts',
    icon: 'people-fill',
    permission: 'post_view',
    submenu: [
      {
        name: 'List',
        url: '/posts',
        permission: 'post_show',
      },
      {
        name: 'Add',
        url: '/posts/add',
        permission: 'post_create',
      },
    ],
  },

  {
    name: 'Softwares',
    url: '/softwares',
    icon: 'people-fill',
    permission: 'software_view',
    submenu: [
      {
        name: 'List',
        url: '/softwares',
        permission: 'software_show',
      },
      {
        name: 'Add',
        url: '/softwares/add',
        permission: 'software_create',
      },
    ],
  },
  {
    name: 'Books',
    url: '/books',
    icon: 'people-fill',
    permission: 'book_view',
    submenu: [
      {
        name: 'List',
        url: '/books',
        permission: 'book_show',
      },
      {
        name: 'Add',
        url: '/books/add',
        permission: 'book_create',
      },
    ],
  },
  {
    name: 'Contacts',
    url: '/contacts',
    icon: 'grid-fill',
    permission: 'contact_view',
  },
  {
    name: 'Users',
    url: '/users',
    icon: 'person-fill',
    permission: 'user_show',
    submenu: [
      {
        name: 'List',
        url: '/users',
        permission: 'user_show',
      },
      {
        name: 'Add',
        url: '/users/add',
        permission: 'user_create',
      },
    ],
  },
]
