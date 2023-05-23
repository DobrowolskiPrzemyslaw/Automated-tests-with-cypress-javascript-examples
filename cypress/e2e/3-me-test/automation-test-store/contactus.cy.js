/// <reference types="cypress" />

describe('Test Contact Us form via AUtomation Test Store', () => {

    beforeEach(() => {
        cy.visit("https://automationteststore.com/")
      })

    it('Should be able to submit a successful submission via contact us form', () => {
        cy.xpath("//a[contains(@href, 'contact')]").click();
        // cy.get('a').contains('Contact Us').click().then(function(linkText){
        //     console.log('Clicked on link using text: ' + linkText.text())
        // });
        cy.get('#ContactUsFrm_first_name').type("Joe");
        cy.get('#ContactUsFrm_email').type("joe_blogs123@gmail.com");
        cy.get('#ContactUsFrm_email').should('have.attr', "name",'email')
        cy.get('#ContactUsFrm_enquiry').type("Do you provide additional discount on bulk orders?")
        cy.get("button[title='Submit']").click();
        cy.get('.mb40 > :nth-child(3)').should('have.text','Your enquiry has been successfully sent to the store owner!')
        cy.get("a[title='Continue']").click();
        cy.get('#logo > .img-responsive').should('be.visible')
        cy.get('.infoi').should('be.visible')
    })
})