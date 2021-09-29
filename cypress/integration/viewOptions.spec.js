describe('Switches between Grid and List View', () => {
  it('should show Grid view of cards', () => {
    cy.visit('/');
    cy.get('select').select('toxic');

    cy.get('[test-id="view-options"]').closest('div').find('svg').last()
      .click();
    expect(cy.get('[test-id="list"]'));
  });

  it('should show Grid view of cards', () => {
    cy.visit('/');
    expect(cy.get('[test-id="grid"]'));
  });

  it('should select list view, go to a plant page and return with the list view still active', () => {
    cy.visit('/');
    cy.get('select').select('toxic');

    cy.get('[test-id="view-options"]').closest('div').find('svg').last()
      .click();
    expect(cy.get('[test-id="list"]'));

    cy.get('#search').type('Aloe');
    cy.get('[test-id="list-card"]')
      .click();
    cy.wait(500);
    cy.get('h1').contains('Aloe');
    cy.go('back');
    expect(cy.get('[test-id="list"]'));
  });
});
