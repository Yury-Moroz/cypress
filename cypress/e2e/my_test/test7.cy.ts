import { unsplashSelectors } from "../../selectors/unsplashSelectors";

describe("test input", () => {
  it("open street photography", () => {
    cy.pageOpen();
    cy.get(unsplashSelectors.streetPhotoHeader).should("be.visible").click();
    cy.get(unsplashSelectors.streetPhoto).should("have.text", "Street Photography");
  });
});
