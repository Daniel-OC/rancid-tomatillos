describe('SingleMove user flows', () => {
  it('should confirm that true is equal to true', () => {
    expect(true).to.equal(true)
  });

  it('SingleMovie should have all expected elements', () => {
    cy.visit('http://localhost:3000')
    cy.get('.movie-container').get('.movie-wrapper').first().click().get('.modal').get('.modal-wrapper')
      .get('.modal-top').get('.close-button').contains('X')
        .get('.banner').get('.banner-image').get('.banner-image-overlay')
        .get('.movie-info').get('h4').get('.movie-title').get('.tagline')
        .get('.rating-container').get('.star-rating').get('.rating')
      .get('.modal-bottom').get('.movie-overview').get('.modal-title').contains('Overview')
        .get('.modal-text')
        .get('.movie-details')
          .get('.modal-title').contains('Release Date:')
            .get('.modal-text')
          .get('.modal-title').contains('Budget:')
            .get('.modal-text')
          .get('.modal-title').contains('Revenue:')
            .get('.modal-text')
          .get('.modal-title').contains('Runtime:')
            .get('.modal-text')
      
  });
})