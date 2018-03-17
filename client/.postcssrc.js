// https://github.com/michael-ciniawsky/postcss-load-config

const createResolver = require('postcss-import-webpack-resolver');

module.exports = {
  "plugins": {
    "postcss-import": {
      resolve: createResolver({
        modules: ['src', 'src/styles', 'node_modules']
      })
    },
    "postcss-url": {},
    // to edit target browsers: use "browserslist" field in package.json
    "rucksack-css": {},
    "postcss-short": {},
    "postcss-cssnext": {}
  }
}
