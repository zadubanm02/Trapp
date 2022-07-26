describe("Login page tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/login");
  });

  it("Validation", () => {
    //fill Registration form with invalid data
    cy.get("#email").type("sadasd");
    cy.get("#password").type("sadasd");
    cy.get("#loginButton").click();

    // check if validation messages appear
    cy.get("#emailValidation").should("be.visible");
    cy.get("#passwordValidation").should("be.visible");
  });

  it("Links", () => {
    cy.get("#registerButton").click();
    cy.url().should("equal", "http://localhost:3000/login");
  });

  it("Success registration", () => {
    cy.get("#email").type("john.doe@gmail.com");
    cy.get("#password").type("Password123*");
    cy.get("#loginButton").click();
    cy.url().should("equal", "http://localhost:3000/home");
  });
});
