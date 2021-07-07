/// <reference types="cypress" />

describe('Home Page', () => {
  it('should display the page name', () => {
    cy.visit('http://localhost:4200/'); // go to the home page

    // get the element and verify that the page name is in it
    cy.get('[data-cy=span-home]')
      .should('exist');
  });
});
