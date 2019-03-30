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
        name: 'Dự Án',
        link: '/portfolio',
      },
      {
        name: 'Blog',
        link: 'https://luubinhan.github.io/blog/',
      },
      {
        name: 'Liên hệ',
        link: '/contact',
      },
    ],
  },
  plugins: [
    'gatsby-plugin-sass',
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
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: guid || 'UA-XXX-1',
        // Puts tracking script in the head instead of the body
        head: false,
      },
    },
  ],
};
