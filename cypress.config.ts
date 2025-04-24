import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    supportFile: 'client/cypress/support/e2e.ts',
    specPattern: 'client/cypress/e2e/**/*.cy.ts',
  },
})
