import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('que estou na página de login', () => {
  cy.visit('https://the-internet.herokuapp.com/login')
})

When('eu faço login com usuário {string} e senha {string}', (username: string, password: string) => {
  cy.loginTheInternet(username, password)
})

Then('devo ser redirecionado para a área segura', () => {
  cy.location('pathname').should('eq', '/secure')
})

Then('devo ver a mensagem de sucesso', () => {
  cy.get('#flash').should('contain.text', 'You logged into a secure area!')
})

Then('devo permanecer na página de login', () => {
  cy.location('pathname').should('eq', '/login')
})

Then('devo ver a mensagem de erro de autenticação', () => {
  cy.get('#flash').should('contain.text', 'Your username is invalid!')
})
