const BaseConfig = require("../.lintstagedrc.js");

module.exports = {
  ...BaseConfig,
  "*.{js,jsx,ts,tsx}": ["npm run lint"],
};
