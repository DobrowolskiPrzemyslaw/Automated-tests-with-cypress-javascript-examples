/// <reference types="cypress" />

describe('Iterate over elements', () => {

    beforeEach(() => {
        cy.visit("https://automationteststore.com/")
      })

    it('Log information of all hair care products', () => {
        cy.get("a[href*='product/category&path=']").contains('Hair Care').click();
    })
})