describe("Mes compétences", () => {
  it("Je vérifie que les compétences sont bien présente", () => {
    cy.visit("/");
    cy.readFile("data/skills.json").then((data) => {
      const skillsLength = data.length;
      cy.get("#skills > .container > .row > .col-lg-4").should(
        "have.length",
        skillsLength
      );
    });
  });
});
