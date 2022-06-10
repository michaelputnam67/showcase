describe('CharactersScreen.cy.js', () => {
  beforeEach(() => {
    cy.intercept("GET", "https://bobsburgers-api.herokuapp.com/characters/", { fixture: 'Characters' })
    cy.intercept("GET", "https://bobsburgers-api.herokuapp.com/episodes/", { fixture: 'Episodes' })
    cy.visit('http://localhost:3000')
    cy.get('button').eq(2).click()
  })
  it('As a user I should be able navigate to a characters screen and see a list of characters ', () => {
    cy.get('h2').eq(0).should('have.text', '"Dottie Minerva"')
    cy.get('h2').eq(2).should('have.text', 'Adam')
  })

  it('As a user I should be able filter the list of characters by name', () => {
    cy.get('input').eq(0).type('Al')
    cy.get('h2').eq(0)
  })
})