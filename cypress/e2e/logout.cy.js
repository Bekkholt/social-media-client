describe('Logout', () => {

    it('can log out with the logout button', function () {
        cy.visit('/')
        cy.wait(500)
        cy.get('#registerForm').contains('Login').click()
        cy.wait(500)
        cy.get('#loginEmail').type('tina.testuser@noroff.no')
        cy.get('#loginPassword').type('password1234')
        cy.get('#loginForm').submit()
        cy.wait(1500)
        cy.window().its('localStorage.token').should('exist');
        cy.get('button').contains('Logout').click()
        cy.window().its('localStorage.token').should('not.exist');
    })
  })
