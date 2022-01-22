export const adminRoutes = [
  {
    title: 'Tableaux de bord',
    icon: { name: 'home' },
    link: { href: '/admin/dashboard' },
  },
  {
    title: 'MENUS :',
    group: true,
  },
  {
    title: 'Les Talents',
    icon: { name: 'star-outline' },
    link: { href: '/admin/talents' },
  },
  {
    title: 'Matching',
    icon: { name: 'edit-2-outline' },
    link: { href: '/admin/talents' },
  },
  {
    title: 'Les Clients',
    icon: { name: 'keypad-outline' },
    link: { href: '/admin/talents' },
  },

  {
    title: 'Utilisateurs',
    icon: { name: 'lock-outline' },
    children: [
      {
        title: 'Nouveau Utilisateur',
        link: { href: '/admin/users/register' },
      },
      {
        title: 'Gestion Utilisateurs',
        link: { href: '/auth/login' },
      },
    ],
  },
];
