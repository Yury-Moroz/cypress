import { unsplashSelectors } from "../../selectors/unsplashSelectors";

describe("my negative test", () => {
    it("Search for a photo with an error in the name", () => {
        cy.pageOpen();
        cy.get(unsplashSelectors.search).type("Carr{enter}");
        cy.get(unsplashSelectors.carr).should("be.visible");
        cy.get(unsplashSelectors.carr).should("have.not.text", "car")
    });
})