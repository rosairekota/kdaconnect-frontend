export const DefaultRoutes = [
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
    title: 'Les Talents',
    icon: { name: 'star-outline' },
    children: [
      {
        title: 'Accordion',
        link: { href: '/extra-components/accordion' },
      },
      {
        title: 'Actions',
        link: { href: '/extra-components/actions' },
      },
      {
        title: 'Alert',
        link: { href: '/extra-components/alert' },
      },
      {
        title: 'List',
        link: { href: '/extra-components/list' },
      },
      {
        title: 'Spinner',
        link: { href: '/extra-components/spinner' },
      },
      {
        title: 'Progress Bar',
        link: { href: '/extra-components/progress' },
      },
      {
        title: 'Tabs',
        link: { href: '/extra-components/tabs' },
      },
      {
        title: 'Chat',
        link: { href: '/extra-components/chat' },
      },
      {
        title: 'Cards',
        link: { href: '/extra-components/cards' },
      },
      {
        title: 'Flip Card',
        link: { href: '/extra-components/flip-card' },
      },
      {
        title: 'Reveal Card',
        link: { href: '/extra-components/reveal-card' },
      },
    ],
  },
  {
    title: 'Matching',
    icon: { name: 'edit-2-outline' },
    children: [
      {
        title: 'Inputs',
        link: { href: '/forms/inputs' },
      },
      {
        title: 'Layout',
        link: { href: '/forms/form-layout' },
      },
      {
        title: 'Buttons',
        link: { href: '/forms/buttons' },
      },
      {
        title: 'Select',
        link: { href: '/forms/select' },
      },
    ],
  },
  {
    title: 'Les Clients',
    icon: { name: 'keypad-outline' },
    children: [
      {
        title: 'Grid',
        link: { href: '/ui-features/grid' },
      },
      {
        title: 'Animated Searches',
        link: { href: '/ui-features/search' },
      },
    ],
  },

  {
    title: 'Parametres',
    icon: { name: 'shuffle-2-outline' },
    children: [
      {
        title: '404',
        link: { href: '/miscellaneous/404' },
      },
    ],
  },
  {
    title: 'Utilisateurs',
    icon: { name: 'lock-outline' },
    children: [
      {
        title: 'Gestion Utilisateurs',
        link: { href: '/auth/login' },
      },
      {
        title: 'Créer un nouveau Utilisateur',
        link: { href: '/auth/register' },
      },
      {
        title: 'Request Password',
        link: { href: '/auth/request-password' },
      },
      {
        title: 'Reset Password',
        link: { href: '/auth/reset-password' },
      },
    ],
  },
];
