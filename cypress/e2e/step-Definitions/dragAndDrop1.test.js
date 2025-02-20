const { When, Then } = require("@badeball/cypress-cucumber-preprocessor");

When("User selects and drags an object to the Artboard View", () => {
    cy.get('div#section1').click({ force: true });
});

When("User select an Artboard section to drag objects", () => {
    cy.get('[data-testid="Label"]>#elementImagesbox')
        .click()
        .drag("#Artboard1", { force: true });
});

When("User selects and drags content to the Artboard View", () => {
    cy.get("#Artboard1 > div#section1").click({ force: true }, {
        target: { position: 'relative' },
        force: true,
    });
    cy.pause();
});
