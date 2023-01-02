import { unsplashSelectors } from "../../selectors/unsplashSelectors";
describe("my negative test", () => {
    it("bad request", () => {
        cy.pageOpen();
        cy.get(unsplashSelectors.search).type("Carambaramba{enter}");
        cy.get(unsplashSelectors.NoPhoto).should("have.text", "PhotosCollectionsUsers");
        cy.get(unsplashSelectors.NoPhoto0).should("have.text", "000");
        cy.get(unsplashSelectors.NoContent).should("be.visible");

    });
});
