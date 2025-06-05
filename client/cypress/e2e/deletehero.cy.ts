describe('Delete Hero', () => {
    it('Testing Delete feature', () => {
      cy.visit('http://localhost:3000/heroes')
      cy.get('li .undefined').click()
      cy.get("[type='email']").click().type('admin@test.com')
      cy.get("[type='password']").click().type('test123')
      cy.get(".text-white").click()
      cy.get(".text-gray-500").contains('Logout')
      cy.get("[data-cy='trash']").eq(4).click()
      cy.get(".justify-end .undefined").eq(0).click()
    })
  })