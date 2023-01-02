import { unsplashSelectors } from "../../selectors/unsplashSelectors";

describe("my negative test", () => {
    it("Checking an empty registration form", () => {
        cy.pageOpen();
        cy.contains("Log in").click();
        cy.get(unsplashSelectors.clickLogin).click();
        cy.get(unsplashSelectors.incorrectlyEnteredData).should("have.text", "\n            You need to sign in or sign up before continuing.\n          ")
        cy.get(unsplashSelectors.incorrectlyEnteredData).should("be.visible");
});
})