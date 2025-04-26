describe('Edit Hero - tests', () => {
    it('Check is it is possible to Edit the Name of the Hero', () => {
      cy.visit('http://localhost:3000/heroes')
      cy.get('li .undefined').click()
      cy.get("[type='email']").click().type('admin@test.com')
      cy.get("[type='password']").click().type('test123')
      cy.get(".text-white").click()
      cy.get(".text-gray-500").contains('Logout')
      cy.get("[data-cy='pencil']").eq(6).click()
      cy.get("[name='name']").click().clear().type("Harry Potter")
      cy.get(".text-white").eq(2).click()
      cy.get(".flex-wrap").contains('Potter')
    })
  })

  describe('Edit Hero - tests', () => {
    it('Check is it is possible to Edit the Price of the Hero', () => {
      cy.visit('http://localhost:3000/heroes')
      cy.get('li .undefined').click()
      cy.get("[type='email']").click().type('admin@test.com')
      cy.get("[type='password']").click().type('test123')
      cy.get(".text-white").click()
      cy.get(".text-gray-500").contains('Logout')
      cy.get("[data-cy='pencil']").eq(6).click()
      cy.get("[name='price']").click().clear().type("100")
      cy.get(".text-white").eq(2).click()
      cy.get(".flex-wrap").contains('100')
    })
  })