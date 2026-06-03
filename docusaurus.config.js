// @ts-check

import {themes as prismThemes} from 'prism-react-renderer';

const config = {
  title: 'Protokin cOS',
  tagline: 'Architecture des conditions de stabilisation des descriptions',
  favicon: 'img/favicon.ico',

  url: 'https://newgeko.github.io',
  baseUrl: '/protokin-cos-site/',

  organizationName: 'newgekko',
  projectName: 'protokin-cos-site',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'fr',
    locales: ['fr'],
  },

  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'Protokin cOS',
      items: [
        {to: '/', label: 'Docs', position: 'left'},
        {to: '/architecture', label: 'Architecture', position: 'left'},
        {to: '/tensions', label: 'Tensions', position: 'left'},
        {to: '/transitions', label: 'Transitions', position: 'left'},
        {to: '/audits', label: 'Audits', position: 'left'},
        {
          href: 'https://github.com/YOUR_USERNAME/protokin-cos-site',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },

    footer: {
      style: 'dark',
      links: [
        {
          title: 'Structure',
          items: [
            {label: 'Architecture', to: '/architecture'},
            {label: 'Régimes', to: '/regimes'},
            {label: 'Tensions', to: '/tensions'},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Protokin cOS`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;