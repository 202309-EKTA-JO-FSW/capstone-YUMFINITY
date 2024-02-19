const path = require("path");
const BaseConfig = require("../.lintstagedrc.js");

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(" --file ")}`;

module.exports = {
  ...BaseConfig,
  "*.{js,jsx,ts,tsx}": [buildEslintCommand],
};
