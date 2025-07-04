// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('adminLogin', (username, password) => {
  const args = { username, password }
  cy.session(
    // Username & password can be used as the cache key too
    args,
    () => {
      cy.origin(Cypress.env('baseUrl'), { args }, ({ username, password }) => {
        cy.visit('/admin')
        cy.get('#id_username').type(username);
        cy.get('#id_password').type(password);
        cy.get('.submit-row > input').click();
      })
    }
  )
})