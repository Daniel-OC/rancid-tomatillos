describe('Footer flows', () => {
  it('should confirm that true is true', () => {
    expect(true).to.equal(true)
  });

  it('The Footer should have all expected elements', () => {
    cy.intercept('GET', 'https://rancid-tomatillos.herokuapp.com/api/v2/movies/',
    {
      statusCode: 200,
      ok: true,
      body: {movies:[{
        'id': 694919,
        'poster_path': 'https://image.tmdb.org/t/p/original//6CoRTJTmijhBLJTUNoVSUNxZMEI.jpg',
        'backdrop_path': 'https://image.tmdb.org/t/p/original//pq0JSpwyT2URytdFG0euztQPAyR.jpg',
        'title': 'Money Plane',
        'average_rating': 6.666666666666667,
        'release_date': '2020-09-29'
      }]}
    })
    cy.visit('http://localhost:3000')
    cy.get('Footer')
      .get('.footer-content').get('.project-description').get('h3').contains('About').get('p')
      .get('.social-links').get('h3').contains('Follow Us')
        .get('.repo').get('h4').contains('Project Repo').get('a')
        .get('.github').get('h4').contains('GitHub Profiles').get('a')
        .get('.linkedin').get('h4').contains('LinkedIn').get('a')
  })
})