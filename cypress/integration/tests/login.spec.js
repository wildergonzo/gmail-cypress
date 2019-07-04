describe('gmail sign in', function() {

  it('should login successfully ', function() {

    cy.visit('https://mail.google.com/mail');

    cy.get('#identifierId').type('test');
    cy.get('.RveJvd').click();

    cy.wait(1000);
    
  });

});