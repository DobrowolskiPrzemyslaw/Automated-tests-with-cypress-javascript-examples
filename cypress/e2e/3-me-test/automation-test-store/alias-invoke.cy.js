/// <reference types="cypress" />

describe('Alias and invoke', () => {

    beforeEach(() => {
        cy.visit("https://automationteststore.com/")
      })

    it('Validate a specific hair care product', () => {
        cy.get("a[href*='product/category&path=']").contains('Hair Care').click();

        cy.get(".fixed_wrapper .prdocutname").eq(0).invoke('text').as('productThumbnail')
        cy.get('@productThumbnail').its('length').should('be.gt', 5)
        cy.get('@productThumbnail').should('include', 'Seaweed Conditioner')
    })

    it('Validate product thumbnail', () => {
        cy.get(".thumbnail").as('productThumbnail')
        cy.get('@productThumbnail').should('have.length', 16)
        cy.get('@productThumbnail').find('.productcart').invoke('attr', 'title').should('include', 'Add to Cart')
    })
    
    it.only('Calculate total of normal and sale products', () => {
        cy.get(".thumbnail").as('productThumbnail')
        // cy.get('@productThumbnail').find('.oneprice').each(($el, index, $list) => {
        //     cy.log($el.text())
        // })
        cy.get('.thumbnail').find('.oneprice').invoke('text').as('itemPrice')
        var itemsTotal = 0;
        cy.get('@itemPrice').then($linkText => {
            var itemPriceTotal = 0;
            var itemsPrice = ($linkText.split('$'))
            var i;
            for(i = 0; i < itemsPrice.length; i++) {
                cy.log(itemsPrice[i])
                itemPriceTotal += Number(itemsPrice[i])
            }
            itemsTotal = Number(itemPriceTotal)
            cy.log("Total price of items: " + itemPriceTotal)
            expect(itemPriceTotal).to.equal(298.49)
        })
        cy.get('.thumbnail').find('.pricenew').invoke('text').as('saleItemPrice')
        cy.get('@saleItemPrice').then($linkText => {
            var itemPriceTotal = 0;
            var itemsPrice = ($linkText.split('$'))
            var i;
            for(i = 0; i < itemsPrice.length; i++) {
                cy.log(itemsPrice[i])
                itemPriceTotal += Number(itemsPrice[i])
            }
            itemsTotal += Number(itemPriceTotal)
            cy.log("Sale price items total: " + itemPriceTotal)
            expect(itemPriceTotal).to.equal(341 )
        })
        .then(() =>{
            cy.log("The total price of all products: " + itemsTotal)
            expect(itemsTotal).to.equal(639.49)
        })
    })
})