# Implement Cucumber in Cypress 
## By **Ammar Idrees** | [LinkedIn](https://www.linkedin.com/in/muhammad-ammar-idrees-sqa)

---

## 0. Initial scenarios we're going to add as a spec file (we will have more later on)

```feature
Feature: Drag and Drop Element in Artboard

  Scenario: User should be able to drag object and content in Artboard
    Given User navigates to the application
    Given User waits for the loading screen to disappear
    Given User clicks on "Welcome to Design Studio" to create a template
    Given User switches to Desktop View
    When User selects and drags an object to the Artboard
    When User clicks on the Artboard section
    When User selects and drags content to the Artboard
    When User see draged content item is visible then click on it for Edit content
    Then User click on Clear icon and created artoboard are clear

  Scenario: User should be able to drag object and content in Artboard
    Given User navigates to the application
    Given User waits for the loading screen to disappear
    Given User clicks on "Welcome to Design Studio" to create a template
    Given User switches to Desktop View
    When User selects and drags an object toward Artboard View
    When User select an Artboard section to drag label object element
    When User see draged Label item is visible then click on it for Edit label text
    Then User click on Clear icon and created artoboard are clear

  Scenario: User should be able to drag object and content in Artboard
    Given User navigates to the application
    Given User waits for the loading screen to disappear
    Given User clicks on "Welcome to Design Studio" to create a template
    Given User switches to Desktop View
    When User selects and drags an object toward Artboard
    When User click on the selected Artboard section to paste draged object element
    When User see draged paragraph item is visible then click on it for Edit paragraph Text
    Then User click on Clear icon and created artoboard are clear


```
## 1. Initialize node project and install cypress 

```
npm init -y
npm install cypress --save-dev
npx cypress open
```

## 2. Install packages

```javascript
npm install -D @badeball/cypress-cucumber-preprocessor
npm install -D @bahmutov/cypress-esbuild-preprocessor
npm install -D @badeball/cypress-cucumber-preprocessor/esbuild  // Bundle Cypress specs using esbuild - to increase performance
```
## 3. Update cypress configs

`cypress.config.js`

```javascript
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
  video: true,
  defaultCommandTimeout:30000,
  e2e: {
    baseUrl: 'https://dev.platform.creatingly.com/apps/',
    specPattern: "cypress/e2e/features/*.feature",
    setupNodeEvents,
  },
  });

```

## 4. Update "cypress-cucumber-preprocessor" configs (Set step definitions path and make them global)
`package.json`

```javascript
"cypress-cucumber-preprocessor": {
    "step_definitions":  "cypress/e2e/**/*.js",
    "nonGlobalStepDefinitions": false
  }
```
## 5. Add IDE plugin for `.feature` files

This is one of the bests for VS-Code: [Cucumber (Gherkin) Full Support](https://marketplace.visualstudio.com/items?itemName=alexkrechik.cucumberautocomplete)

## 6 .Add feature files

`e2e/features/contentBoxDnD.feature`

```gherkin
Feature: Drag and Drop Element in Artboard

  Scenario: User should be able to drag object and content in Artboard
    Given User navigates to the application
    Given User waits for the loading screen to disappear
    Given User clicks on "Welcome to Design Studio" to create a template
    Given User switches to Desktop View
    When User selects and drags an object to the Artboard
    When User clicks on the Artboard section
    When User selects and drags content to the Artboard
    When User see draged content item is visible then click on it for Edit content
    Then User click on Clear icon and created artoboard are clear
```

`e2e/features/labelContentDnD.feature`

```gherkin
Feature: Drag and Drop Element in Artboard

  Scenario: User should be able to drag object and content in Artboard
    Given User navigates to the application
    Given User waits for the loading screen to disappear
    Given User clicks on "Welcome to Design Studio" to create a template
    Given User switches to Desktop View
    When User selects and drags an object toward Artboard View
    When User select an Artboard section to drag label object element
    When User see draged Label item is visible then click on it for Edit label text
    Then User click on Clear icon and created artoboard are clear
```
`e2e/features/paragraphDnD.feature`

```gherkin
Feature: Drag and Drop Element in Artboard

  Scenario: User should be able to drag object and content in Artboard
    Given User navigates to the application
    Given User waits for the loading screen to disappear
    Given User clicks on "Welcome to Design Studio" to create a template
    Given User switches to Desktop View
    When User selects and drags an object toward Artboard
    When User click on the selected Artboard section to paste draged object element
    When User see draged paragraph item is visible then click on it for Edit paragraph Text
    Then User click on Clear icon and created artoboard are clear
```

## 7. Add Step Definitions

`cypress/e2e/step_definitions/labelCOntentDnD.js`

```javascript
const { When } = require("@badeball/cypress-cucumber-preprocessor");
import { slowCypressDown } from 'cypress-slow-down'


When("User selects and drags an object toward Artboard View", () => {
    cy.get('div#section1').click({ force: true });
});

When("User select an Artboard section to drag label object element", () => {
    cy.get('[data-testid="Label"]>#elementImagesbox')
    .click()
    .drag("#Artboard1", { force: true });
});

When("User see draged Label item is visible then click on it for Edit label text", () => {
    cy.get("#Artboard1 > div#section1").click({ force: true }); 
    cy.get('#Label1')
    .shadow()
    .find('#my-label-id')
    .invoke('prop', 'textContent', 'My wish I could insert more in label, what you think is original work or not')
    .should('have.text', 'My wish I could insert more in label, what you think is original work or not');
    cy.get('#Artboard1').scrollIntoView({ ensureScrollable: false });
    cy.get('#Artboard1').should('be.visible').scrollIntoView();
    slowCypressDown(500)
});

```
npx cypress run "
npx cypress open "
npx cypress run --record"

```

## THANK YOU 🙂