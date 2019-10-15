/// <reference types="Cypress" />

describe("Sample test for navigation", () => {

    it("test browser back navigation control", () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('a > .btn').click();
        cy.get("li").contains("Practice").click();
        cy.go('back');
        cy.get('.container').find("h2").eq(0).should('have.text', 'Featured Courses');
    })

})