import { unsplashSelectors } from "../../selectors/unsplashSelectors";
import { Login } from "../../fixtures/login";
import { Password } from "../../fixtures/pasword";
import { Expectations } from "../../fixtures/expectations";

describe("Assert", () => {
  it("assert web test", () => {
    cy.pageOpen();
    cy.location("protocol").should("equal", Expectations.https);
    cy.title().should("equal", Expectations.beautifulImages);
    cy.get(unsplashSelectors.btnLogin).should("be.visible").click();
    cy.get(unsplashSelectors.email).type(Login.LOGIN_PAGE).should("have.value", Login.LOGIN_PAGE);
    cy.get(unsplashSelectors.password).type(Password.PASSWORD_PAGE).should("have.value", Password.PASSWORD_PAGE);
    cy.get(unsplashSelectors.clickLogin).should("be.visible").click();
    cy.contains(Expectations.invalid).should("be.visible");
  });
});
