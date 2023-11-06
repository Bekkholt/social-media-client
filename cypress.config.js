const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://bekkholt.github.io/social-media-client/',
  },
});
