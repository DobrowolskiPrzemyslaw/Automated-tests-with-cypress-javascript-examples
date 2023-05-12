/// <reference types="cypress" />

describe('Test Contact Us form via WebdriverUni', () => {

    beforeEach(() => {
        cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")
      })

    it('Submit test', () => {
        cy.get('[name="first_name"]').type('Przemko')
        cy.get('[name="last_name"]').type('Dobro')
        cy.get('[name="email"]').type('przema@wp.pl')
        cy.get('textarea.feedback-input').type('Komentarz')
        cy.get('[type="submit"]').click()
    })
    
    it('Reset test', () => {
        cy.get('[name="first_name"]').type('Przemko2')
        cy.get('[name="last_name"]').type('Dobro2')
        cy.get('[name="email"]').type('przema@wp2.pl')
        cy.get('textarea.feedback-input').type('Komentarz2')
        cy.get('[type="reset"]').click()
    })
})