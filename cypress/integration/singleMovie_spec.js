describe('SingleMove user flows', () => {
  it('should confirm that true is equal to true', () => {
    expect(true).to.equal(true)
  });

  it('SingleMovie should have all expected elements', () => {
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
      statusCode:200,
      ok: true,
      body:{
        "movie": {
        "id": 694919,
        "title": "Money Plane",
        "poster_path": "https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg",
        "backdrop_path": "https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg",
        "release_date": "2020-09-29",
        "overview": "A professional thief with $40 million in debt and his family's life on the line must commit one final heist - rob a futuristic airborne casino filled with the world's most dangerous criminals.",
        "genres": [
        "Action"
        ],
        "budget": 0,
        "revenue": 0,
        "runtime": 82,
        "tagline": "",
        "average_rating": 6.625
        }
      }
    }
    )
    cy.visit('http://localhost:3000')
    cy.get('.movie-container').get('.movie-wrapper').first().click().get('.modal').get('.modal-wrapper')
      .get('.blur')
      .get('.modal-top').get('.close-button').contains('X')
        .get('.banner').get('.banner-image').get('.banner-image-overlay')
        .get('.movie-info').get('h4').get('.movie-title').get('.tagline')
        .get('.rating-container').get('.rating')
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