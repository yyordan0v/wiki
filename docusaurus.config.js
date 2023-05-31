// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Wiki • Lotus Mu',
  tagline: 'Lotus Mu Wiki: Your Go-To Destination for Game Mechanics, Tips, and Tricks',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://wiki.lotusmu.org',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  // organizationName: 'dunbby', // Usually your GitHub org/user name.
  // projectName: 'wiki', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: false,

        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Lotus Mu Wiki',
        logo: {
          alt: 'Lotus Mu Logo',
          src: 'img/logo-black.svg',
          srcDark: 'img/logo-white.svg',
        },
        items: [
          {
            href: 'https://lotusmu.org',
            label: 'Lotus Mu',
            position: 'right',
          },
        ],
        hideOnScroll: true,
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Learn',
            items: [
              {
                label: 'Introduction',
                to: '/',
              },
              {
                label: 'Game Client',
                to: 'category/game-client-features',
              },
              {
                label: 'Events',
                to: '/category/events',
              },
              {
                label: 'Crafting',
                to: '/category/crafting',
              },
            ],
          },
          {
            title: 'Useful Links',
            items: [
              {
                label: 'Registration',
                href: 'https://lotusmu.org/registration',
              },
              {
                label: 'Downloads',
                href: 'https://lotusmu.org/downloads',
              },
              {
                label: 'Server Rules',
                href: 'https://lotusmu.org/rules',
              },
              {
                label: 'Support Us by Voting',
                href: 'https://lotusmu.org/vote-reward',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Forum',
                href: 'https://forum.lotusmu.org',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/',
              },
              {
                label: 'Facebook',
                href: 'https://facebook.com/',
              },
            ],
          },
          {
            title: 'Contacts',
            items: [
              {
                label: 'support@lotusmu.org',
                href: 'mailto:support@lotusmu.org',
              },
            ],
          },
        ],
        logo: {
          alt: 'Lotus Mu Logo',
          src: 'img/logo-full.png',
          href: 'https://lotusmu.org',
          height: 60,
        },
        copyright: `Copyright © ${new Date().getFullYear()} Lotus Mu Wiki.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        // The application ID provided by Algolia
        appId: 'GOKI4JCJ1U',
  
        // Public API key: it is safe to commit it
        apiKey: 'f48a2e1992f6a5c068a896a22f66c1c0',
  
        indexName: 'lotusmu',
  
        // Optional: see doc section below
        contextualSearch: true,
  
        // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
        replaceSearchResultPathname: {
          from: '/docs/', // or as RegExp: /\/docs\//
          to: '/',
        },
  
        // Optional: Algolia search parameters
        searchParameters: {},

        // Search placeholder [default: "Search docs"]
        placeholder: 'Search for anything ...',
  
        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search',
  
        //... other Algolia params
      },
    }),
};

module.exports = config;

