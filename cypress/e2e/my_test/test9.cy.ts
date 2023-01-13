import { unsplashSelectors } from "../../selectors/unsplashSelectors";
import { Password } from "../../fixtures/pasword";
import { Expectations } from "../../fixtures/expectations";
describe("my negative test", () => {
    it("login to personal account by one field password", () => {
        cy.pageOpen();
        cy.contains(Expectations.LogInButton).click();
        cy.get(unsplashSelectors.password).type(Password.PASSWORD_PAGE);
        cy.get(unsplashSelectors.clickLogin).click();
        cy.get(unsplashSelectors.incorrectlyEnteredData).should("have.text", Expectations.invalidPassword)
    });
});