module.exports = {
  title: 'React Flow',
  tagline: 'Highly customizable library for creating node based editors, diagrams and charts.',
  url: 'https://reactflow.dev',
  baseUrl: '/',
  onBrokenLinks: 'log',
  favicon: 'img/favicon.ico',
  organizationName: 'wbkd',
  projectName: 'react-flow-docs',
  customFields: {
    meta: {
      title: 'React Flow API docs',
      description: 'Highly customizable React.js library for creating node based editors, diagrams and charts.',
    },
  },
  themeConfig: {
    sidebarCollapsible: false,
    colorMode: {
      disableSwitch: true,
    },
    navbar: {
      title: 'Home',
      logo: {
        alt: 'ReactFlow',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          to: 'examples/',
          activeBasePath: 'examples',
          label: 'Examples',
          position: 'left',
        },
        {
          href: 'https://github.com/wbkd/react-flow',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'API',
              to: 'docs/',
            },
            {
              label: 'Examples',
              to: 'examples/',
            },
          ],
        },

        {
          title: 'Contact',
          items: [
            {
              label: 'Twitter',
              to: 'https://twitter.com/webk1d',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/wbkd/react-flow',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} <a href="https://webkid.io">webkid</a>`,
    },
  },
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'examples',
        path: 'examples',
        editUrl: 'https://github.com/wbkd/react-flow/edit/main/docs/',
        routeBasePath: 'examples',
        sidebarPath: require.resolve('./sidebarsExamples.js'),
        showLastUpdateAuthor: false,
        showLastUpdateTime: false,
      },
    ],
  ],
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/wbkd/react-flow/edit/main/docs/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
