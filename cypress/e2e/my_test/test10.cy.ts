import { unsplashSelectors } from "../../selectors/unsplashSelectors";
import { Expectations } from "../../fixtures/expectations";
const expectations = new Expectations();
describe("my negative test", () => {
    it("bad request", () => {
        cy.pageOpen();
        cy.get(unsplashSelectors.search).type(expectations.caramba);
        cy.get(unsplashSelectors.NoPhoto).should("have.text", expectations.photoUsers);
        cy.get(unsplashSelectors.NoPhoto0).should("have.text", expectations.ooo);
        cy.get(unsplashSelectors.NoContent).should("be.visible");

    });
});
