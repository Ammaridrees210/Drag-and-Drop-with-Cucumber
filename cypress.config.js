const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");
const { configureVisualRegression } = require("cypress-visual-regression");

async function setupNodeEvents(on, config) {
  configureVisualRegression(on);
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
  video: true,
  defaultCommandTimeout: 30000,
  e2e: {
    env: {
      visualRegressionType: "regression",
      visualRegressionGenerateDiff: "always"
    },
    baseUrl: "https://dev.platform.creatingly.com/apps/",
    specPattern: "cypress/e2e/features/*.feature",
    setupNodeEvents,
  },
});
