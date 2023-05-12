/// <reference types="cypress" />

describe('Test Contact Us form via WebdriverUni', () => {

    beforeEach(() => {
        cy.visit("http://www.webdriveruniversity.com/")
      })

    it('Should be able to submit a successful submission via contact us form', () => {
        cy.get('#contact-us').click({force: true})
    })
})