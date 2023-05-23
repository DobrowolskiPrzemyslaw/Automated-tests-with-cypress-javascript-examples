/// <reference types="cypress" />

describe('Test Contact Us form via WebdriverUni', () => {

    beforeEach(() => {
        cy.visit("http://www.webdriveruniversity.com/Contact-Us/contactus.html")
      })

    it.only('Should be able to submit a successful submission via contact us form', () => {
        cy.document().should('have.property','charset').and('eq','UTF-8')
        cy.title().should('include','WebDriver | Contact Us')
        cy.url().should('include','contactus.html')
        cy.get('[name="first_name"]').type('Przemko')
        cy.get('[name="last_name"]').type('Dobro')
        cy.get('[name="email"]').type('przema@wp.pl')
        cy.get('textarea.feedback-input').type('Komentarz')
        cy.get('[type="submit"]').click()
        cy.get('h1').should('have.text','Thank You for your Message!')
    })
    
    it('Should not be able to submit a successful submission via contact us form as all fields are required', () => {
        cy.get('[name="first_name"]').type('Przemko2')
        cy.get('[name="last_name"]').type('Dobro2')
        cy.get('[type="submit"]').click()
        cy.get('body').contains('Error: all fields are required')
        cy.get('body').contains('Error: Invalid email address')
    })

    it('Should not be able to submit a successful submission via contact us form as all fields are required', () => {
        cy.get('[name="first_name"]').type('Przemko2')
        cy.get('[name="email"]').type('przema@wp.pl')
        cy.get('[type="submit"]').click()
    })

    it('Should not be able to submit a successful submission via contact us form as all fields are required', () => {
        cy.get('[name="first_name"]').type('Przemko2')
        cy.get('textarea.feedback-input').type('Komentarz')
        cy.get('[type="submit"]').click()
    })
})