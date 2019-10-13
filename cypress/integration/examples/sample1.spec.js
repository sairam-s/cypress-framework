/// <reference types="Cypress" />

describe('Sample test to add items to cart', () => {
    it('Sample test case to search for items including hidden elements', () => {

        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');

        cy.get('.search-keyword').type('ra');

        cy.wait(2000);
        //assert with hidden element
        cy.get('.product').should('have.length', 6);

    })


    it('Sample test case to search for items visible elements only', () => {

        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');

        cy.get('.search-keyword').type('ra');

        cy.wait(2000);
        cy.get('.products').find('.product').should('have.length', 5);
    })

    it('Sample test case to select item by index', () => {

        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');

        cy.get('.search-keyword').type('ra');

        cy.wait(2000);
        cy.get('.products').find('.product').should('have.length', 5);
        cy.get('.products').find('.product').eq(1).find('button').click();
        cy.get('.cart-info').find('tr').contains('Items').get('td').eq(2).should('have.text','1');
    })

    it('Sample test case to select item by text', () => {

        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');

        cy.get('.search-keyword').type('ra');

        cy.wait(2000);
        cy.get('.products').find('.product').should('have.length', 5);
        cy.get('.products').find('.product').each(($el,index,$list) => {
            
            if($el.find('h4.product-name').text().includes('Pomegranate')){
                $el.find('button').click();
                expect($el.text()).to.include('ADDED');
            }
        })
        cy.get('.cart-info').find('tr').contains('Items').get('td').eq(2).should('have.text','1');
    })
})