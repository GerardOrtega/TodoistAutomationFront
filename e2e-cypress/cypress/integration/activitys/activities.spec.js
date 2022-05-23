describe('Task manager', () => {
    beforeEach(() => {
      cy.login();
      cy.visit('/app/today');

      cy.get('button[class="plus_add_button"]')
      .as("addButton");


   });

   it('Add a task', () => {
      cy.get('@addButton')
      .click();
      var uuid = () => Cypress._.random(0, 1e6)
      var id = uuid()
      var testName = `testName${id}`;
      var testText = `Text${id}`;
      cy.get('div[role="textbox"]')
      .click()
      .type(testName);
      cy.get('textarea[class="task_editor__description_field no-focus-marker"]')
      .click()
      .type(testText);
      cy.get('button[type="submit"]')
      .click();
      cy.get('ul[class="items"]')
      .find('li')
      .eq(-2)
      .should('contain',testName)
      .and('contain', testText);
   })

    it("Add 10 task's", () => {
      cy.get('@addButton')
      .click();
       for (var i =0; i<10; i++){
         var uuid = () => Cypress._.random(0, 1e6)
         var id = uuid()
         var testName = `testName${id}`;
         var testText = `Text${id}`;
         cy.get('div[role="textbox"]')
         .click()
         .type(testName);
         cy.get('textarea[class="task_editor__description_field no-focus-marker"]')
         .click()
         .type(testText);
         cy.get('button[type="submit"]')
         .click();
         cy.get('ul[class="items"]')
         .find('li')
         .eq(-2)
         .should('contain',testName)
         .and('contain', testText);
       }

    });

});