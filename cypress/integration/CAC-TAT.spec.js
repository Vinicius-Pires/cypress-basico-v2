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
    it('preenche os campos obrigatórios e envia o formulário', function(){
        const longText = 'tESTE TESTE TESTE TESTE TESTE TESTE tESTE TESTE TESTE TESTE TESTE TESTE tESTE TESTE TESTE TESTE TESTE TESTE'
        
        cy.get('#firstName').type('vinicius')
        cy.get('#lastName').type('pires')
        cy.get('#email').type('vinicius@example.com')
        cy.get('#open-text-area').type(longText, {delay: 0})
        cy.contains('button', 'Enviar').click()
        cy.get('.success').should('be.visible')

    })

    it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function(){

        cy.get('#firstName').type('vinicius')
        cy.get('#lastName').type('pires')
        cy.get('#email').type('vinicius@example,com')
        cy.get('#open-text-area').type('Text')
        cy.contains('button', 'Enviar').click()

        cy.get('.error').should('be.visible')

    })

    it('campo telefone continua vazia quando preenchido com valor nao numerico', function(){
        cy.get('#phone')
            .type('abcdefghij')
            .should('have.value', '')
        
    })
    it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', function(){
        
        cy.get('#firstName').type('vinicius')
        cy.get('#lastName').type('pires')
        cy.get('#email').type('vinicius@example.com')
        cy.get('#phone-checkbox').click()
        cy.get('#open-text-area').type('Text')
        cy.contains('button', 'Enviar').click()

        cy.get('.error').should('be.visible')
    })
    it('preenche e limpa os campos nome, sobrenome, email e telefone', function(){
        cy.get('#firstName')
            .type('vinicius')
            .should('have.value', 'vinicius')
            .clear()
            .should('have.value', '')
        cy.get('#lastName')
            .type('pires')
            .should('have.value', 'pires')
            .clear()
            .should('have.value', '')
        cy.get('#email')
            .type('vinicius@example.com')
            .should('have.value', 'vinicius@example.com')
            .clear()
            .should('have.value', '')
        cy.get('#phone')
            .type('123456789')
            .should('have.value', '123456789')
            .clear()
            .should('have.value', '')
    })
    it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', function(){
        cy.contains('button', 'Enviar').click()
        cy.get('.error').should('be.visible')
    })
    it('envia o formuário com sucesso usando um comando customizado', function(){
        cy.fillMandatoryFieldsAndSubmit()
    })
})