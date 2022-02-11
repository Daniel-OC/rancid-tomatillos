describe('Footer flows', () => {
  it('should confirm that true is true', () => {
    expect(true).to.equal(true)
  });

  it('The Footer should have all expected elements', () => {
    cy.visit('http://localhost:3000')
    cy.get('Footer')
      .get('.footer-content').get('.project-description').get('h3').contains('About').get('p')
      .get('.social-links').get('h3').contains('Follow Us')
        .get('.repo').get('h4').contains('Project Repo').get('a')
        .get('.github').get('h4').contains('GitHub Profiles').get('a')
        .get('.linkedin').get('h4').contains('LinkedIn').get('a')
  })
})