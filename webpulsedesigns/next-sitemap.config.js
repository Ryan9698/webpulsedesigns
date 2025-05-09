/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.webpulsedesigns.com',
  generateRobotsTxt: true,
  sitemapSize: 5000,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/server-scripts/*'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
};
