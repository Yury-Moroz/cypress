import { unsplashSelectors } from "../selectors/unsplashSelectors";
import { UrlUnsplash } from "../fixtures/urlUnsplash";

Cypress.Commands.add("searchСheckWords", (text: string) => {
  cy.get(unsplashSelectors.search).type(text);
  cy.get(unsplashSelectors.enter).click();
  cy.get(unsplashSelectors.bear).should("have.text", text);
});

Cypress.Commands.add("pageOpen", () => {
  cy.visit(UrlUnsplash.BASE_PAGE);
  cy.viewport(1920, 1080);
});

Cypress.Commands.add("beVisible", () => {
  cy.get("").should("be.visible")

})
