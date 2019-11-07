class ShoppingPage{

    getAvailableItems(){
       return cy.get('div.card');
    }

    getShoppingCart(){
        return cy.get('li.nav-item.active').find('a');
    }

    getItemName(){
        return cy.get('div.card').find('h4.card-title > a');
    }

    getAddToCartBtn(){
        return cy.get('div.card-footer');
    }
}
export default ShoppingPage;