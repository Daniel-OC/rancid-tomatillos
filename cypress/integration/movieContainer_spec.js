describe('MovieContainer User Flows', () => {
  it('should confirm that true is equal to true', () => {
    expect(true).to.equal(true)
  });

  it('MovieContainer should have all expected elements', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/',
    {
      statusCode: 200,
      ok: true,
      body: {movies:[{
        "id": 694919,
        "poster_path": "https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg",
        "backdrop_path": "https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg",
        "title": "Money Plane",
        "average_rating": 6.666666666666667,
        "release_date": "2020-09-29"
      }]}
    })
    cy.visit('http://localhost:3000')
    cy.get('.movie-container').get('.movie-wrapper').get('.thumbnail')
      .get('.description-container').get('h2').get('.rating-container').get('.star-rating' && 'p').get('.info-button').contains('More Info')
  });

  it('MovieContainer should display an error in the event of a 404 error', () => {
    cy.intercept('GET','https://rancid-tomatillos.herokuapp.com/api/v2/movies/',
      {
        statusCode: 404,
        ok: false,
      }
    )
    cy.visit('http://localhost:3000')
    cy.get('.movie-container').get('.error')
      .get('h2').get('.error-message').contains('404 Error. Sorry, the page you\'re looking for doesn\'t seem to exist.')
      // .get('.error-home-button').contains('View All Movies').click('a')
  })

  it('Should display an error in the event of a 500 error.', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/',
    {
      statusCode: 200,
      ok: true,
      body: {movies:[{
        "id": 694919,
        "poster_path": "https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg",
        "backdrop_path": "https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg",
        "title": "Money Plane",
        "average_rating": 6.666666666666667,
        "release_date": "2020-09-29"
      }]}
    })
    cy.intercept('GET','https://rancid-tomatillos.herokuapp.com/api/v2/movies/694919',
      {
        statusCode: 500,
        ok: false,
      }
    )
    cy.visit('http://localhost:3000')
    cy.get('.movie-container').get('.movie-wrapper').first().click().get('.error')
      .get('h2').get('.error-message').contains('500 Error. Something went wrong. Please try again!')
      .get('.error-home-button').contains('View All Movies').click().url().should('include', '/')
  })
})