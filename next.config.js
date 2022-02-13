module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["media.graphcms.com"]
  },
  env: {
    GRAPHCMS_TOKEN: process.env.GRAPHCMS_TOKEN,
    GRAPHCMS_URI: process.env.GRAPHCMS_URI
  }
};
