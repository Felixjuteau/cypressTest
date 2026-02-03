
    describe('Création d’un ticket', () => {
      it('crée un ticket et redirige vers sa page', () => {
        cy.visit('localhost:5173')
        
      });

      it('Login', function() {
        cy.visit('localhost:5173')
        cy.get('#root a[href="/login"]').click();
        cy.get('#root button.primary').click();
        cy.get('#root a[href="/tickets/1"]').click();
        
          
      });
    })