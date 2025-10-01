/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://hms-seven-green.vercel.app", // your domain
  generateRobotsTxt: true,
  sitemapSize: 5000,
  exclude: ["/about", "/contact", "/dashboard", "/*"], // exclude all other routes
  transform: async (config, path) => {
    // Only include the homepage "/"
    if (path === "/") {
      return {
        loc: path,
        changefreq: "daily",
        priority: 1.0,
        lastmod: new Date().toISOString(),
      };
    }
    // Exclude everything else
    return null;
  },
};
