export class LoginPage {
  visit() {
    cy.visit('https://the-internet.herokuapp.com/login')
  }

  fillUsername(username: string) {
    cy.get('#username').should('be.visible').clear().type(username)
  }

  fillPassword(password: string) {
    cy.get('#password').should('be.visible').clear().type(password)
  }

  submit() {
    cy.get('button[type="submit"]').click()
  }

  login(username: string, password: string) {
    this.fillUsername(username)
    this.fillPassword(password)
    this.submit()
  }

  flashMessage() {
    return cy.get('#flash')
  }
}
