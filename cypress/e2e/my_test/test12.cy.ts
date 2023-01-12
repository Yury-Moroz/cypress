import { unsplashSelectors } from "../../selectors/unsplashSelectors";
import { Expectations } from "../../fixtures/expectations";
const expectations = new Expectations();

describe("my negative test", () => {
    it("Checking an empty registration form", () => {
        cy.pageOpen();
        cy.contains(expectations.LogInButton).click();
        cy.get(unsplashSelectors.clickLogin).click();
        cy.get(unsplashSelectors.incorrectlyEnteredData).should("have.text",  expectations.incorrectConfig)
        cy.get(unsplashSelectors.incorrectlyEnteredData).should("be.visible");
});
})