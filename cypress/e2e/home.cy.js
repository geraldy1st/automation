describe("home page", () => {
  beforeEach(() => {
    cy.visit("https://www.cyvisuals.com");
  });

  context("Navbar fonctional", () => {
    it("The navigation bar is visible", () => {
      cy.getByData("header-inner").should("exist").contains("Home").click();
      cy.getByData("header-inner").should("exist").contains("Contact").click();
      cy.location("pathname").should("eq", "/contact");
      cy.getByData("header-inner").find("a").eq(0).click();
      cy.location("pathname").should("eq", "/");
    });

    context("Porfolio visible and fonctional", () => {
      it("The projects are visible", () => {
        cy.getByData("page-section").find("h2").eq(0);
      });
    });
  });
});
