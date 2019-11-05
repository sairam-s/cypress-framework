/// <reference types="Cypress" />

describe('Test webpage form e2e', function () {
    before(function () {
        cy.fixture('formData').then(function (data) {
            this.formData = data;
            console.log('Data', this.formData)
        })
    })

    it('Form submit using fixtures', function () {
        cy.visit('https://rahulshettyacademy.com/angularpractice/');

        cy.get(':nth-child(1) > .form-control').type(this.formData.name);

        cy.get(':nth-child(2) > .form-control').type('hello@hello.com');
        cy.get(':nth-child(4) > .ng-untouched').should('have.value', 'Hello');
        cy.get('#exampleFormControlSelect1').select('Female');
        cy.get('input#inlineRadio3').should('have.prop', 'disabled');
    })

    it('Search for items using commands', function () {
        cy.visit('https://rahulshettyacademy.com/angularpractice/');
        cy.get('a').contains('Shop').click();
        cy.get('div.card').should('have.length', 4);
        this.formData.productName.forEach(item => {
            cy.selectProduct(item);
        });
        
        expect(cy.get('li.nav-item.active').find('a').should('contain.text','Checkout ( 2 )'));            
    })
})