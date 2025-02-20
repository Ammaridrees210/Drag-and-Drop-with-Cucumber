const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");

async function setupNodeEvents(on, config) {
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin.default(config)],
    })
  );

  return config;
}


module.exports = defineConfig({
  defaultCommandTimeout:50000,
  e2e: {
    baseUrl: 'https://dev.platform.creatingly.com/apps/',
    specPattern: "cypress/e2e/features/*.feature",
    setupNodeEvents,
  },
  });
