describe('CharactersScreen.cy.js', () => {
  beforeEach(() => {
    cy.intercept("GET", "https://bobsburgers-api.herokuapp.com/characters/", { fixture: 'Characters' })
    cy.visit('https://localhost:3000')
  })
  it('playground', () => {
    
  })
})