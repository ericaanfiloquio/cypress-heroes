describe('Login-tests', () => {
  it('Login-Success', () => {
    cy.visit('http://localhost:3000/heroes')
    cy.get('li .undefined').click()
    cy.get("[type='email']").click().type('admin@test.com')
    cy.get("[type='password']").click().type('test123')
    cy.get(".text-white").click()
    cy.get(".text-gray-500").contains('Logout')
  })
})

describe('Login-tests', () => {
  it('Login-Error', () => {
    cy.visit('http://localhost:3000/heroes')
    cy.get('li .undefined').click()
    cy.get("[type='email']").click().type('admin@test.com')
    cy.get("[type='password']").click().type('test1234')
    cy.get(".text-white").click()
    cy.get("[novalidate='']").contains('Invalid'
    )
  })
})