export class BooksPage {
  visitHome() {
    cy.visit('https://demowebshop.tricentis.com/')
  }

  openBooksCategory() {
    cy.contains('Books').click()
  }

  addFirstBookToCart() {
    cy.get('.product-grid .item-box')
      .first()
      .find('.product-box-add-to-cart-button')
      .should('be.visible')
      .click()
  }

  cartQuantity() {
    return cy.get('.cart-qty')
  }
}
