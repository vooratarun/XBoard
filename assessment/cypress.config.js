const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:8081/',
    fixturesFolder: 'fixtures',
    specPattern: 'specs/**/*.js',
    screenshotsFolder: 'screenshots',
    supportFile: false, // <-- disables support file requirement
    setupNodeEvents(on, config) {
      // If you had plugins logic before, put it here
      return config;
    },
    retries: 2
  },
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    reporterEnabled: 'spec, mocha-junit-reporter'
  }
});

