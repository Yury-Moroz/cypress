import { unsplashSelectors } from "../../selectors/unsplashSelectors";
import { Password } from "../../fixtures/pasword";
describe("my negative test", () => {
    it("login to personal account by one field password", () => {
        cy.pageOpen();
        cy.contains("Log in").click();
        cy.get(unsplashSelectors.password).type(Password.PASSWORD_PAGE);
        cy.get(unsplashSelectors.clickLogin).click();
        cy.get(unsplashSelectors.incorrectlyEnteredData).should("have.text", "\n            You need to sign in or sign up before continuing.\n          ")
    });
});