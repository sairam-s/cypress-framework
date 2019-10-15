/// <reference types="Cypress" />

describe("Sample test for mouse hover", () => {

    it("test mouse hover by forceing to show the content", () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        //Show the display of content and then click on an item.
        cy.get('.mouse-hover-content').invoke('show').find('a').contains('Reload').click();
    })

    its("test dispay casual dresses in the store", () => {
        cy.visit('http://automationpractice.com/index.php');
        //Force the display of contents and click on the item
        cy.get('.sf-menu').find('li:visible').eq(1).invoke('show').find('a[title="Casual Dresses"]').click({ force: true });
        cy.get('.breadcrumb').find('span').should('have.length','3')
    })
})