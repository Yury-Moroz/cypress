import { UrlUnsplash } from "../../fixtures/urlUnsplash";
import { unsplashSelectors } from "../../selectors/unsplashSelectors";

describe("Assert", () => {
  it("Scroll", () => {
    cy.start();
    cy.searchСheckWords("Bear");
  });
});
