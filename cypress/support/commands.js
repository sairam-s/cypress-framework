// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
import ShoppingPage from '../integration/pageObject/ShoppingPage';
const shoppingPage = new ShoppingPage();

console.log(shoppingPage.getAvailableItems);
Cypress.Commands.add("selectProduct", (product) => {
    shoppingPage.getItemName().each(function ($item, index, $list) {
        if ($item.text().includes(product)) {
            shoppingPage.getAddToCartBtn().eq(index).click();
        }
    })
})