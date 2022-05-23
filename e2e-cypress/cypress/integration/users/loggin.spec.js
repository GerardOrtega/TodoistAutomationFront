/// <reference types="Cypress" />

describe ('Loggin Page', () => {
    beforeEach(() => {
      cy.visit('/auth/login');
      cy.get('span[class="_22213081"]')
      .as("spanEmail")
      cy.get('input[id="element-0"]')
      .as("emailInput")
      cy.get('input[id="element-2"]')
      .as("passwordInput")
      cy.get('button[class="_7a2031d6 a878a9a4 _34ac3da9 f9408a0e _8c75067a"]')
      .as('logginButton')

   });

   it('Email request', () => {
       cy.get('@logginButton')
       .click()
       .then(()=>{

        debugger;
       });
       cy.url().should('include','/auth/login')

   });

   it('Password required',() => {
       cy.get('@emailInput')
       .type(Cypress.env('USER'));
       cy.get('@logginButton')
       .click();
       cy.url().should('include','/auth/login')
   })

   it('Email with out @', () =>{
       cy.get('@emailInput')
       .type('gerardo Prueba');
       cy.get('@logginButton')
       .click();
       cy.url().should('include', '/auth/login');
   })

    it('Loggin', () => {
        cy.get('@spanEmail').eq(0)
        .should(($spanEmail) => {
            expect($spanEmail)
            .to
            .contain("Email");
        })
        cy.get('@emailInput')
        .type(Cypress.env('USER'))
        .debug();
        cy.get('@passwordInput')
        .type(Cypress.env('PASSWORD'))
        .then(()=>{
            debugger;
        });
        cy.get('@logginButton')
        .click();
        cy.url().should('include','/app/today')
    });

});