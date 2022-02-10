import { scryRenderedComponentsWithType } from "react-dom/cjs/react-dom-test-utils.development";

describe('Header user flows', () => {
  it('Should confirm that true is equal to true', () => {
    expect(true).to.equal(true)
  });

  it('Should have a header with expected header elements', () => {
    cy.visit('http://localhost:3000')
    cy.get('header').get('.logo').get('h1').contains('Palomino + O\'Connell | Fine Film Critics')
    cy.get('header').get('nav').contains('Home' && 'About' && 'Search')
  })
});