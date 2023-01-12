import { unsplashSelectors } from "../../selectors/unsplashSelectors";
import { Expectations } from "../../fixtures/expectations";
const expectations = new Expectations();

describe("Assert", () => {
  it("Scroll", () => {
    cy.pageOpen();
    cy.get(unsplashSelectors.search).type(expectations.carEnter);
    cy.get(unsplashSelectors.car).should("have.text", expectations.car);
    cy.scrollTo("bottom");
    cy.get(unsplashSelectors.searchCar).click();
  });
});
