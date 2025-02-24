const { When } = require("@badeball/cypress-cucumber-preprocessor");
import { slowCypressDown } from 'cypress-slow-down'



When("User selects and drags an object to the selected artboard", () => {
    cy.get('div#section1').click({ force: true });
});

When("User clicks on the Artboard section to drag", () => {
    cy.get('[data-testid="Paragraph"]>#elementImagesbox')
    .click()
    .drag("#Artboard1", { force: true });
});

When("User selects and drags content to the Artboard section", () => {
    cy.get("#Artboard1 > div#section1").click({ force: true });
    cy.get('#Paragraph1')
    .shadow()
    .find('#input-text')
    .invoke('prop', 'textContent', 'This i Thirs Try to put content in different Element like Paragraph, what you think is this fie to show work is donw or need more practice')
    .should('have.text', 'This i Thirs Try to put content in different Element like Paragraph, what you think is this fie to show work is donw or need more practice');
    slowCypressDown(500)
    cy.get('#Artboard1').scrollIntoView({ ensureScrollable: false });
    cy.get('#Artboard1').should('be.visible').scrollIntoView();
});
