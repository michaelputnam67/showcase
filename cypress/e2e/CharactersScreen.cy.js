describe("CharactersScreen.cy.js", () => {
  beforeEach(() => {
    cy.intercept("GET", "https://bobsburgers-api.herokuapp.com/pestControlTruck/*", {fixture: "Truck"})
    cy.intercept("GET", "https://bobsburgers-api.herokuapp.com/characters/", {
      fixture: "Characters",
    });
    cy.intercept("GET", "https://bobsburgers-api.herokuapp.com/episodes/", {
      fixture: "Episodes",
    });
    cy.intercept("GET", "https://showcase-api-bobs-burgers.herokuapp.com/api/v1/characters", {fixture: "FavoriteCharacters" })
    cy.visit("http://localhost:3000");
    cy.get(".characters-button").click();
  });
  it("As a user I should be able navigate to a characters screen and see a list of characters ", () => {
    cy.get("h2").eq(0).should("have.text", '"Dottie Minerva"');
    cy.get("h2").eq(2).should("have.text", "Adam");
  });

  it("As a user I should be able filter the list of characters by name", () => {
    cy.get('input[name="name"]')
      .type("Al")
      .should("have.value", "Al")
      .get("h2")
      .eq(1)
      .should("have.text", "Al");
  });

  it("As a user I should be able to filter by age", () => {
    cy.get('input[name="age"]')
      .type(9)
      .should("have.value", "9")
      .get("h2")
      .eq(0)
      .should("have.text", "Mabel 'Abby' Haddington");
  });

  it("As a user I should be able to filter the list of characters by episode they first appeared", () => {
    cy.get('select[name="first episode"]')
      .select(9)
      .should("have.value", '"Burger War"')
      .select(0)
      .should("have.value", '"Human Flesh" (a.k.a. "Pilot")')
      .select(1)
      .get("h2")
      .eq(0)
      .should("have.text", "Al");
  });

  it("As a user I should be able to filter the list of characters by voice actor", () => {
    cy.get('select[name="voice actor"]')
      .select(1)
      .should("have.value", "Wendy Molyneux")
      .get("h2")
      .eq(0)
      .should("have.text", '"Dottie Minerva"');
  });

  it("As a user I should be able to filter the list of characters by occupation", () => {
    cy.get('select[name="occupation"]')
      .select(1)
      .should("have.value", "Student at Wagstaff School")
      .get("h2")
      .eq(0)
      .should("have.text", '"Dottie Minerva"');
  });

  it("As a user I should be able to filter the list of characters by hair style", () => {
    cy.get('select[name="hair styles"]')
      .select(2)
      .should("have.value", "Brown")
      .get(".characters-container")
      .wait(1000)
      .get(".character")
      .get("h2")
      .eq(0)
      .should("have.text", "Adam");
  });

  it("As a user I should be able to return to the home page", () => {
    cy.get(".home-button")
      .click()
      .get("h1")
      .should("have.text", "Bob's Burgers Auditorium")
      .get(".characters-button")
      .click()
      .get(".characters-container")
      .should("have.class", "characters-container")
      .get(".burger")
      .click()
      .get("h1")
      .should("have.text", "Bob's Burgers Auditorium");
  });

  it("As a user I should be able to click on a character card and be navigated to a page with detail about that user", () => {
    cy.intercept("GET", "https://bobsburgers-api.herokuapp.com/characters/1", {
      fixture: "Single-Character-Dottie",
    });
    cy.intercept("GET", "https://bobsburgers-api.herokuapp.com/characters/4", {
      fixture: "Single-Character-Adrian",
    });
    cy.get(".character")
      .eq(0)
      .click()
      .get("h1")
      .should("have.text", '"Dottie Minerva"')
      .get(".characters-button")
      .click()
      .get(".character")
      .eq(3)
      .click()
      .get("h1")
      .should("have.text", "Adrian");
  });
});
