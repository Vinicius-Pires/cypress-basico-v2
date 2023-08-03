Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function(){
    cy.get('#firstName').type('vinicius')
    cy.get('#lastName').type('pires')
    cy.get('#email').type('vinicius@example.com')
    cy.get('#open-text-area').type('teste')
    cy.contains('button', 'Enviar').click()
    
})