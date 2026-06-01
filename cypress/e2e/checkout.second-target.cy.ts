import { BooksPage } from '../pages/BooksPage'

describe('Carrinho (Demo Web Shop)', () => {
  const booksPage = new BooksPage()

  it('deve adicionar item ao carrinho', () => {
    cy.addFirstBookToCart()

    booksPage.cartQuantity().should('contain.text', '1')
  })
})
