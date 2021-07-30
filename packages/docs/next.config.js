const config = {
	reactStrictMode: true,
};

const withNextra = require("nextra")("nextra-theme-docs", "./theme.config.js");
module.exports = withNextra(config);
