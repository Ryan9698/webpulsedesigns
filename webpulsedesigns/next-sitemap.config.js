/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://webpulsedesigns.com',
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
};
