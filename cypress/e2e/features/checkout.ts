import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('que estou na home da loja', () => {
  cy.visit('https://demowebshop.tricentis.com/')
})

When('eu navego para a categoria Books', () => {
  cy.contains('Books').click()
})

When('eu adiciono o primeiro livro ao carrinho', () => {
  cy.addFirstBookToCart()
})

Then('o carrinho deve mostrar 1 item', () => {
  cy.get('.cart-qty').should('contain.text', '1')
})
