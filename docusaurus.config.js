import {themes as prismThemes} from 'prism-react-renderer';

module.exports = {
  title: 'Docusaurus',
  tagline: 'docusaurus help',
  favicon: 'img/favicon.ico',

  url: 'https://MarkLukyanov.github.io',
  baseUrl: '/',

  organizationName: 'MarkLukyanov',
  projectName: 'MarkLukyanov.github.io',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  presets: [
    [
      '@docusaurus/preset-classic',
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    ({
      navbar: { // Панель навигации
        title: 'Документация',
        logo: {
          alt: 'Документация',
          src: 'img/logo.svg',
        },
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

