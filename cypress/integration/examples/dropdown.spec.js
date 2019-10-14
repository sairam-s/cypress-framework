/// <reference types="Cypress" />

describe("Sample test for dropdown", () => {

    it("test static dropdown item selection", () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    
        cy.get('#dropdown-class-example').select('option1');
    })

    it("test static dropdown iterate and select item", () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    
        cy.get('#dropdown-class-example').find('option').each(($item,index,$list) => {
            cy.log($item.text());
            if($item.text().includes('Option3')){
                cy.get('#dropdown-class-example').select($item.text());
            }

        })
        expect(cy.get('#dropdown-class-example').contains('Option3'));
    })

    it("test dynamic dropdown iterate and select item", () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    
        cy.get('.ui-autocomplete-input').type('Ind');
        cy.get('.ui-autocomplete').should('be.visible');
        cy.get('.ui-autocomplete').find('li.ui-menu-item').each(($item,index,$list) => {
            if($item.find('div').text().includes('India')){
               $item.click();
            }
        })
        cy.get('#autocomplete').should('have.value', 'India');
    })

    it("test dynamic dropdown simple code", () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
    
        cy.get('.ui-autocomplete-input').type('Ind');
        cy.get('.ui-autocomplete').should('be.visible');
        cy.get('.ui-menu-item div').each(($item,index,$list) => {
            if($item.text()==='Indonesia'){
               $item.click();
            }
        })
        cy.get('#autocomplete').should('have.value', 'Indonesia');
    })
})