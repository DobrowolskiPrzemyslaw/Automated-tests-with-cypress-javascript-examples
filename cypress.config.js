const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}",
    env: {
      webdriveruni_homepage: "https://webdriveruniversity.com/",
      first_name: "Joe"
    }
  },
});
