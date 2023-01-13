import { unsplashSelectors } from "../../selectors/unsplashSelectors";
import { Expectations } from "../../fixtures/expectations";

describe("Assert", () => {
  it("Scroll", () => {
    cy.pageOpen();
    cy.get(unsplashSelectors.search).type(Expectations.carEnter);
    cy.get(unsplashSelectors.car).should("have.text", Expectations.car);
    cy.scrollTo("bottom");
    cy.get(unsplashSelectors.searchCar).click();
  });
});
