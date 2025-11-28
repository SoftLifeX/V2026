/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://ismailchabane.com',
    generateRobotsTxt: true,
    sitemapSize: 5000,
    additionalPaths: async () => ([
      { loc: 'https://ismailchabane.com/' },
      { loc: 'https://ismailchabane.com/projects/africkana' },
      { loc: 'https://ismailchabane.com/projects/kora-awards' },
      { loc: 'https://ismailchabane.com/projects/sofimed-maroc' },
      { loc: 'https://ismailchabane.com/projects/softskills-club' },
      { loc: 'https://ismailchabane.com/projects/vote-moi' },
      { loc: 'https://ismailchabane.com/projects/pdf-orca' },
    ]),
  };