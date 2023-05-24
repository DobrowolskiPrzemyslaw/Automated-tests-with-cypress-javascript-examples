/// <reference types="cypress" />

describe('Cypress web security', () => {

    it('Validate visiting two different domains', () => {
        cy.visit("https://automationteststore.com/")
        cy.visit('https://example.cypress.io/todo')
    })

    it('Validate visiting two different domains via user actions', () => {
        cy.visit("https://www.webdriveruniversity.com/")
        cy.get('#automation-test-store').invoke('removeAttr', 'target').click({force:true})
    })
})