// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const {themes} = require('prism-react-renderer');
const lightTheme = themes.github;
const darkTheme = themes.dracula;

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
      image: 'img/lotus-social-card.jpg',
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
                label: 'Discord',
                href: 'https://discord.com/HQGpHQ69uc',
              },
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/people/Lotus-Mu/61551508616563/',
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
        theme: lightTheme,
        darkTheme: darkTheme,
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
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
    }),
};

export default {
  themeConfig: {
    // Declare some <meta> tags
    metadata: [
      {name: 'keywords', content: 'Mu Online private server, Private server for Mu Online, Lotus Mu private server, Mu Online gameplay guide, Lotus Mu getting started, Mu Online beginners guide, Lotus Mu monsters, Mu Online epic invasions, Monster guide for Mu Online, Lotus Mu items guide, Mu Online equipment tiers, Rare loot in Mu Online, Mu Online enchantment guide, Crafting systems in Lotus Mu, Optimal enchantment strategies, Mu Online in-game events, Lotus Mu event guide, Challenges and rewards in Mu Online, Lotus Mu Skin System, Character customization in Mu Online, Visual appearance in Lotus Mu, Lotus Mu game client features, Mu Online client tools, Immersive gameplay in Lotus Mu, Lotus Mu documentation search, Mu Online wiki search, Efficient search in Lotus Mu documentation, Lotus Mu community forums, Mu Online player experiences, Inclusive gaming environment in Lotus Mu, Lotus Mu Discord, Mu Online Facebook community, Social media for Lotus Mu, Improve Lotus Mu documentation, File documentation issues, Provide feedback for Lotus Mu wiki'}
    ],
    headTags: [
      // Declare a <link> preconnect tag
      {
        tagName: 'link',
        attributes: {
          rel: 'preconnect',
          href: 'https://wiki.lotusmu.org',
        },
      },
      // Declare some json-ld structured data
      {
        tagName: 'script',
        attributes: {
          type: 'application/ld+json',
        },
        innerHTML: JSON.stringify({
          '@context': 'https://lotusmu.org/',
          '@type': 'Organization',
          name: 'Lotus Mu',
          url: 'https://wiki.lotusmu.org/',
          logo: 'https://wiki.lotusmu.org/img/logo-black.svg',
        }),
      },
    ],
  },
};

module.exports = config;