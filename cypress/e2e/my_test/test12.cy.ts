import { unsplashSelectors } from "../../selectors/unsplashSelectors";
import { Expectations } from "../../fixtures/expectations";

describe("my negative test", () => {
    it("Checking an empty registration form", () => {
        cy.pageOpen();
        cy.contains(Expectations.LogInButton).click();
        cy.get(unsplashSelectors.clickLogin).click();
        cy.get(unsplashSelectors.incorrectlyEnteredData).should("have.text",  Expectations.incorrectConfig);
        cy.get(unsplashSelectors.incorrectlyEnteredData).should("be.visible");
});
})