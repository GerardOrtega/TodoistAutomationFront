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
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... }
Cypress.Commands.add('login', () => {
    cy.visit('/auth/login');
    cy.get('input[id="element-0"]')
    .type('gerardo.ortega@wizeline.com');
    cy.get('input[id="element-2"]')
    .type('gerardoAutomatizacion1');
    cy.get('button[class="_7a2031d6 a878a9a4 _34ac3da9 f9408a0e _8c75067a"]')
    .click();
    cy.url().should('include','/app/today')
    /*cy.request({
        method: 'POST',
        url:'',
        body{
            user: {
                email: '',
                password: 'joe',
            }
        }
    }).then((resp) => {
        window.localStorege.setItem('jwt', resp.body.user.token)
    })*/
})

