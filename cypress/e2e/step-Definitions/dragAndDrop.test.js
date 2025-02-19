const { Given, When, Then } = require ("@badeball/cypress-cucumber-preprocessor");

Given("User navigates to the application", () => {
    cy.on('uncaught:exception', () => false);
    cy.visit("/");
});

Given("User waits for the loading screen to disappear", () => {
    cy.wait(12000);
    cy.get('.text-container').should('contain', 'Loading...');
    cy.wait(18000);
    cy.get('#NotiflixLoadingMessage').should('contain', 'Loading Design, please wait.....');
    cy.wait(4000);
    cy.get('#NotiflixLoadingMessage').should('not.exist');
});

Given("User clicks on \"Welcome to Design Studio\" to create a template", () => {
    cy.get('div[name="Create Templates"]').contains('Welcome to Design Studio').click();
});

Given("User switches to Desktop View", () => {
    cy.get('.fa-tablet').click();
});

When("User selects and drags an object to the Artboard", () => {
    cy.get('div#section1').click({ force: true });
});

When("User see previous object than click it and delete it from the artboard", () => {
    cy.get("#Artboard1 > div#section1").then(($element) => {
        if ($element.length > 0) {
            // cy.wrap($element).click(); 
            cy.get("#Label1").click({ force: true });

            cy.get("#Content4", { timeout: 10000 })
            .shadow() // First shadow root
            .find("ion-cont md content-ltr hydrated")
            .shadow()
            .find(".ng-tns-c1971627825-0")
            .shadow() // Second shadow root
            .find("div[title='Delete Item']")
            .should("be.visible")
            .click({ force: true });
    
            // Verify the item has been deleted
            cy.get("#Artboard1 > div#section1").should("not.exist");
        } else {
            // If the item does not exist, log a message
            cy.log("No item found on the Artboard");
        }
    });
    
})

When("User clicks on the Artboard section", () => {
    cy.get('[data-testid="Content"] > #elementImagesbox')
    .click()
    .drag("#Artboard1", { force: true });
});

Then("User selects and drags content to the Artboard", () => {
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
