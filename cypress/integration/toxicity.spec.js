describe('Filter between toxic and non-toxic plants', () => {
  it('should show Toxic cards', () => {
    cy.visit('/');
    cy.get('select').select('toxic');

    cy.get('[listviewoption="grid"]')
      .get('[test-id="card"]').contains('Toxic');

    expect(cy.get('[listviewoption="grid"]')
      .get('[test-id="card"]').contains('Toxic'));
  });

  it('should show Non-Toxic cards', () => {
    cy.visit('/');
    cy.get('select').select('non-toxic');

    cy.get('[listviewoption="grid"]')
      .get('[test-id="card"]').contains('Non-toxic');

    expect(cy.get('[listviewoption="grid"]')
      .get('[test-id="card"]').contains('Non-toxic'));
  });
});
