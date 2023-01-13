import { unsplashSelectors } from "../../selectors/unsplashSelectors";
import { Expectations } from "../../fixtures/expectations";


describe("test input", () => {
  it("open street photography", () => {
    cy.pageOpen();
    cy.get(unsplashSelectors.streetPhotoHeader).should("be.visible").click();
    cy.get(unsplashSelectors.streetPhoto).should("have.text", Expectations.strPhoto);
  });
});
