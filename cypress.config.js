const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    "baseUrl":"https://forms.office.com/pages/responsepage.aspx?id=is2XW8LLaEmfFhLKD9VwE9lpKmxdveNGmMWKETZvAWNUMzhBV1lYTlc1SDNRS00xRVg4OFhPODlQTS4u",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
