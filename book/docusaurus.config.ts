import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Quiet Steps on the Dhamma Road',
  tagline: 'A layman’s reflections on his understanding of Buddhism',
  favicon: 'img/favicon.ico',

  url: 'https://your-dhamma-site.example.com',
  baseUrl: '/',

  organizationName: 'quiet-steps', // Update to your organization name
  projectName: 'dhamma-road', // Update to your project name

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/dhamma-social-card.jpg',
    navbar: {
      title: 'Quiet Steps',
      logo: {
        alt: 'Quiet Steps Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'The Journey',
        },
        {
          href: 'https://github.com/quiet-steps/dhamma-road',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Resources',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/quiet-steps/dhamma-road',
            },
          ],
        },
      ],
      copyright: `No Copyright © ${new Date().getFullYear()} Quiet Steps. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;