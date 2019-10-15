/// <reference types="Cypress" />

describe("Sample test for webtable", () => {

    it("test webtable content", () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('#product').find('tr').contains('WebServices').next().should('have.text', '35');

    })

    it("test webtable content simpler code", () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('#product').contains('td', 'WebServices').next().should('have.text', '35');

    })

    it("test webtable content based on the column header index", () => {
        let num;
        cy.visit('https://www.seleniumeasy.com/test/table-data-download-demo.html');
        cy.get('#example').find('tr').eq(0).contains('th', 'Salary').invoke('index').then((i) => {
            cy.get('#example').contains('tr', 'Cedric Kelly').find('td').eq(i).should('have.text', '$433,060');
        })

    })
})