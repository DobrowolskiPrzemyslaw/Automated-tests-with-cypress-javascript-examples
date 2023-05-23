/// <reference types="cypress" />

describe('Inspect Automation Test Store items using chain of commands', () => {

    beforeEach(() => {
        cy.visit("https://automationteststore.com/")
      })

    it('Click on the first item using item header', () => {
        cy.get('.prdocutname').contains('Skinsheen Bronzer Stick').click();
    })

    it.only('Click on the first item using index', () => {
        cy.get('.fixed_wrapper ').find('.prdocutname').eq(0).click().then(function(itemHeaderText){
            console.log('Selected the following item: ' + itemHeaderText.text())
        })
    });
})