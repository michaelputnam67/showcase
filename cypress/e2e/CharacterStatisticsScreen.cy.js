describe("Character Statistics Screen", () => {
  beforeEach(() => {
    cy.intercept(
      "GET",
      "https://bobsburgers-api.herokuapp.com/pestControlTruck/*",
      { fixture: "Truck" }
    );
    cy.intercept("GET", "https://bobsburgers-api.herokuapp.com/characters/", {
      fixture: "Characters",
    });
    cy.intercept("GET", "https://bobsburgers-api.herokuapp.com/episodes/", {
      fixture: "Episodes",
    });
    cy.intercept("GET", "https://bobsburgers-api.herokuapp.com/characters/*", {
      fixture: "Single-Character-Dottie",
    });
    cy.intercept(
      "GET",
      "https://showcase-api-bobs-burgers.herokuapp.com/api/v1/characters",
      { fixture: "FavoriteCharacters" }
    );
    cy.visit("http://localhost:3000");
    cy.get(".characters-button").click().get(".character").eq(0).click();
  });

  it("As a user I should be able to favorite a character and information about them", () => {
    cy.get(".character-info-container-1")
      .get("ul li:first")
      .should("have.text", "Female");
  });

  it("As a user I should be able to favorite a character and see this player on my home page.", () => {
    cy.intercept(
      "POST",
      "https://showcase-api-bobs-burgers.herokuapp.com/api/v1/characters",
      { fixture: "Single-Character-Dottie" }
    );

    cy.get(".character-info-container-2")
      .get(".favorite")
      .click()
      .get(".burger")
      .click()
			.get('.character')
			.eq(0)

  });
});
