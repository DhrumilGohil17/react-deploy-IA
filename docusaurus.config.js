// @ts-nocheck
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Writing Team Internal Docs',

  // Set the production url of your site here
  url: 'https://inductive-automation.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  deploymentBranch: 'gh-pages',
  // @ts-ignore
  favicon: 'img/docs-logo.ico',
  trailingSlash: false,
  baseUrl: '/',

  projectName: 'writing-team-internal-docs',
  organizationName: 'inductive-automation',


  noIndex: true,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.




 

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
          routeBasePath: '/', // Serve the docs at the site's root
          /* other docs plugin options */
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Writing Team Internal Docs',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
      },
      footer: {
        style: 'dark',

        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
    }),
};

export default config;
