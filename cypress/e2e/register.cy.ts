import { data } from "../utils";

const { fullName, email, password } = data.registerData;

describe("Register page tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/register");
  });

  it("Validation", () => {
    //fill Registration form with invalid data
    cy.get("#fullName").type("Te");
    cy.get("#email").type("sadasd");
    cy.get("#password").type("sadasd");
    cy.get("#registerButton").click();

    // check if validation messages appear
    cy.get("#fullNameValidation").should("be.visible");
    cy.get("#emailValidation").should("be.visible");
    cy.get("#passwordValidation").should("be.visible");
  });

  it("Links", () => {
    cy.get("#loginButton").click();
    cy.url().should("equal", "http://localhost:3000/login");
  });

  it("Success registration", () => {
    cy.get("#fullName").type(fullName);
    cy.get("#email").type(email);
    cy.get("#password").type(password);
    cy.get("#registerButton").click();
    cy.url().should("equal", "http://localhost:3000/home");
  });
});
