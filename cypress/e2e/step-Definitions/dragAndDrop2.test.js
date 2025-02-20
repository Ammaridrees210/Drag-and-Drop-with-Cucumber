const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");


When("User selects and drags an object to the selected artboard", () => {
    cy.get('div#section1').click({ force: true });
});

When("User clicks on the Artboard section to drag", () => {
    cy.get('[data-testid="Paragraph"]>#elementImagesbox')
        .click()
        .drag("#Artboard1", { force: true });
});

When("User selects and drags content to the Artboard section", () => {
    cy.get("#Artboard1 > div#section1").click({ force: true }, {
        target: { position: 'relative' },
        force: true,
    });
});
