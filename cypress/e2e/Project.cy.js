describe("Mes Projets", () => {
  it("Je vérifie que les projets sont bien présente", () => {
    cy.visit("/");
    cy.get("#portfolio > .container > .row > .col-lg-4").should(
      "have.length",
      3
    );
  });
});
