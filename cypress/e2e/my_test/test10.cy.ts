import { unsplashSelectors } from "../../selectors/unsplashSelectors";
import { Expectations } from "../../fixtures/expectations";

describe("my negative test", () => {
    it("bad request", () => {
        cy.pageOpen();
        cy.get(unsplashSelectors.search).type(Expectations.caramba);
        cy.get(unsplashSelectors.NoPhoto0).should("have.text", Expectations.ooo);
        cy.get(unsplashSelectors.NoContent).should("be.visible");

    });
});
