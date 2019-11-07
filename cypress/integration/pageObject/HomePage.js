class HomePage {

    getName() {
        return cy.get(':nth-child(1) > .form-control');
    }
    
    getEmail() {
        return cy.get(':nth-child(2) > .form-control');
    }

    getTwoWayDataBinding() {
        return cy.get(':nth-child(4) > .ng-untouched');
    }

    getGender() {
        return cy.get('#exampleFormControlSelect1');
    }

    getEnterprenurRadioBtn() {
        return cy.get('input#inlineRadio3');
    }

    getShopTab() {
        return cy.get('a').contains('Shop');
    }
}
export default HomePage;