describe("Mes Projets", () => {
  it("Je vérifie que les projets sont bien présente", () => {
    cy.visit("/");
    cy.readFile("data/skills.json").then((data) => {
      const projectsLength = data.length;
      cy.get("#skills > .container > .row > .col-lg-4").should(
        "have.length",
        projectsLength
      );
    });
  });
});
