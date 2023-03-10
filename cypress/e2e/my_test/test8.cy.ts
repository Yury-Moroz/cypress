import { unsplashSelectors } from "../../selectors/unsplashSelectors";
import { Login } from "../../fixtures/login";
import { Expectations } from "../../fixtures/expectations";

describe("my negative test", () => {
    it("login to personal account by one field login", () => {
        cy.pageOpen();
        cy.contains(Expectations.LogInButton).click();
        cy.get(unsplashSelectors.email).type(Login.LOGIN_PAGE);
        cy.get(unsplashSelectors.clickLogin).click();
        cy.get(unsplashSelectors.incorrectlyEnteredData).should("have.text",Expectations.invalidEmail);
    });
});
