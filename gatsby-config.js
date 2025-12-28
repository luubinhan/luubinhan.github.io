const guid = process.env.NETLIFY_GOOGLE_ANALYTICS_ID;

module.exports = {
  siteMetadata: {
    title: 'Luu Binh An - Senior Frontend Developer & Educator',
    description: 'Senior Frontend Developer | AWS Certified Solutions Architect | Frontend Education & Mentorship',
    contact: {
    },
    menuLinks: [
      {
        name: 'Work',
        link: '/portfolio',
      },
      {
        name: 'Me',
        link: '/contact',
      },
      {
        name: 'Blog',
        link: 'https://luubinhan.github.io/blog/',
      },
    ],
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        sassOptions: {
          includePaths: [
            `${__dirname}/node_modules`,
          ],
          silenceDeprecations: ['slash-div', 'abs-percent'],
        },
      },
    },
    // 'gatsby-plugin-offline', // Disabled due to compatibility issues with Node 18+
    'gatsby-transformer-json',
    'gatsby-transformer-remark',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/data`,
        name: 'data',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/images`,
        name: 'images',
      },
    },
    {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        trackingIds: [
          guid || 'UA-29685098-2',
        ],
        pluginConfig: {
          head: false,
        },
      },
    },
  ],
};
