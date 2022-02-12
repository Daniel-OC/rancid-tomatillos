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

  // it('MovieContainer should display an error in the event of a 404 error', () => {
  //   cy.intercept('GET','https://rancid-tomatillos.herokuapp.com/api/v2/movies/',
  //     {
  //       statusCode: 404,
  //       ok: false,
  //     }
  //   )
  //   cy.visit('http://localhost:3000')
  // })
})