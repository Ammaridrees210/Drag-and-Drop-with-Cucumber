const { Given, When, Then } = require ("@badeball/cypress-cucumber-preprocessor");
import { slowCypressDown } from 'cypress-slow-down'
const { addCompareSnapshotCommand } = require("cypress-visual-regression/dist/command");
addCompareSnapshotCommand({
    capture: "fullPage",
    errorThreshold: 0.01,
});
  


Given("User navigates to the application", () => {
    cy.on('uncaught:exception', () => false);
    cy.visit("/");
});

Given("User waits for the loading screen to disappear", () => {
    cy.get('.text-container').should('contain', 'Loading...')
    cy.get('#NotiflixLoadingMessage').should('contain', 'Loading Design, please wait.....');
    cy.get('#NotiflixLoadingMessage').should('not.exist');
    
});

Given("User clicks on \"Welcome to Design Studio\" to create a template", () => {
    cy.get('div[name="Create Templates"]').contains('Welcome to Design Studio').click();
    
});

Given("User switches to Desktop View", () => {
    cy.get('.fa-desktop').click();
    cy.compareSnapshot('capture Full screen for to compare');
});

When("User selects and drags an object to the Artboard", () => {
    cy.get('div#section1').click({ force: true });
});

When("User clicks on the Artboard section", () => {
    cy.get('[data-testid="Content"] > #elementImagesbox')
    .click()
    .drag("#Artboard1", { force: true });
});

When("User selects and drags content to the Artboard", () => {
    cy.get("#Artboard1 > div#section1").click({ force: true }, {
        target: { position: 'relative' },
        force: true,
    });
    
    cy.get('#Content1')
    .shadow()
    .find('ion-content')
    .shadow()
    .find('.inner-scroll')
    .find('slot')
    .then(($slot) => {
        const assignedNodes = $slot[0].assignedNodes({ flatten: true });
        const paragraph = Array.from(assignedNodes).find(node => 
        node.nodeName.toLowerCase() === 'p' && node.classList.contains('content'));
        
        if (paragraph) {
            cy.wrap(paragraph)
            .dblclick({ force:true })
            .invoke('text', 'My First assignment is completed in SHadow Root')
            .should('have.text', 'My First assignment is completed in SHadow Root');
        } else {
            throw new Error('<p class="content"> not found inside the slot');
        }
    });
});

When("User see draged content item is visible then click on it for Edit content", () => {
    cy.get('#Artboard1').scrollIntoView({ ensureScrollable: false });
    cy.get('#Artboard1').should('be.visible').scrollIntoView();
    slowCypressDown(500);
    cy.get('app-value-unit:nth-of-type(1) div:nth-of-type(1) input:nth-of-type(1)').type(97)
    cy.get('app-value-unit:nth-of-type(2) div:nth-of-type(1) input:nth-of-type(1)').type(150);
})

Then("User click on Clear icon and created artoboard are clear", () => {
    cy.clearAndConfirm();
})

