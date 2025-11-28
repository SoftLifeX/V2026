/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://softlifex.vercel.app/',
    generateRobotsTxt: true,
    sitemapSize: 5000,
    additionalPaths: async () => ([
      { loc: 'https://softlifex.vercel.app/' },
      { loc: 'https://softlifex.vercel.app/projects' }
    ]),
  };
