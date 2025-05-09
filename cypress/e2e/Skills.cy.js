describe("Mes compétences", () => {
  it("Je vérifie que les compétences sont bien présente", () => {
    cy.visit("/");
    cy.get("#skills > .container > .row > .col-lg-4").should("have.length", 6);
  });
});
