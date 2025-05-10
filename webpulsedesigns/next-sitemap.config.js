/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://webpulsedesigns.com',
  generateRobotsTxt: true,
  outDir: './public',
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
