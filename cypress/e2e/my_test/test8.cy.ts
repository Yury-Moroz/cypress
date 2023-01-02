import { unsplashSelectors } from "../../selectors/unsplashSelectors";
import { Login } from "../../fixtures/login";
describe("my negative test", () => {
    it("login to personal account by one field login", () => {
        cy.pageOpen();
        cy.contains("Log in").click();
        cy.get(unsplashSelectors.email).type(Login.LOGIN_PAGE);
        cy.get(unsplashSelectors.clickLogin).click();
        cy.get(unsplashSelectors.incorrectlyEnteredData).should("have.text","\n            Invalid email or password.\n          ")
    });
});
