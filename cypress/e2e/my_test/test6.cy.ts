import { Expectations } from "../../fixtures/expectations";
const expectations = new Expectations();
describe("Assert", () => {
  it("Scroll", () => {
    cy.pageOpen();
    cy.searchСheckWords(expectations.bear);
  });
});
