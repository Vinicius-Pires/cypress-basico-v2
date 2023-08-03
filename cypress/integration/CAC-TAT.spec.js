// CAC-TAT.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function() {
    beforeEach(function(){
        cy.visit('./src/index.html')
    }

    )
    it('verifica o título da aplicação', function() {
            cy.title().should('be.equal','Central de Atendimento ao Cliente TAT')
    })
    it.only('preenche os campos obrigatórios e envia o formulário', function(){
        cy.get('#firstName').type('vinicius')
        cy.get('#lastName').type('pires')
        cy.get('#email').type('vinicius@example.com')
        cy.get('#open-text-area').type('teste')
        cy.get('button[type="submit"]').click()

    })
})
  