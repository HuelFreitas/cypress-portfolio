import { BooksPage } from '../pages/BooksPage'
import { LoginPage } from '../pages/LoginPage'

const loginPage = new LoginPage()
const booksPage = new BooksPage()

Cypress.Commands.add('loginTheInternet', (username: string, password: string) => {
  loginPage.visit()
  loginPage.login(username, password)
})

Cypress.Commands.add('addFirstBookToCart', () => {
  booksPage.visitHome()
  booksPage.openBooksCategory()
  booksPage.addFirstBookToCart()
})

declare global {
  namespace Cypress {
    interface Chainable {
      loginTheInternet(username: string, password: string): Chainable<void>
      addFirstBookToCart(): Chainable<void>
    }
  }
}

export {}
