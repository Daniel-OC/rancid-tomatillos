import { scryRenderedComponentsWithType } from "react-dom/cjs/react-dom-test-utils.development";

describe('Header user flows', () => {
  it('Should confirm that true is equal to true', () => {
    expect(true).to.equal(true)
  });

  it('Should have a header with expected header elements', () => {
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
    cy.get('header').get('.logo').get('h1').contains('Palomino + O\'Connell | Fine Film Critics')
  })
});