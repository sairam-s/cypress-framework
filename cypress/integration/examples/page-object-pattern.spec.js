/// <reference types="Cypress" />
import HomePage from '../pageObject/HomePage';
import ShoppingPage from '../pageObject/ShoppingPage';


describe('Test webpage form e2e', function () {
    beforeEach(function () {
        cy.fixture('formData').then(function (data) {
            this.formData = data;
            console.log('Data', this.formData)
        })
    })

    it('Form submit using fixtures', function () {
        const homePage = new HomePage();
        cy.visit('https://rahulshettyacademy.com/angularpractice/');

        homePage.getName().type(this.formData.name); 
        homePage.getEmail().type('hello@hello.com');
        homePage.getTwoWayDataBinding().should('have.value', 'Hello');
        homePage.getGender().select('Female');
        homePage.getEnterprenurRadioBtn().should('have.prop', 'disabled');
    })

    it('Search for items using commands', function () {
        const homePage = new HomePage();
        const shoppingPage = new ShoppingPage();
        cy.visit('https://rahulshettyacademy.com/angularpractice/');
        homePage.getShopTab().click();
        shoppingPage.getAvailableItems().should('have.length', 4);
        this.formData.productName.forEach(item => {
            cy.selectProduct(item);
        });

        expect(shoppingPage.getShoppingCart().should('contain.text', 'Checkout ( 2 )'));
    })
})