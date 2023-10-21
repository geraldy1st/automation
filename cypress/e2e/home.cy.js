describe("home page", () => {
  beforeEach(() => {
    cy.visit("https://www.cyvisuals.com");
  });

  context("Navbar functional", () => {
    it("The navigation bar is visible and clickable", () => {
      //  Navbar is visible
      cy.getByData("header-inner").should("exist").contains("Home");

      // Click "Contact and Home" links
      cy.getByData("header-inner").should("exist").contains("Contact").click();
      cy.location("pathname").should("eq", "/contact");
      cy.getByData("header-inner").eq(0).click().wait(2000);
    });
  });

  context("Main content", () => {
    it("Activities are visible", () => {
      cy.get("#block-800de0b4b8ff3975f551")
        .find("h1")
        .should("be.visible")
        .contains("Capturing greatness");
      // Scroll to a specific element
      cy.scrollTo(0, 400).wait(2000);

      //   Activities are visible
      cy.getByData("image-block-v2-outer-wrapper")
        .find("h3")
        .eq(0)
        .should("exist")
        .should("be.visible")
        .contains("LIVESTreaming");
      // .contains("LIVESTREAMING"); need to be fix to ensure it matches the expected case
    });
  });
});
