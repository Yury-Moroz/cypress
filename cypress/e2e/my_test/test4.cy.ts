import { unsplashSelectors } from "../../selectors/unsplashSelectors";
import { Login } from "../../fixtures/login";
import { Password } from "../../fixtures/pasword";

describe("Assert", () => {
  it("assert web test", () => {
    cy.start();
    cy.location("protocol").should("equal", "https:");
    cy.title().should("equal", "Beautiful Free Images & Pictures | Unsplash");
    cy.get(unsplashSelectors.btnLogin).should("be.visible").click();
    cy.get(unsplashSelectors.email).type(Login.LOGIN_PAGE).should("have.value", Login.LOGIN_PAGE);
    cy.get(unsplashSelectors.password).type(Password.PASSWORD_PAGE).should("have.value", Password.PASSWORD_PAGE);
    cy.get(unsplashSelectors.clickLogin).should("be.visible").click();
    cy.contains("Invalid email or password.").should("be.visible");
  });
});
