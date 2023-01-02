import { unsplashSelectors } from "../../selectors/unsplashSelectors";
import { FirstName } from "../../fixtures/firstName";
import { LastName } from "../../fixtures/lastName";
import { Password } from "../../fixtures/pasword";
import { Login } from "../../fixtures/login";

describe("my negative test", () => {
  it("Entering incorrect characters in the Username registration field", () => {
    cy.pageOpen();
    cy.get(unsplashSelectors.signUp).click({ multiple: true });
    cy.get(unsplashSelectors.signUpFirstName).type(FirstName.FIRSTNAME_PAGE);
    cy.get(unsplashSelectors.signUpLastName).type(LastName.LASTNAME_PAGE);
    cy.get(unsplashSelectors.signUpEmail).type(Login.LOGIN_PAGE);
    cy.get(unsplashSelectors.signUpPassword).type(Password.PASSWORD_PAGE);
    cy.get(unsplashSelectors.signUpUserName).type("JohnIvanopulus@");
    cy.get(unsplashSelectors.signUpIncorrectUsername).should(
      "have.text",
      "(only letters, numbers, and underscores)(min. 8 char)",
    );
    cy.get(unsplashSelectors.signUpIncorrectUsername).should("be.visible");
  });
});
