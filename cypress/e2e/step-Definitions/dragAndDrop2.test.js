const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");


When("User selects and drags an object to the selected artboard", () => {
    cy.get('div#section1').click({ force: true });
});

When("User clicks on the Artboard section to drag", () => {
    cy.get('[data-testid="Paragraph"]>#elementImagesbox')
        .click()
        .drag("#Artboard1", { force: true });
});

Then("User selects and drags content to the Artboard section", () => {
    cy.get("#Artboard1 > div#section1").click({ force: true }, {
        target: { position: 'relative' },
        force: true,
    });
});

// Then("User should be able to edit content in the Artboard", () => {
//     cy.get('ion-content')
//         .shadow()
//         .find('p.content')
//         .click({ force: true })
//         .type('{selectall}{backspace}')
//         .type('Hello Cypress Assignments for drag and drop');
// });
