// describe("Drag and Drop Element", () => {
    beforeEach(() => {
        cy.on('uncaught:exception', (err, runnable) => {
            return false; 
        });

        cy.visit("/");

        cy.wait(4000);

        // Ensure the loading message disappears
        cy.get('.text-container').should('contain', 'Loading...'); 
        cy.get('#NotiflixLoadingMessage').should('contain', 'Loading Design, please wait.....');
        cy.wait(4000);
        cy.get('#NotiflixLoadingMessage').should('not.exist'); // Ensure loading is finished

        // Artboard Created
        cy.get('div[name="Create Templates"]').contains('Welcome to Design Studio').click();

        // // Change to Desktop View
        cy.get('.fa-tablet').click();
    });

    it("User Should able to Drag Object and Content in Artboard", () => {

        // cy.get('[data-testid="Container"] > .element-box-test')
        // .click().drag("#Artboard1", { force: true },{
        //     source: { x:50, y:50 },
        //     target: { position: 'absolute'},
        //     force: true,
        // });
        // Drag and Drop Elements Paste on page 
        // cy.get("#Artboard1 > div#section1").click({ force: true});
        cy.get('div#section1').click({force: true})
        cy.get('[data-testid="Content"] > #elementImagesbox')
        .click().drag("#Artboard1", { force: true });
        cy.get("#Artboard1 > div#section1").click({ force: true},{
            target: { position: 'relative'},
            force: true,
        });
        cy.get('ion-content')
        .shadow()
        .find('p.content')
        .click({ force: true }) // Click to focus
        .type('{selectall}{backspace}') // Clear existing text
        .type('Hello Cypress Assignments for drag and drop');

    });
    
// });

