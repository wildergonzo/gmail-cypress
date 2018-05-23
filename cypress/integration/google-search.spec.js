describe('test cypress', () => {
	it('should search pattern in google', () => {
		cy.visit('https://google.com');
		cy.title().should('include', 'Google');
		cy.get('input[name=q]').type('cypress');
		cy.get('#lga').click();
        cy.get('input[name=btnK]').click();	
        cy.get('a#logo').should('be.visible');
	})
})