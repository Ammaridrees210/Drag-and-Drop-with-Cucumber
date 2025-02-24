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