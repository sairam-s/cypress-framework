/// <reference types="Cypress" />

describe("Sample test for handling alerts and confirm message window popup", () => {

    it("test auto handle alerts and window popup", () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        cy.get('#alertbtn').click();
        cy.get('#confirmbtn').click();
    })

    it("test alerts and window popup message", () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('#alertbtn').click();
        cy.get('#confirmbtn').click();
        //The event 'on('widow:alert')' or on('window:confirm')' will retrieve the properties of the popup 
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Hello , share this practice page and share your knowledge');
        })
        cy.on('window:confirm', (str) => {
            expect(str).to.equal('Hello , Are you sure you want to confirm?');
        })
    })

})