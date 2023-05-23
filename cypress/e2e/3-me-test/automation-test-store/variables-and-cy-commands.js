/// <reference types="cypress" />

describe('Verifing variables, cypress commands and jquery commands', () => {

    beforeEach(() => {
        // cy.visit("https://automationteststore.com/")
      })

    it('Navigating to specific product pages', () => {
        cy.get("a[href*='product/category&path=']").contains('Makeup').click();
        cy.get("a[href*='product/category&path=']").contains('Skincare').click();
    })

    it('Navigating to specific product pages', () => {
        cy.get("a[href*='product/category&path=']").contains('Makeup').click();
        cy.get("h1 .maintext").then(function($headerText){
            const headerText = $headerText.text();
            cy.log("Found header text: " + headerText);
            expect(headerText).is.eq('Makeup');
        })
    });
})