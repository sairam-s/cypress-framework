/// <reference types="Cypress" />

describe("Sample test for visibility and invisibility of elements", () => {

    it("test invisibility property", () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        if (cy.get('#displayed-text').should('be.visible')) {
            cy.get('#hide-textbox').click();
        }
        cy.get('#displayed-text').should('not.be.visible');
    })

    it("test visibility property", () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('#hide-textbox').click();
        if (cy.get('#displayed-text').should('not.be.visible')) {
            cy.get('#show-textbox').click();
        }
        cy.get('#displayed-text').should('be.visible');
    })
})