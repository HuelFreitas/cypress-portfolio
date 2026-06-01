import React from 'react'
import { PrimaryButton } from '../../src/components/PrimaryButton'

describe('PrimaryButton', () => {
  it('renderiza label e atualiza texto no clique', () => {
    cy.mount(<PrimaryButton label="Continuar" />)

    cy.get('[data-cy="primary-button"]').should('contain.text', 'Continuar')
    cy.get('[data-cy="primary-button"]').click()
    cy.get('[data-cy="primary-button"]').should('contain.text', 'Continuar (clicked)')
  })
})
