// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const {themes} = require('prism-react-renderer');
const lightTheme = themes.github;
const darkTheme = themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Wiki • Mu Mayhem',
  tagline: 'Mu Mayhem Wiki: Your Go-To Destination for Game Mechanics, Tips, and Tricks',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://wiki.mayhem.mu',
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
      image: 'img/mayhem-social-card.jpg',
      navbar: {
        title: 'Mu Mayhem Wiki',
        logo: {
          alt: 'Mu Mayhem Logo',
          src: 'img/logo.svg',
          srcDark: 'img/logo-dark.svg',
        },
        items: [
          {
            href: 'https://mayhem.mu',
            label: 'Mu Mayhem',
            position: 'right',
          },
        ],
        hideOnScroll: true,
      },
      footer: {
        style: 'dark',
        logo: {
          alt: 'Mu Mayhem Logo',
          src: 'img/logo-dark.svg',
          href: 'https://mayhem.mu',
          height: 100,
        },
        copyright: `Copyright © ${new Date().getFullYear()} Mu Mayhem Wiki.`,
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
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
    }),
};

export default {
  themeConfig: {
    // Declare some <meta> tags
    metadata: [
      {name: 'keywords', content: 'Mu Online private server, Private server for Mu Online, Mu Mayhem private server, Mu Online gameplay guide, Mu Mayhem getting started, Mu Online beginners guide, Mu Mayhem monsters, Mu Online epic invasions, Monster guide for Mu Online, Mu Mayhem items guide, Mu Online equipment tiers, Rare loot in Mu Online, Mu Online enchantment guide, Crafting systems in Mu Mayhem, Optimal enchantment strategies, Mu Online in-game events, Mu Mayhem event guide, Challenges and rewards in Mu Online, Mu Mayhem Skin System, Character customization in Mu Online, Visual appearance in Mu Mayhem, Mu Mayhem game client features, Mu Online client tools, Immersive gameplay in Mu Mayhem, Mu Mayhem documentation search, Mu Online wiki search, Efficient search in Mu Mayhem documentation, Mu Mayhem community forums, Mu Online player experiences, Inclusive gaming environment in Mu Mayhem, Mu Mayhem Discord, Mu Online Facebook community, Social media for Mu Mayhem, Improve Mu Mayhem documentation, File documentation issues, Provide feedback for Mu Mayhem wiki'}
    ],
    headTags: [
      // Declare a <link> preconnect tag
      {
        tagName: 'link',
        attributes: {
          rel: 'preconnect',
          href: 'https://wiki.mayhem.mu',
        },
      },
      // Declare some json-ld structured data
      {
        tagName: 'script',
        attributes: {
          type: 'application/ld+json',
        },
        innerHTML: JSON.stringify({
          '@context': 'https://mayhem.mu/',
          '@type': 'Organization',
          name: 'Mu Mayhem',
          url: 'https://wiki.mayhem.mu/',
          logo: 'https://wiki.mayhem.mu/img/logo.svg',
        }),
      },
    ],
  },
};

module.exports = config;