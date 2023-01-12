import { unsplashSelectors } from "../../selectors/unsplashSelectors";
import { Expectations } from "../../fixtures/expectations";
const expectations = new Expectations();

describe("checking the operation of the header", () => {
  it("open street photography", () => {
    cy.pageOpen();
    cy.get(unsplashSelectors.streetPhotoHeader).should("be.visible").click();
    cy.get(unsplashSelectors.streetPhoto).should("have.text", expectations.StrPhoto);
  });
});
