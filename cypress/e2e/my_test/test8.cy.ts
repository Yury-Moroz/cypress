import { unsplashSelectors } from "../../selectors/unsplashSelectors";

describe("Displaying internal elements of a photo", () => {
  it("Checking the like element and the download element", () => {
    cy.start();
    cy.get(unsplashSelectors.search).type("Car{enter}");
    cy.get(unsplashSelectors.searchCar).click();
    cy.get(unsplashSelectors.searchCarDownload).should("be.visible");
    cy.get(unsplashSelectors.searchCarLike).should("be.visible");
  });
});
