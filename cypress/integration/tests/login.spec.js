const user = require('../../config/config.json').credentials;

describe('gmail sign in', function() {

  it('should login successfully ', function() {

    let gmailUrl = 'https://mail.google.com/mail';

    cy.visit(gmailUrl);

    cy.get('#identifierId').type(user.email);
    cy.get('.RveJvd').click();

    cy.wait(1000);

    cy.get('input[name="password"]').type(user.password);
    cy.get('#passwordNext').click();

    cy.url().should('include', gmailUrl);
    
  });

});