/// <reference types="Cypress" />

describe("Sample test for checkboxes", () => {

    it("test checkbox selection", () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        //Select a checkbox and assert the status.
        cy.get('#checkBoxOption1').click().should('be.checked').and('have.value', 'option1');
    })

    it("test multiple checkbox selection", () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        //Use array to check multiple checkboxes, us common css to get all the checkboxes.
        cy.get('input[type="checkbox"]').check(['option1', 'option3']);
    })
})