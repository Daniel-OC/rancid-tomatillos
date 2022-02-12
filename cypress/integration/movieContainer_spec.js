describe('MovieContainer User Flows', () => {
  it('should confirm that true is equal to true', () => {
    expect(true).to.equal(true)
  });

  it('MovieContainer should have all expected elements', () => {
    cy.visit('http://localhost:3000')
    cy.get('.movie-container').get('.movie-wrapper').get('.thumbnail')
      .get('.description-container').get('h2').get('.rating-container').get('.star-rating' && 'p').get('.info-button').contains('More Info')
  });

  it('MovieContainer should have all expected elements', () => {
    cy.intercept('GET','https://rancid-tomatillos.herokuapp.com/api/v2/movies/',
      {
        statusCode: 404,
        ok: false,
      }
    )
    cy.visit('http://localhost:3000')
  })
})