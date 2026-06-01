import { LoginPage } from '../pages/LoginPage'

describe('Login (The Internet)', () => {
  const loginPage = new LoginPage()

  it('deve logar com credenciais válidas', () => {
    cy.loginTheInternet('tomsmith', 'SuperSecretPassword!')

    cy.location('pathname').should('eq', '/secure')
    loginPage.flashMessage().should('contain.text', 'You logged into a secure area!')
  })

  it('deve exibir erro com credenciais inválidas', () => {
    cy.loginTheInternet('usuario_invalido', 'senha_invalida')

    cy.location('pathname').should('eq', '/login')
    loginPage.flashMessage().should('contain.text', 'Your username is invalid!')
  })
})
