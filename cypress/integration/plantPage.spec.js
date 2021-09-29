describe('Search and click a card to take you to its page', () => {
  it('successfully loads', () => {
    cy.visit('/');

    const urlString = 'aloe';

    cy.get('#search').type(urlString);

    cy.get('[listviewoption="grid"]')
      .get('[test-id="card"]')
      .click();
    cy.url().should('include', urlString);
  });
});
