import { unsplashSelectors } from "../../selectors/unsplashSelectors";
import { FirstName } from "../../fixtures/firstName";
import { LastName } from "../../fixtures/lastName";
import { Password } from "../../fixtures/pasword";
import { UserName } from "../../fixtures/userName";
import { Expectations } from "../../fixtures/expectations";


describe("my negative test", () => {
  it("Registration without '@'", () => {
    cy.pageOpen();
    cy.get(unsplashSelectors.signUp).click({ multiple: true });
    cy.get(unsplashSelectors.signUpFirstName).type(FirstName.FIRSTNAME_PAGE);
    cy.get(unsplashSelectors.signUpLastName).type(LastName.LASTNAME_PAGE);
    cy.get(unsplashSelectors.signUpEmail).type(Expectations.inCorrectEmail);
    cy.get(unsplashSelectors.signUpUserName).type(UserName.USERNAME_PAGE);
    cy.get(unsplashSelectors.signUpPassword).type(Password.PASSWORD_PAGE);
    cy.get(unsplashSelectors.signUpButton).click;
    cy.get(unsplashSelectors.signUpIncorrectEmail).should("have.contain", Expectations.email);
    cy.get(unsplashSelectors.signUpIncorrectEmail).should("be.visible");
  });
});
