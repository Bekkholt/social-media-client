describe('Login', () => {

  it('can log in and access their profile', function () {
    cy.visit('/')
    cy.wait(500)
    cy.get('#registerForm').contains('Login').click()
    cy.wait(500)
    cy.get('#loginEmail').type('tina.testuser@noroff.no')
    cy.get('#loginPassword').type('password1234')
    cy.get('#loginForm').submit()
    cy.url().should('include', '/?view=profile&name=tina')
    cy.get('h4').should('contain', 'tina')
  })
})
