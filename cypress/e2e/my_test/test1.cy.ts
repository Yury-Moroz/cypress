import { unsplashSelectors } from "../../selectors/unsplashSelectors";
import { Login } from "../../fixtures/login";
import { Password } from "../../fixtures/pasword";
describe("my first test", () => {
  it("open unsplash", () => {
    cy.pageOpen();
    cy.contains("Log in").click();
    cy.get(unsplashSelectors.email).type(Login.LOGIN_PAGE);
    cy.get(unsplashSelectors.password).type(Password.PASSWORD_PAGE);
    cy.get(unsplashSelectors.clickLogin).click();
  });
});
