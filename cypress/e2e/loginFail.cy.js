describe('Failed login', () => {

    it('cannot submit the login form with invalid credentials and is shown a message', 
     function () {        
        cy.visit('/')
        cy.wait(500)
        cy.get('#registerForm').contains('Login').click()
        cy.wait(500)
        cy.get('#loginEmail').type('tina@testuser.no')
        cy.get('#loginPassword').type('password1234')
        cy.get('#loginEmail').not('have value', '[\w\-.]+@(stud.)?noroff.no$')
        cy.get('#loginForm').submit()
        cy.on('window:alert', (text) => {
            expect(text).to.exist;
          });
        });
    });