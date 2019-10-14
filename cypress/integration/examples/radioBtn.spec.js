/// <reference types="Cypress" />

describe("Sample test for radio buttons", () => {

    it("test radio button selection", () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    
        cy.get('[value="radio2"]').check().should('be.checked');
    })

})