/// <reference types="Cypress" />

describe("Sample test for handling new tab and new window", () => {

    it("test new tab", () => {
        cy.visit('https://www.w3schools.com/tags/att_a_target.asp');
        //stop the new tab launch by removing the target attribute and launch the tab in the same window
        cy.get('.w3-example > .w3-btn').invoke('removeAttr', 'target').click();
    })

    it.only("test new window", () => {
        cy.visit('https://qaclickacademy.com/practice.php');

        //Replace button click onclick event to open a window byredirecting a url tp the existing window, rather than launching a new window
        cy.get('#openwindow').invoke('attr', 'onclick', 'window.open("https://qaclickacademy.com/","_self")').click();
    })
})