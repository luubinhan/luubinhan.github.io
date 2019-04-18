const guid = process.env.NETLIFY_GOOGLE_ANALYTICS_ID;

module.exports = {
  siteMetadata: {
    title: 'luubinhan.github.io',
    description: 'Trang web cá nhân | Luu Binh An',
    contact: {
      phone: '',
      skype: 'luu.binh.an',
      zalo: 'luubinhan',
      email: 'luubinhan1989@gmail.com',
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
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
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
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'luubinhan.github.io',
        short_name: 'luubinhan.github.io',
        start_url: '/',
        background_color: '#202230',
        theme_color: '#38adba',
        display: 'standalone',
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: guid || 'UA-29685098-2',
        // Puts tracking script in the head instead of the body
        head: false,
      },
    },
  ],
};
