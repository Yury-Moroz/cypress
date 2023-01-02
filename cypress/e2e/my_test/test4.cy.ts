import { unsplashSelectors } from "../../selectors/unsplashSelectors";

describe("Assert", () => {
  it("Scroll", () => {
    cy.pageOpen();
    cy.get(unsplashSelectors.search).type("Car{enter}");
    cy.get(unsplashSelectors.car).should("have.text", "Car");
    cy.scrollTo(0, 4500);
    cy.get(unsplashSelectors.searchCar).click();
  });
});
