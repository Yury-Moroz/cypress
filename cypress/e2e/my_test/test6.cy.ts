import { Expectations } from "../../fixtures/expectations";

describe("Assert", () => {
  it("Scroll", () => {
    cy.pageOpen();
    cy.searchСheckWords(Expectations.bear);
  });
});
