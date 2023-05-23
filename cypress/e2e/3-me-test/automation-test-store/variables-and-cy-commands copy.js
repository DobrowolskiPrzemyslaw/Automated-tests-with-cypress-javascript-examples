/// <reference types="cypress" />

describe('Verifing variables, cypress commands and jquery commands', () => {

    beforeEach(() => {
        cy.visit("https://automationteststore.com/index.php?rt=content/contact")
      })

    it.only('Validate properties of the Contact Us Page', () => {
        //Uses cypress commands and chaining
        cy.contains('#ContactUsFrm', 'Contact Us Form').find('#field_11').should('contain', 'First name');

        //JQuery Approach
        cy.contains('#ContactUsFrm', 'Contact Us Form').then(text => {
            const firstNameText = text.find('#field_11').text();
            expect(firstNameText).to.contain('First name');

        //Embedded commands (closure)   
        cy.get('#field_11').then(fnText => {
            cy.log(fnText.text());
            cy.log(fnText);
            cy.get('#field_11').should('contain', 'First name');

            })
        });
    })
})