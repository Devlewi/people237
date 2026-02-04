/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://www.people237.com',  // CORRIGÉ : un seul .com
    generateRobotsTxt: true, 
    sitemapSize: 5000,
    changefreq: 'daily',
    priority: 0.7,
    additionalSitemaps: [
      'https://www.people237.com/api/sitemap-articles',  // CORRIGÉ : un seul .com
    ],
  };