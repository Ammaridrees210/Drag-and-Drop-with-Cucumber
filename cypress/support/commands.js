require('@4tw/cypress-drag-drop');
require('cypress-xpath');
// require('cypress-real-events')

Cypress.Commands.add('clearAndConfirm', () => {
        cy.get('[aria-label = "Clear"]>.fas').click({ force: true });
        cy.get('#NXConfirmButtonOk').click({ force: true });
      });