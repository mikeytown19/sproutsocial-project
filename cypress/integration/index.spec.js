describe('The Home Page', () => {
  it('successfully loads', () => {
    cy.visit('/'); // change URL to match your dev URL

    const urlString = 'aloe';

    cy.get('#search').type(urlString);

    cy.get('[listviewoption="grid"]')
      .get('[test-id="card"]')
      .click();
    cy.url().should('include', urlString);
    cy.visit('/');
  });
});
